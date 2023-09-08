export default{
    userId(state){
        return state.userId;
    },
    token(state){
        return state.token;
    },
    isAuthenticated(state){
        return !!state.token;
    },
    didAutoLogout(state){
        console.log(state.didAutoLogout);
        return state.didAutoLogout;
    }
}