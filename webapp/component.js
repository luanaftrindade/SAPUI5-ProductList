sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controllers/DetailsDialog",
  ],
  function (UIComponent, JSONModel, DetailsDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        var data = {
          recipient: {
            name: "",
          },
        };

        var model = new JSONModel(data);
        this.setModel(model);

        // to deploy
        var productsJson = this.getModel("products");
        console.log(productsJson);

        var suppliersJson = this.getModel("suppliers");
        console.log(suppliersJson);

        // set dialog - _ is a convention for private methods
        this._detailsDialog = new DetailsDialog(this.getRootControl());

        // create the views based on the url/hash - router settings
        this.getRouter().initialize();
      },

      exit: function () {
        this._detailsDialog.destroy();
        delete this._detailsDialog;
      },

      openDetailsDialog: function () {
        this._detailsDialog.open();
      },
    });
  }
);
