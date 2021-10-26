# Umoja Design System Icons Library

[npm package](https://www.npmjs.com/package/umoja-icons)

## Exporting from Figma
Icons are exported from Figma using the [figma-export](https://github.com/marcomontalbano/figma-export) package suite. You can configure which Figma file to export from by setting the file ID in .env.
Additional export options are set in figma.config.js including which pages in the file to export from and SVGO optimization.

## CSS Color Variable
Each icon has a default set color of #000. You can override this color and set it to the [currentColor](https://css-tricks.com/currentcolor/) CSS variable by first running `npm run build` and then `svgo -f ./Icons`. This will make it so the color of the icon is inherited from the parent element.
