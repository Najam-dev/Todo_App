import React, { Component } from 'react'

export class Todoitem extends Component {

    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px solid black",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }


    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <input type="checkbox" className="" style={{ marginRight: "7px" }} onChange={this.props.markComplete.bind(this, id)} />
                        {title}
                    </div>
                    <button className="btn btn-danger" onClick={this.props.delButton.bind(this, id)} >x</button>
                </div>
            </div>
        )
    }
}


export default Todoitem
