import React, { useState, useEffect, useRef } from "react";
import './index.scss';

let dataFacets = [];
let latestContent = [];
let subFacets = [];
let facetItems = [];
let first8Items = [];
let defaultPATH = "";
let personaName = "";

function messageBanner(data) {

  console.log(defaultPATH);

  let componentTitle = "";
  let componentImageURL = "";
  let componentContent = "";
  let componentSearchFacet = "";
  let componentSearchUrl = "";
  let componentSearchCollection = "";
  let componentSearchProfile = "";
  let componentSearchQuery = "";
  let componentHeadingDisplay = false;

  if (data.props) {
    componentTitle = data.props.componentTitle;
    componentImageURL = JSON.parse(data.props.componentImageURL);
    componentContent = data.props.componentContent;
    componentSearchFacet = data.props.componentSearchFacet;
    componentSearchUrl = data.props.componentSearchUrl;
    componentSearchCollection = data.props.componentSearchCollection;
    componentSearchProfile = data.props.componentSearchProfile;
    componentSearchQuery = data.props.componentSearchQuery;
    componentHeadingDisplay = data.props.componentHeadingDisplay;
  }

  defaultPATH = componentSearchUrl + componentSearchCollection + '&profile=' + componentSearchProfile + '&query=' + componentSearchQuery;
  console.log('Search URL', defaultPATH);

  // let FBSearchUrl = componentSearchUrl.replace(/\.json$/, ".html");
  // console.log('FE Search URL', FBSearchUrl);

  let FbBaseUrl = componentSearchUrl.replace('/s/search.json', '');
  console.log('Search Base URL', FbBaseUrl);

  const [fbData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [latestContent, setLatestContent] = useState([]);
  const [internalFacets, setInternalFacets] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const isFirstLoad = useRef(true);

  const placeholderImage = "https://placehold.co/500x370/ecf0f1/FFFFFF.png?text=oops";

  useEffect(() => {
    fetchData(defaultPATH);
  }, []);

  const fetchData = (url) => {
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((fbData) => {

        setData(fbData);
        setIsLoading(false);

        dataFacets = fbData.response.facets;
        console.log('FB Facets', dataFacets);

        subFacets = dataFacets.find(item => item.name === componentSearchFacet);
        console.log('Facet by component value', subFacets);

        facetItems = subFacets.allValues;
        console.log('All Facet Items', facetItems);

        first8Items = facetItems.slice(0, 8);
        console.log('First 8 Facet Items', first8Items);

        // Only set internalFacets on the first load
        if (isFirstLoad.current) {
          setInternalFacets(first8Items);
          isFirstLoad.current = false; // Mark as not the first load anymore
        }
        
        setLatestContent(fbData.response.resultPacket.results);
        console.log('Latest Contents', fbData.response.resultPacket.results);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  };

  const facetRefresh = (event, index) => {
    const url = event.target.getAttribute('data-refresh');
    
    // Check if the button clicked is already active
    if (activeButton === index) {
      // If active, use defaultPATH
      fetchData(defaultPATH);
      setActiveButton(null); // Remove active state
    } else {
      // If not active, fetch data using the provided url
      fetchData(url);
      setActiveButton(index);
    }
  };

  const handleImageError = (index) => {
    setImageErrors(prevState => ({
      ...prevState,
      [index]: true
    }));
  };

  return (
    <div>
      {isLoading ? (
        <p><span className="loader"></span></p>
      ) : (
        <div className="component-section bg-section banner-events"
          style={componentImageURL !== null ?
            { backgroundImage: `url(${componentImageURL.imageVariations.original.url})` }
            : {}
          }
        >
          <div className="banner-events--frame">
            <div className="banner-events--wrapper">
              <h2 className="banner-events--title">{componentTitle}</h2>
              <div className="banner-events--text" dangerouslySetInnerHTML={{ __html: componentContent }} />
              <div className="banner-events--item-container">
                {componentHeadingDisplay === 'true' && <h3 className="item-title">Find more results by category</h3>}
                <ul className="event-tags">
                  {internalFacets.map((item, index) => (
                    <li key={index}>
                        <button 
                          data-refresh={componentSearchUrl + item.toggleUrl} 
                          onClick={(e) => facetRefresh(e, index)}
                          className={activeButton === index ? 'active' : ''}
                        >
                          {item.label}
                        </button>
                    </li>
                  ))}
                </ul>
                {componentHeadingDisplay === 'true' && <h3 className="item-title"> Latest {personaName ? personaName : ''} Results </h3>}
                <ul className="event-listing">
                  {latestContent.slice(0, 6).map((item, index) => (
                    <li key={index} className="event-listing--item">
                      <a href={FbBaseUrl + item.clickTrackingUrl}>
                        <div className="image-container">
                        <img
                            src={!imageErrors[index] && item.listMetadata.image ? item.listMetadata.image : placeholderImage}
                            alt="Alt Text"
                            onError={() => handleImageError(index)}
                          />
                        </div>
                        <h3>{item.listMetadata.t}</h3>
                      </a>
                      <p>{item.listMetadata.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default messageBanner;
