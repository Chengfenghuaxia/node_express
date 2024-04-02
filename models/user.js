// models/user.js
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // 模拟数据库中的用户数据
    static findAll() {
        return [
            new User(1, 'Alice', 'alice@example.com'),
            new User(2, 'Bob', 'bob@example.com'),
        ];
    }
}

module.exports = User;
