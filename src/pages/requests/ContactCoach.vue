<template>
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
            <base-button>Contact</base-button>
        </div>
        <p v-if="!formIsValid">Please fill the above error!</p>
    </form>
</template>
<script>
export default {
    data(){
        return {
            email : '',
            message: '',
            formIsValid : true,
        }
    },
    methods:{
        submitForm(){
            if(this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false;
                return;

            }
            this.$router.replace('/coaches');
        }
    }
}
</script>