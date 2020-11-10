const {validationResult} = require('express-validator');


exports.sum = (req, res, netx) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        
        const result = valueOne + valueTwo;
       
        res.status(201).json({message:"sum success.", data: { result } });

    } catch (e) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;

    }
};

exports.subtraction = (req, res, netx) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        
        const result = valueOne - valueTwo;
       
        res.status(201).json({message:"subtraction success.", data: { result } });

    } catch (e) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;

    }
};

exports.multiplication = (req, res, netx) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;

        const result = valueOne * valueTwo;

        res.status(201).json({message:"multiplication success.", data: { result } });

    } catch (e) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;

    }
};

exports.division = (req, res, netx) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    try {
        const valueOne = +req.body.valueOne;
        const valueTwo = +req.body.valueTwo;
        if(valueTwo!=0){
            const result = valueOne / valueTwo;

            res.status(201).json({message:"division success.", data: { result } });
            
        } else res.status(201).json({ message: "division by zero exception", data: {} });
        

    } catch (e) {
        const error= new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;

    }
};

