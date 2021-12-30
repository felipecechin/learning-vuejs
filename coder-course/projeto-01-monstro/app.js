new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult() {
            return this.playerLife === 0 || this.monsterLife === 0
        },
        playerWon() {
            return this.monsterLife === 0
        },
        monsterWon() {
            return this.playerLife === 0
        }
    },
    methods: {
        randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        hurt(prop, value, source, target, cls) {
            this[prop] -= value
            this.registerLog(source + ' atacou ' + target + ' em ' + value, cls)
        },
        strike() {
            const monsterAttack = this.randomIntFromInterval(7, 9)
            const playerAttack = this.randomIntFromInterval(5, 7)
            this.hurt('playerLife', monsterAttack, 'Monstro', 'Jogador', 'monster')
            this.hurt('monsterLife', playerAttack, 'Jogador', 'Monstro', 'player')
        },
        especialAttack() {
            const monsterAttack = this.randomIntFromInterval(7, 9)
            const playerAttack = this.randomIntFromInterval(10, 12)
            this.hurt('playerLife', monsterAttack, 'Monstro', 'Jogador', 'monster')
            this.hurt('monsterLife', playerAttack, 'Jogador', 'Monstro', 'player')
        },
        cure() {
            if (this.playerLife < 100) {
                const monsterAttack = this.randomIntFromInterval(8, 9)
                const cureLife = this.randomIntFromInterval(10, 11)
                this.hurt('playerLife', monsterAttack, 'Monstro', 'Jogador', 'monster')
                this.heal(cureLife)
            }
        },
        heal(cureLife) {
            this.playerLife += cureLife
            this.registerLog('Jogador se curou em ' + cureLife, 'player')
        },
        giveUp() {
            this.playerLife = 100;
            this.monsterLife = 100;
            this.running = false;
            this.logs = [];
        },
        startGame() {
            this.playerLife = 100;
            this.monsterLife = 100;
            this.running = true;
            this.logs = [];
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls})
        }
    },
    watch: {
        playerLife() {
            if (this.playerLife <= 0) {
                this.playerLife = 0
                this.running = false
            }
            if (this.playerLife > 100) {
                this.playerLife = 100
            }
        },
        monsterLife() {
            if (this.monsterLife <= 0) {
                this.monsterLife = 0
                this.running = false
            }
        }
    }
})
