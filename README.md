# CSSnext syntax highlighting for Notepad++ 
Provides syntax highlight and automatic completion for [CSSNext](http://cssnext.io/), using Notepad++'s [User Defined Language](http://udl20.weebly.com/).

CSSNext is a PostCSS plugin that transforms new CSS specifications into more compatible CSS.

## Installation
1. Download UDL file [CSSnext.xml](https://raw.githubusercontent.com/raohmaru/cssnext-npp-udl/master/CSSnext.xml).
2. Open Notepad++.
3. Go to "Language > Define your language...".
4. Click on "Import..." button, browse to the location where CSSnext.xml was saved and open it.
5. Restart Notepad++.

### Usage
Open a CSS file and enable the syntax highlight by selecting "Language > CSSnext".

(An example file 'test.css' is provided to test the syntax highlighting.)

### Install Auto-completion File
1. Close Notepad++.
2. Download API file [CSSnext.xml](https://raw.githubusercontent.com/raohmaru/cssnext-npp-udl/master/api/CSSnext.xml).
3. Move the downloaded file to the "plugins\APIs\" subfolder of the Notepad++ installation folder.
4. Open a CSS file with Notepad++ and check if auto-completion is working by typing the name of a property.

## License
Released under The MIT License (MIT).
