/* eslint-disable no-unused-vars */
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Click me!",
        };
    }

    handleClick = () => {
        this.props.onClick(this.props.text);
    };

    render() {
        return (
            <button className="myButton" onClick={this.handleClick}>
                {this.props.text ? this.props.text : this.state.buttonText}
            </button>
        );
    }
}

export default Button;
