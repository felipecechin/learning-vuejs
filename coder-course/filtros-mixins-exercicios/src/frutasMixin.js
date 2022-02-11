export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
