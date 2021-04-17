import React, { Component } from "react";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    signUp(e) {
        e.preventDefault();
        console.log(this.state);


    }

    render() {
        return (
            <form id="register" className="input-group" onSubmit={this.signUp}>
                <input type="text" name="id" value={this.state.id} onChange={this.handleChange} className="input-field" placeholder="Enter ID" required/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="input-field" placeholder="Enter Password" required/>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="input-field" placeholder="Your Name" required/>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="input-field" placeholder="Your Email" required/>
                <input type="submit" className="submit" value="Submit" />
            </form>
        );
    }
}

export default RegisterForm;