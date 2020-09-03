<template>
    <div>
        <h1>Uji Coba Vue 2 </h1>
        <input  @input="onInput"  placeholder="Seach Video" />
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
    h1 {
        text-align: center;
    }
    input {
        width: 75%;
    }
    div {
        text-align: center;
        margin: 20px;
    }
</style>