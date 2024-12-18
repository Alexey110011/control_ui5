sap.ui.define([
		"zjblessons/ControlTask_Leshkovich_Alexey/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.ControlTask_Leshkovich_Alexey.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);