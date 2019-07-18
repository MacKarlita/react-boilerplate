import React from "react";
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

import logo from '../../uno_logo.png';

const appHeader = css`
    align-items: center;
    background-color: #282c34;
    color: white;
    display: flex;
    flex-direction: column;
    height: 20vmin;
    font-size: calc(10px + 2vmin);
    justify-content: center;
`;

const logoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const appLogo = css`
    height: 20vmin;
`;


class AppHeader extends React.Component {

    static defaultProps = {
        title: 'Default title'
    };

    render() {
        return (
            <header css={appHeader}>
                <div>
                    <img src={logo} css={appLogo} alt="logo" />
                </div>
            </header>
        )

    }
}

export default AppHeader