const subtraction = require ('./subtraction');
const multiplication = require ('./multiplication');
const division = require ('./division');

class Operation_factory{
    create(type){
        switch (type){
            case 'subtraction':
                return new subtraction();
            case 'multiplication':
                return new multiplication();
            case 'division':
                return new division();
        }

    }
}
module.exports = new Operation_factory;