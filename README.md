# Springboard

Springboard helps you setup web projects in seconds and easily manage concatenation, minification and compilation of scripts and styles.

# Blocks

Blocks tell Springboard what to do with your scripts and styles when you build. Just tell it to **concat**, **minify** or **compile** and specify an output:

	<!-- sb: minify css/styles.min.css -->
		[any number of linked styles]
	<!-- end -->

The output path serves as the block ID, so you can specify as many as you like and use the same blocks across multiple pages.

You can also use the **show** and **hide** commands to rewrite code during the build process:

	// sb: hide
	var DEBUG = true;
	// sb end

Or conversely:

	/* sb: show
	var DEBUG = false;
	sb: end */

# Installation

	$ git clone git@github.com:soulwire/Springboard.git Springboard
	$ python springboard install

### Setup a new project

Once Springboard is installed, setting up a new project is easy

	$ cd /YourWorkspace/NewProject/
	$ springboard init

# Templates

You can define any number of project templates by dropping them into Springboard's templates folder. To use them, simply specify their name when you **init** a project

	$ springboard init custom-template

### Build

From within a project directory, invoke a build like so

	$ springboard build

To see all avaiable commands and options, just type

	$ springboard help

And you can always use the **sb** alias for faster typing

	$ sb build

## Configuration

The project template includes a small config file (.sbconfig), which allows you to specify default build settings for the project, such as the source and deploy directories and the Closure Compiler compilation level.

## Sublime Text Build System

To use Springboard as a Sublime Text build system, create a file called **Springboard.sublime-build** containing the following

{
	"cmd": ["python", "~/local/springboard/springboard", "build"],
	"working_dir": "${project_path:${folder}}"
}

and save it in the directory

~/Library/Application Support/Sublime Text 2/Packages/User/


