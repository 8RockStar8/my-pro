import React, { Component } from 'react';

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
        const name = this.props.location.pathname.split(':')[1];
        return (
            <div>
                {
                    this.props.users ? this.props.users.map(user =>
                        user.login === name ?
                        <div key={user.id}>
                            <div className="user-single-block">
                                    <img src={ user.avatar_url } className="user-image" alt="" />
                                    <p className="user-name">
                                        { user.login }
                                    </p>
                            </div>
                            <p className="user-info-text">{ user.followers_url }</p>
                            <p className="user-info-text">{ user.following_url }</p>
                            <p className="user-info-text">{ user.repos_url }</p>
                        </div>: ''
                    ) : <p className="loading-text">Loading...</p>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
