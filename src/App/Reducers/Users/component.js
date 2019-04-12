const Users = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    };
};

export default Users;
