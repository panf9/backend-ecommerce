export class OrderInterface {
    getAll() {}
    getById(id) {}
    getById(id, user_id) {}
    create(body) {}
    update(id, body) {} 
    delete() {}
}

export class OrderPasswordInterface {
    hashPassword(password) {}
    validatePassword(passwordHash, password) {}
}