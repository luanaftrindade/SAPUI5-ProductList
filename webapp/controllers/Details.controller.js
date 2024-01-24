sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  function (Controller, UIComponent) {
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
    });
  }
);
