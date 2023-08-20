<template>
    <section>
        FILTER
    </section>
    <section>
        <base-card>
            <div class="controls">
               <base-button>Refresh</base-button>
               <base-button link to="/register" mode="outline">Register as Coach</base-button>
            </div>
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
        </base-card>
        
    </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../ui/BaseButton.vue';
export default {
    components : {
        CoachItem,
        BaseButton
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