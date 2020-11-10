const express = require("express");
const {body} = require("express-validator");
const operationsController = require("../controllers/operations.controller");
const route = express.Router();

route.post(
    "/sum",
    [
        body("valueOne")
            .exists()
            .withMessage("El valorOne es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorOne debe númerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valorTwo es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorTwo debe númerico.")
            .trim()
            .escape()
    ],
    operationsController.sum

);

route.post(
    "/subtraction",
    [
        body("valueOne")
            .exists()
            .withMessage("El valorOne es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorOne debe númerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valorTwo es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorTwo debe númerico.")
            .trim()
            .escape()
    ],
    operationsController.subtraction

);

route.post(
    "/multiplication",
    [
        body("valueOne")
            .exists()
            .withMessage("El valorOne es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorOne debe númerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valorTwo es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorTwo debe númerico.")
            .trim()
            .escape()
        
    ],
    operationsController.multiplication

);

route.post(
    "/division",
    [
        body("valueOne")
            .exists()
            .withMessage("El valorOne es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorOne debe númerico.")
            .trim()
            .escape(),
        body("valueTwo")
            .exists()
            .withMessage("El valorTwo es requerdo.")
            .matches(/^[0-9]+$/,"i")
            .withMessage("El valorTwo debe númerico.")
            .trim()
            .escape()
        
    ],
    operationsController.division

);

module.exports = route;