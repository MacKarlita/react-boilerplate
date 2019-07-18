import React from "react";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const cardStyle = css`
  background: #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  min-height: 20em;
  width:100%;
`;

const cardTitle = css`
    border-bottom: 1px solid rgba(0, 0, 0, 0.098);
    color: #606060;
    font-family: 'Arial';
    padding: 1em;
    
    h1 {
        font-size: 1.3em;
        margin: 0;
    }
`;

const cardContent = css`
    padding: 0.5em 1em;
`;

class Card extends React.Component {

    static defaultProps = {
        title: 'Default title'
    };

    render() {
        return (
            <div css={cardStyle}>
                <div css={cardTitle}>
                    <h1>{this.props.title}</h1>
                </div>
                <div css={cardContent}>
                    {this.props.children}
                </div>
            </div>
        )

    }
}

export default Card