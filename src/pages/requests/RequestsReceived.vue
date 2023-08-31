<template>
    <base-dialog :show="!!error" title="An Error Occur!" @close="handleError">
    <p>{{error}}</p>
    </base-dialog>
    <base-card>
        <section>
            <header>
                <h3>Requests Received</h3>
            </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-if="!isLoading && hasRequest">
                <request-item v-for="request in requests" :email="request.userEmail" :message="request.message" :coachId="request.coachId" :key="request.id"></request-item>
            </ul>
            <h3 v-else>You haven't receive any requests yet!</h3>
        </section>
    </base-card>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    components :{
        RequestItem,
    },
    data(){
        return{
            isLoading : true,
            error :null,
        }
    },
    computed:{
        requests(){
            return this.$store.getters['requestsModule/requests'];
        },
        hasRequest(){
            return this.$store.getters['requestsModule/hasRequest'];
        }
    },
    created(){
        this.loadRequests()
    },
    methods:{
        async loadRequests(){
            this.isLoading = true;
            try{
                await this.$store.dispatch('requestsModule/loadRequests');
            }catch(error){
                this.error = error.message || 'Something went wront!';
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