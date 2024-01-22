sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controllers.ProductDetails",
      {
        onShowProductDetails: function () {
            // here to debug
          console.log("VIEW:", this.getView());
          console.log("MODEL:", this.getView().getModel("i18n"));

          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
          var message = oBundle.getText("helloMsg", [sRecipient]);
          MessageToast.show(message);
        },
        onShowMoreDetails: function () {
            this.getOwnerComponent().openDetailsDialog();
        },
      }
    );
  }
);
