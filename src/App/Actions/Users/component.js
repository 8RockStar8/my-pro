const getUsers = _ => dispatch => fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(res => dispatch({
            type: 'ADD_USERS',
            users: res
        })
    );

export default getUsers;
