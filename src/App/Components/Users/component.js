import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import getUsers from './../../Actions/Users';

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
};

const mapDispatchToProps = { getUsers };

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const singleUrl = '/user/:';

        return (
            <div>
                {
                    this.props.users ? this.props.users.map(user =>
                        <div className="user-block" key={ user.id }>
                            <Link to={ singleUrl + user.login }>
                                <img src={ user.avatar_url } className="user-image" alt="" />
                                <p className="user-name">
                                    { user.login }
                                </p>
                            </Link>
                        </div>
                    ) : <p className="loading-text">Loading...</p>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
