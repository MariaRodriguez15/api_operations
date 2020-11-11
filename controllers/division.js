const operation = require('./operations');

class division extends operation{
    constructor(){
        super(+this.valueOne,+this.valueTwo)
        
    }
    calculator(valueOne,valueTwo){
        return sub = (+this.valueOne)/(+this.valueTwo);
    }
}

module.exports=division;