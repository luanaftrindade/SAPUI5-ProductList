sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controllers.App",
      {
        onOpenDetailsDialog: function () {
          this.getOwnerComponent().openDetailsDialog();
        },
      }
    );
  }
);
