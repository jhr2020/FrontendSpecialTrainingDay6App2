/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/cpro/mock/test/MockServer2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});