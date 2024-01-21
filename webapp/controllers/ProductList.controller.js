sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.ProductList", {
      onInit: function () {
        // here we can set the data model on the view
        var data = {
          recipient: {
            name: "UI5",
          },
        };

        var model = new JSONModel(data);
        this.getView().setModel(model);
      },
      onShowProductDetails: function () {
        alert("Price: 20€");
        MessageToast.show("Message from here");
      },
    });
  }
);
