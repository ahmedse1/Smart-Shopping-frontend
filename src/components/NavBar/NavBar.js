import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const Navbar = ({ auth: {loading, isAuthenticated, user}, logout}) => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/search-result">
                    <i className='fa fa-fw fa-search'/>{''}
                    <span className='hide-sm'></span>
                </Link>
            </li>
            <li>
                <Link to="/About">
                    About
                </Link>
            </li>
            <li>
                <Link to="/Contact">
                    Contact
                </Link>
            </li>
            <li>
                <Link to="/front">
                    <i className='fas fa-bell' />{' '}
                    <span className='hide-sm'></span>
                </Link>
            </li>
            <li>
                {isAuthenticated && user!==null ? 
                (<Fragment>
                    <Link to="/front">
                        <img className='round-img' src={user.user.avatar} alt='' style={{width: 20, height: 20,}}/>
                        <i className="fa fa-caret-down"></i>
                    </Link>
                </Fragment>) 
                : 
                (<Fragment>
                    <Link to="/front">
                    <i className='fas fa-user-circle'/>{' '}
                    <span className='hide-sm'></span>
                </Link>
                </Fragment>)}  
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'></span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Signup">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
    return(
        <nav className ="navbar bg-dark">
            <h1>
                <Link to="/"><i className ="fas fa-code"></i> SSB</Link>
            </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks :  guestLinks }</Fragment>) }
        </nav>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, )(Navbar);
    