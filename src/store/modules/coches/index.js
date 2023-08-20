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
                    areas : ['frontend','backend','career'],
                    description : "Loream ",
                    hourlyReate : 30,
                },
                {
                    id : "john",
                    firstName : "John",
                    lastName : "Sllo",
                    areas : ['frontend','career'],
                    description : "Loream ",
                    hourlyReate : 34,
                },
            ],
        }
    },
    mutations : coachMutations,
    actions : coachActions,
    getters : coachGetters,
}