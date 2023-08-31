export default{
    addCoach(state,payload){
        state.coaches.push(payload);
    },
    setCoach(state,payload){
        state.coaches = payload;
    }
}