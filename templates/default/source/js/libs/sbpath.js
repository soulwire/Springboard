
/**
 * Detect the location of Springboard based on
 * the default template path.
 */

parts = window.location.pathname.split('/');
parts.splice(parts.indexOf('templates'));

items = document.getElementsByClassName('sbpath');

SB_PATH = parts.join('/');

for (var i = 0, n = items.length; i < n; i++) {
	items[i].innerHTML = SB_PATH;
}