
/**
 * Simple Logger class for debugging
 */
var Logger = function() {
	
}

/**
 * Prints a messages or object to the console
 * @param {...*} args The message(s) to log
 */
Logger.debug = function( args ) {
	
	if( typeof( window.console ) != "undefined" ) {
		window.console.log( "DEBUG:", arguments );
	}
}