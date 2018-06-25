const user = {id: 1, login: 'stub user'};

function configAuthorizationModule(app) {

    app.post('/rest/issues-tracker/auth', function (req, res) {

        if (req.body.login === 'issue' &&
            req.body.password === '123') {
            res.send(user);
        }
        res.status(500).send({uiMessage: 'problem login'});
    });

    app.post('/rest/issues-tracker/user', function (req, res) {
        res.send(200);
    })
}

module.exports.configAuthorizationModule = configAuthorizationModule;