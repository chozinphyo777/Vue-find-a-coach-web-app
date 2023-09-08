<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
       <p>{{error}}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating">
      <p>Authenticating......</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <h2>{{ submitButtonCaption }} Form</h2>
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="email">E-mail</label>
          <input
            type="text"
            name=""
            id="email"
            v-model.trim="email.val"
            @blur="clearValidity('email')"
          />
          <ul v-if="!email.isValid">
            <li v-for="error in email.errorsMsg" :key="error">
              <small>{{ error }}</small>
            </li>
          </ul>
        </div>
        <div class="form-control" :class="{ invalid: !password.isValid }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password.val"
            autocomplete="on"
            @blur="clearValidity('email')"
          />
          <ul v-if="!password.isValid">
            <li v-for="error in password.errorsMsg" :key="error">
              <small>{{ error }}</small>
            </li>
          </ul>
        </div>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          swithModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      email : {
        val : '',
        isValid : true,
        errorsMsg :[],
      },
      password : {
        val : '',
        isValid : true,
         errorsMsg :[],
      },
      formIsValid : true,
      mode : 'login',
      error : null,
      isLoading : false,
    }
  },
  computed:{
    submitButtonCaption(){
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    swithModeButtonCaption(){
      return this.mode === 'login' ? 'Signup Instead' : 'Login Instead';
    }

  },
  methods:{
      clearValidity(input){
       this[input].isValid = true;
      },
    checkValidation(){
      if(this.email.val === ''){
        this.formIsValid = false;
        this.email.isValid = false;
        this.email.errorsMsg.push("Email must not be empty")
      }
      if(!this.email.val.includes('@')){
         this.formIsValid = false;
        this.email.isValid = false;
        this.email.errorsMsg.push("Email must be include @")
      }
      if(this.password.val.length < 6){
        this.formIsValid = false;
         this.password.isValid = false;
        this.password.errorsMsg.push("Password must have at last 6")
      }
    },
    async submitForm(){
      this.email.errorsMsg = [];
      this.password.errorsMsg = [];
      this.checkValidation();
      if(!this.formIsValid){
        return;
      }
      this.isLoading = true;
      try{
        const actionPayload = {
           email : this.email.val,
          password : this.password.val,
        }
        if(this.mode === 'login'){
          await this.$store.dispatch('login', actionPayload);
        }
      else{
        await this.$store.dispatch('signup', actionPayload);
      }
      const redirectUrl = '/'+ (this.$route.query.redirect || 'coaches')
      this.$router.replace(redirectUrl);
      }catch(error){
        this.error = error.message || 'Failed to authenticate, try later!'
      }
      this.isLoading = false
      this.email.val =  '';
      this.password.val = '';

    },
    switchAuthMode(){
      this.email.errorsMsg = [];
      this.password.errorsMsg = [];
      if(this.mode == 'login'){
        this.mode = 'signup';
      }
      else{
        this.mode = 'login';
      }
    },
    handleError(){
      this.error = null
    }
  },
}
</script>
<style scoped>
form {
  margin: 1rem;
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

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid ul li {
  color: red;
}
</style>
