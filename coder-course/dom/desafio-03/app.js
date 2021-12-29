new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            if (this.valor === 37) {
                return 'Valor Igual'
            } else {
                return 'Valor Diferente'
            }
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});
