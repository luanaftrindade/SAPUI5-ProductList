sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend(
      "sap.ui.demo.walkthrough.controllers.DetailsDialog",
      {
        constructor: function (view) {
          this._view = view;
        },
        exit: function () {
          delete this._view;
        },
        open: function () {
          var view = this._view;
          // create the dialog lazily
          if (!view.byId("markAsDiscontinued")) {
            var fragmentController = {
              onCloseYesDialog: function () {
                view.byId("markAsDiscontinued").close();
              },
              onCloseNoDialog: function () {
                view.byId("markAsDiscontinued").close();
              },
            };

            // load asynchronous XML fragment
            Fragment.load({
              id: view.getId(),
              name: "sap.ui.demo.walkthrough.views.ProductDetails",
              controller: fragmentController,
            }).then(function (dialog) {
              // connect the dialog to the root view of the component (models and lifecycle)
              view.addDependent(dialog);
              dialog.open();
            });
          } else {
            view.byId("productDetailsDialog").open();
          }
        },
      }
    );
  }
);
