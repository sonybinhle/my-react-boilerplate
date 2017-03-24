import React, { Component } from 'react';
import bem from 'bem-cn';

import { MainLayout } from '../../layouts';
import { BoxDuck, BoxConfiguration, BOX_SIZES } from '../../components';
import './styles.scss';

const b = bem('pages-home');

export default class Home extends Component {
  state = { right: false, jump: false, size: BOX_SIZES.m };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ right: true });
    }, 0);
  }

  setDuckSize = (size) => {
    this.setState({ size });
  };

  moveDuck = () => {
    this.setState(state => ({ right: !state.right, jump: true }));
    setTimeout(() => {
      this.setState({ jump: false });
    }, 500);
  };

  render() {
    return (
      <MainLayout>
        <div className={b()}>
          <div className="row align-middle">
            <div className="small-12 medium-6 columns">
              <BoxConfiguration activeSize={this.state.size} setSize={this.setDuckSize} />
            </div>
            <div className="small-12 medium-6 columns">
              <BoxDuck
                right={this.state.right}
                jump={this.state.jump}
                size={this.state.size}
                onClick={this.moveDuck}
              />
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}
