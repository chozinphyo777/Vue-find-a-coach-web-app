import { createStore } from "vuex";
import CoachesModule from './modules/coches/index.js';

const store = createStore({
    modules : {
        coachesModule : CoachesModule,
    },
    state(){
        return {
            userId : 'c3',
        }
    },
    getters:{
        userId(state){
            return state.userId;
        }
        
    }
});

export default store;