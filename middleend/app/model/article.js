'use strict';

module.exports = app => {
    const {INTEGER, DATE, STRING} = app.Sequelize;
    const Article = app.model.define('article', {
        id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: STRING(30), allowNull: false},
        introduction: STRING(500),
        content: STRING(10000),
        created_at: DATE,
        updated_at: DATE,
        view_count: INTEGER,
        type_id: INTEGER
    }
    );

    Article.associate = function () {
        app.model.Article.belongsTo(app.model.Type, {as: 'type', foreignKey: 'type_id'});
    }

    Article.findById = async function (id) {
        return await this.findOne({
            where: {
                id: id
            }
        });
    }

    Article.findByTypeId = async function (id) {
        return await this.findAll({
            where: {
                type_id: id
            }
        });
    }

    return Article;
};