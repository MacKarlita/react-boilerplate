import React from 'react';
import UnoButton from "../components/UnoButton";

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const contanerStyle = css`
    display: inline-block;
    text-align: center;
`;

class HomePage extends React.Component {
  render() {
    return (
        <section>
          <h1>Home Page</h1>
          <div css={contanerStyle}>
            <UnoButton label="Click me to start!" status="enabled"/>
          </div>
        </section>
    );
  }
}

export default HomePage;