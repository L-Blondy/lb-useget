"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=useGet;var _react=require("react");function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _iterableToArrayLimit(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,a=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return t}}function _arrayWithHoles(r){if(Array.isArray(r))return r}function useGet(t,n){var a=_slicedToArray((0,_react.useState)(new XMLHttpRequest),1)[0],r=_slicedToArray((0,_react.useState)("[]"),2),e=r[0],o=r[1],i=(0,_react.useCallback)(function(r){var e="string"==typeof r?r:toQuery(r);a.open("GET",t+e,!0),a.setHeaders(n),a.send()},[]);return(0,_react.useEffect)(function(){return a.onload=function(){return o(a.response)}},[]),[e,i,a]}function toQuery(r){var e="?";for(var t in r)e+=t+"="+r[t]+"&";return e.slice(0,e.length-1)}function setHeaders(r){for(var e in r)this.setRequestHeader(e,r[e])}XMLHttpRequest.prototype.setHeaders=setHeaders;