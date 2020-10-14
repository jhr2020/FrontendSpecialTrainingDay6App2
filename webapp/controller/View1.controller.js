sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.cpro.mock.test.MockServer2.controller.View1", {
		onInit: function () {
			this.getOwnerComponent().getModel("Education").setDeferredGroups(["dummy", "GroupSet"]);
		},

		onUpdateButtonPress: function (oEvent) {
			var oTable = this.getView().byId("EducationTable"),
				aSelectedItems = oTable.getSelectedItems(),
				oEducationModel = this.getView().getModel("Education");

			for (var i = 0; i < aSelectedItems.length; i++) {
				var sNr = aSelectedItems[i].getCells()[0].getTitle(),
					oData = {
						"Beschreibung": aSelectedItems[i].getCells()[1].getValue()
					};

				oEducationModel.update("/EducationSet('" + sNr + "')", oData, {
					headers: {
						"Content-ID": sNr
					},
					groupId: "GroupSet",
					changeSetId: "GroupSet"
				});
			}

			oEducationModel.submitChanges({
				groupId: "GroupSet",
				success: function (oData) {
					console.log(oData);
				},
				error: function (oError) {
					console.log(oError);
				}
			});
		},
	});
});