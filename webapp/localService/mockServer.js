sap.ui.define(
  ["sap/ui/core/util/MockServer", "sap/base/util/UriParameters"],
  function (MockServer, UriParameters) {
    "use strict";

    return {
      init: function () {
        // create the mock server
        var mockServer = new MockServer({
          rootUri: "https://services.odata.org/Northwind/Northwind.svc/",
        });

        var uriParamenters = new UriParameters(window.location.href);

        // configure mock server with a delay
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: uriParamenters.get("serverDelay") || 500,
        });

        // simulate the server here
        // add : , path + "/mockdata/productListData.json" - to fetch the json 
        var path = "../localService";
        mockServer.simulate(path + "/metadata.xml");

        // start mock server
        mockServer.start();
      },
    };
  }
);
