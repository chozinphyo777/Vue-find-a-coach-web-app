export default{
    registerCoach(context,payload){
        console.log(context);
        const newData = {
            id : context.rootGetters.userId,
            firstName : payload.first,
            lastName : payload.last,
            areas : payload.areas,
            description : payload.description,
            hourlyRate : payload.rate,
        };
        
        context.commit('addCoach',newData);
    }
}