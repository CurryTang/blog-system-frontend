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
		'types', {
			id: {type: INTEGER, primaryKey: true, autoIncrement: true},
			name: STRING(30),
			order: INTEGER(5),
			updated_at: DATE,
			created_at: DATE
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
	await queryInterface.dropTable('types');
  }
};
