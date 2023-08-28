export default{
    //default  requests(state,getters,rootState,rootGetters
    requests(state,_,_2,rootGetters){
        return state.requests.filter(req => req.coachId === rootGetters.userId);
    },
    hasRequest(_,getters){
        return getters.requests && getters.requests.length > 0;
    }
}