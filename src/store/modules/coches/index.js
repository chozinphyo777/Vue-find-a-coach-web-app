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
                    name : "MAX Z",
                },
            ],
        }
    },
    mutations : coachMutations,
    actions : coachActions,
    getters : coachGetters,
}