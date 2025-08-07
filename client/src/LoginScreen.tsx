import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginScreen.css';
import { Button, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "./components/ui/password-input";


const LoginScreen: React.FC = () => {
    return (
        <div className="parent-div">
            <div className="login-div">
                <h1 className="title">recallify</h1>
                <p className="register-option">don't have an account? register here.</p>
                <Stack gap="15px">
                    <Input size="lg" w="360px" variant="subtle" placeholder="username" />
                    <PasswordInput size="lg" w="360px" variant="subtle" placeholder="password" />
                </Stack>
                <p className="forgot-password">forgot password?</p>
                <Button variant="surface" rounded="xl" bg="#4B5358" color="white">sign in</Button>
            </div>
            <div className="temp-links">
                <p><Link to="/input">go to text input screen (temporary!)</Link></p>
                <p><Link to="/flashcard">go to flashcard screen (temporary!)</Link></p>
            </div>
        </div>
    );
}

export default LoginScreen;