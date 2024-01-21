sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";
  alert("UI5 is ready.");

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.views.ProductList",
  }).then(function (view) {
    view.placeAt("content");
  });
});
