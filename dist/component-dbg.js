sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
      metadata: {
        rootView: {
          viewName: "sap.ui.demo.walkthrough.views.ProductList",
          type: "XML",
          async: true,
          id: "product_list",
        },
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        var model = new JSONModel();
        model.loadData(
          "https://services.odata.org/northwind/northwind.svc/Products?$format=json"
        );
        this.setModel(model, "products");
      },
    });
  }
);
