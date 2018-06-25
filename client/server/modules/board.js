const board = {
    id: 1,
    name: "board 1",
    columns: [
        {
            id: 11,
            name: "To do",
            tickets: [
                {id: 101, title: "ticket 1", description: ""},
                {id: 102, title: "ticket 2", description: ""},
                {id: 103, title: "ticket 3", description: ""},
                {id: 104, title: "ticket 4", description: ""},
                {id: 105, title: "ticket 5", description: ""},
              ]
        },
        {
            id: 12,
            name: "Analyze",
            tickets: [
                {id: 201, title: "ticket 1", description: ""},
                {id: 202, title: "ticket 2", description: ""},
                {id: 203, title: "ticket 3", description: ""},
                {id: 204, title: "ticket 4", description: ""},
                {id: 205, title: "ticket 5", description: ""}
            ]
        },
        {
            id: 13,
            name: "In Progress",
            tickets: [
                {id: 301, title: "ticket 1", description: ""},
                {id: 302, title: "ticket 2", description: ""},
                {id: 303, title: "ticket 3", description: ""},
                {id: 304, title: "ticket 4", description: ""},
                {id: 305, title: "ticket 5", description: ""}
            ]
        },
        {
            id: 14,
            name: "Done",
            tickets: [
                {id: 401, title: "ticket 1", description: ""},
                {id: 402, title: "ticket 2", description: ""},
                {id: 403, title: "ticket 3", description: ""},
                {id: 404, title: "ticket 4", description: ""},
                {id: 405, title: "ticket 5", description: ""}
            ]
        },
      {
          id: 15,
          name: "DinDone",
          tickets: [
          {id: 501, title: "ticket 1", description: ""},
          {id: 502, title: "ticket 2", description: ""},
          {id: 503, title: "ticket 3", description: ""},
          {id: 504, title: "ticket 4", description: ""},
          {id: 505, title: "ticket 5", description: ""}
        ]
      },
      {
        id: 16,
        name: "BonBone",
        tickets: [
          {id: 601, title: "ticket 1", description: ""},
          {id: 602, title: "ticket 2", description: ""},
          {id: 603, title: "ticket 3", description: ""},
          {id: 604, title: "ticket 4", description: ""},
          {id: 605, title: "ticket 5", description: ""}
        ]
      },
      {
        id: 17,
        name: "Node",
        tickets: [
          {id: 701, title: "ticket 1", description: ""},
          {id: 702, title: "ticket 2", description: ""},
          {id: 703, title: "ticket 3", description: ""},
          {id: 704, title: "ticket 4", description: ""},
          {id: 705, title: "ticket 5", description: ""}
        ]
      },
      {
        id: 18,
        name: "Success",
        tickets: [
          {id: 801, title: "ticket 1", description: ""},
          {id: 802, title: "ticket 2", description: ""},
          {id: 803, title: "ticket 3", description: ""},
          {id: 804, title: "ticket 4", description: ""},
          {id: 805, title: "ticket 5", description: ""}
        ]
      },
      {
        id: 19,
        name: "Result",
        tickets: [
          {id: 901, title: "ticket 1", description: ""},
          {id: 902, title: "ticket 2", description: ""},
          {id: 903, title: "ticket 3", description: ""},
          {id: 904, title: "ticket 4", description: ""},
          {id: 905, title: "ticket 5", description: ""}
        ]
      },
      {
        id: 20,
        name: "Amazing",
        tickets: [
          {id: 1001, title: "ticket 1", description: ""},
          {id: 1002, title: "ticket 2", description: ""},
          {id: 1003, title: "ticket 3", description: ""},
          {id: 1004, title: "ticket 4", description: ""},
          {id: 1005, title: "ticket 5", description: ""}
        ]
      }
    ]
};

function configBoardModule(app) {

    app.get('/rest/issues-tracker/board/:idBoard', function (req, res) {
        res.send(board);
    });

    app.get('/rest/issues-tracker/ticket/:idTicket', function (req, res) {
        res.send({
            id: parseInt(req.params.idTicket),
            title: "ticket 1", description: ""
        });
    })

}

module.exports.configBoardModule = configBoardModule;
