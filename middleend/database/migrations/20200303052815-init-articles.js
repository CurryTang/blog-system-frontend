'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
	const {INTEGER, DATE, STRING} = Sequelize;
	await queryInterface.createTable(
		'articles', {
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
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
	await queryInterface.dropTable('articles');
  }
};
