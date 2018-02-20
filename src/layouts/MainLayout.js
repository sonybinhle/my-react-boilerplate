import React from 'react'; import PropTypes from 'prop-types';

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
