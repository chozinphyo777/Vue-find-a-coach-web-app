export default{
    async contactCoach(context,payload){
        const newRequest = {
            userEmail : payload.email,
            message : payload.message,
        }
        
       const response =  await fetch(`https://coach-finding-web-app-7a987-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,{
            method: 'POST',
            body: JSON.stringify(newRequest),
        })
        const responseData = await response.json();
        if(!response.ok){
           const error = new Error(responseData.message || 'Failed to fetch');
           throw error;
        }
        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;
        context.commit('addRequest',newRequest)
    },
    async loadRequests(context){
        console.log(context);
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://coach-finding-web-app-7a987-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`);
        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.error || 'Failed to fetch!');
            console.log(responseData.error);
            throw error;
            
         }
        const requests = [];
        for(const key in responseData){
            const newRequest = {
                id : key,
                coachId : coachId,
                userEmail : responseData[key].userEmail,
                message : responseData[key].message,
            }
           requests.push(newRequest);
        }
         
       
        context.commit('setAllRequests',requests);

    }

}