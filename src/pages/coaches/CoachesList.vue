<template>
    <section>
        FILTER
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
           <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul>Course List</ul>
        <ul v-if="hasCoaches">
            <coach-item  v-for="coach in filterCoaches" 
                :key="coach.id"
                :id="coach.id"
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.hourlyReate"
                :areas="coach.areas">
            </coach-item>
        </ul>
        <h3 v-else>Coach No found</h3>
        
    </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
    components : {
        CoachItem
    },
    computed : {
        filterCoaches(){
            return this.$store.getters['coachesModule/coaches'];
        },
        hasCoaches(){
            return this.$store.getters['coachesModule/hasCoach'];
        }
    }
}
</script>