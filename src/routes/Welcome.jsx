import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Welcome() {
    return (
        <React.Fragment>
            <h1>Welcome to Andwise</h1>
            
            <ButtonToolbar>
                <Link to='/Login'>
                    <Button>Login</Button>
                </Link>
                <Link to='/Register'>
                    <Button>Register</Button>    
                </Link>
            </ButtonToolbar>
        </React.Fragment>
    );
}

export default Welcome;