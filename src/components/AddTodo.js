import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title : ''
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title : "" })
    }

    render() {
        return (
            <form className="d-flex align-items-center justify-content-center" onSubmit={this.onSubmit}>
                <div className="form-group flex-fill">
                    <input type="text" className="form-control" id="" placeholder="Enter Todo here..." name="title" value={this.state.title} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary form-control" >Submit</button>
                </div>
            </form>
        )
    }
}

export default AddTodo
