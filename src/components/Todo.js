import React, { Component } from 'react'
import Todoitem from './Todoitem'

export class todo extends Component {
    render() {
        return (
            <div>
                {
                    (this.props.todos.map((todo) => (
                        <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delButton={this.props.delButton} />
                    )))
                }
            </div>
        )
    }
}

export default todo
