<template>
  <div>
    <base-dialog :show="!!error" title="An Error Occur!" @close="handleError">
        <p>{{error}}</p>
    </base-dialog>
      <form @submit.prevent="submitForm">
          <div class="form-control">
              <label for="email">E-mail</label>
              <input type="email"  id="email" v-model.trim="email">
          </div>
          <div class="form-control">
              <label for="message">Message</label>
              <textarea id="message" cols="30" rows="10" v-model.trim="message"></textarea>
          </div>
          <div class="actions">
              <base-button>Send Message</base-button>
          </div>
          <p v-if="!formIsValid" class="errors">Please enter a valid email and message!</p>
      </form>
  </div>
</template>
<script>
export default {
    data(){
        return {
            email : '',
            message: '',
            formIsValid : true,
            error :null,
        }
    },
    methods:{
       async submitForm(){
            if(this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false;
                return;

            }
            try{
             await this.$store.dispatch('requestsModule/contactCoach', {
                coachId : this.$route.params.id,
                email :this.email,
                message : this.message,
            })
             this.$router.replace('/coaches');
            }catch(error){
              this.error = error.message || 'Something went wrong';
            }
            
            
        },
        handleError(){
          this.error = null;
        }
    }
}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>