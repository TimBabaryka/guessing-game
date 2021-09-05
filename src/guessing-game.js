class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.max = max;
       this.min = min;
      
    }

    guess() {
   Math.round((this.min+this.max)/2);
     
     
    }

    lower() {
        
    }

    greater() {
      


    }
}

module.exports = GuessingGame;
