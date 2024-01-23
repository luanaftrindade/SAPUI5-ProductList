sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controllers.NewProductList",

      {
        // NOT WORKING
        onFilterProducts: function (event) {
          var oModel = this.getView().getModel("invoice");

          // Build the filter array
          var aFilters = [];
          var sQuery = event.getParameter("query");

          if (sQuery) {
            // Filter products based on the product name
            aFilters.push(new Filter("ProductName", "Contains", sQuery));
          }
          // Apply the filters to the binding
          var list = this.byId("productsList");
          var binding = list.getBinding("items");
          binding.filter(aFilters);
        },
      }
    );
  }
);
