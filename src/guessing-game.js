class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.max = max;
       this.min = min;
      
    }

    guess() {
   this.try=Math.round((this.min+this.max)/2);
   return this.try;
     
     
    }

    lower() {
        this.max = this.try;
    
    }

    greater() {
      this.min = this.try;


    }
}

module.exports = GuessingGame;
