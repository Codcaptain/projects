sap.ui.define(["sap/ui/core/mvc/Controller",
"sap/ui/model/Filter",
"sap/ui/model/FilterOperator",
"sap/ui/model/Sorter"],


/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
function (Controller, Filter, FilterOperator, Sorter) {

    "use strict";

    return Controller.extend("com.odataapp.controller.App", {
        onInit: function () {},
onSearchEmp : function (oEvent) {
    var value = oEvent.getParameter("newValue");
    var aFilter = [];
    if (value !== "") {
        var oFilter = new Filter("ShipperName", FilterOperator.Contains, value);
        aFilter.push(oFilter);
    }
    this.getView().byId("idListEmp").getBinding("items").filter(aFilter);

},
sortAsc : function () {
    var oSorter = new Sorter("ShipperName", false);
    this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
},
sortDesc : function () {
    var oSorter = new Sorter("ShipperName", true);
    this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
}



    });
});
