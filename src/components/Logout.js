import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser';
import { useHistory } from 'react-router';


const Logout = ({ logout }) => {
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        logout()
        history.push('/')
    }

    return (
        <form onSubmit={ handleSubmit }>
            <button className="btn btn-dark btn-lg btn-block" type="submit" value="Log Out">Log Out</button>
        </form>
    )
}

export default connect(null, { logout })(Logout);