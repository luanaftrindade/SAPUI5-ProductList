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
      },
    });
  }
);
