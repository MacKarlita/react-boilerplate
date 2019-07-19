import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Monitor from '../components/Monitor';

const containerStyle = css`
    display: inline-block;
    text-align: center;
`;

const title = css`
    color: #86af49
`;


class MyPlantsPage extends React.Component {

    static defaultProps = {
        title: 'My Plants - Monitor'
    };

    render() {
        return (
            <section>
                <h1 css={title}><span>🎍</span> {this.props.title} <span>🌷</span></h1>
                <div css={containerStyle}>
                    <Monitor></Monitor>
                </div>
            </section>
        );
      }
}

export default MyPlantsPage;