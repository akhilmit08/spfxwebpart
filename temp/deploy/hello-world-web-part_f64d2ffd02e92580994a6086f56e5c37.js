define("382fef19-dc59-4e0c-bba0-5a5ef4754e36_0.0.1",["@microsoft/sp-core-library","@microsoft/sp-webpart-base","HelloWorldWebPartStrings","@microsoft/sp-http"],function(e,t,n,o){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(2);n(3);var i={helloWorld:"helloWorld_25dde437",container:"container_25dde437",row:"row_25dde437",column:"column_25dde437","ms-Grid":"ms-Grid_25dde437",title:"title_25dde437",subTitle:"subTitle_25dde437",description:"description_25dde437",button:"button_25dde437",label:"label_25dde437",list:"list_25dde437",listItem:"listItem_25dde437"},l=i,d=n(8),a=function(){function e(){}return e.get=function(){return new Promise(function(t){t(e._items)})},e._items=[{Title:"Mock List",Id:"1"},{Title:"Mock List 2",Id:"2"},{Title:"Mock List 3",Id:"3"}],e}(),s=a,u=n(9),c=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype._getMockListData=function(){return s.get().then(function(e){return{value:e}})},t.prototype._getListData=function(){return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists?$filter=Hidden eq false",u.SPHttpClient.configurations.v1).then(function(e){return e.json()})},t.prototype._renderList=function(e){var t="";e.forEach(function(e){t+='\n    <ul class="'+l.list+'">\n      <li class="'+l.listItem+'">\n        <span class="ms-font-l">'+e.Title+"</span>\n      </li>\n    </ul>"}),this.domElement.querySelector("#spListContainer").innerHTML=t},t.prototype._renderListAsync=function(){var e=this;o.Environment.type===o.EnvironmentType.Local?this._getMockListData().then(function(t){e._renderList(t.value)}):o.Environment.type!=o.EnvironmentType.SharePoint&&o.Environment.type!=o.EnvironmentType.ClassicSharePoint||this._getListData().then(function(t){e._renderList(t.value)})},t.prototype.render=function(){this.domElement.innerHTML='\n<div class="'+l.container+'">\n<div id="spListContainer"/>\n</div>\n',this._renderListDataAsync()},t.prototype._getListCustomerData=function(){return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+"/_api/web/lists/GetByTitle('Customers')/Items",u.SPHttpClient.configurations.v1).then(function(e){return e.json()})},t.prototype._renderListCustomer=function(e){var t="<table width='100%' border=1>";t+="<thead><th>ID</th><th>Name</th><th>Address</th><th>Type</th><th>Author</th>\n<th>Lookup</th></thead><tbody>",e.forEach(function(e){t+="<tr><td>"+e.CustomerID+"</td>\n<td>"+e.CustomerName+"</td>\n<td>"+e.CustomerAddress+"</td>\n<td>"+e.CustomerType+"</td>\n</tr>"}),t+="</tbody></table>",this.domElement.querySelector("#spListContainer").innerHTML=t},t.prototype._renderListDataAsync=function(){var e=this;this._getListCustomerData().then(function(t){e._renderListCustomer(t.value)})},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return o.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:d.PropertyPaneDescription},groups:[{groupName:d.BasicGroupName,groupFields:[Object(r.PropertyPaneTextField)("description",{label:d.DescriptionFieldLabel}),Object(r.PropertyPaneTextField)("test",{label:"Multi-line Text Field",multiline:!0}),Object(r.PropertyPaneCheckbox)("test1",{text:"Checkbox"}),Object(r.PropertyPaneDropdown)("test2",{label:"Dropdown",options:[{key:"1",text:"One"},{key:"2",text:"Two"},{key:"3",text:"Three"},{key:"4",text:"Four"}]}),Object(r.PropertyPaneToggle)("test3",{label:"Toggle",onText:"On",offText:"Off"})]}]}]}},t}(r.BaseClientSideWebPart);t.default=p},function(e,n){e.exports=t},function(e,t,n){var o=n(4),r=n(6);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)r.loadStyles(o[i][1],!0);o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,'.helloWorld_25dde437 .container_25dde437{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_25dde437 .row_25dde437{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:"[theme:white, default: #ffffff]";background-color:"[theme:themeDark, default: #005a9e]";padding:20px}.helloWorld_25dde437 .row_25dde437:after,.helloWorld_25dde437 .row_25dde437:before{display:table;content:"";line-height:0}.helloWorld_25dde437 .row_25dde437:after{clear:both}.helloWorld_25dde437 .column_25dde437{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .helloWorld_25dde437 .column_25dde437{float:left}[dir=rtl] .helloWorld_25dde437 .column_25dde437{float:right}.helloWorld_25dde437 .column_25dde437 .ms-Grid_25dde437{padding:0}@media (min-width:640px){.helloWorld_25dde437 .column_25dde437{width:83.33333333333334%}}@media (min-width:1024px){.helloWorld_25dde437 .column_25dde437{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .helloWorld_25dde437 .column_25dde437{left:16.66667%}[dir=rtl] .helloWorld_25dde437 .column_25dde437{right:16.66667%}}@media (min-width:640px){[dir=ltr] .helloWorld_25dde437 .column_25dde437{left:8.33333%}[dir=rtl] .helloWorld_25dde437 .column_25dde437{right:8.33333%}}.helloWorld_25dde437 .title_25dde437{font-size:21px;font-weight:100;color:"[theme:white, default: #ffffff]"}.helloWorld_25dde437 .description_25dde437,.helloWorld_25dde437 .subTitle_25dde437{font-size:17px;font-weight:300;color:"[theme:white, default: #ffffff]"}.helloWorld_25dde437 .button_25dde437{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d4]";border-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.helloWorld_25dde437 .button_25dde437 .label_25dde437{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.helloWorld_25dde437 .list_25dde437{margin:10;padding:10;line-height:50px;list-style-type:none;-webkit-box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_25dde437 .list_25dde437,.helloWorld_25dde437 .listItem_25dde437{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box}.helloWorld_25dde437 .listItem_25dde437{vertical-align:center;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;padding:9px 28px 3px;position:relative}',""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var l=e[r];"number"==typeof l[0]&&o[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),t.push(l))}},t}},function(e,t,n){"use strict";(function(e){function n(e){var t=P();e();var n=P();w.perf.duration+=n-t}function o(e,t){void 0===t&&(t=!1),n(function(){var n=Array.isArray(e)?e:m(e);void 0===x&&(x=b());var o=w.runState,r=o.mode,i=o.buffer,l=o.flushTimer;t||1===r?(i.push(n),l||(w.runState.flushTimer=d())):a(n)})}function r(e){w.loadStyles=e}function i(e){w.runState.mode=e}function l(){n(function(){var e=w.runState.buffer.slice();w.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&a(t)})}function d(){return setTimeout(function(){w.runState.flushTimer=0,l()},0)}function a(e,t){w.loadStyles?w.loadStyles(h(e).styleString,e):x?g(e,t):y(e)}function s(e){w.theme=e,p()}function u(e){void 0===e&&(e=3),3!==e&&2!==e||(c(w.registeredStyles),w.registeredStyles=[]),3!==e&&1!==e||(c(w.registeredThemableStyles),w.registeredThemableStyles=[])}function c(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function p(){if(w.theme){for(var e=[],t=0,n=w.registeredThemableStyles;t<n.length;t++){var o=n[t];e.push(o.themableStyle)}e.length>0&&(u(1),a([].concat.apply([],e)))}}function f(e){return e&&(e=h(m(e)).styleString),e}function h(e){var t=w.theme,n=!1;return{styleString:(e||[]).map(function(e){var o=e.theme;if(o){n=!0;var r=t?t[o]:void 0,i=e.defaultValue||"inherit";return t&&!r&&console,r||i}return e.rawString}).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,o=void 0;o=S.exec(e);){var r=o.index;r>n&&t.push({rawString:e.substring(n,r)}),t.push({theme:o[1],defaultValue:o[2]}),n=S.lastIndex}t.push({rawString:e.substring(n)})}return t}function y(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),o=h(e),r=o.styleString,i=o.themable;n.type="text/css",n.appendChild(document.createTextNode(r)),w.perf.count++,t.appendChild(n);var l={styleElement:n,themableStyle:e};i?w.registeredThemableStyles.push(l):w.registeredStyles.push(l)}function g(e,t){var n=document.getElementsByTagName("head")[0],o=w.registeredStyles,r=w.lastStyleElement,i=r?r.styleSheet:void 0,l=i?i.cssText:"",d=o[o.length-1],a=h(e).styleString;(!r||l.length+a.length>T)&&(r=document.createElement("style"),r.type="text/css",t?(n.replaceChild(r,t.styleElement),t.styleElement=r):n.appendChild(r),t||(d={styleElement:r,themableStyle:e},o.push(d))),r.styleSheet.cssText+=f(a),Array.prototype.push.apply(d.themableStyle,e),w.lastStyleElement=r}function b(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var _=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var x,v="undefined"==typeof window?e:window,w=function(){var e=v.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=_({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=_({},e,{registeredThemableStyles:[]})),v.__themeState__=e,e}(),S=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,T=1e4,P=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=o,t.configureLoadStyles=r,t.configureRunMode=i,t.flush=l,t.loadTheme=s,t.clearStyles=u,t.detokenize=f,t.splitStyles=m}).call(t,n(7))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=n},function(e,t){e.exports=o}])});