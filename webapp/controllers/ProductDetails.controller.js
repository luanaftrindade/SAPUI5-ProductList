sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controllers.ProductDetails",
      {
        onShowProductDetails: function () {
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
          var view = this.getView();

          // create the dialog lazily

          if (!this.byId("productDetailsDialog")) {
            // load asynchronous XML fragment
            Fragment.load({
              id: view.getId(),
              name: "sap.ui.demo.walkthrough.views.ProductDetails",
              controller: this,
            }).then(function (dialog) {
              // connect dialog to the root view of this component (including models and lifecycle)
              view.addDependent(dialog);
              // and then open it
              dialog.open();
            });
          } else {
            this.byId("productDetailsDialog").open();
          }
        },
        onCloseDialog: function () {
          this.byId("productDetailsDialog").close();
        },
      }
    );
  }
);
