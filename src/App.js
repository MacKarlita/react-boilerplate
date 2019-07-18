import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import HomePage from './views/HomePage';
import ProfilePage from './views/ProfilePage';
import Header from './components/Header';
import Navigation from './components/Navigator';

const appGlobal = css`
    text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div css={appGlobal}>
        <Header/>
        <Navigation />
        <main>
          <Route path="/" exact component={HomePage}/>
          <Route path="/profile" component={ProfilePage}/>
        </main>
      </div>
    );
  }
}

export default App;
