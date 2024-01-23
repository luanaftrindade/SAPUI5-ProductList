sap.ui.define(["../localService/mockServer"], function (mockServer) {
  "use strict";

  // initialize the mock server
  mockServer.init();

  // initialize the embedded component on the HTML page
  sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
