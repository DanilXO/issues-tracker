const user = {id: 1, login: 'stub user'};

function configRegistrationModule(app) {

    app.post('/rest/issues-tracker/reg', function (req, res) {
       if (req.body.login !== 'issue') {
        res.send(user);
        console.log('registration success');
      }
      res.status(500).send({uiMessage: 'login already use'});
    });

    app.post('/rest/issues-tracker/reg', function (req, res) {
      res.send(200);
    })
}

module.exports.configRegistrationModule = configRegistrationModule;
