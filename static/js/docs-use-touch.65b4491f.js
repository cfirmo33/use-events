(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/useTouch.mdx":function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return p});var r=e("./node_modules/react/index.js"),o=e.n(r),u=e("./node_modules/@mdx-js/tag/dist/index.js"),i=e("./node_modules/docz/dist/index.m.js"),a=e("./src/index.ts");function c(n){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function y(n){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,t){return(d=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var p=function(n){function t(n){var e;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,y(t).call(this,n))).layout=null,e}var e,r,c;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&d(n,t)}(t,o.a.Component),e=t,(r=[{key:"render",value:function(){var n=this.props,t=n.components,e=f(n,["components"]);return o.a.createElement(u.MDXTag,{name:"wrapper",components:t},o.a.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"usetouch"}},"useTouch"),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { useTouch } from 'use-events';\n")),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"const Example = () => {\n  const [isTouched, bind] = useTouch();\n\n  return (\n    <div {...bind}>\n      You are {isTouched ? 'touching' : 'not touching'} this div\n    </div>\n  );\n};\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgFyOAYEsNpyHxeQ3RNdpPTgARyH9AV7U1c0ULlBVzXaO0NXYaDNB8ZDjUIgABGAiBEAZUEBYUYBIgNUF0VFjlOAAvZwCESbF2G4cj1iiARnlQK52gABnYZMZiwdp9xrGZOxYWdZIAFmU9gADZlNU9YwBAgAxH1oESWT-GcQ5EUdTB2AABSEfglkYn44A0xETJrMyaGcCA-MudgAEYdLU-RwS46geIAQTmUT2EjaDEOgdBw3YeROVEsRUpjGR2FRYSYG4YBDwEoTsXkbda2ADKoCy4IADJWvGRJ5koZompa8xuEG-UwFCLie1Qdp2AAfg2TLw0jPKrj68MYprKQZGrd8zFhMjMDAMIoCmBb8sKtakpXGsLGAY7uAK4BVwsbipgAbVseDQkQ7Ilg8VQAF0UryOCELwBaHsnMc-nMaNLtrRNiuAHBEZ-jA6rB2GAE0VlcLpyLe4G8xm9oIg-mxZ0m2SfimYmMrJ5CJlsY42DRutd1kMH31h-RVp3c7NrMb8QAw8hJFUbAcAILQKBA_QGB2h1oL2g6pn8GCYASqU2G6aj3TQyRAfVmJWBgEWIxU1UXSwXDyOOGB9tCQ6QjsQH7CgWJtl1cJ8mc7XUM9Z3XZ2D2Ja4Y3RbN7bLbIhXbaVx3VfM048hygiPT12CE96OATbUf05agm27YdlXAYACV-DJk5o1PS_LgRs-wXPI_lgvY-L2D9UGGAXMofJxsrnW_fbzvu975j6_Di2rejwvlad2D3sQ_vfbToGSfH_0BaFleDc18fxbgLAgN0UCDHAnCyKMOOgylFOiKVc2zCe1Wd6NlKFquZ71i8SgKVQNSrtXNQDugNtSjBkqlMK18CA4GAbBc8RsaB5VuuwVglAuDm1hkAzuABVGYVxIyQK1DAzu8D9BIIKqg9B6xVr_WQfdGsT9XpwBfjAJYsECAsNoewKBOBAaCSyJGfaUBYKflio9eKUxkY5DEvQzBqBYEwFASMcBBCrg8IUaQxBJ12EsMjGiRknJ_61iwYDXB-DCHmmIYDTRBByElTHLooRIijHyAfjWLoBBIbsCYSw76f1zauNinnFu9spj6w1kbc2m9MIrxdm7IOXtQ6m33ofbQx8ZZn0guwS-KsoG3zNPfWKT9_bxM9iHN-6wuhgDUUQ8UYBdQeHUFsAgjAS6WH1AAGUvAxfQYgjHUDiYHMpmBzFXA0Qg2xJ1KHoDMJyD-39f60LuusRhthfH2I4REmAXCeF8IIAIpxMBRGcXEagHijFAYnGUW_MK4yyEnVkbWJ-6U-jhimMhMSVS3GwwgM0SMvQBBvPYAAQiGqge2UB2DtRBQCt5HwQKuDQHAAh4tsZnjjm0zp3Try2Lyo82GOitl6PREcjBsM9ioEGe7YZMACHHM5tQ75RYzktk7qEGYNyxkkImXY_FzKeIvMBa6D54MwBMosL81KsLXSgrEuChIUKOrAulTQeFNBEVnJRfsqSY4MXtK6VeMheKwaEsNrSw59Lazcxyky3ZcCwBgGadDWGN1lkwwsIeUIOKcCaRsR02woEoztAubBK5E1PKdzDZa2GnrvW-omf61E6QBBPhDTAdlql2BpvZccsGHivGuvEu62ssaTxdEYkbP1Abk2psjWAzNaao1kvJbxI8ZaGLlyrUml0Kbg1spmA2_t0arXNpykYiwz0BkB2pcHTAv11i5vcRDAQ5gfFbN-gEtxwTFahNVlShJIcolKEFjEwGGc8h7wlqkqWegwIQStjkuweSq531fG44p6dE52DEu_bxX9hC_yMXy6g577gQJqZY0DNi7HTNHdQG8UA-ijO4UQqDPKploPQGSmhDyVkSO8bYUDX0NlEfQDsoheyDnxBEUyp-UiUrAdQKB5DPC0P3OQew0jxKDHjopQhpD4GUOQa_dB7RY4uMWpcUy_NK6CNwFI34jAG6zCBM4tumOu6z1fqPcoLeNcjZ1zDiko-0s73nwdI-oTN8X0FLfUU_D-mK4_rmX-msCyJR_3WIxjRehyyCfUdy9jFDMNwfkZ3DpEojYsaIXcrRyDYPULMEsotpyeJMLLgZ4j7CMsXDIylO1MB-G0EEdR0lYj-WSNUAxwBYXrG-ei5Y2LkyONjhy10R8-ijm8ZMbBCLrgov-Zi4FuLBVsu12yCV4RXXGXlZk6u2wbXiNSOU6gVTEcrY7odo5gQOmT3C0BgokeLwx5GavSZ29p970XyvlqfJWp_SPwc0PQGR2-7OY_uscFRBAgCCMV9n7QGKUKI7gN1RVnoFNZg5hnKSXcMMPw89LAbCxwAA1yOWMo8VuSlrGGJGRwQdG6OpS8NgkV2l2PaP4fozImrwPy74OgqgaImsbFXGgj1MA7CUdLA5-w9Gyd5AQeJ5DuHLaueRl56j4dFg-cS4dXz4dSgZsnPBp42TiOlh4_YMtzdQSm5TE22E57sFXvMV23p-ewNL0H3OyfBg5mpiWefTrWzD24ostVgvfE73XMWHc-4IDNWvf8JFA14nXvRPxZC0H4G54MBh-gRH9DUeqE1hw3QvDHumFe6y2OHPeWxIFbJ5Nmj5W6NVZpzDagwftUEATzgJPQWNn5-49NqvqAI_x8G5YxvI3m_40fJJ5XlTl3zbgPnxTZHddqf1yErbluSa7d8tsVwaQAJwGoLbjJIBHn8CZ8efgVx-BAmJFUbwGQLS_nJEyEARj-AGfyNQQ_7B-ByRwG_uSHl1j8HKOQfoMxxpn9-AEoSocJYAYQsAfRr8bZyRKBEg8w8gChwZzQLQT8QRz8BAv8ax-Aog0AgCVBklNAsCLAf8YB5gIwuIIB4Bn8-V-BbN8DwoDIcAAAOHAZMYg2sOgrUK0SIBgpg1g9gkARLVbTedA3AXQSAFIdfTfNJUzS7e6EAWgX0LIQ_Y_M0WgC0WzC0WYGYfgeQBQLmIAA",__position:0,__code:"() => {\n  const [isTouched, bind] = useTouch()\n  return (\n    <div {...bind}>\n      You are {isTouched ? 'touching' : 'not touching'} this div\n    </div>\n  )\n}",__scope:{props:this?this.props:e,useTouch:a.f}},function(){var n=s(Object(a.f)(),2),t=n[0],e=n[1];return o.a.createElement("div",e,"You are ",t?"touching":"not touching"," this div")}))}}])&&l(e.prototype,r),c&&l(e,c),t}()},"./src/index.ts":function(n,t,e){"use strict";var r=e("./node_modules/react/index.js");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){var n=o(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseDown:function(n){return e(!0)},onMouseUp:function(n){return e(!1)}}]};function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(n,t){var e=i(r.useState(!1),2),o=e[0],u=e[1],a=function(e){var r=n.current;null===r||r.contains(e.target)||(u(!0),t(e))},c=function(t){var e=n.current;null===e||e.contains(t.target)||u(!1)};return r.useEffect(function(){return document.addEventListener("mousedown",a),document.addEventListener("mouseup",c),function(){document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",c)}},[t]),[o]};function c(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(){var n=c(r.useState(!1),2),t=n[0],e=n[1];return[t,{onFocus:function(n){return e(!0)},onBlur:function(n){return e(!1)}}]};function f(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var n=f(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseEnter:function(n){return e(!0)},onMouseLeave:function(n){return e(!1)}}]};function A(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(){var n=A(r.useState(0),2),t=n[0],e=n[1],o=A(r.useState(0),2),u=o[0],i=o[1];return[t,u,{onMouseMove:function(n){var t=n.nativeEvent,r=t.offsetX,o=t.offsetY;e(r),i(o)}}]};function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(){var n=d(r.useState(!1),2),t=n[0],e=n[1];return[t,{onTouchStart:function(n){return e(!0)},onTouchEnd:function(n){return e(!1)}}]};e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"d",function(){return l}),e.d(t,"e",function(){return y}),e.d(t,"f",function(){return p})}}]);
//# sourceMappingURL=docs-use-touch.35e8b9c79045e27d22b1.js.map