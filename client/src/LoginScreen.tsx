import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen: React.FC = () => {
    return (
        <div>
            <p>
                this will be the login screen someday!
            </p>
            <p>
                <Link to="/input">go to text input screen (temporary!)</Link>
            </p>
            <p>
                <Link to="/flashcard">go to flashcard screen (temporary!)</Link>
            </p>
        </div>
    );
}

export default LoginScreen;