sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel"],function(t,o){"use strict";return t.extend("sap.ui.walkthrough.Component",{metadata:{rootView:{viewName:"sap.ui.demo.walkthrough.views.ProductList",type:"XML",async:true,id:"product_list"}},init:function(){t.prototype.init.apply(this,arguments);var e=new o;e.loadData("https://services.odata.org/northwind/northwind.svc/Products?$format=json");this.setModel(e,"products")}})});
//# sourceMappingURL=component.js.map