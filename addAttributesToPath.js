'use strict';

exports.name = 'addAttributesToPath';
exports.type = 'visitor';

exports.fn = (root) => {
  return {
    element: {
      enter: (node, parentNode) => {
        if(node.name != 'svg'){
            if(node.attributes['fill'] != undefined && node.attributes['fill'] != '#fff' && node.attributes['fill'] != 'white'){
                node.attributes['fill'] = 'currentColor';
            } 
            if(node.attributes['stroke'] != undefined){
                node.attributes['stroke'] = 'currentColor';
            } 
        }
      },
    },
  };
};