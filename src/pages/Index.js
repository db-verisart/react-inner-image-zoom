import React, { Fragment } from 'react';
import Product from '../components/Product';
import QuickStart from '../components/QuickStart';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const Index = () => {
  return(
    <Fragment>
      <Product />
      <QuickStart />
    </Fragment>
  );
};

export default Index;