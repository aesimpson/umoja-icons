## Umoja Design System Icons

# Exporting from Figma
Icons are exported from Figma using the [figma-export](https://github.com/marcomontalbano/figma-export) package suite. You can configure which Figma file to export from by setting the file ID in .env.
Additional export options are set in figma.config.js including which pages in the file to export from and SVGO optimization.

# CSS Color Variable
The [currentColor](https://css-tricks.com/currentcolor/) CSS variable is set as the fill value for each SVG. This makes it so the color of the icon will always be inherited from it's parent element.

# How to run a release
To create a new icon library release, first commit your changes without pushing and then run `npm run release`. This command will build the package by exporting the new icon versions from Figma, running tests to make sure the export was successful, push the changes to github and publish to npm. You should be prompted on what npm version bump the package to.
