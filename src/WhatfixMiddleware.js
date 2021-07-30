/* eslint-disable no-param-reassign */
// import './Polyfills/CustomEvent';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';

import renderSampleComponent from './middleware/Sample';

console.log("react middle ware...");

const loadReactComponents = function(global) {
  // When the GWT Widget will unload we will call
  // this method that will unmount the react component
  const unmountReactComponent = element => {
    ReactDOM.unmountComponentAtNode(element);
  };

  const unmountComponentAtNode = wrapperElement => {
    ReactDOM.unmountComponentAtNode(wrapperElement);
  };

  // global api object that the GWT Widget will have access to
  const SampleComponentController = {
    renderSampleComponent,
    unmountComponentAtNode,
    unmountReactComponent,
  };



  const WfxComponents = {};
  WfxComponents.SampleComponentController = SampleComponentController;

  global.WfxComponents = WfxComponents;
};

window.loadReactComponents = loadReactComponents;

// window.addEventListener('wfx_scripts_loaded', loadReactComponents(window));
