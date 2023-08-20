import coachMutations from './mutations.js';
import coachActions from './actions.js';
import coachGetters from './getters.js';
export default {
    namespaced : true,
    state (){
        return {
            coaches : [
                {
                    id : "max",
                    firstName : "MAX",
                    lastName : "ZEL",
                    areas : ['frontend','backend','server'],
                    description : "Loream ",
                    hourlyReate : 30,
                },
            ],
        }
    },
    mutations : coachMutations,
    actions : coachActions,
    getters : coachGetters,
}