<template>
    <li>
        <h2>{{id}}</h2>
        <h3>{{ fullName }}</h3>
        <h4>${{rate}}/hr</h4>
        <div>
            <span v-for="area in areas" :key="area">{{area}}</span>
        </div>
        <div class="actions">
            <router-link :to="coachDetailLink">Coach Detail</router-link>
            <br>
            <router-link :to="contactACoachLink">Contact Coach</router-link>
        </div>
    </li>
</template>
<script>
    export default{
        props : ['id','firstName','lastName','rate','areas'],
        computed : {
            fullName(){
                return this.firstName +' '+ this.lastName;
            },
             coachDetailLink(){
            return this.$route.path+ '/' + this.id ;
            },
             contactACoachLink(){
            return this.$route.path+ '/' + this.id + '/contact';
            }
        },
       
    }
</script>