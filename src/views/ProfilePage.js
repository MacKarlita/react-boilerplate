import React from 'react';
import Card from "../components/Card";

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const containerStyle = css`
    display: inline-block;
    text-align: center;
    width: 40%;
`;

const fieldStyle = css`
    margin: 10px 25px;
    padding: 5px;
    text-align: left;
`


class ProfilePage extends React.Component {

    static defaultProps = {
        cardTitle: 'User Profile'
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'Karla',
                lastName: 'Martin',
                company: 'Unosquare',
                email: 'karla.martin@unosquare.com'
            }
        }
    }

    render() {
        return (
            <section>
                <div css={containerStyle}>
                    <Card title={this.props.cardTitle}>
                        <form>
                            <div css={fieldStyle}>
                                <label>First Name: </label>
                                <span>{this.state.user.firstName}</span>
                            </div>
                            <div css={fieldStyle}>
                                <label>Last Name: </label>
                                <span>{this.state.user.lastName}</span>
                            </div>
                            <div css={fieldStyle}>
                                <label>Company: </label>
                                <span>{this.state.user.company}</span>
                            </div>
                            <div css={fieldStyle}>
                                <label>Email: </label>
                                <span>{this.state.user.email}</span>
                            </div>
                        </form>
                    </Card>
                </div>
            </section>
        );
      }
}

export default ProfilePage;