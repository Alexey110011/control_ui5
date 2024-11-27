/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/Worklist",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/Object",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/NotFound",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/Browser",
	"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.ControlTask_Leshkovich_Alexey.view."
	});

	sap.ui.require([
		"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/WorklistJourney",
		"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/ObjectJourney",
		"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/NavigationJourney",
		"zjblessons/ControlTask_Leshkovich_Alexey/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});