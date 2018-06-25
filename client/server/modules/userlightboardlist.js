const lightboards = [
  {
    id: 1,
    name: "board 1"
  },
  {
    id: 2,
    name: "board 2"
  }
];

function configUserLightBoardListModule(app) {
  app.get('/rest/issues-tracker/user/:idUser/lightBoard', function (req, res) {
    res.send(lightboards);
  });
}

module.exports.configUserLightBoardListModule = configUserLightBoardListModule;
