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
            <li v-for="coach in filterCoaches" :key="coach.id">{{coach.name}}</li>
        </ul>
        <h3 v-else>Coach No found</h3>
        
    </section>
</template>
<script>
export default {
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