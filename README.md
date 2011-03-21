Springboard
=============

Springboard is an ultra minimal JavaScript / CSS and HTML project springboard.

It features a useful ANT build file which can:

* Refactor template files to match your project and namespace
* Compile JavaScript using the [Google Closure Compiler](http://code.google.com/closure/compiler/)
* Minify CSS using the [YUI Compressor](http://developer.yahoo.com/yui/compressor/)
* Generate JavaScript documentation using the [JSDoc Toolkit](http://code.google.com/p/jsdoc-toolkit/)
* Sanitize HTML and inject variables at compile time

Also included is a simple **JavaScript Model-View-Controller (MVC) template** (based on [Alex Netkachov's](http://www.alexatnet.com/content/model-view-controller-mvc-javascript)) which can optionally be used as a basis for your project.

Quick Setup
-------------

To get started, first clone the repository:

	cd /your/workspace
	git clone git@github.com:soulwire/Springboard.git YourProjectName

Run the **setup** task and enter your project's namespace when prompted:
	
	cd YourProjectName
	ant setup
	Enter the full project namespace for this project: com.domain.project

This will refactor the project template to match your namespace. You'll then be given the option to *delete the GIT metadata* and disconnect from the Springboard repository...

###Now Start Coding!

Code is combined and compiled / minified using **blocks**. For example, the following block will compile the contained scripts into a single file (defined in [build.properties](https://github.com/soulwire/Springboard/blob/master/build.properties)) and compile using Closure Compiler. The build script will then replace this block with a reference to the compiled file.

	<!--[BEGIN:JS:SRC]-->
	<script src="js/plugins.js"></script>
	<script src="js/namespace.js"></script>
	<script src="js/namespace.Event.js"></script>
	<script src="js/namespace.project.Controller.js"></script>
	<script src="js/namespace.project.Model.js"></script>
	<script src="js/namespace.project.View.js"></script>
	<script src="js/namespace.project.App.js"></script>
	<!--[END]-->

Scripts and styles embedded outside of blocks will remain untouched to add flexibility, whilst all blocks of the same type in different pages will intelligently be compiled together.

Springboard supports blocks for both third party libraries and project source files in CSS and JavaScript. Libraries used by your project are combined to reduce HTTP requests but not minfied, whereas project source files are.

Springboard uses [externs](http://code.google.com/closure/compiler/docs/api-tutorial3.html) to manage compiled code dependancies and ships with externs for [JQuery 1.5](http://jquery.com/). Externs for other libraries can be generated using [Closure Compiler Externs Extractor](http://www.dotnetwise.com/Code/Externs/index.html).

###Building with ANT

Aside from the **setup** task, the two main ANT tasks used by Springboard are **build** and **jsdoc**.

To compile your project, run **build**:

	ant build

To generate JavaScript documentation, run **jsdoc**:

	ant jsdoc