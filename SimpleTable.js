define((function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=JSON.parse('{"qHyperCubeDef":{"qDimensions":[],"qMeasures":[],"qInitialDataFetch":[{"qWidth":2,"qHeight":500}]}}')},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default={initialProperties:r,definition:{type:"items",component:"accordion",items:{dimensions:{uses:"dimensions",min:1,max:1},measures:{uses:"measures",min:1,max:1}}},support:{snapshot:!0,export:!0,exportData:!1},template:'<table qv-extension>\r\n  <tr>\r\n    <th>{{dimensionTitle}}</th>\r\n    <th>{{measureTitle}}</th>\r\n  </tr>\r\n  <tr ng-repeat="dim in qMatrix">\r\n    <td>{{dim[0].qText}}</td>\r\n    <td>{{dim[1].qText}}</td>\r\n  </tr>\r\n</table>',controller:["$scope",function(e){var t=e.layout.qHyperCube;e.qMatrix=t.qDataPages[0].qMatrix,e.dimensionTitle=t.qDimensionInfo[0].qFallbackTitle,e.measureTitle=t.qMeasureInfo[0].qFallbackTitle}]}}])}));
//# sourceMappingURL=SimpleTable.js.map