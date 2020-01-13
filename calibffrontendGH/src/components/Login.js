import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        logIn: true,
        username: "",
        password: "",
        errors: []
      }    

    onChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

    submitLogin = (event) => {
        event.preventDefault()
        this.logInSubmitted(event)

    }

    logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        name: this.state.username,
        password: this.state.password
        })
    }).then(res => res.json())
        .then(data => {
        if (data.errors) {
            this.setState({
            errors: data.errors
            })
        } else {
            this.props.setToken(data)
            this.setState({username:"",
                            password:""})
        }
        })
    }

    signUpSubmitted = (event) => {
    event.preventDefault() 
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        name: this.state.username,
        password: this.state.password
        })
    }).then(res => res.json())
        .then(data => {
        if (data.errors) {
            this.setState({
            errors: data.errors
            })
        } else {
            this.props.setToken(data)
            // this.props.addData(data)
        }
        })
    }

    render() {
        return <>
            <ul id="signup">
            {
                this.state.errors.map(error=> <li>{error}</li>)
            }
            </ul>
        {
            this.state.logIn
            ?
            <section id="signup">
                <h2>Log In</h2>
                <button id="signup-button" className="roundbutton" onClick={ () => this.setState({ logIn: false }) }>Sign Up</button>
                <form onSubmit={ this.submitLogin }>
                    <label  htmlFor="log_in_username">Username</label>
                    <input  id="log_in_username" 
                            type="text" 
                            onChange={ this.onChange } 
                            name="username" 
                            value={ this.state.username } />
                            <div></div>
                    <label  htmlFor="log_in_password">Password</label>
                    <input  id="log_in_password" 
                            type="password" 
                            onChange={ this.onChange } 
                            name="password" 
                            value={ this.state.password } />
                    <input id="password-submit" type="submit" className="roundbutton" />
                    <div>
                        <br></br>
                    </div>
                </form>
            </section>
            :
            <section id="signup">
                <h2>Sign up</h2>
                <button id="signup-button" className="roundbutton" onClick={ () => this.setState({ logIn: true }) }>I already signed up</button>
                <form onSubmit={ this.signUpSubmitted }>
                    <label  htmlFor="sign_up_username">Username</label>
                    <input  id="sign_up_username" 
                            type="text" 
                            onChange={ this.onChange } 
                            name="username" 
                            value={ this.state.username } />
                    <label  htmlFor="sign_up_password">Password</label>
                    <input  id="sign_up_password" 
                            type="password" 
                            onChange={ this.onChange } 
                            name="password" 
                            value={ this.state.password } />
                    <input type="submit" id="password-submit" className="roundbutton"/>
                    <div>
                        <br></br>
                    </div>
                </form>
            </section>
        }
        </>
    }
}
