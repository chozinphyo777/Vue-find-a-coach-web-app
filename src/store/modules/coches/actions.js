export default{
    //to add new coach data
    async registerCoach(context,payload){
        console.log(context);
        const userId =  context.rootGetters.userId;
        const newData = {
            firstName : payload.first,
            lastName : payload.last,
            areas : payload.areas,
            description : payload.description,
            hourlyRate : payload.rate,
        };
        const response = await fetch(`https://coach-finding-web-app-7a987-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,{
            method: 'PUT',
            body: JSON.stringify(newData)
        });

        // const responseData = await response.json(); // get response data

        if(!response.ok){
            //error
        }
        context.commit('addCoach',{
            ...newData,
            id : userId,
        });
    },

    async loadCoaches(context){
        const response = await fetch(`https://coach-finding-web-app-7a987-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.jsn`);
        const responseData = await response.json(); // get response data
        console.log(response);
        console.log(responseData);
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
       
        const coaches = [];
        for(const key in responseData){
            const coach = {
                id : key,
                firstName : responseData[key].firstName,
                lastName : responseData[key].lastName,
                areas : responseData[key].areas,
                description : responseData[key].description,
                hourlyRate : responseData[key].hourlyRate,
            }
            coaches.push(coach)
        }
        context.commit('setCoach',coaches);
    }
}