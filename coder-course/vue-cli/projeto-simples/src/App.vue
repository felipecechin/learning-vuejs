<template>
    <div id="app">
        {{ titulo }}
        <button @click="titulo +='#'">Alterar 2</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                titulo: 'Teste data usando Vue'
            }
        }
    }
</script>

<style>
    #app {
        background-color: chocolate;
        color: #fff;
    }
</style>
