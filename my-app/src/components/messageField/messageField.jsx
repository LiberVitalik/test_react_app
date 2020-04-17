import React, { Component } from 'react';

export class MessageField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        const { value } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={value}
                              placeholder={'type your message here'}
                              onChange={this.typeHandler}></textarea>
                    <button type="submit">
                        send
                    </button>
                </form>
            </>
        )
    }

    typeHandler = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { addMessage } = this.props;
        const { value } = this.state;

        addMessage(value);

        this.setState({
            value: ''
        });
    };
}