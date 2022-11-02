const isEven = (value) => {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const app = Vue.createApp({
  data() {
    return {
      log: [],
      playerHealth: 100,
      monsterHealth: 100,
      battleStatus: null,
      round: 0,
      canSpecialAttack: false,
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

    round(newWatchedValue, oldWatchedValue) {

      console.log(isEven(newWatchedValue), isEven(oldWatchedValue), 'VALUES');
      if (
        this.round === 3
      ) {
        this.canSpecialAttack = true;
      } else {
        this.canSpecialAttack = false;
      }
      console.log(this.round);
    },
  },
  computed: {
    // monsterHealthString() {
    //   return this.monsterHealth.toString() + '%';
    // },

    // playerHealthString() {
    //   return this.playerHealth.toString() + '%';
    // },

    ////ainda maior outsourcing de código (tiramos a lógica lá do html, para colocar nesse app vue, javascript)...
    monsterBarStyles() {
      return { width: this.monsterHealth.toString() + '%' };
    },

    playerBarStyles() {
      return { width: this.playerHealth.toString() + '%' };
    },
  },
  methods: {
    attack() {
      const playerDamage = Math.random().toFixed(2) * 10;
      const monsterDamage = Math.random().toFixed(2) * 10;
      this.playerHealth = this.playerHealth - playerDamage;
      this.monsterHealth = this.monsterHealth - monsterDamage;
      if (this.round !== 3) {
        this.round += 1;
      }
      this.logFight(playerDamage, monsterDamage);
    },

    specialAttack() {
      const playerDamage = Math.random().toFixed(2) * 10;
      const monsterDamage = Math.random().toFixed(2) * 20;

      this.playerHealth = this.playerHealth - playerDamage;
      this.monsterHealth = this.monsterHealth - monsterDamage;
      this.canSpecialAttack = !this.canSpecialAttack;
      this.round = 0;
      this.logFight(monsterDamage, playerDamage);
    },

    heal() {
      const healAmount = Math.random() * 10;
      if (this.playerHealth < 100 && this.playerHealth + healAmount < 100) {
        this.playerHealth = this.playerHealth + healAmount;
        if (this.round !== 3) {
          this.round += 1;
        }
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
        this.round = 0;
      } else {
        return;
      }
    },
    resetGame() {
      this.battleStatus = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    logFight(playerDamage, monsterDamage, amountHealed = 0) {
      this.log.push({
        count: Math.random(),
        playerDamage: playerDamage,
        monsterDamage: monsterDamage,
        amountHealed: amountHealed,
      });
    },
  },
});
app.mount('.game');
