<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>$ {{ rate }}/hr</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested ? Reach out not!</h2>
        <base-button link :to="contactLink">Contact</base-button>
        <router-view></router-view>
      </header>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :title="area"
        :type="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coachesModule/coaches'].find(
      (coach) => this.id === coach.id
    );
     console.log(this.selectedCoach);
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
}
</script>
