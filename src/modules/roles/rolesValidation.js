import {  celebrate, Segments, Joi } from "celebrate"

class RoleValidation {
    constructor() {
        this.celebrate = celebrate({ reqContext: true }, { convert: true})
    }
}