export class userInterface {
    getAll() {}
    getById(id) {}
    create(body) {}
    update(id, body) {} 
    delete() {}
}

export class UserPasswordInterface {
    hashPassword(password) {}
    validatePassword(passwordHash, password) {}
}