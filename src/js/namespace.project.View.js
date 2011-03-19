
/**
 * View component of the Model View Controller implementation
 * @param {*} model The model for this view
 * @param {*} controller The controller for this view
 * @param {Object} dom References to DOM objects used in this view
 * @constructor
 */
namespace.project.View = function( model, controller, dom ) {
	
	this._controller = controller;
	this._model = model;
	this._dom = dom;
	
	var self = this;
	
	this._model.onTimeChanged.attach( function() {
		self.updateTime( self._model.getTime() );
	} );
}

/**
 * The message to prefix the current time with
 * @const
 * @type {string}
 */
namespace.project.View.TIME_PREFIX = "The Time Is: ";

/**
 * Updates the current time displayed in the view
 * @param {Date} time The time to display
 */
namespace.project.View.prototype.updateTime = function( time ) {
	this._dom.output.html( namespace.project.View.TIME_PREFIX + time.toString() );
}