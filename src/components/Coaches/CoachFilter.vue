<template>
    <div class="select-field">
    <input type="checkbox" :value="frontend" id="frontend" @change="setFilters" checked>Frontend
    <input type="checkbox" :value="backend" id="backend" @change="setFilters" checked>Backend
    <input type="checkbox" :value="career" id="career" @change="setFilters" checked>Career
  </div>
</template>

<script>
export default {
    data(){
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    }, 
    methods: {
        setFilters(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilter = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilter;
            this.$emit('change-filter', updatedFilter);
        }

    },
    emits: ['change-filter']

}
</script>

<style>

</style>