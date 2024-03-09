const imgDown = require("../app/http/controllers/ImgDown");

function initRoutes(app) {
  app.get("/api/test1",imgDown().imgdownRender) 
  //getgetget
  app.get("/api/test1/*",imgDown().imgdown)  
}

module.exports = initRoutes;
