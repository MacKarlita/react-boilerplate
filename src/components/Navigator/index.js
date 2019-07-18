import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const navStyle = css`
    padding: 0;
    list-style-type: none;
    
    li {
        display: inline;
        margin: 0.5em;
    }
`;

class Navigation extends React.Component {

    render() {
        return (
            <nav>
                <ul css={navStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">MyProfile</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation