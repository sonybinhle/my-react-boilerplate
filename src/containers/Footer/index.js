import React from 'react';
import bem from 'bem-cn';

import { A, IconSocial } from '../../elements';
import { Logo } from '../../components';
import './footer.scss';

const b = bem('footer');

export default () => (
  <footer className={b()}>
    <div className="row align-middle">
      <div className="column flex-container align-center">
        <Logo />
      </div>
      <div className="column">
        <ul className={b('icon-socials')}>
          <li className={b('icon-social')}>
            <A href="https://twitter.com" newTab>
              <IconSocial icon="twitter" />
            </A>
          </li>
          <li className={b('icon-social')}>
            <A href="https://facebook.com" newTab>
              <IconSocial icon="facebook" />
            </A>
          </li>
          <li className={b('icon-social')}>
            <A href="https://www.linkedin.com" newTab>
              <IconSocial icon="linked-in" />
            </A>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
