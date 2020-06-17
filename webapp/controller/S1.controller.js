sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("training.session3.employeedetails.controller.S1", {
		onInit: function() {
			var oTable = this.getView().byId("tab1");
			oTable.setVisible(false);
		},

		onGetData: function() {
			// data obj type ref to odataclass.
			// create obj.
			// obj->read().
			
			var obj = this.getOwnerComponent().getModel();
			
			var sPath = "/emps";
			var oTable = this.getView().byId("tab1");
			
			obj.read(sPath,
			{
			// ls_employee-empid
			success: function(oDataResult){
				// 1.create the json model(class)
				// 2. set data on model
				// 3. set model on the control
				
				// 1.
				var oModelJson = new sap.ui.model.json.JSONModel();
				// 2.
				oModelJson.setData(oDataResult.results);
				// 3.
				
				
				oTable.setModel(oModelJson, "jsonMod");
				
				sap.m.MessageToast.show("Success");
			}
			}
			);
			
			// var oTable = this.getView().byId("tab1");
			oTable.setVisible(true);
		}

	});
});