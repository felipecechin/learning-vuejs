var app = new Vue({
    el: '#desafio',
    data: {
        nome: 'Felipe',
        idade: 22,
        imgSrc: 'https://st.depositphotos.com/1780879/3816/i/600/depositphotos_38166573-stock-photo-trees-with-sunbeams.jpg'
    },
    methods: {
        saudacao: function () {
            return 'Boa semana'
        },
        getRandom() {
            return Math.random();
        }
    }
})
