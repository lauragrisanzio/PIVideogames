//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/server.js');
const { conn } = require('./src/db.js');
const PORT = 3001
const getVideogames = require("./src/controllers/getVideogames.js")
const getGenres = require("./src/controllers/getGenres.js")

// Syncing all the models at once.
conn.sync({ force: false}) //force:true-->se elimina la tabla y se vuelve a crear
  //alter actualiza las tablas
  .then(() => {
  server.listen(PORT, getVideogames(), getGenres(), () => {
    console.log('Port listening at 3001'); // eslint-disable-line no-console
  });
});


//responsabilidad del index es "poner a escuchar el server"