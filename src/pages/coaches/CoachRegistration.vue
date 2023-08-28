<template>
   <base-card>
      Register as a Caoach
      <coach-form @save-data="coachData"></coach-form>
   </base-card>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
   components :{
      CoachForm,
   },
   methods:{
      coachData(data){
         this.$store.dispatch('coachesModule/registerCoach',data);
         this.$router.replace('/coaches')
      }
   }
}
</script>