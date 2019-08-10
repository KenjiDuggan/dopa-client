<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <router-link
          to="/login"
          class="btn btn-simple btn-round btn-lg whitetext h4"
        >
          Go
        </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Reason for joining!' },
          { value: 'a', text: 'Lose weight' },
          { value: 'b', text: 'Exercise Regularly' },
          { value: 'c', text: 'Quit smoking' },
          { value: 'd', text: 'Study more' },
          { value: 'e', text: 'Sleep better' },
          { value: 'f', text: 'Other' },
        ]
      }
    }
  }
</script>
<style scoped>
.whitetext{
    color: white !important;
}
</style>