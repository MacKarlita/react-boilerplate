import React from "react";
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const ButtonStatus = {
  ENABLED: "enabled",
  DISABLED: "disabled",
  HOVERED: "hovered",
  PRESSED: "pressed",
};

const containerBaseStyle = css`
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 10px;
  display: block;
  font-size: 1.2em;
  padding:1em;
  text-align: center;
  min-width:100px;
  width: 150px;
`;

let activeStyle = css`
    background: #3399FF;
    color: #FFFFFF;
    cursor: pointer;
`;

let disabledStyle = css`
    background: #E0E0E0;
    color: #808080;
`;

let hoveredStyle = css`
    background: #99CCFF;
    color: #FFFFFF;
`;

let pressedStyle = css`
    background: #0066CC;
    color: #FFFFFF;
`;


class UnoButton extends React.Component{

    static defaultProps = {
        status: ButtonStatus.ENABLED,
        label: 'Label Placeholder',
        statusStyle: activeStyle
    };

    render() {
        const statusStyleMap = {
            [ButtonStatus.ENABLED]: activeStyle,
            [ButtonStatus.DISABLED]: disabledStyle,
            [ButtonStatus.HOVERED]: hoveredStyle,
            [ButtonStatus.PRESSED]: pressedStyle,
        };

        return (
            <div css={[containerBaseStyle, statusStyleMap[this.props.status]]}>
                {this.props.label}
            </div>
        );
    }

}

export default UnoButton