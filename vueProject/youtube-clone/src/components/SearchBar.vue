<template>
    <div class="search">
        <h1>Simple YOUTUBE Clone</h1>
        <p>Using Vue.js V2 with Youtube API Service</p>
        <input @keyup.enter="onInput"  placeholder="Seach Video" /> 
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function (event) {
            this.$emit('searchChange', event.target.value)
        }
    }
}
</script>

<style scoped>
    .search {
        margin-top: 50px;
    }
    h1  {
        text-align: center;
    }
    p {
        text-align: center;
        margin-bottom: 30px;
    }
    input {
        width: 75%;
        border: 2px solid,
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>