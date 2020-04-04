import React, {Component} from 'react';
import ItemClasses from './Item.module.css';
import {RemoveButton} from '../RemoveButton/RemoveButton';

const ItemStales = {
    Indent: {
        padding: '12px 16px',
        border: '1px solid #cacece',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05),' +
            ' inset 0 -15px 10px -12px rgba(0,0,0,0.05)',
    }
};

export class Items extends Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: true,
            value: '',
            status: false,
        };

        this.todoElement = React.createRef();
    }

    componentDidMount() {
        const { comment, done } = this.props;

        this.setState({
            value: comment,
            status: done,
            edit: !comment,
            isVisible: true,
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.clickedElement !== prevProps.clickedElement) {
            if (this.props.clickedElement.contains(this.todoElement.current)) {
                this.setState({
                    edit: false,
                })
            }
        }
    }

    render() {
        const { edit, value, status, isVisible } = this.state;

        return (
            <>
                {isVisible && <li className={ItemClasses.todo}
                             style={ItemStales.Indent}
                             onKeyUp={this.keyboardHandler}
                             ref={this.todoElement} >
                    <label>
                        <input type="checkbox" onChange={this.statusHandler} />
                    </label>
                    {edit && <input type="text"
                                    placeholder='Type yor todo here'
                                    value={value}
                                    autoFocus
                                    onChange={this.editOnChangeHandler} />}
                    {!edit && <p
                        onClick={this.toggleEditMode}
                        className={status ? ItemClasses.lineThrough : ''}>
                        {value || <span>Click to edit</span>}
                    </p>}
                    <RemoveButton removeItem={this.removeItem} />
                </li>}
            </>
        );
    }

    removeItem = () => {

        const { isVisible } = this.state;

        this.setState({
            isVisible: !isVisible
        });
    };

    keyboardHandler = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                edit: false,
            });

        }

    };

    editOnChangeHandler = (e) => {
        const { value } = this.state;

        this.setState({
            value: e.target.value
        });

        this.setComment();
    };

    toggleEditMode = () => {
        this.setState({
            edit: true,
        });
    };

    statusHandler = () => {
        const { status } = this.state;

        this.setState({
            status: !status
        });

        this.setComment();
    };

    setComment = () => {

        const { getComment, id } = this.props;
        const { value, status } = this.state;

        getComment(id, value, status);
    };
}

