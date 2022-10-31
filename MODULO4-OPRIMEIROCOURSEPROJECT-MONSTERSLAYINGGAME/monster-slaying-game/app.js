const app = Vue.createApp({
  data() {
    return {
      log: [],
      playerHealth: 100,
      monsterHealth: 100,
      battleStatus: null,
    };
  },
  watch: {
    playerHealth() {
      if (this.playerHealth < 0 && this.monsterHealth > 0) {
        this.battleStatus = 'lost!';
      }
    },

    monsterHealth() {
      if (this.monsterHealth < 0 && this.playerHealth > 0) {
        this.battleStatus = 'won!';
        
      }
    },
  },
  computed: {
    monsterHealthString() {
      return this.monsterHealth.toString() + '%';
    },

    playerHealthString() {
      return this.playerHealth.toString() + '%';
    },
  },
  methods: {
    attack() {

      const playerDamage = Math.random().toFixed(2) * 10;
      const monsterDamage = Math.random().toFixed(2) * 10;
      this.playerHealth = this.playerHealth - playerDamage;
      this.monsterHealth = this.monsterHealth - monsterDamage;

      this.logFight(playerDamage, monsterDamage);


    },

    specialAttack() {

      const playerDamage = Math.random().toFixed(2) * 10;
      const monsterDamage = Math.random().toFixed(2) * 20;

      this.playerHealth = this.playerHealth - playerDamage;
      this.monsterHealth = this.monsterHealth - monsterDamage;

      this.logFight(monsterDamage, playerDamage);
    },

    heal() {
      const healAmount = Math.random() * 10;
      if (this.playerHealth < 100 && this.playerHealth + healAmount < 100) {
        this.playerHealth = this.playerHealth + healAmount;
        this.logFight(0, 0, healAmount);
      } else {
        alert('You cannot heal more than your max health.');
      }
    },
    surrender() {
      const answer = confirm('Are you sure you want to give up?');
      if (answer) {
        this.battleStatus = 'lost!';
        this.log = [];
      } else {
        return;
      }
    },
    resetGame() {
      this.battleStatus = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },

    logFight(playerDamage, monsterDamage, amountHealed=0) {
      this.log.push(
        {
          count: Math.random(),
          playerDamage: playerDamage,
          monsterDamage: monsterDamage,
          amountHealed: amountHealed
        }
      )
    }
  },
});
app.mount('.game');
