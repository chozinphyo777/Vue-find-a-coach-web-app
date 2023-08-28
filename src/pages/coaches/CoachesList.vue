<template>
    <section>
        <coach-filter @change-filter="setChangeFilter"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
               <base-button>Refresh</base-button>
               <base-button link to="/register" mode="outline" v-if="!isCoach">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item  v-for="coach in filterCoaches"
                    :key="coach.id"
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas">
                </coach-item>
            </ul>
            <h3 v-else>Coach No found</h3>
        </base-card>
        
    </section>
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
                }
        }
    },
    components : {
        CoachItem,
        BaseButton,
        CoachFilter,
    },
    computed : {
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
            return this.$store.getters['coachesModule/hasCoach'];
        }
    },
    methods:{
        setChangeFilter(updatedFilters){
            this.activeFilter = updatedFilters;
            console.log(this.activeFilter);
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