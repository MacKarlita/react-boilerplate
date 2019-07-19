import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import HomePage from './views/HomePage';
import MyPlantsPage from './views/MyPlantsPage';
import Header from './components/Header';

const appGlobal = css`
    text-align: center;
`;

const mainContainer = css`
    padding: 5vmin;
`;

class App extends Component {
  render() {
    return (
      <div css={appGlobal}>
        <Header/>
        <main css={mainContainer}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/my-plants" component={MyPlantsPage}/>
        </main>
      </div>
    );
  }
}

export default App;
