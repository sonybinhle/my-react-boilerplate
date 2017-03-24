import React, { PropTypes } from 'react';

import { Header, Footer } from '../containers';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
