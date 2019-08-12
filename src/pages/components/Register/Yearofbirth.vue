<template>
<div>
    <!-- <div class="container">
        <select id="dob">
        <option value="0">Year:</option>
        <option v-for="year in years" :value="year" :key='year'>{{ year }}</option>
        </select>
    </div>
    <div class="col-md-3 dropdown">
        <a href="#" class="btn btn-simple dropdown-toggle" data-toggle="dropdown">
            Gender
            <b class="caret"></b>
        </a>
        <ul class="dropdown-menu" v-for="year in years" :value="year" :key='year'>
            <li>{{ year }}</li>
        </ul>
    </div> -->
    <birthDatepicker v-model="date"/>
    <div>
        <p>Yeaf of Birth: </p>
        <b-dropdown id="dropdown-1" text="Year" class="m-md-2" >
            <b-dropdown-item v-for="year in years" :value="year" :key='year'>{{ year }}</b-dropdown-item>
        </b-dropdown>
    </div>

</div>
</template>
<script>
import birthDatepicker from 'vue-birth-datepicker';

  export default {
    computed : {
        years () {
        const year = new Date().getFullYear()
        return Array.from({length: year - 1900}, (value, index) => 1901 + index)
        }
    }
  }
</script>
<style scoped>
.whitetext{
    color: white !important;
}
</style>