import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Monitor from '../components/Monitor';

const containerStyle = css`
    display: inline-block;
    text-align: center;
    width: 40%;
`;

class MyPlantsPage extends React.Component {

    static defaultProps = {
        title: 'Placeholder'
    };

    constructor(props) {
        super(props);
        // this.state = {
        //     user: {
        //         firstName: 'Karla',
        //         lastName: 'Martin',
        //         company: 'Unosquare',
        //         email: 'karla.martin@unosquare.com'
        //     }
        // }
    }

    render() {
        return (
            <section>
                <div css={containerStyle}>
                    <Monitor></Monitor>
                </div>
            </section>
        );
      }
}

export default MyPlantsPage;