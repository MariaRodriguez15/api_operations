const operation = require('./operations');

class subtraction extends operation{
    constructor(){
        super(+this.valueOne,+this.valueTwo)
        
    }
    calculator(valueOne,valueTwo){
        return sub = (+this.valueOne)-(+this.valueTwo);
    }

}

module.exports=subtraction;