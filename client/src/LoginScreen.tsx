import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';


const LoginScreen: React.FC = () => {
    return (
        <div className="parent-div">
            <div className="login-div">
                <h1 className="title">recallify</h1>
                <p className="register-option">don't have an account? register here.</p>
                <div className="textbox">username</div>
                <div className="textbox">password</div>
                <p className="forgot-password">forgot password?</p>
                <button>sign in</button>
            </div>
            <div className="temp-links">
                <p><Link to="/input">go to text input screen (temporary!)</Link></p>
                <p><Link to="/flashcard">go to flashcard screen (temporary!)</Link></p>
            </div>
        </div>
    );
}

export default LoginScreen;