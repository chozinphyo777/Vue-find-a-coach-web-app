import { createStore } from "vuex";
import CoachesModule from './modules/coches/index.js';
import RequestsModule from './modules/requests/index.js';
import AuthMoudle from './modules/auth/index.js';
const store = createStore({
    modules : {
        coachesModule : CoachesModule,
        requestsModule : RequestsModule,
        authMoudle : AuthMoudle,
    },
});

export default store;