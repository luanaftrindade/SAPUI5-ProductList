sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";
    alert("UI5 is ready.");

    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);
