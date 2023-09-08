<template>
    <div>
        <base-dialog :show="!!error" title= "An error occured!" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <section>
            <coach-filter @change-filter="setChangeFilter"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                   <base-button @click="loadCoaches(true)">Refresh</base-button>
                   <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
                   <base-button link to="/register" mode="outline" v-if="isLoggedIn && !isLoading && !isCoach">Register as Coach</base-button>
                </div>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="!isLoading && hasCoaches">
                    <coach-item  v-for="coach in filterCoaches"
                        :key="coach.id"
                        :id="coach.id"
                        :first-name="coach.firstName"
                        :last-name="coach.lastName"
                        :rate="coach.hourlyRate"
                        :areas="coach.areas">
                    </coach-item>
                </ul>
                <h3 v-else>Coach Not found</h3>
            </base-card>
        
        </section>
    </div>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../ui/BaseButton.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
    data(){
        return{
            activeFilter :{
                    frontend :true,
                    backend :true,
                    career : true,
                },
            isLoading : false,
            error :null,
            forceRefresh : false,
        }
    },
    components : {
        CoachItem,
        BaseButton,
        CoachFilter,
    },
    computed : {
        isLoggedIn(){
            return this.$store.getters.isAuthenticated;
        },
        isCoach(){
         return this.$store.getters['coachesModule/isCoach'];
        },
        filterCoaches(){
            const coaches =  this.$store.getters['coachesModule/coaches'];
            return coaches.filter(coach => {
                if(this.activeFilter.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilter.backend && coach.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilter.career && coach.areas.includes('career')){
                    return true;
                }
                 return false;
            })
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coachesModule/hasCoach'];
        }
    },
    created(){
        this.loadCoaches();
    },
    methods:{
        setChangeFilter(updatedFilters){
            this.activeFilter = updatedFilters;
            console.log(this.activeFilter);
        },
        async loadCoaches(refresh = false){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coachesModule/loadCoaches', {
                    forceRefresh : refresh,
                });
            }catch(error){
                this.error = error.message || 'Something went wront!';
                console.log("error");
            }
           
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>