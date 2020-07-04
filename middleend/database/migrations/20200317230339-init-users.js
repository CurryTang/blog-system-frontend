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
		'users', {
			id: {type: INTEGER, primaryKey: true, autoIncrement: true},
			name: {type: STRING(30), allowNull: false, unique: true},
			password: {type: STRING(100), allowNull: false},
			role: {type: STRING(20), allowNull: false},
			created_at: DATE,
			updated_at: DATE
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
   await queryInterface.dropTable('users');
  }
};
