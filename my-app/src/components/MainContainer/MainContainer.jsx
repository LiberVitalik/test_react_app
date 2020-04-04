import React, {Component} from 'react';
import {Header} from '../Header/Header';
import {TodoList} from '../TodoList/TodoList';
import MainContainerClasses from './MainContainer.module.css'
import {Items} from '../Item/Item';

export class MainContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, comment: 'Поздравить с ДР', done: false},
                {id: 2, comment: 'Отметить что-нить', done: false},
                ],
            clickedElement: HTMLElement,
        };
    }

    render() {
        return (
            <div className={MainContainerClasses.wrapper} onClick={this.clickHandler}>
                <Header mainTodoHandler={this.mainAddTodo} />
                <TodoList>
                    {this.getTodos()}
                </TodoList>
            </div>
        )
    }

    getComment = (id, comment, done) => {
        const currentTodoList = [];

        this.getCloneTodos().forEach((todo, index) => {
            if (todo.id === id) {
                console.log('YES');
                todo.id = id;
                todo.comment = comment;
                todo.done = done;
            }
            currentTodoList.push(todo);
        });
    };

    getCloneTodos = () => {
        const { todos } = this.state;

        const cloneTodos = [...todos];

        cloneTodos.push({
            id: todos[todos.length - 1].id + 1 || 1,
            comment: '',
            done: false
        });

        return cloneTodos;
    };

    mainAddTodo = () => {
        this.setState({
            todos: this.getCloneTodos(),
        });

    };

    clickHandler = (e) => {
        this.setState({
            clickedElement: e.target
        });
    };

    getTodos = () => {
        const { todos, clickedElement } = this.state;

        return todos.map((todo) => {
            return (
                <Items key={todo.id}
                       id={todo.id}
                       comment={todo.comment}
                       done={todo.done}
                       getComment={this.getComment}
                       clickedElement={clickedElement} />
            )
        })
    }
}