<template>
    <div>
        <h2 class='white-font'>Gender</h2>

        <ul class="vue-form-list">
        <li>
            <input type="radio" name="radio-1" id="radio-1" value="angular" 
                v-model="selection.framework">
            <label for="radio-1">Male </label>
            <input type="radio" name="radio-2" id="radio-2" value="react" 
                v-model="selection.framework">
            <label for="radio-2">Female </label>
            <input type="radio" name="radio-3" id="radio-3" value="vue" 
                v-model="selection.framework">
            <label for="radio-3">Other </label>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() {
            return {
            name: "Kenji Duggan",
            email: {
                value: "kenjiduggan@gmail.com",
                valid: true
            },
            features: ["Reactivity", "Encapsulation", "Data Binding"],
            selection: {
                member: "0",
                framework: "vue",
                features: []
            },
            message: {
                text: `Dear Mr. GimmeDopamineSerotoninGhrelinAnti_Cortisol,\n...`,
                maxlength: 255
            },
            submitted: false
            };
    },
}
</script>

<style scoped>
.white-font{
    color: white !important;
}
</style>