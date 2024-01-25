sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controllers.Details", {
      onInit: function () {
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router
          .getRoute("details")
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (event) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              event.getParameter("arguments").invoicePath
            ),
          model: "invoice",
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
    });
  }
);
