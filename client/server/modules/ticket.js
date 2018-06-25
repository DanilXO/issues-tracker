const ticket = {
  id: 101,
  title: "ticket test",
  description: "ticket test description"
};

function configTicketModule(app) {

  app.get('/rest/issues-tracker/ticket/:idTicket', function (req, res) {
    res.send(ticket);
  });

}

module.exports.configTicketModule = configTicketModule;
