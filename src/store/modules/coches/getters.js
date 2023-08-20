export default{
    coaches(state){
        console.log("dd" +state);
        return state.coaches;
    },
    hasCoach(state){
        console.log("test");
        return state.coaches && state.coaches.length > 0;
    }
}