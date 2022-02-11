<template>
    <div id="app">
        <h1>Filtros & Mixins</h1>
        <hr/>
        <p>{{ cpfDoAluno | cpf | inverter }}</p>
        <p>{{ usuarioLogado }}</p>
        <input type="text" :value="cpfDoAluno | cpf | inverter">
        <hr/>
        <Frutas/>
        <hr/>
        <div>
            <ul>
                <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
            </ul>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </div>
    </div>
</template>

<script>
    import frutasMixin from "@/frutasMixin";
    import Frutas from "@/Frutas";
    import usuarioMixin from "@/usuarioMixin";

    export default {
        components: {Frutas},
        mixins: [frutasMixin, usuarioMixin],
        filters: {
            cpf(valor) {
                const arr = valor.split('')
                arr.splice(3, 0, '.')
                arr.splice(7, 0, '.')
                arr.splice(11, 0, '-')
                return arr.join('')
            }
        },
        data() {
            return {
                cpfDoAluno: '42342424234',
                frutas: ['abacate']
            }
        },
        created() {
            console.log('created - app')
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 2.5rem;
    }
</style>
