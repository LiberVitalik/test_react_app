import React, { Component } from 'react';
import DialogClasses from './dialog.module.scss';
import { MessageField } from '../messageField/messageField';
import { Message } from '../message/message';

export class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    }

    render() {

        const { messages } = this.state;

        return (
            <div className={DialogClasses.dialog}>
                <div className={DialogClasses.dialogWrapper}>
                    {this.addMessages()}
                </div>
                <MessageField messages={messages} addMessage={this.addMessage} />
            </div>
        );
    }

    addMessage = (message) => {
        const { messages, id } = this.state;

        const messagesClone = messages;
        messagesClone.push(
            {
                name: message,
                id: messagesClone.length + 1,
            }
        );

        this.setState({
            messages: messagesClone
        });
        console.log('messagesClone', messagesClone);


        console.log('message', message);
        console.log('this.state', this.state);
    };

    addMessages = () => {
        const { messages } = this.state;

        return messages.map(message => {
            return <Message key={message.id}>
                {message.name}
            </Message>
        });
    };
}