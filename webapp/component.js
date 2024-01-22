sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controllers/DetailsDialog",
  ],
  function (UIComponent, JSONModel, ResourceModel, DetailsDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data models
        var data = {
          recipient: {
            name: "UI5",
          },
        };
        var model = new JSONModel(data);
        this.setModel(model);

        // set dialog - _ is a convention for private methods
        this._detailsDialog = new DetailsDialog(this.getRootControl());
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
