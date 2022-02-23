<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidadeAux">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="precoAux">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                sequencia: 1,
                quantidadeAux: 0,
                precoAux: 0,
            }
        },
        computed: {
            quantidade() {
                return this.$store.state.parametros.quantidade
            },
            preco() {
                return this.$store.state.parametros.preco
            }
        },
        watch: {
            quantidade(newValue) {
                this.quantidadeAux = newValue
            },
            preco(newValue) {
                this.precoAux = newValue
            }
        },
        beforeMount() {
            this.quantidadeAux = this.quantidade;
            this.precoAux = this.preco
        },
        methods: {
            ...mapActions('carrinho', ['adicionarProduto']),
            adicionar() {
                const produto = {
                    id: this.sequencia,
                    nome: `Produto ${this.sequencia}`,
                    quantidade: this.quantidadeAux,
                    preco: this.precoAux
                }
                console.log(produto)
                this.sequencia++
                // this.$store.state.produtos.push(produto)
                // this.$store.commit('adicionarProduto', produto)

                // this.$store.dispatch('adicionarProduto', produto)
                this.adicionarProduto(produto)

                console.log(this.$store.getters.getNome)
            }
        }
    }
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
