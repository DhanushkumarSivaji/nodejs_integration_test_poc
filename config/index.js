var config = {
    "development": {
        mongoURI: "mongodb://Dhanush1995:S*dk1995@ds133340.mlab.com:33340/node_unit_auth",
        jwtSecret: "secret"
      }
      ,
    "test": {
        mongoURI: "mongodb://Dhanush1995:S*dk1995@ds129670.mlab.com:29670/node_unit_auth_test",
        jwtSecret: "secretTest"
      } 
  };
    module.exports = config;