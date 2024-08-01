import React from 'react';
import { renderToString } from 'react-dom/server';
import Component from "./Component";

export default async function main({componentTitle, componentImageURL,componentContent, componentSearchFacet, componentSearchUrl, componentSearchCollection, componentSearchProfile, componentSearchQuery, componentHeadingDisplay}, env) {
    return renderToString(<div id="banner-message-component"
                                data-componentTitle={componentTitle} 
                                data-componentImageURL={JSON.stringify(componentImageURL)} 
                                data-componentContent={componentContent} 
                                data-componentSearchFacet={componentSearchFacet}
                                data-componentSearchUrl={componentSearchUrl}
                                data-componentSearchCollection={componentSearchCollection}
                                data-componentSearchProfile={componentSearchProfile}
                                data-componentSearchQuery={componentSearchQuery}
                                data-componentHeadingDisplay={componentHeadingDisplay}
                                >
        <Component />
    </div>);
}
