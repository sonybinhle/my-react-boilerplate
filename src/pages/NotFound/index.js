import React from 'react';
import bem from 'bem-cn';

import { MainLayout } from '../../layouts';
import './styles.scss';

const b = bem('pages-not-found');

export default () => (
  <MainLayout>
    <div className="row">
      <div className="columns">
        <div className={b('box')()}>
          <p className={b('error-status')()}>404: Page not found</p>
          <p className={b('error-msg')()}>Oops, Something went missing</p>
        </div>
      </div>
    </div>
  </MainLayout>
);
