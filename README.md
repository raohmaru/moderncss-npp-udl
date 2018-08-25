# Modern CSS syntax highlighting for Notepad++ 
Provides syntax highlight and automatic completion for the [new features implemented in CSS](https://cssdb.org/), using Notepad++'s [User Defined Language](http://udl20.weebly.com/).

Current browsers do not support yet all the modern CSS specifications, so you will need to transform it into more compatible CSS using a tool like [PostCSS](https://postcss.org/) and the preset [postcss-preset-env](https://preset-env.cssdb.org/).

## CSS Features Support
- Custom properties
- Custom properties set
- New at-rules (@custom-media, @apply, ...)
- Nesting

## Installation
1. Download UDL file [ModernCSS.xml](https://raw.githubusercontent.com/raohmaru/moderncss-npp-udl/master/ModernCSS.xml).
2. Open Notepad++.
3. Go to "Language > Define your language...".
4. Click on "Import..." button, browse to the location where ModernCSS.xml was saved and open it.
5. Restart Notepad++.

### Usage
Open a CSS file and enable the syntax highlight by selecting "Language > ModernCSS".

(An example file ['test.pcss'](https://raw.githubusercontent.com/raohmaru/moderncss-npp-udl/master/test.pcss) is provided to test the syntax highlighting.)

### Install Auto-completion File
1. Close Notepad++.
2. Download API file [ModernCSS.xml](https://raw.githubusercontent.com/raohmaru/moderncss-npp-udl/master/API/ModernCSS.xml).
3. Move the downloaded file to the "plugins\APIs\" subfolder of the Notepad++ installation folder.
4. Open a CSS file with Notepad++ and check if auto-completion is working by typing the name of a property.

### Theme Colors
The colors of the syntax highlighting for ModernCSS works better with the theme Monokai. If you want to change the colors to fit your theme, you can use the [Used Define Language](http://docs.notepad-plus-plus.org/index.php/User_Defined_Languages) tool in Notepad++ or edit the ModernCSS.xml file.

## License
Released under The MIT License (MIT).
