import { createStore } from "vuex";
import CoachesModule from './modules/coches/index.js';

const store = createStore({
    modules : {
        coachesModule : CoachesModule,
    }
});

export default store;