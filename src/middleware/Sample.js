/* eslint-disable import/no-cycle */

import React from 'react';
import ReactDOM from 'react-dom';
import Sample from '../Sample/Sample';

export default (rootElement, args) => {
  ReactDOM.render(
    <Sample
      text={args.text}
    />,
    rootElement,
  );
};

