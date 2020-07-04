'use strict';

module.exports = app => {
    const {INTEGER, DATE, STRING} = app.Sequelize;
    const Type = app.model.define('type', 
		{
			id: {type: INTEGER, primaryKey: true, autoIncrement: true},
			name: STRING(30),
            order: INTEGER(5),
            updated_at: DATE,
			created_at: DATE
		}
    );

    Type.associate = function () {
        app.model.Type.hasMany(app.model.Article, {as: 'article'});
    }

    return Type;
};