export default{
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxbfn3HGlF_ARsQslBeaQLN1S6KGGbJxs',{
            method : 'POST',
            body : JSON.stringify({
                email : payload.email,
                password : payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.error.message  || 'Failed to authenticate!');
            console.log("Rresponse error " + error);
            throw error;

        }
        console.log(responseData.idToken);
        context.commit('setUser',{
            token : responseData.idToken,
            userId : responseData.localId,
            tokenExpiration : responseData.expiresIn,
        })
    },
    async signup(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxbfn3HGlF_ARsQslBeaQLN1S6KGGbJxs',{
            method : 'POST',
            body : JSON.stringify({
                email : payload.email,
                password : payload.password,
                returnSecureToken : true,
            })
        });
        const responseData = await response.json();
        
        if(!response.ok){
            const error = new Error(responseData.error.message  || 'Failed to authenticate!');
            console.log("Rresponse error " + error);
            throw error;

        }
        console.log(responseData.idToken);
        context.commit('setUser',{
            token : responseData.idToken,
            userId : responseData.localId,
            tokenExpiration : responseData.expiresIn,
        })
    }
}