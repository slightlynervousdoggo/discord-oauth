import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../layout/Spinner';

const Login = ({ isAuthenticated, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  const scope = `identify`;
  const redirect_uri = `http://localhost:5000/api/discord/oauth`;
  window.location = `https://discordapp.com/api/oauth2/authorize?client_id=613451287996006639&scope=${scope}&response_type=code&redirect_uri=${redirect_uri}`;

  return <p>Redirecting to Discord Oauth</p>;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Login);
