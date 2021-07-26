import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser';


const Logout = ({ logout }) => {

    return (
        <form onSubmit={ logout }>
            <button className="btn btn-dark btn-lg btn-block" type="submit" value="Log Out">Log Out</button>
        </form>
    )
}

export default connect(null, { logout })(Logout);