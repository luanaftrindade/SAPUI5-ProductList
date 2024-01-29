sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, UIComponent, History, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controllers.Details", {
      onInit: function (event) {
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router
          .getRoute("details")
          .attachPatternMatched(this._onObjectMatched, this);

        this._formFragments = {};
        this._showFormFragment("Supplier");
      },
      _onObjectMatched: function (event) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              event.getParameter("arguments").productsPath
            ),
          model: "products",
        });
        var productPath = window.decodeURIComponent(event.getParameter("arguments").productsPath);
        var selectedProduct = this.getView()
          .getModel("products")
          .getProperty("/" + productPath);
        console.log("Selected Product:", selectedProduct);

        var supplierId = selectedProduct.SupplierID;
        console.log(supplierId);
        // Construct the binding path to the specific supplier
        var sPath = "/Suppliers/" + supplierId;

        // Bind the element to the view using the specific path
        this.getView().bindElement({
          path: sPath,
          model: "suppliers",
        });
      },
      onNavigationBack: function () {
        var history = History.getInstance();
        var previousHash = history.getPreviousHash();

        if (previousHash !== undefined) {
          window.history.go(-1);
        } else {
          // this refering this context
          var router = UIComponent.getRouterFor(this);
          router.navTo("mainpage", {}, true);
        }
      },
      markAsDiscontinued: function () {
        this.getOwnerComponent().openDetailsDialog();
      },

      _getFormFragment: function (sFragmentName) {
        var formFragment = this._formFragments[sFragmentName],
          oView = this.getView();

        if (!formFragment) {
          formFragment = Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.views.Supplier",
          });
          this._formFragments[sFragmentName] = formFragment;
        }

        return formFragment;
      },
      _showFormFragment: function (sFragmentName) {
        var supplierPage = this.byId("supplierDetailsPage");

        if (!supplierPage) {
          console.error("Supplier page element not found.");
          return;
        }

        this._getFormFragment(sFragmentName)
          .then(function (oVBox) {
            if (oVBox) {
              supplierPage.insertContent(oVBox);
              console.log("Fragment inserted successfully");
            } else {
              console.error("Fragment content is undefined.");
            }
          })
          .catch(function (error) {
            console.error("Error inserting fragment:", error);
          });
      },
    });
  }
);
