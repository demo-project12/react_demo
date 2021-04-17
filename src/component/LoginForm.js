import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form id="login" className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" name="id" value={this.state.id} onChange={this.handleChange} className="input-field" placeholder="Enter ID" required/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="input-field" placeholder="Enter Password" required/>
                <input type="checkbox" className="checkbox"/><span>Remember Password</span>
                <button className="submit">Login</button>
            </form>
        );
    }
}

export default LoginForm;