import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const containerStyle = css`
    display: inline-block;
    text-align: center;
    width: 40%;
`;

class SettingsPage extends React.Component {

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
                    Placeholder
                </div>
            </section>
        );
      }
}

export default SettingsPage;