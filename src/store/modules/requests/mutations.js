export default{
    addRequest(state,payload){
        state.requests.push(payload);
    },
    setAllRequests(state,payload){
        state.requests = payload;
    }
}