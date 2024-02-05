sap.ui.define([], function () {
  "use strict";

  return {
    discontinuedStatus: function (discontinued) {
      console.log("Discontinued:", discontinued);
      return discontinued ? "redStatus" : "greenStatus";
    },
  };
});
