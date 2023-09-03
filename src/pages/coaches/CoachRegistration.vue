<template>
   <div>
      <base-dialog :show="!!error" title= "An error occured!" @close="handleError">
         <p>{{error}}</p>
      </base-dialog>
      <base-card>
         Register as a Caoach
         <coach-form @save-data="coachData"></coach-form>
      </base-card>
   </div>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
   components :{
      CoachForm,
   },
   data(){
      return{
         error : null,
      }
   },
   methods:{
      async coachData(data){
         try{
             await this.$store.dispatch('coachesModule/registerCoach',data);
            this.$router.replace('/coaches')
         }catch(error){
                this.error ='Registration Error!';
                
            }
        
      },
      handleError(){
            this.error = null;
        }
   }
}
</script>