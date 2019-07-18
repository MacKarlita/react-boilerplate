import React from 'react';

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
          <div css={contanerStyle}>
              Home Page
          </div>
        </section>
    );
  }
}

export default HomePage;