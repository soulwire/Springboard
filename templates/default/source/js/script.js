var Project = (function() {

	var message = 'Debug = ${DEBUG};';

	return {

		init: function() {

			var container = document.getElementById('message');
			container.innerHTML = message.replace(/\${DEBUG}/g, DEBUG);
		}
	};
	
})();