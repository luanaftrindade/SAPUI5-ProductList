sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend(
      "productmanagement.app.controllers.MainTopSection",
      {
        onShowProductDetails: function () {
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
