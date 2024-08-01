import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Component from './Component';

// Check if component exists on the page
const componentExists = !!document.querySelector('#banner-message-component');

// If the bin day component exists
if (componentExists) {
  // Get all the components
  const componentWrappers = document.querySelectorAll('#banner-message-component');

  // Hydrate the bin day component
  componentWrappers.forEach((componentWrapper) => {
    let localdata = {}
    localdata.componentTitle = componentWrapper.getAttribute("data-componentTitle")
    localdata.componentImageURL = componentWrapper.getAttribute("data-componentImageURL")
    localdata.componentContent = componentWrapper.getAttribute("data-componentContent")
    localdata.componentSearchFacet = componentWrapper.getAttribute("data-componentSearchFacet")
    localdata.componentSearchUrl = componentWrapper.getAttribute("data-componentSearchUrl")
    localdata.componentSearchCollection = componentWrapper.getAttribute("data-componentSearchCollection")
    localdata.componentSearchProfile = componentWrapper.getAttribute("data-componentSearchProfile")
    localdata.componentSearchQuery = componentWrapper.getAttribute("data-componentSearchQuery")
    localdata.componentHeadingDisplay = componentWrapper.getAttribute("data-componentHeadingDisplay")

    hydrateRoot(componentWrapper, <Component  props={localdata} />)
  });
}