(function(React2, require$$0) {
  "use strict";
  var hydrateRoot;
  var m = require$$0;
  {
    m.createRoot;
    hydrateRoot = m.hydrateRoot;
  }
  const index = "";
  let dataFacets = [];
  let subFacets = [];
  let facetItems = [];
  let first8Items = [];
  let defaultPATH = "";
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
    defaultPATH = componentSearchUrl + componentSearchCollection + "&profile=" + componentSearchProfile + "&query=" + componentSearchQuery;
    console.log("Search URL", defaultPATH);
    let FbBaseUrl = componentSearchUrl.replace("/s/search.json", "");
    console.log("Search Base URL", FbBaseUrl);
    const [fbData, setData] = React2.useState([]);
    const [isLoading, setIsLoading] = React2.useState(true);
    const [imageErrors, setImageErrors] = React2.useState({});
    const [latestContent2, setLatestContent] = React2.useState([]);
    const [internalFacets, setInternalFacets] = React2.useState([]);
    const [activeButton, setActiveButton] = React2.useState(null);
    const isFirstLoad = React2.useRef(true);
    const placeholderImage = "https://placehold.co/500x370/ecf0f1/FFFFFF.png?text=oops";
    React2.useEffect(() => {
      fetchData(defaultPATH);
    }, []);
    const fetchData = (url) => {
      setIsLoading(true);
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }).then((fbData2) => {
        setData(fbData2);
        setIsLoading(false);
        dataFacets = fbData2.response.facets;
        console.log("FB Facets", dataFacets);
        subFacets = dataFacets.find((item) => item.name === componentSearchFacet);
        console.log("Facet by component value", subFacets);
        facetItems = subFacets.allValues;
        console.log("All Facet Items", facetItems);
        first8Items = facetItems.slice(0, 8);
        console.log("First 8 Facet Items", first8Items);
        if (isFirstLoad.current) {
          setInternalFacets(first8Items);
          isFirstLoad.current = false;
        }
        setLatestContent(fbData2.response.resultPacket.results);
        console.log("Latest Contents", fbData2.response.resultPacket.results);
      }).catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
    };
    const facetRefresh = (event, index2) => {
      const url = event.target.getAttribute("data-refresh");
      if (activeButton === index2) {
        fetchData(defaultPATH);
        setActiveButton(null);
      } else {
        fetchData(url);
        setActiveButton(index2);
      }
    };
    const handleImageError = (index2) => {
      setImageErrors((prevState) => ({
        ...prevState,
        [index2]: true
      }));
    };
    return /* @__PURE__ */ React2.createElement("div", null, isLoading ? /* @__PURE__ */ React2.createElement("p", null, /* @__PURE__ */ React2.createElement("span", { className: "loader" })) : /* @__PURE__ */ React2.createElement(
      "div",
      {
        className: "component-section bg-section banner-events",
        style: componentImageURL !== null ? { backgroundImage: `url(${componentImageURL.imageVariations.original.url})` } : {}
      },
      /* @__PURE__ */ React2.createElement("div", { className: "banner-events--frame" }, /* @__PURE__ */ React2.createElement("div", { className: "banner-events--wrapper" }, /* @__PURE__ */ React2.createElement("h2", { className: "banner-events--title" }, componentTitle), /* @__PURE__ */ React2.createElement("div", { className: "banner-events--text", dangerouslySetInnerHTML: { __html: componentContent } }), /* @__PURE__ */ React2.createElement("div", { className: "banner-events--item-container" }, componentHeadingDisplay === "true" && /* @__PURE__ */ React2.createElement("h3", { className: "item-title" }, "Find more results by category"), /* @__PURE__ */ React2.createElement("ul", { className: "event-tags" }, internalFacets.map((item, index2) => /* @__PURE__ */ React2.createElement("li", { key: index2 }, /* @__PURE__ */ React2.createElement(
        "button",
        {
          "data-refresh": componentSearchUrl + item.toggleUrl,
          onClick: (e) => facetRefresh(e, index2),
          className: activeButton === index2 ? "active" : ""
        },
        item.label
      )))), componentHeadingDisplay === "true" && /* @__PURE__ */ React2.createElement("h3", { className: "item-title" }, " Latest ", "", " Results "), /* @__PURE__ */ React2.createElement("ul", { className: "event-listing" }, latestContent2.slice(0, 6).map((item, index2) => /* @__PURE__ */ React2.createElement("li", { key: index2, className: "event-listing--item" }, /* @__PURE__ */ React2.createElement("a", { href: FbBaseUrl + item.clickTrackingUrl }, /* @__PURE__ */ React2.createElement("div", { className: "image-container" }, /* @__PURE__ */ React2.createElement(
        "img",
        {
          src: !imageErrors[index2] && item.listMetadata.image ? item.listMetadata.image : placeholderImage,
          alt: "Alt Text",
          onError: () => handleImageError(index2)
        }
      )), /* @__PURE__ */ React2.createElement("h3", null, item.listMetadata.t)), /* @__PURE__ */ React2.createElement("p", null, item.listMetadata.description)))))))
    ));
  }
  const componentExists = !!document.querySelector("#banner-message-component");
  if (componentExists) {
    const componentWrappers = document.querySelectorAll("#banner-message-component");
    componentWrappers.forEach((componentWrapper) => {
      let localdata = {};
      localdata.componentTitle = componentWrapper.getAttribute("data-componentTitle");
      localdata.componentImageURL = componentWrapper.getAttribute("data-componentImageURL");
      localdata.componentContent = componentWrapper.getAttribute("data-componentContent");
      localdata.componentSearchFacet = componentWrapper.getAttribute("data-componentSearchFacet");
      localdata.componentSearchUrl = componentWrapper.getAttribute("data-componentSearchUrl");
      localdata.componentSearchCollection = componentWrapper.getAttribute("data-componentSearchCollection");
      localdata.componentSearchProfile = componentWrapper.getAttribute("data-componentSearchProfile");
      localdata.componentSearchQuery = componentWrapper.getAttribute("data-componentSearchQuery");
      localdata.componentHeadingDisplay = componentWrapper.getAttribute("data-componentHeadingDisplay");
      hydrateRoot(componentWrapper, /* @__PURE__ */ React2.createElement(messageBanner, { props: localdata }));
    });
  }
})(React, ReactDOM);
