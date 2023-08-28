<template>
    <base-card>
        <section>
            <header>
                <h3>Requests Received</h3>
            </header>
            <ul>
                <request-item v-for="request in requests" :email="request.userEmail" :message="request.message" :coachId="request.coachId" :key="request.id"></request-item>
            </ul>
            <h3 v-if="!hasRequest">You haven't receive any requests yet!</h3>
        </section>
    </base-card>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    components :{
        RequestItem,
    },
    computed:{
        requests(){
            console.log(this.$store.getters['requestsModule/requests']);
            return this.$store.getters['requestsModule/requests'];
        },
        hasRequest(){
            return this.$store.getters['requestsModule/hasRequest'];
        }
    }
}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>