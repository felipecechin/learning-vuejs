new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('clicou')
        },
        guardarValor(e) {
            this.valor = e.target.value
        }
    }
})
