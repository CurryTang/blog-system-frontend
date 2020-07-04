module.exports = app => {
    const {INTEGER, DATE, STRING} = app.Sequelize;
    const User = app.model.define('users', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: STRING(30), allowNull: false, unique: true},
        password: {type: STRING(100), allowNull: false},
        role: {type: STRING(20), allowNull: false},
        updated_at: DATE,
        created_at: DATE
    }
    );

    User.findByName = async function(username) {
        return await this.findAll({
            where: {
                name: username
            }, 
            attributes: ['id', 'name', 'password', 'role']
        });
    }

    return User;
};