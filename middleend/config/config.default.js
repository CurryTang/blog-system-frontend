/* eslint valid-jsdoc: "off" */

'use strict';

// /**
//  * @param {Egg.EggAppInfo} appInfo app info
//  */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582521425200_8346';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  userConfig.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'password',
      // database
      database: 'webblog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  
  userConfig.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'webblog'
  };


  config.security = {
　　　csrf: {enable: false},
　　　domainWhiteList: [ '*' ]
  }

  return {
    ...config,
    ...userConfig,
  };
};
