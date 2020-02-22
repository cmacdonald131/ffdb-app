import React, { Component } from 'react';



class SignupForm extends Component {
    render() {
        return (
            <div className="signupForm">
                <section>
                    <header>
                        <h3>It's time to win</h3>
                    </header>
                </section>
                <form className='signup-form'>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        );
    }
}
export default SignupForm;
