sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controllers.NewProductList",
      {
        onInit: function () {
          var model = new JSONModel();
          model.loadData("./services/productListData.json", {}, false);

          // setting the model on the view
          this.getView().setModel(model, "invoice");
        },
      }
    );
  }
);
