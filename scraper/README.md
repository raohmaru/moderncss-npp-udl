# Tools
The tools found here are used to scrape the description of CSS properties from https://developer.mozilla.org.

## mdn-css-list.txt
List of all CSS properties listed at https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Other listing: https://www.w3.org/Style/CSS/all-properties.en.html

## get-properties.js
Reads the list of CSS properties (mdn-css-list.txt) and gets the meta description from the related link.
Writes the output to css-complete.txt.

## create-api.js
Creates Modern CSS API file (css-api.txt) from css-complete.txt.