sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controllers.ProductList", {
      onShowProductDetails: function (event) {
        var item = event.getParameter("listItem");
        var productName = item.getBindingContext("products").getProperty("ProductName");        alert("Price: 20€");
        MessageToast.show("Selected Product: " + productName);
      },
    });
  }
);
