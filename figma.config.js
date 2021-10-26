require("dotenv").config();
const svgo = require('@figma-export/transform-svg-with-svgo')
const fileId = process.env.FILE_ID;

const outputters = [
    require("@figma-export/output-components-as-svg")({ output: "./" })
];
  
/** @type {import('svgo').PluginConfig[]} */

const outlineSVGOConfig = [
    { removeDimensions: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true}, 
    { removeMetadata: true },
    { cleanupAttrs: true },
    { removeEmptyAttrs: true },
    { mergePaths: true },
    { sortAttrs: true },
    { removeTitle: true },
    { removeDesc: true },
    { cleanupIDs: true }
];



/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
    commands: [
        [ 
            "components", {
                fileId,
                onlyFromPages: ["Icons"],
                transformers: [svgo({ multipass: true, full: true, plugins: outlineSVGOConfig })],
                outputters,
            },
        ],
    ],
};