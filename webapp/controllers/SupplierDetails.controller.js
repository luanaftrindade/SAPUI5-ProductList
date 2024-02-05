sap.ui.define(
  ["sap/ui/core/Fragment", "sap/ui/core/mvc/Controller"],
  function (Fragment, Controller) {
    "use strict";

    return Controller.extend(
      "productmanagement.app.controllers.SupplierDetails",

      {
        onInit: function (oEvent) {
          this._formFragments = {};
          this._showFormFragment("Supplier");
        },

        _getFormFragment: function (sFragmentName) {
          var formFragment = this._formFragments[sFragmentName],
            oView = this.getView();

          if (!formFragment) {
            formFragment = Fragment.load({
              id: oView.getId(),
              name: "productmanagement.app.views.Supplier",
            });
            this._formFragments[sFragmentName] = formFragment;
          }

          return formFragment;
        },
        _showFormFragment: function (sFragmentName) {
          var supplierPage = this.byId("supplierDetailsPage");

          this._getFormFragment(sFragmentName)
            .then(function (oVBox) {
              supplierPage.insertContent(oVBox);
              console.log("Fragment inserted successfully");
            })
            .catch(function (error) {
              console.error("Error inserting fragment:", error);
            });
        },
      }
    );
  }
);
