import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const newPost = {
            title, id: Date.now().toString()
        }
        this.setState({ title: '' })
    }

    changeInputHandler = (e) => {
        e.preventDefault();
        this.setState((prev) => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mb-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label display-6">Заголовок поста</label>
                    <input type="text"
                    className="form-control"
                    id="title"
                    value={this.state.title}
                    name="title"
                    onChange={this.changeInputHandler}
                    aria-describedby="emailHelp" />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}