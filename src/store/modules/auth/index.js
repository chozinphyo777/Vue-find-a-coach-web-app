import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

mutations
export default{
    state(){
        return {
            userId : null,
            token: null,
            tokenExpiration : null
        }
    },
    mutations,
    actions,
    getters,
}