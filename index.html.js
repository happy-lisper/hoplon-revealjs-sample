if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
var g;
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ca(a){return"string"==typeof a}var da="closure_uid_"+(1E9*Math.random()>>>0),ga=0;function ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ka(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function la(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};function ma(a,b){this.ga=[];this.zb=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.ga[d]=e,c=!1)}}var na={};function pa(a){if(-128<=a&&128>a){var b=na[a];if(b)return b}b=new ma([a|0],0>a?-1:0);-128<=a&&128>a&&(na[a]=b);return b}function qa(a){if(isNaN(a)||!isFinite(a))return sa;if(0>a)return qa(-a).Ea();for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=ta;return new ma(b,0)}var ta=4294967296,sa=pa(0),ua=pa(1),va=pa(16777216);g=ma.prototype;
g.nd=function(){return 0<this.ga.length?this.ga[0]:this.zb};g.gc=function(){if(this.Oa())return-this.Ea().gc();for(var a=0,b=1,c=0;c<this.ga.length;c++)var d=wa(this,c),a=a+(0<=d?d:ta+d)*b,b=b*ta;return a};
g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.jb())return"0";if(this.Oa())return"-"+this.Ea().toString(a);for(var b=qa(Math.pow(a,6)),c=this,d="";;){var e=ya(c,b),f=(c.wc(e.multiply(b)).nd()>>>0).toString(a),c=e;if(c.jb())return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function wa(a,b){return 0>b?0:b<a.ga.length?a.ga[b]:a.zb}g.jb=function(){if(0!=this.zb)return!1;for(var a=0;a<this.ga.length;a++)if(0!=this.ga[a])return!1;return!0};
g.Oa=function(){return-1==this.zb};g.gd=function(a){return 0<this.compare(a)};g.hd=function(a){return 0<=this.compare(a)};g.Qc=function(){return 0>this.compare(va)};g.Rc=function(a){return 0>=this.compare(a)};g.compare=function(a){a=this.wc(a);return a.Oa()?-1:a.jb()?0:1};g.Ea=function(){return this.not().add(ua)};
g.add=function(a){for(var b=Math.max(this.ga.length,a.ga.length),c=[],d=0,e=0;e<=b;e++){var f=d+(wa(this,e)&65535)+(wa(a,e)&65535),h=(f>>>16)+(wa(this,e)>>>16)+(wa(a,e)>>>16),d=h>>>16,f=f&65535,h=h&65535;c[e]=h<<16|f}return new ma(c,c[c.length-1]&-2147483648?-1:0)};g.wc=function(a){return this.add(a.Ea())};
g.multiply=function(a){if(this.jb()||a.jb())return sa;if(this.Oa())return a.Oa()?this.Ea().multiply(a.Ea()):this.Ea().multiply(a).Ea();if(a.Oa())return this.multiply(a.Ea()).Ea();if(this.Qc()&&a.Qc())return qa(this.gc()*a.gc());for(var b=this.ga.length+a.ga.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.ga.length;d++)for(var e=0;e<a.ga.length;e++){var f=wa(this,d)>>>16,h=wa(this,d)&65535,k=wa(a,e)>>>16,l=wa(a,e)&65535;c[2*d+2*e]+=h*l;za(c,2*d+2*e);c[2*d+2*e+1]+=f*l;za(c,2*d+2*e+1);c[2*d+2*e+1]+=
h*k;za(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;za(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new ma(c,0)};function za(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535}
function ya(a,b){if(b.jb())throw Error("division by zero");if(a.jb())return sa;if(a.Oa())return b.Oa()?ya(a.Ea(),b.Ea()):ya(a.Ea(),b).Ea();if(b.Oa())return ya(a,b.Ea()).Ea();if(30<a.ga.length){if(a.Oa()||b.Oa())throw Error("slowDivide_ only works with positive integers.");for(var c=ua,d=b;d.Rc(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=c.Mb(1),f=d.Mb(1),h,d=d.Mb(2),c=c.Mb(2);!d.jb();)h=f.add(d),h.Rc(a)&&(e=e.add(c),f=h),d=d.Mb(1),c=c.Mb(1);return e}c=sa;for(d=a;d.hd(b);){e=Math.max(1,Math.floor(d.gc()/
b.gc()));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);h=qa(e);for(var k=h.multiply(b);k.Oa()||k.gd(d);)e-=f,h=qa(e),k=h.multiply(b);h.jb()&&(h=ua);c=c.add(h);d=d.wc(k)}return c}g.not=function(){for(var a=this.ga.length,b=[],c=0;c<a;c++)b[c]=~this.ga[c];return new ma(b,~this.zb)};g.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.ga.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?wa(this,e-b)<<a|wa(this,e-b-1)>>>32-a:wa(this,e-b);return new ma(d,this.zb)};
g.Mb=function(a){var b=a>>5;a%=32;for(var c=this.ga.length-b,d=[],e=0;e<c;e++)d[e]=0<a?wa(this,e+b)>>>a|wa(this,e+b+1)<<32-a:wa(this,e+b);return new ma(d,this.zb)};function Ba(a,b){null!=a&&this.append.apply(this,arguments)}g=Ba.prototype;g.nb="";g.set=function(a){this.nb=""+a};g.append=function(a,b,c){this.nb+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.nb+=arguments[d];return this};g.clear=function(){this.nb=""};g.toString=function(){return this.nb};var Ca=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ca(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Da(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Fa(a,b){return a>b?1:a<b?-1:0};var Ia;if("undefined"===typeof v)var v={};if("undefined"===typeof Ja)var Ja=function(){throw Error("No *print-fn* fn set for evaluation environment");};if("undefined"===typeof Ka)var Ka=function(){throw Error("No *print-err-fn* fn set for evaluation environment");};var La=null;if("undefined"===typeof Ma)var Ma=null;function Na(){return new Pa(null,5,[Qa,!0,Ra,!0,Sa,!1,Ta,!1,Va,null],null)}function x(a){return null!=a&&!1!==a}function Wa(a){return null==a}function Xa(a){return a instanceof Array}
function Ya(a){return null==a?!0:!1===a?!0:!1}function y(a,b){return a[r(null==b?null:b)]?!0:a._?!0:!1}function $a(a){return null==a?null:a.constructor}function A(a,b){var c=$a(b),c=x(x(c)?c.Mc:c)?c.mc:r(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function ab(a){var b=a.mc;return x(b)?b:""+B.a(a)}var bb="undefined"!==typeof Symbol&&"function"===r(Symbol)?Symbol.iterator:"@@iterator";
function cb(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}function db(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return eb(arguments[0]);case 2:return eb(arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function fb(a){return eb(a)}function eb(a){function b(a,b){a.push(b);return a}var c=[];return gb?gb(b,c,a):hb.call(null,b,c,a)}function ib(){}function jb(){}
var kb=function kb(b){if(null!=b&&null!=b.P)return b.P(b);var c=kb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=kb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("ICounted.-count",b);};function lb(){}var mb=function mb(b,c){if(null!=b&&null!=b.S)return b.S(b,c);var d=mb[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=mb._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ICollection.-conj",b);};function nb(){}
var ob=function ob(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return ob.b(arguments[0],arguments[1]);case 3:return ob.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
ob.b=function(a,b){if(null!=a&&null!=a.G)return a.G(a,b);var c=ob[r(null==a?null:a)];if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);c=ob._;if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);throw A("IIndexed.-nth",a);};ob.c=function(a,b,c){if(null!=a&&null!=a.W)return a.W(a,b,c);var d=ob[r(null==a?null:a)];if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);d=ob._;if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);throw A("IIndexed.-nth",a);};ob.A=3;function qb(){}
var rb=function rb(b){if(null!=b&&null!=b.Z)return b.Z(b);var c=rb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=rb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("ISeq.-first",b);},sb=function sb(b){if(null!=b&&null!=b.ea)return b.ea(b);var c=sb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=sb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("ISeq.-rest",b);};function tb(){}function ub(){}
var vb=function vb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return vb.b(arguments[0],arguments[1]);case 3:return vb.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
vb.b=function(a,b){if(null!=a&&null!=a.H)return a.H(a,b);var c=vb[r(null==a?null:a)];if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);c=vb._;if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);throw A("ILookup.-lookup",a);};vb.c=function(a,b,c){if(null!=a&&null!=a.C)return a.C(a,b,c);var d=vb[r(null==a?null:a)];if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);d=vb._;if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);throw A("ILookup.-lookup",a);};vb.A=3;
var wb=function wb(b,c){if(null!=b&&null!=b.Pb)return b.Pb(b,c);var d=wb[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=wb._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IAssociative.-contains-key?",b);},xb=function xb(b,c,d){if(null!=b&&null!=b.Ba)return b.Ba(b,c,d);var e=xb[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=xb._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("IAssociative.-assoc",b);};function yb(){}
var zb=function zb(b,c){if(null!=b&&null!=b.Sb)return b.Sb(b,c);var d=zb[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=zb._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IMap.-dissoc",b);};function Ab(){}
var Cb=function Cb(b){if(null!=b&&null!=b.Tb)return b.Tb(b);var c=Cb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Cb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IMapEntry.-key",b);},Db=function Db(b){if(null!=b&&null!=b.Ub)return b.Ub(b);var c=Db[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Db._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IMapEntry.-val",b);};function Eb(){}
var Fb=function Fb(b,c){if(null!=b&&null!=b.Fc)return b.Fc(0,c);var d=Fb[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Fb._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ISet.-disjoin",b);},Gb=function Gb(b){if(null!=b&&null!=b.eb)return b.eb(b);var c=Gb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Gb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IStack.-peek",b);},Hb=function Hb(b){if(null!=b&&null!=b.fb)return b.fb(b);var c=Hb[r(null==
b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Hb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IStack.-pop",b);};function Ib(){}
var Jb=function Jb(b,c,d){if(null!=b&&null!=b.gb)return b.gb(b,c,d);var e=Jb[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=Jb._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("IVector.-assoc-n",b);},Kb=function Kb(b){if(null!=b&&null!=b.kc)return b.kc(b);var c=Kb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Kb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IDeref.-deref",b);};function Lb(){}
var Nb=function Nb(b){if(null!=b&&null!=b.N)return b.N(b);var c=Nb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Nb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IMeta.-meta",b);},Ob=function Ob(b,c){if(null!=b&&null!=b.O)return b.O(b,c);var d=Ob[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Ob._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IWithMeta.-with-meta",b);};function Pb(){}
var Qb=function Qb(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Qb.b(arguments[0],arguments[1]);case 3:return Qb.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
Qb.b=function(a,b){if(null!=a&&null!=a.X)return a.X(a,b);var c=Qb[r(null==a?null:a)];if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);c=Qb._;if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);throw A("IReduce.-reduce",a);};Qb.c=function(a,b,c){if(null!=a&&null!=a.Y)return a.Y(a,b,c);var d=Qb[r(null==a?null:a)];if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);d=Qb._;if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);throw A("IReduce.-reduce",a);};Qb.A=3;
var Rb=function Rb(b,c,d){if(null!=b&&null!=b.Eb)return b.Eb(b,c,d);var e=Rb[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=Rb._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("IKVReduce.-kv-reduce",b);},Sb=function Sb(b,c){if(null!=b&&null!=b.w)return b.w(b,c);var d=Sb[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Sb._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IEquiv.-equiv",b);},Tb=function Tb(b){if(null!=b&&null!=b.L)return b.L(b);
var c=Tb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Tb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IHash.-hash",b);};function Ub(){}var Vb=function Vb(b){if(null!=b&&null!=b.K)return b.K(b);var c=Vb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Vb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("ISeqable.-seq",b);};function Wb(){}function Xb(){}function Yb(){}
var Zb=function Zb(b){if(null!=b&&null!=b.Fb)return b.Fb(b);var c=Zb[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=Zb._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IReversible.-rseq",b);},ac=function ac(b,c){if(null!=b&&null!=b.Kc)return b.Kc(0,c);var d=ac[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=ac._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IWriter.-write",b);},bc=function bc(b,c,d){if(null!=b&&null!=b.sc)return b.sc(b,c,d);
var e=bc[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=bc._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("IWatchable.-notify-watches",b);},cc=function cc(b,c,d){if(null!=b&&null!=b.rc)return b.rc(b,c,d);var e=cc[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=cc._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("IWatchable.-add-watch",b);},dc=function dc(b){if(null!=b&&null!=b.Db)return b.Db(b);var c=dc[r(null==b?null:
b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=dc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IEditableCollection.-as-transient",b);},ec=function ec(b,c){if(null!=b&&null!=b.ub)return b.ub(b,c);var d=ec[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=ec._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ITransientCollection.-conj!",b);},fc=function fc(b){if(null!=b&&null!=b.Xb)return b.Xb(b);var c=fc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,
b);c=fc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("ITransientCollection.-persistent!",b);},gc=function gc(b,c,d){if(null!=b&&null!=b.Gb)return b.Gb(b,c,d);var e=gc[r(null==b?null:b)];if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);e=gc._;if(null!=e)return e.c?e.c(b,c,d):e.call(null,b,c,d);throw A("ITransientAssociative.-assoc!",b);};function hc(){}
var ic=function ic(b,c){if(null!=b&&null!=b.tb)return b.tb(b,c);var d=ic[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=ic._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IComparable.-compare",b);},jc=function jc(b){if(null!=b&&null!=b.Bc)return b.Bc();var c=jc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=jc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IChunk.-drop-first",b);},kc=function kc(b){if(null!=b&&null!=b.pc)return b.pc(b);var c=
kc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=kc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IChunkedSeq.-chunked-first",b);},lc=function lc(b){if(null!=b&&null!=b.jc)return b.jc(b);var c=lc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=lc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IChunkedSeq.-chunked-rest",b);},mc=function mc(b){if(null!=b&&null!=b.Vb)return b.Vb(b);var c=mc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,
b);c=mc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("INamed.-name",b);},nc=function nc(b){if(null!=b&&null!=b.Wb)return b.Wb(b);var c=nc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=nc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("INamed.-namespace",b);},oc=function oc(b,c){if(null!=b&&null!=b.Ec)return b.Ec(0,c);var d=oc[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=oc._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("IReset.-reset!",
b);},qc=function qc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return qc.b(arguments[0],arguments[1]);case 3:return qc.c(arguments[0],arguments[1],arguments[2]);case 4:return qc.u(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return qc.F(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
qc.b=function(a,b){if(null!=a&&null!=a.Gc)return a.Gc(0,b);var c=qc[r(null==a?null:a)];if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);c=qc._;if(null!=c)return c.b?c.b(a,b):c.call(null,a,b);throw A("ISwap.-swap!",a);};qc.c=function(a,b,c){if(null!=a&&null!=a.Hc)return a.Hc(0,b,c);var d=qc[r(null==a?null:a)];if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);d=qc._;if(null!=d)return d.c?d.c(a,b,c):d.call(null,a,b,c);throw A("ISwap.-swap!",a);};
qc.u=function(a,b,c,d){if(null!=a&&null!=a.Ic)return a.Ic(0,b,c,d);var e=qc[r(null==a?null:a)];if(null!=e)return e.u?e.u(a,b,c,d):e.call(null,a,b,c,d);e=qc._;if(null!=e)return e.u?e.u(a,b,c,d):e.call(null,a,b,c,d);throw A("ISwap.-swap!",a);};qc.F=function(a,b,c,d,e){if(null!=a&&null!=a.Jc)return a.Jc(0,b,c,d,e);var f=qc[r(null==a?null:a)];if(null!=f)return f.F?f.F(a,b,c,d,e):f.call(null,a,b,c,d,e);f=qc._;if(null!=f)return f.F?f.F(a,b,c,d,e):f.call(null,a,b,c,d,e);throw A("ISwap.-swap!",a);};
qc.A=5;var rc=function rc(b){if(null!=b&&null!=b.Ka)return b.Ka(b);var c=rc[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=rc._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IIterable.-iterator",b);};function sc(a){this.md=a;this.l=1073741824;this.D=0}sc.prototype.Kc=function(a,b){return this.md.append(b)};function tc(a){var b=new Ba;a.M(null,new sc(b),Na());return""+B.a(b)}
var uc="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function vc(a){a=uc(a|0,-862048943);return uc(a<<15|a>>>-15,461845907)}function wc(a,b){var c=(a|0)^(b|0);return uc(c<<13|c>>>-13,5)+-430675100|0}function xc(a,b){var c=(a|0)^b,c=uc(c^c>>>16,-2048144789),c=uc(c^c>>>13,-1028477387);return c^c>>>16}
function yc(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=wc(c,vc(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^vc(a.charCodeAt(a.length-1)):b;return xc(b,uc(2,a.length))}var zc={},Ac=0;function Bc(a){255<Ac&&(zc={},Ac=0);if(null==a)return 0;var b=zc[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=uc(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;zc[a]=b;Ac+=1}return a=b}
function Cc(a){if(null!=a&&(a.l&4194304||v===a.rd))return a.L(null)^0;if("number"===typeof a){if(x(isFinite(a)))return Math.floor(a)%2147483647;switch(a){case Infinity:return 2146435072;case -Infinity:return-1048576;default:return 2146959360}}else return!0===a?a=1231:!1===a?a=1237:"string"===typeof a?(a=Bc(a),0!==a&&(a=vc(a),a=wc(0,a),a=xc(a,4))):a=a instanceof Date?a.valueOf()^0:null==a?0:Tb(a)^0,a}function Dc(a,b){return a^b+2654435769+(a<<6)+(a>>2)}
function Ec(a,b){if(a.ab===b.ab)return 0;var c=Ya(a.za);if(x(c?b.za:c))return-1;if(x(a.za)){if(Ya(b.za))return 1;c=Fa(a.za,b.za);return 0===c?Fa(a.name,b.name):c}return Fa(a.name,b.name)}function Fc(a,b,c,d,e){this.za=a;this.name=b;this.ab=c;this.Cb=d;this.Aa=e;this.l=2154168321;this.D=4096}g=Fc.prototype;g.toString=function(){return this.ab};g.equiv=function(a){return this.w(null,a)};g.w=function(a,b){return b instanceof Fc?this.ab===b.ab:!1};
g.call=function(){function a(a,b,c){return E.c?E.c(b,this,c):E.call(null,b,this,c)}function b(a,b){return E.b?E.b(b,this):E.call(null,b,this)}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.b=b;c.c=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return E.b?E.b(a,this):E.call(null,a,this)};
g.b=function(a,b){return E.c?E.c(a,this,b):E.call(null,a,this,b)};g.N=function(){return this.Aa};g.O=function(a,b){return new Fc(this.za,this.name,this.ab,this.Cb,b)};g.L=function(){var a=this.Cb;return null!=a?a:this.Cb=a=Dc(yc(this.name),Bc(this.za))};g.Vb=function(){return this.name};g.Wb=function(){return this.za};g.M=function(a,b){return ac(b,this.ab)};
var Gc=function Gc(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Gc.a(arguments[0]);case 2:return Gc.b(arguments[0],arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};Gc.a=function(a){if(a instanceof Fc)return a;var b=a.indexOf("/");return 1>b?Gc.b(null,a):Gc.b(a.substring(0,b),a.substring(b+1,a.length))};
Gc.b=function(a,b){var c=null!=a?[B.a(a),B.a("/"),B.a(b)].join(""):b;return new Fc(a,b,c,null,null)};Gc.A=2;function F(a){if(null==a)return null;if(null!=a&&(a.l&8388608||v===a.dd))return a.K(null);if(Xa(a)||"string"===typeof a)return 0===a.length?null:new G(a,0,null);if(y(Ub,a))return Vb(a);throw Error([B.a(a),B.a(" is not ISeqable")].join(""));}function H(a){if(null==a)return null;if(null!=a&&(a.l&64||v===a.Ha))return a.Z(null);a=F(a);return null==a?null:rb(a)}
function Hc(a){return null!=a?null!=a&&(a.l&64||v===a.Ha)?a.ea(null):(a=F(a))?sb(a):Ic:Ic}function J(a){return null==a?null:null!=a&&(a.l&128||v===a.lc)?a.Ca(null):F(Hc(a))}var L=function L(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return L.a(arguments[0]);case 2:return L.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),L.m(arguments[0],arguments[1],c)}};L.a=function(){return!0};
L.b=function(a,b){return null==a?null==b:a===b||Sb(a,b)};L.m=function(a,b,c){for(;;)if(L.b(a,b))if(J(c))a=b,b=H(c),c=J(c);else return L.b(b,H(c));else return!1};L.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return L.m(b,a,c)};L.A=2;function Jc(a){this.I=a}Jc.prototype.next=function(){if(null!=this.I){var a=H(this.I);this.I=J(this.I);return{value:a,done:!1}}return{value:null,done:!0}};function Kc(a){return new Jc(F(a))}function Lc(a,b){var c=vc(a),c=wc(0,c);return xc(c,b)}
function Mc(a){var b=0,c=1;for(a=F(a);;)if(null!=a)b+=1,c=uc(31,c)+Cc(H(a))|0,a=J(a);else return Lc(c,b)}var Nc=Lc(1,0);function Oc(a){var b=0,c=0;for(a=F(a);;)if(null!=a)b+=1,c=c+Cc(H(a))|0,a=J(a);else return Lc(c,b)}var Pc=Lc(0,0);jb["null"]=!0;kb["null"]=function(){return 0};Date.prototype.w=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Date.prototype.Qb=v;
Date.prototype.tb=function(a,b){if(b instanceof Date)return Fa(this.valueOf(),b.valueOf());throw Error([B.a("Cannot compare "),B.a(this),B.a(" to "),B.a(b)].join(""));};Sb.number=function(a,b){return a===b};ib["function"]=!0;Lb["function"]=!0;Nb["function"]=function(){return null};Tb._=function(a){return a[da]||(a[da]=++ga)};function Rc(a){return a+1}function M(a){return Kb(a)}
function Sc(a,b){var c=kb(a);if(0===c)return b.v?b.v():b.call(null);for(var d=ob.b(a,0),e=1;;)if(e<c)var f=ob.b(a,e),d=b.b?b.b(d,f):b.call(null,d,f),e=e+1;else return d}function Tc(a,b,c){var d=kb(a),e=c;for(c=0;;)if(c<d){var f=ob.b(a,c),e=b.b?b.b(e,f):b.call(null,e,f);c+=1}else return e}function Uc(a,b){var c=a.length;if(0===a.length)return b.v?b.v():b.call(null);for(var d=a[0],e=1;;)if(e<c)var f=a[e],d=b.b?b.b(d,f):b.call(null,d,f),e=e+1;else return d}
function Vc(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.b?b.b(e,f):b.call(null,e,f);c+=1}else return e}function Wc(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.b?b.b(c,f):b.call(null,c,f);d+=1}else return c}function Xc(a){return null!=a?a.l&2||v===a.Uc?!0:a.l?!1:y(jb,a):y(jb,a)}function Yc(a){return null!=a?a.l&16||v===a.Dc?!0:a.l?!1:y(nb,a):y(nb,a)}
function N(a,b,c){var d=O.a?O.a(a):O.call(null,a);if(c>=d)return-1;!(0<c)&&0>c&&(c+=d,c=0>c?0:c);for(;;)if(c<d){if(L.b(P.b?P.b(a,c):P.call(null,a,c),b))return c;c+=1}else return-1}function R(a,b,c){var d=O.a?O.a(a):O.call(null,a);if(0===d)return-1;0<c?(--d,c=d<c?d:c):c=0>c?d+c:c;for(;;)if(0<=c){if(L.b(P.b?P.b(a,c):P.call(null,a,c),b))return c;--c}else return-1}function Zc(a,b){this.f=a;this.o=b}Zc.prototype.ua=function(){return this.o<this.f.length};
Zc.prototype.next=function(){var a=this.f[this.o];this.o+=1;return a};function G(a,b,c){this.f=a;this.o=b;this.j=c;this.l=166592766;this.D=8192}g=G.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O.a?O.a(this):O.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.G=function(a,b){var c=b+this.o;if(0<=c&&c<this.f.length)return this.f[c];throw Error("Index out of bounds");};g.W=function(a,b,c){a=b+this.o;return 0<=a&&a<this.f.length?this.f[a]:c};
g.Ka=function(){return new Zc(this.f,this.o)};g.N=function(){return this.j};g.Ca=function(){return this.o+1<this.f.length?new G(this.f,this.o+1,null):null};g.P=function(){var a=this.f.length-this.o;return 0>a?0:a};g.Fb=function(){var a=this.P(null);return 0<a?new $c(this,a-1,null):null};g.L=function(){return Mc(this)};g.w=function(a,b){return ad.b?ad.b(this,b):ad.call(null,this,b)};g.T=function(){return Ic};g.X=function(a,b){return Wc(this.f,b,this.f[this.o],this.o+1)};
g.Y=function(a,b,c){return Wc(this.f,b,c,this.o)};g.Z=function(){return this.f[this.o]};g.ea=function(){return this.o+1<this.f.length?new G(this.f,this.o+1,null):Ic};g.K=function(){return this.o<this.f.length?this:null};g.O=function(a,b){return new G(this.f,this.o,b)};g.S=function(a,b){return S.b?S.b(b,this):S.call(null,b,this)};G.prototype[bb]=function(){return Kc(this)};function bd(a,b){return b<a.length?new G(a,b,null):null}
function T(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return bd(arguments[0],0);case 2:return bd(arguments[0],arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function $c(a,b,c){this.ic=a;this.o=b;this.j=c;this.l=32374990;this.D=8192}g=$c.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O.a?O.a(this):O.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){return 0<this.o?new $c(this.ic,this.o-1,null):null};g.P=function(){return this.o+1};g.L=function(){return Mc(this)};
g.w=function(a,b){return ad.b?ad.b(this,b):ad.call(null,this,b)};g.T=function(){var a=this.j;return cd.b?cd.b(Ic,a):cd.call(null,Ic,a)};g.X=function(a,b){return dd?dd(b,this):ed.call(null,b,this)};g.Y=function(a,b,c){return fd?fd(b,c,this):ed.call(null,b,c,this)};g.Z=function(){return ob.b(this.ic,this.o)};g.ea=function(){return 0<this.o?new $c(this.ic,this.o-1,null):Ic};g.K=function(){return this};g.O=function(a,b){return new $c(this.ic,this.o,b)};
g.S=function(a,b){return S.b?S.b(b,this):S.call(null,b,this)};$c.prototype[bb]=function(){return Kc(this)};function gd(a){return H(J(a))}Sb._=function(a,b){return a===b};var hd=function hd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return hd.v();case 1:return hd.a(arguments[0]);case 2:return hd.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),hd.m(arguments[0],arguments[1],c)}};hd.v=function(){return id};
hd.a=function(a){return a};hd.b=function(a,b){return null!=a?mb(a,b):mb(Ic,b)};hd.m=function(a,b,c){for(;;)if(x(c))a=hd.b(a,b),b=H(c),c=J(c);else return hd.b(a,b)};hd.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return hd.m(b,a,c)};hd.A=2;
function O(a){if(null!=a)if(null!=a&&(a.l&2||v===a.Uc))a=a.P(null);else if(Xa(a))a=a.length;else if("string"===typeof a)a=a.length;else if(null!=a&&(a.l&8388608||v===a.dd))a:{a=F(a);for(var b=0;;){if(Xc(a)){a=b+kb(a);break a}a=J(a);b+=1}}else a=kb(a);else a=0;return a}function jd(a,b,c){for(;;){if(null==a)return c;if(0===b)return F(a)?H(a):c;if(Yc(a))return ob.c(a,b,c);if(F(a))a=J(a),--b;else return c}}
var P=function P(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return P.b(arguments[0],arguments[1]);case 3:return P.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
P.b=function(a,b){if("number"!==typeof b)throw Error("Index argument to nth must be a number");if(null==a)return a;if(null!=a&&(a.l&16||v===a.Dc))return a.G(null,b);if(Xa(a)){if(0<=b&&b<a.length)return a[b];throw Error("Index out of bounds");}if("string"===typeof a){if(0<=b&&b<a.length)return a.charAt(b);throw Error("Index out of bounds");}if(null!=a&&(a.l&64||v===a.Ha)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(F(c)){c=H(c);break a}throw Error("Index out of bounds");
}if(Yc(c)){c=ob.b(c,d);break a}if(F(c))c=J(c),--d;else throw Error("Index out of bounds");}}return c}if(y(nb,a))return ob.b(a,b);throw Error([B.a("nth not supported on this type "),B.a(ab($a(a)))].join(""));};
P.c=function(a,b,c){if("number"!==typeof b)throw Error("Index argument to nth must be a number.");if(null==a)return c;if(null!=a&&(a.l&16||v===a.Dc))return a.W(null,b,c);if(Xa(a))return 0<=b&&b<a.length?a[b]:c;if("string"===typeof a)return 0<=b&&b<a.length?a.charAt(b):c;if(null!=a&&(a.l&64||v===a.Ha))return jd(a,b,c);if(y(nb,a))return ob.b(a,b);throw Error([B.a("nth not supported on this type "),B.a(ab($a(a)))].join(""));};P.A=3;
var E=function E(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return E.b(arguments[0],arguments[1]);case 3:return E.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};E.b=function(a,b){return null==a?null:null!=a&&(a.l&256||v===a.Yc)?a.H(null,b):Xa(a)?null!=b&&b<a.length?a[b|0]:null:"string"===typeof a?null!=b&&b<a.length?a.charAt(b|0):null:y(ub,a)?vb.b(a,b):null};
E.c=function(a,b,c){return null!=a?null!=a&&(a.l&256||v===a.Yc)?a.C(null,b,c):Xa(a)?null!=b&&0<=b&&b<a.length?a[b|0]:c:"string"===typeof a?null!=b&&0<=b&&b<a.length?a.charAt(b|0):c:y(ub,a)?vb.c(a,b,c):c:c};E.A=3;var kd=function kd(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 3:return kd.c(arguments[0],arguments[1],arguments[2]);default:return c=new G(c.slice(3),0,null),kd.m(arguments[0],arguments[1],arguments[2],c)}};
kd.c=function(a,b,c){return null!=a?xb(a,b,c):ld([b,c])};kd.m=function(a,b,c,d){for(;;)if(a=kd.c(a,b,c),x(d))b=H(d),c=gd(d),d=J(J(d));else return a};kd.B=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return kd.m(b,a,c,d)};kd.A=3;
var md=function md(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return md.a(arguments[0]);case 2:return md.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),md.m(arguments[0],arguments[1],c)}};md.a=function(a){return a};md.b=function(a,b){return null==a?null:zb(a,b)};md.m=function(a,b,c){for(;;){if(null==a)return null;a=md.b(a,b);if(x(c))b=H(c),c=J(c);else return a}};
md.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return md.m(b,a,c)};md.A=2;function nd(a){var b="function"==r(a);return b?b:null!=a?v===a.Tc?!0:a.Lc?!1:y(ib,a):y(ib,a)}function od(a,b){this.g=a;this.j=b;this.l=393217;this.D=0}g=od.prototype;g.N=function(){return this.j};g.O=function(a,b){return new od(this.g,b)};g.Tc=v;
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q,ja){a=this;return pd.Rb?pd.Rb(a.g,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q,ja):pd.call(null,a.g,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q,ja)}function b(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q){a=this;return a.g.ra?a.g.ra(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C,Q)}function c(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C){a=this;return a.g.qa?a.g.qa(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,
I,C):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I,C)}function d(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I){a=this;return a.g.pa?a.g.pa(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D,I)}function e(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D){a=this;return a.g.oa?a.g.oa(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w,D)}function f(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w){a=this;return a.g.na?a.g.na(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w):a.g.call(null,
b,c,d,e,f,h,k,l,m,n,p,q,t,u,z,w)}function h(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z){a=this;return a.g.ma?a.g.ma(b,c,d,e,f,h,k,l,m,n,p,q,t,u,z):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u,z)}function k(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u){a=this;return a.g.la?a.g.la(b,c,d,e,f,h,k,l,m,n,p,q,t,u):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t,u)}function l(a,b,c,d,e,f,h,k,l,m,n,p,q,t){a=this;return a.g.ka?a.g.ka(b,c,d,e,f,h,k,l,m,n,p,q,t):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q,t)}function m(a,b,c,d,e,f,h,k,l,m,n,p,q){a=this;
return a.g.ja?a.g.ja(b,c,d,e,f,h,k,l,m,n,p,q):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p,q)}function n(a,b,c,d,e,f,h,k,l,m,n,p){a=this;return a.g.ia?a.g.ia(b,c,d,e,f,h,k,l,m,n,p):a.g.call(null,b,c,d,e,f,h,k,l,m,n,p)}function p(a,b,c,d,e,f,h,k,l,m,n){a=this;return a.g.ha?a.g.ha(b,c,d,e,f,h,k,l,m,n):a.g.call(null,b,c,d,e,f,h,k,l,m,n)}function q(a,b,c,d,e,f,h,k,l,m){a=this;return a.g.ta?a.g.ta(b,c,d,e,f,h,k,l,m):a.g.call(null,b,c,d,e,f,h,k,l,m)}function t(a,b,c,d,e,f,h,k,l){a=this;return a.g.sa?a.g.sa(b,c,
d,e,f,h,k,l):a.g.call(null,b,c,d,e,f,h,k,l)}function u(a,b,c,d,e,f,h,k){a=this;return a.g.ca?a.g.ca(b,c,d,e,f,h,k):a.g.call(null,b,c,d,e,f,h,k)}function w(a,b,c,d,e,f,h){a=this;return a.g.ba?a.g.ba(b,c,d,e,f,h):a.g.call(null,b,c,d,e,f,h)}function z(a,b,c,d,e,f){a=this;return a.g.F?a.g.F(b,c,d,e,f):a.g.call(null,b,c,d,e,f)}function D(a,b,c,d,e){a=this;return a.g.u?a.g.u(b,c,d,e):a.g.call(null,b,c,d,e)}function I(a,b,c,d){a=this;return a.g.c?a.g.c(b,c,d):a.g.call(null,b,c,d)}function Q(a,b,c){a=this;
return a.g.b?a.g.b(b,c):a.g.call(null,b,c)}function ja(a,b){a=this;return a.g.a?a.g.a(b):a.g.call(null,b)}function Ha(a){a=this;return a.g.v?a.g.v():a.g.call(null)}var C=null,C=function(X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb,$b,Qc,Ud,Lf){switch(arguments.length){case 1:return Ha.call(this,X);case 2:return ja.call(this,X,ba);case 3:return Q.call(this,X,ba,ea);case 4:return I.call(this,X,ba,ea,K);case 5:return D.call(this,X,ba,ea,K,fa);case 6:return z.call(this,X,ba,ea,K,fa,ia);case 7:return w.call(this,
X,ba,ea,K,fa,ia,oa);case 8:return u.call(this,X,ba,ea,K,fa,ia,oa,ra);case 9:return t.call(this,X,ba,ea,K,fa,ia,oa,ra,xa);case 10:return q.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa);case 11:return p.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga);case 12:return n.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa);case 13:return m.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua);case 14:return l.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za);case 15:return k.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C);
case 16:return h.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb);case 17:return f.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb);case 18:return e.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb);case 19:return d.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb,$b);case 20:return c.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb,$b,Qc);case 21:return b.call(this,X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb,$b,Qc,Ud);case 22:return a.call(this,
X,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,C,pb,Bb,Mb,$b,Qc,Ud,Lf)}throw Error("Invalid arity: "+(arguments.length-1));};C.a=Ha;C.b=ja;C.c=Q;C.u=I;C.F=D;C.ba=z;C.ca=w;C.sa=u;C.ta=t;C.ha=q;C.ia=p;C.ja=n;C.ka=m;C.la=l;C.ma=k;C.na=h;C.oa=f;C.pa=e;C.qa=d;C.ra=c;C.qc=b;C.Rb=a;return C}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.v=function(){return this.g.v?this.g.v():this.g.call(null)};g.a=function(a){return this.g.a?this.g.a(a):this.g.call(null,a)};
g.b=function(a,b){return this.g.b?this.g.b(a,b):this.g.call(null,a,b)};g.c=function(a,b,c){return this.g.c?this.g.c(a,b,c):this.g.call(null,a,b,c)};g.u=function(a,b,c,d){return this.g.u?this.g.u(a,b,c,d):this.g.call(null,a,b,c,d)};g.F=function(a,b,c,d,e){return this.g.F?this.g.F(a,b,c,d,e):this.g.call(null,a,b,c,d,e)};g.ba=function(a,b,c,d,e,f){return this.g.ba?this.g.ba(a,b,c,d,e,f):this.g.call(null,a,b,c,d,e,f)};
g.ca=function(a,b,c,d,e,f,h){return this.g.ca?this.g.ca(a,b,c,d,e,f,h):this.g.call(null,a,b,c,d,e,f,h)};g.sa=function(a,b,c,d,e,f,h,k){return this.g.sa?this.g.sa(a,b,c,d,e,f,h,k):this.g.call(null,a,b,c,d,e,f,h,k)};g.ta=function(a,b,c,d,e,f,h,k,l){return this.g.ta?this.g.ta(a,b,c,d,e,f,h,k,l):this.g.call(null,a,b,c,d,e,f,h,k,l)};g.ha=function(a,b,c,d,e,f,h,k,l,m){return this.g.ha?this.g.ha(a,b,c,d,e,f,h,k,l,m):this.g.call(null,a,b,c,d,e,f,h,k,l,m)};
g.ia=function(a,b,c,d,e,f,h,k,l,m,n){return this.g.ia?this.g.ia(a,b,c,d,e,f,h,k,l,m,n):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n)};g.ja=function(a,b,c,d,e,f,h,k,l,m,n,p){return this.g.ja?this.g.ja(a,b,c,d,e,f,h,k,l,m,n,p):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p)};g.ka=function(a,b,c,d,e,f,h,k,l,m,n,p,q){return this.g.ka?this.g.ka(a,b,c,d,e,f,h,k,l,m,n,p,q):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q)};
g.la=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t){return this.g.la?this.g.la(a,b,c,d,e,f,h,k,l,m,n,p,q,t):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t)};g.ma=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u){return this.g.ma?this.g.ma(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u)};g.na=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w){return this.g.na?this.g.na(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w)};
g.oa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z){return this.g.oa?this.g.oa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z)};g.pa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D){return this.g.pa?this.g.pa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D)};
g.qa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I){return this.g.qa?this.g.qa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I)};g.ra=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q){return this.g.ra?this.g.ra(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q):this.g.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q)};
g.qc=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja){return pd.Rb?pd.Rb(this.g,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja):pd.call(null,this.g,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja)};function cd(a,b){return"function"==r(a)?new od(a,b):null==a?null:Ob(a,b)}function qd(a){var b=null!=a;return(b?null!=a?a.l&131072||v===a.ad||(a.l?0:y(Lb,a)):y(Lb,a):b)?Nb(a):null}function rd(a){return null==a?null:Gb(a)}function sd(a){return null==a?null:Hb(a)}
var td=function td(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return td.a(arguments[0]);case 2:return td.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),td.m(arguments[0],arguments[1],c)}};td.a=function(a){return a};td.b=function(a,b){return null==a?null:Fb(a,b)};td.m=function(a,b,c){for(;;){if(null==a)return null;a=td.b(a,b);if(x(c))b=H(c),c=J(c);else return a}};
td.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return td.m(b,a,c)};td.A=2;function ud(a){return null==a?!1:null!=a?a.l&4096||v===a.vd?!0:a.l?!1:y(Eb,a):y(Eb,a)}function vd(a){return null!=a?a.l&16777216||v===a.ud?!0:a.l?!1:y(Wb,a):y(Wb,a)}function wd(a){return null==a?!1:null!=a?a.l&1024||v===a.Zc?!0:a.l?!1:y(yb,a):y(yb,a)}function xd(a){return null!=a?a.l&16384||v===a.wd?!0:a.l?!1:y(Ib,a):y(Ib,a)}function yd(a){return null!=a?a.D&512||v===a.pd?!0:!1:!1}
function zd(a){var b=[];ha(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}function Ad(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var Bd={};function Cd(a){return null==a?!1:null!=a?a.l&64||v===a.Ha?!0:a.l?!1:y(qb,a):y(qb,a)}function Dd(a){return null==a?!1:!1===a?!1:!0}function Ed(a,b){return E.c(a,b,Bd)===Bd?!1:!0}
function Fd(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if("number"===typeof a){if("number"===typeof b)return Fa(a,b);throw Error([B.a("Cannot compare "),B.a(a),B.a(" to "),B.a(b)].join(""));}if(null!=a?a.D&2048||v===a.Qb||(a.D?0:y(hc,a)):y(hc,a))return ic(a,b);if("string"!==typeof a&&!Xa(a)&&!0!==a&&!1!==a||$a(a)!==$a(b))throw Error([B.a("Cannot compare "),B.a(a),B.a(" to "),B.a(b)].join(""));return Fa(a,b)}
function Gd(a,b){var c=O(a),d=O(b);if(c<d)c=-1;else if(c>d)c=1;else if(0===c)c=0;else a:for(d=0;;){var e=Fd(P.b(a,d),P.b(b,d));if(0===e&&d+1<c)d+=1;else{c=e;break a}}return c}function ed(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return dd(arguments[0],arguments[1]);case 3:return fd(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}
function dd(a,b){var c=F(b);if(c){var d=H(c),c=J(c);return gb?gb(a,d,c):hb.call(null,a,d,c)}return a.v?a.v():a.call(null)}function fd(a,b,c){for(c=F(c);;)if(c){var d=H(c);b=a.b?a.b(b,d):a.call(null,b,d);c=J(c)}else return b}
function hb(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Hd(arguments[0],arguments[1]);case 3:return gb(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function Hd(a,b){return null!=b&&(b.l&524288||v===b.cd)?b.X(null,a):Xa(b)?Uc(b,a):"string"===typeof b?Uc(b,a):y(Pb,b)?Qb.b(b,a):dd(a,b)}
function gb(a,b,c){return null!=c&&(c.l&524288||v===c.cd)?c.Y(null,a,b):Xa(c)?Vc(c,a,b):"string"===typeof c?Vc(c,a,b):y(Pb,c)?Qb.c(c,a,b):fd(a,b,c)}function Id(a,b,c){return null!=c?Rb(c,a,b):b}function Jd(a){return a}function Kd(a,b,c,d){a=a.a?a.a(b):a.call(null,b);c=gb(a,c,d);return a.a?a.a(c):a.call(null,c)}function Ld(a,b){var c=(a-a%b)/b;return 0<=c?Math.floor(c):Math.ceil(c)}function Md(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}
var B=function B(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return B.v();case 1:return B.a(arguments[0]);default:return c=new G(c.slice(1),0,null),B.m(arguments[0],c)}};B.v=function(){return""};B.a=function(a){return null==a?"":""+a};B.m=function(a,b){for(var c=new Ba(""+B.a(a)),d=b;;)if(x(d))c=c.append(""+B.a(H(d))),d=J(d);else return c.toString()};B.B=function(a){var b=H(a);a=J(a);return B.m(b,a)};B.A=1;
function ad(a,b){var c;if(vd(b))if(Xc(a)&&Xc(b)&&O(a)!==O(b))c=!1;else a:{c=F(a);for(var d=F(b);;){if(null==c){c=null==d;break a}if(null!=d&&L.b(H(c),H(d)))c=J(c),d=J(d);else{c=!1;break a}}}else c=null;return Dd(c)}function Nd(a,b,c,d,e){this.j=a;this.first=b;this.kb=c;this.count=d;this.s=e;this.l=65937646;this.D=8192}g=Nd.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,this.count)}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){return 1===this.count?null:this.kb};g.P=function(){return this.count};g.eb=function(){return this.first};g.fb=function(){return this.ea(null)};
g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return Ob(Ic,this.j)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return this.first};g.ea=function(){return 1===this.count?Ic:this.kb};g.K=function(){return this};g.O=function(a,b){return new Nd(b,this.first,this.kb,this.count,this.s)};g.S=function(a,b){return new Nd(this.j,b,this,this.count+1,null)};Nd.prototype[bb]=function(){return Kc(this)};
function Od(a){this.j=a;this.l=65937614;this.D=8192}g=Od.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){return null};g.P=function(){return 0};g.eb=function(){return null};g.fb=function(){throw Error("Can't pop empty list");};g.L=function(){return Nc};
g.w=function(a,b){return(null!=b?b.l&33554432||v===b.sd||(b.l?0:y(Xb,b)):y(Xb,b))||vd(b)?null==F(b):!1};g.T=function(){return this};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return null};g.ea=function(){return Ic};g.K=function(){return null};g.O=function(a,b){return new Od(b)};g.S=function(a,b){return new Nd(this.j,b,null,1,null)};var Ic=new Od(null);Od.prototype[bb]=function(){return Kc(this)};
function Pd(a){return(null!=a?a.l&134217728||v===a.td||(a.l?0:y(Yb,a)):y(Yb,a))?Zb(a):gb(hd,Ic,a)}function Qd(a,b,c,d){this.j=a;this.first=b;this.kb=c;this.s=d;this.l=65929452;this.D=8192}g=Qd.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){return null==this.kb?null:F(this.kb)};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};
g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return this.first};g.ea=function(){return null==this.kb?Ic:this.kb};g.K=function(){return this};g.O=function(a,b){return new Qd(b,this.first,this.kb,this.s)};g.S=function(a,b){return new Qd(null,b,this,null)};Qd.prototype[bb]=function(){return Kc(this)};function S(a,b){return null==b||null!=b&&(b.l&64||v===b.Ha)?new Qd(null,a,b,null):new Qd(null,a,F(b),null)}
function Rd(a,b){if(a.Wa===b.Wa)return 0;var c=Ya(a.za);if(x(c?b.za:c))return-1;if(x(a.za)){if(Ya(b.za))return 1;c=Fa(a.za,b.za);return 0===c?Fa(a.name,b.name):c}return Fa(a.name,b.name)}function U(a,b,c,d){this.za=a;this.name=b;this.Wa=c;this.Cb=d;this.l=2153775105;this.D=4096}g=U.prototype;g.toString=function(){return[B.a(":"),B.a(this.Wa)].join("")};g.equiv=function(a){return this.w(null,a)};g.w=function(a,b){return b instanceof U?this.Wa===b.Wa:!1};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return E.b(c,this);case 3:return E.c(c,this,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return E.b(c,this)};a.c=function(a,c,d){return E.c(c,this,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return E.b(a,this)};g.b=function(a,b){return E.c(a,this,b)};
g.L=function(){var a=this.Cb;return null!=a?a:this.Cb=a=Dc(yc(this.name),Bc(this.za))+2654435769|0};g.Vb=function(){return this.name};g.Wb=function(){return this.za};g.M=function(a,b){return ac(b,[B.a(":"),B.a(this.Wa)].join(""))};function Sd(a){if(null!=a&&(a.D&4096||v===a.bd))return a.Wb(null);throw Error([B.a("Doesn't support namespace: "),B.a(a)].join(""));}
var Td=function Td(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Td.a(arguments[0]);case 2:return Td.b(arguments[0],arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};Td.a=function(a){if(a instanceof U)return a;if(a instanceof Fc)return new U(Sd(a),Vd.a?Vd.a(a):Vd.call(null,a),a.ab,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new U(b[0],b[1],a,null):new U(null,b[0],a,null)}return null};
Td.b=function(a,b){var c=a instanceof U?Vd.a?Vd.a(a):Vd.call(null,a):a instanceof Fc?Vd.a?Vd.a(a):Vd.call(null,a):a,d=b instanceof U?Vd.a?Vd.a(b):Vd.call(null,b):b instanceof Fc?Vd.a?Vd.a(b):Vd.call(null,b):b;return new U(c,d,[B.a(x(c)?[B.a(c),B.a("/")].join(""):null),B.a(d)].join(""),null)};Td.A=2;function Wd(a,b,c,d){this.j=a;this.fn=b;this.I=c;this.s=d;this.l=32374988;this.D=1}g=Wd.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
function Xd(a){null!=a.fn&&(a.I=a.fn.v?a.fn.v():a.fn.call(null),a.fn=null);return a.I}g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){this.K(null);return null==this.I?null:J(this.I)};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};
g.T=function(){return cd(Ic,this.j)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){this.K(null);return null==this.I?null:H(this.I)};g.ea=function(){this.K(null);return null!=this.I?Hc(this.I):Ic};g.K=function(){Xd(this);if(null==this.I)return null;for(var a=this.I;;)if(a instanceof Wd)a=Xd(a);else return this.I=a,F(this.I)};g.O=function(a,b){return new Wd(b,this.fn,this.I,this.s)};g.S=function(a,b){return S(b,this)};Wd.prototype[bb]=function(){return Kc(this)};
function Yd(a,b){this.oc=a;this.end=b;this.l=2;this.D=0}Yd.prototype.add=function(a){this.oc[this.end]=a;return this.end+=1};Yd.prototype.Ga=function(){var a=new Zd(this.oc,0,this.end);this.oc=null;return a};Yd.prototype.P=function(){return this.end};function Zd(a,b,c){this.f=a;this.off=b;this.end=c;this.l=524306;this.D=0}g=Zd.prototype;g.P=function(){return this.end-this.off};g.G=function(a,b){return this.f[this.off+b]};g.W=function(a,b,c){return 0<=b&&b<this.end-this.off?this.f[this.off+b]:c};
g.Bc=function(){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new Zd(this.f,this.off+1,this.end)};g.X=function(a,b){return Wc(this.f,b,this.f[this.off],this.off+1)};g.Y=function(a,b,c){return Wc(this.f,b,c,this.off)};function $d(a,b,c,d){this.Ga=a;this.Ya=b;this.j=c;this.s=d;this.l=31850732;this.D=1536}g=$d.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){if(1<kb(this.Ga))return new $d(jc(this.Ga),this.Ya,this.j,null);var a=Vb(this.Ya);return null==a?null:a};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};
g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};g.Z=function(){return ob.b(this.Ga,0)};g.ea=function(){return 1<kb(this.Ga)?new $d(jc(this.Ga),this.Ya,this.j,null):null==this.Ya?Ic:this.Ya};g.K=function(){return this};g.pc=function(){return this.Ga};g.jc=function(){return null==this.Ya?Ic:this.Ya};g.O=function(a,b){return new $d(this.Ga,this.Ya,b,this.s)};g.S=function(a,b){return S(b,this)};g.Cc=function(){return null==this.Ya?null:this.Ya};$d.prototype[bb]=function(){return Kc(this)};
function ae(a,b){return 0===kb(a)?b:new $d(a,b,null,null)}function be(a,b){a.add(b)}function ce(a){for(var b=[];;)if(F(a))b.push(H(a)),a=J(a);else return b}function de(a,b){if(Xc(b))return O(b);for(var c=0,d=F(b);;)if(null!=d&&c<a)c+=1,d=J(d);else return c}
var ee=function ee(b){var c;if(null==b)c=null;else if(null==J(b))c=F(H(b));else{c=S;var d=H(b);b=J(b);b=ee.a?ee.a(b):ee.call(null,b);c=c(d,b)}return c},fe=function fe(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return fe.v();case 1:return fe.a(arguments[0]);case 2:return fe.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),fe.m(arguments[0],arguments[1],c)}};
fe.v=function(){return new Wd(null,function(){return null},null,null)};fe.a=function(a){return new Wd(null,function(){return a},null,null)};fe.b=function(a,b){return new Wd(null,function(){var c=F(a);return c?yd(c)?ae(kc(c),fe.b(lc(c),b)):S(H(c),fe.b(Hc(c),b)):b},null,null)};fe.m=function(a,b,c){return function e(a,b){return new Wd(null,function(){var c=F(a);return c?yd(c)?ae(kc(c),e(lc(c),b)):S(H(c),e(Hc(c),b)):x(b)?e(H(b),J(b)):null},null,null)}(fe.b(a,b),c)};
fe.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return fe.m(b,a,c)};fe.A=2;var ge=function ge(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return ge.v();case 1:return ge.a(arguments[0]);case 2:return ge.b(arguments[0],arguments[1]);default:return c=new G(c.slice(2),0,null),ge.m(arguments[0],arguments[1],c)}};ge.v=function(){return dc(id)};ge.a=function(a){return a};ge.b=function(a,b){return ec(a,b)};
ge.m=function(a,b,c){for(;;)if(a=ec(a,b),x(c))b=H(c),c=J(c);else return a};ge.B=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return ge.m(b,a,c)};ge.A=2;function he(a,b,c){return gc(a,b,c)}
function ie(a,b,c){var d=F(c);if(0===b)return a.v?a.v():a.call(null);c=rb(d);var e=sb(d);if(1===b)return a.a?a.a(c):a.a?a.a(c):a.call(null,c);var d=rb(e),f=sb(e);if(2===b)return a.b?a.b(c,d):a.b?a.b(c,d):a.call(null,c,d);var e=rb(f),h=sb(f);if(3===b)return a.c?a.c(c,d,e):a.c?a.c(c,d,e):a.call(null,c,d,e);var f=rb(h),k=sb(h);if(4===b)return a.u?a.u(c,d,e,f):a.u?a.u(c,d,e,f):a.call(null,c,d,e,f);var h=rb(k),l=sb(k);if(5===b)return a.F?a.F(c,d,e,f,h):a.F?a.F(c,d,e,f,h):a.call(null,c,d,e,f,h);var k=rb(l),
m=sb(l);if(6===b)return a.ba?a.ba(c,d,e,f,h,k):a.ba?a.ba(c,d,e,f,h,k):a.call(null,c,d,e,f,h,k);var l=rb(m),n=sb(m);if(7===b)return a.ca?a.ca(c,d,e,f,h,k,l):a.ca?a.ca(c,d,e,f,h,k,l):a.call(null,c,d,e,f,h,k,l);var m=rb(n),p=sb(n);if(8===b)return a.sa?a.sa(c,d,e,f,h,k,l,m):a.sa?a.sa(c,d,e,f,h,k,l,m):a.call(null,c,d,e,f,h,k,l,m);var n=rb(p),q=sb(p);if(9===b)return a.ta?a.ta(c,d,e,f,h,k,l,m,n):a.ta?a.ta(c,d,e,f,h,k,l,m,n):a.call(null,c,d,e,f,h,k,l,m,n);var p=rb(q),t=sb(q);if(10===b)return a.ha?a.ha(c,
d,e,f,h,k,l,m,n,p):a.ha?a.ha(c,d,e,f,h,k,l,m,n,p):a.call(null,c,d,e,f,h,k,l,m,n,p);var q=rb(t),u=sb(t);if(11===b)return a.ia?a.ia(c,d,e,f,h,k,l,m,n,p,q):a.ia?a.ia(c,d,e,f,h,k,l,m,n,p,q):a.call(null,c,d,e,f,h,k,l,m,n,p,q);var t=rb(u),w=sb(u);if(12===b)return a.ja?a.ja(c,d,e,f,h,k,l,m,n,p,q,t):a.ja?a.ja(c,d,e,f,h,k,l,m,n,p,q,t):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t);var u=rb(w),z=sb(w);if(13===b)return a.ka?a.ka(c,d,e,f,h,k,l,m,n,p,q,t,u):a.ka?a.ka(c,d,e,f,h,k,l,m,n,p,q,t,u):a.call(null,c,d,e,f,h,k,l,
m,n,p,q,t,u);var w=rb(z),D=sb(z);if(14===b)return a.la?a.la(c,d,e,f,h,k,l,m,n,p,q,t,u,w):a.la?a.la(c,d,e,f,h,k,l,m,n,p,q,t,u,w):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w);var z=rb(D),I=sb(D);if(15===b)return a.ma?a.ma(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z):a.ma?a.ma(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z);var D=rb(I),Q=sb(I);if(16===b)return a.na?a.na(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D):a.na?a.na(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D);var I=
rb(Q),ja=sb(Q);if(17===b)return a.oa?a.oa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I):a.oa?a.oa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I);var Q=rb(ja),Ha=sb(ja);if(18===b)return a.pa?a.pa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q):a.pa?a.pa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q);ja=rb(Ha);Ha=sb(Ha);if(19===b)return a.qa?a.qa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja):a.qa?a.qa(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja):a.call(null,
c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja);var C=rb(Ha);sb(Ha);if(20===b)return a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja,C):a.ra?a.ra(c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja,C):a.call(null,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja,C);throw Error("Only up to 20 arguments supported on functions");}
function pd(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return je(arguments[0],arguments[1]);case 3:return ke(arguments[0],arguments[1],arguments[2]);case 4:return le(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return me(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return b=new G(b.slice(5),0,null),ne(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],b)}}
function je(a,b){var c=a.A;if(a.B){var d=de(c+1,b);return d<=c?ie(a,d,b):a.B(b)}return a.apply(a,ce(b))}function ke(a,b,c){b=S(b,c);c=a.A;if(a.B){var d=de(c+1,b);return d<=c?ie(a,d,b):a.B(b)}return a.apply(a,ce(b))}function le(a,b,c,d){b=S(b,S(c,d));c=a.A;return a.B?(d=de(c+1,b),d<=c?ie(a,d,b):a.B(b)):a.apply(a,ce(b))}function me(a,b,c,d,e){b=S(b,S(c,S(d,e)));c=a.A;return a.B?(d=de(c+1,b),d<=c?ie(a,d,b):a.B(b)):a.apply(a,ce(b))}
function ne(a,b,c,d,e,f){b=S(b,S(c,S(d,S(e,ee(f)))));c=a.A;return a.B?(d=de(c+1,b),d<=c?ie(a,d,b):a.B(b)):a.apply(a,ce(b))}
function oe(){"undefined"===typeof Ia&&(Ia=function(a){this.kd=a;this.l=393216;this.D=0},Ia.prototype.O=function(a,b){return new Ia(b)},Ia.prototype.N=function(){return this.kd},Ia.prototype.ua=function(){return!1},Ia.prototype.next=function(){return Error("No such element")},Ia.prototype.remove=function(){return Error("Unsupported operation")},Ia.xd=function(){return new V(null,1,5,pe,[qe],null)},Ia.Mc=!0,Ia.mc="cljs.core/t_cljs$core11230",Ia.ed=function(a){return ac(a,"cljs.core/t_cljs$core11230")});
return new Ia(re)}function se(a,b){for(;;){if(null==F(b))return!0;var c;c=H(b);c=a.a?a.a(c):a.call(null,c);if(x(c)){c=a;var d=J(b);a=c;b=d}else return!1}}function te(a){for(var b=Jd;;)if(F(a)){var c;c=H(a);c=b.a?b.a(c):b.call(null,c);if(x(c))return c;a=J(a)}else return null}
function ue(a){return function(){function b(b,c){return Ya(a.b?a.b(b,c):a.call(null,b,c))}function c(b){return Ya(a.a?a.a(b):a.call(null,b))}function d(){return Ya(a.v?a.v():a.call(null))}var e=null,f=function(){function b(a,b,d){var e=null;if(2<arguments.length){for(var e=0,f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new G(f,0)}return c.call(this,a,b,e)}function c(b,c,d){return Ya(le(a,b,c,d))}b.A=2;b.B=function(a){var b=H(a);a=J(a);var d=H(a);a=Hc(a);return c(b,d,a)};b.m=c;
return b}(),e=function(a,e,l){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e);default:var h=null;if(2<arguments.length){for(var h=0,k=Array(arguments.length-2);h<k.length;)k[h]=arguments[h+2],++h;h=new G(k,0)}return f.m(a,e,h)}throw Error("Invalid arity: "+(arguments.length-1));};e.A=2;e.B=f.B;e.v=d;e.a=c;e.b=b;e.m=f.m;return e}()}
var ve=function ve(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return ve.v();case 1:return ve.a(arguments[0]);case 2:return ve.b(arguments[0],arguments[1]);case 3:return ve.c(arguments[0],arguments[1],arguments[2]);default:return c=new G(c.slice(3),0,null),ve.m(arguments[0],arguments[1],arguments[2],c)}};ve.v=function(){return Jd};ve.a=function(a){return a};
ve.b=function(a,b){return function(){function c(c,d,e){c=b.c?b.c(c,d,e):b.call(null,c,d,e);return a.a?a.a(c):a.call(null,c)}function d(c,d){var e=b.b?b.b(c,d):b.call(null,c,d);return a.a?a.a(e):a.call(null,e)}function e(c){c=b.a?b.a(c):b.call(null,c);return a.a?a.a(c):a.call(null,c)}function f(){var c=b.v?b.v():b.call(null);return a.a?a.a(c):a.call(null,c)}var h=null,k=function(){function c(a,b,c,e){var f=null;if(3<arguments.length){for(var f=0,h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+
3],++f;f=new G(h,0)}return d.call(this,a,b,c,f)}function d(c,d,e,f){c=me(b,c,d,e,f);return a.a?a.a(c):a.call(null,c)}c.A=3;c.B=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var e=H(a);a=Hc(a);return d(b,c,e,a)};c.m=d;return c}(),h=function(a,b,h,p){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var l=null;if(3<arguments.length){for(var l=0,m=Array(arguments.length-3);l<m.length;)m[l]=arguments[l+
3],++l;l=new G(m,0)}return k.m(a,b,h,l)}throw Error("Invalid arity: "+(arguments.length-1));};h.A=3;h.B=k.B;h.v=f;h.a=e;h.b=d;h.c=c;h.m=k.m;return h}()};
ve.c=function(a,b,c){return function(){function d(d,e,f){d=c.c?c.c(d,e,f):c.call(null,d,e,f);d=b.a?b.a(d):b.call(null,d);return a.a?a.a(d):a.call(null,d)}function e(d,e){var f;f=c.b?c.b(d,e):c.call(null,d,e);f=b.a?b.a(f):b.call(null,f);return a.a?a.a(f):a.call(null,f)}function f(d){d=c.a?c.a(d):c.call(null,d);d=b.a?b.a(d):b.call(null,d);return a.a?a.a(d):a.call(null,d)}function h(){var d;d=c.v?c.v():c.call(null);d=b.a?b.a(d):b.call(null,d);return a.a?a.a(d):a.call(null,d)}var k=null,l=function(){function d(a,
b,c,d){var f=null;if(3<arguments.length){for(var f=0,h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new G(h,0)}return e.call(this,a,b,c,f)}function e(d,e,f,h){d=me(c,d,e,f,h);d=b.a?b.a(d):b.call(null,d);return a.a?a.a(d):a.call(null,d)}d.A=3;d.B=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var d=H(a);a=Hc(a);return e(b,c,d,a)};d.m=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return h.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);
case 3:return d.call(this,a,b,c);default:var m=null;if(3<arguments.length){for(var m=0,n=Array(arguments.length-3);m<n.length;)n[m]=arguments[m+3],++m;m=new G(n,0)}return l.m(a,b,c,m)}throw Error("Invalid arity: "+(arguments.length-1));};k.A=3;k.B=l.B;k.v=h;k.a=f;k.b=e;k.c=d;k.m=l.m;return k}()};
ve.m=function(a,b,c,d){return function(a){return function(){function b(a){var b=null;if(0<arguments.length){for(var b=0,d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new G(d,0)}return c.call(this,b)}function c(b){b=je(H(a),b);for(var c=J(a);;)if(c)b=H(c).call(null,b),c=J(c);else return b}b.A=0;b.B=function(a){a=F(a);return c(a)};b.m=c;return b}()}(Pd(S(a,S(b,S(c,d)))))};ve.B=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return ve.m(b,a,c,d)};ve.A=3;
function we(a,b){return function(){function c(c,d,e){return a.u?a.u(b,c,d,e):a.call(null,b,c,d,e)}function d(c,d){return a.c?a.c(b,c,d):a.call(null,b,c,d)}function e(c){return a.b?a.b(b,c):a.call(null,b,c)}function f(){return a.a?a.a(b):a.call(null,b)}var h=null,k=function(){function c(a,b,c,e){var f=null;if(3<arguments.length){for(var f=0,h=Array(arguments.length-3);f<h.length;)h[f]=arguments[f+3],++f;f=new G(h,0)}return d.call(this,a,b,c,f)}function d(c,d,e,f){return ne(a,b,c,d,e,T([f],0))}c.A=
3;c.B=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var e=H(a);a=Hc(a);return d(b,c,e,a)};c.m=d;return c}(),h=function(a,b,h,p){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,h);default:var l=null;if(3<arguments.length){for(var l=0,m=Array(arguments.length-3);l<m.length;)m[l]=arguments[l+3],++l;l=new G(m,0)}return k.m(a,b,h,l)}throw Error("Invalid arity: "+(arguments.length-1));};h.A=3;h.B=k.B;h.v=f;h.a=
e;h.b=d;h.c=c;h.m=k.m;return h}()}function xe(a,b,c,d){this.state=a;this.j=b;this.od=c;this.bb=d;this.D=16386;this.l=6455296}g=xe.prototype;g.equiv=function(a){return this.w(null,a)};g.w=function(a,b){return this===b};g.kc=function(){return this.state};g.N=function(){return this.j};
g.sc=function(a,b,c){a=F(this.bb);for(var d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f),k=P.c(h,0,null),h=P.c(h,1,null);h.u?h.u(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=F(a))yd(a)?(d=kc(a),a=lc(a),k=d,e=O(d),d=k):(d=H(a),k=P.c(d,0,null),h=P.c(d,1,null),h.u?h.u(k,this,b,c):h.call(null,k,this,b,c),a=J(a),d=null,e=0),f=0;else return null};g.rc=function(a,b,c){this.bb=kd.c(this.bb,b,c);return this};g.L=function(){return this[da]||(this[da]=++ga)};
function ye(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return ze(arguments[0]);default:return c=new G(b.slice(1),0,null),b=arguments[0],d=null!=c&&(c.l&64||v===c.Ha)?je(Ae,c):c,c=E.b(d,Sa),d=E.b(d,Be),new xe(b,c,d,null)}}function ze(a){return new xe(a,null,null,null)}
function Ce(a,b){if(a instanceof xe){var c=a.od;if(null!=c&&!x(c.a?c.a(b):c.call(null,b)))throw Error("Validator rejected reference state");c=a.state;a.state=b;null!=a.bb&&bc(a,c,b);return b}return oc(a,b)}
var De=function De(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return De.b(arguments[0],arguments[1]);case 3:return De.c(arguments[0],arguments[1],arguments[2]);case 4:return De.u(arguments[0],arguments[1],arguments[2],arguments[3]);default:return c=new G(c.slice(4),0,null),De.m(arguments[0],arguments[1],arguments[2],arguments[3],c)}};
De.b=function(a,b){var c;a instanceof xe?(c=a.state,c=b.a?b.a(c):b.call(null,c),c=Ce(a,c)):c=qc.b(a,b);return c};De.c=function(a,b,c){if(a instanceof xe){var d=a.state;b=b.b?b.b(d,c):b.call(null,d,c);a=Ce(a,b)}else a=qc.c(a,b,c);return a};De.u=function(a,b,c,d){if(a instanceof xe){var e=a.state;b=b.c?b.c(e,c,d):b.call(null,e,c,d);a=Ce(a,b)}else a=qc.u(a,b,c,d);return a};De.m=function(a,b,c,d,e){return a instanceof xe?Ce(a,me(b,a.state,c,d,e)):qc.F(a,b,c,d,e)};
De.B=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return De.m(b,a,c,d,e)};De.A=4;
var Ee=function Ee(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return Ee.a(arguments[0]);case 2:return Ee.b(arguments[0],arguments[1]);case 3:return Ee.c(arguments[0],arguments[1],arguments[2]);case 4:return Ee.u(arguments[0],arguments[1],arguments[2],arguments[3]);default:return c=new G(c.slice(4),0,null),Ee.m(arguments[0],arguments[1],arguments[2],arguments[3],c)}};
Ee.a=function(a){return function(b){return function(){function c(c,d){var e=a.a?a.a(d):a.call(null,d);return b.b?b.b(c,e):b.call(null,c,e)}function d(a){return b.a?b.a(a):b.call(null,a)}function e(){return b.v?b.v():b.call(null)}var f=null,h=function(){function c(a,b,c){var e=null;if(2<arguments.length){for(var e=0,f=Array(arguments.length-2);e<f.length;)f[e]=arguments[e+2],++e;e=new G(f,0)}return d.call(this,a,b,e)}function d(c,d,e){d=ke(a,d,e);return b.b?b.b(c,d):b.call(null,c,d)}c.A=2;c.B=function(a){var b=
H(a);a=J(a);var c=H(a);a=Hc(a);return d(b,c,a)};c.m=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var k=null;if(2<arguments.length){for(var k=0,l=Array(arguments.length-2);k<l.length;)l[k]=arguments[k+2],++k;k=new G(l,0)}return h.m(a,b,k)}throw Error("Invalid arity: "+(arguments.length-1));};f.A=2;f.B=h.B;f.v=e;f.a=d;f.b=c;f.m=h.m;return f}()}};
Ee.b=function(a,b){return new Wd(null,function(){var c=F(b);if(c){if(yd(c)){for(var d=kc(c),e=O(d),f=new Yd(Array(e),0),h=0;;)if(h<e)be(f,function(){var b=ob.b(d,h);return a.a?a.a(b):a.call(null,b)}()),h+=1;else break;return ae(f.Ga(),Ee.b(a,lc(c)))}return S(function(){var b=H(c);return a.a?a.a(b):a.call(null,b)}(),Ee.b(a,Hc(c)))}return null},null,null)};
Ee.c=function(a,b,c){return new Wd(null,function(){var d=F(b),e=F(c);if(d&&e){var f=S,h;h=H(d);var k=H(e);h=a.b?a.b(h,k):a.call(null,h,k);d=f(h,Ee.c(a,Hc(d),Hc(e)))}else d=null;return d},null,null)};Ee.u=function(a,b,c,d){return new Wd(null,function(){var e=F(b),f=F(c),h=F(d);if(e&&f&&h){var k=S,l;l=H(e);var m=H(f),n=H(h);l=a.c?a.c(l,m,n):a.call(null,l,m,n);e=k(l,Ee.u(a,Hc(e),Hc(f),Hc(h)))}else e=null;return e},null,null)};
Ee.m=function(a,b,c,d,e){var f=function k(a){return new Wd(null,function(){var b=Ee.b(F,a);return se(Jd,b)?S(Ee.b(H,b),k(Ee.b(Hc,b))):null},null,null)};return Ee.b(function(){return function(b){return je(a,b)}}(f),f(hd.m(e,d,T([c,b],0))))};Ee.B=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return Ee.m(b,a,c,d,e)};Ee.A=4;function Fe(a){return new Wd(null,function(){return S(a,Fe(a))},null,null)}function Ge(a,b){return je(fe,ke(Ee,a,b))}
function He(a,b){return new Wd(null,function(){var c=F(b);if(c){if(yd(c)){for(var d=kc(c),e=O(d),f=new Yd(Array(e),0),h=0;;)if(h<e){var k;k=ob.b(d,h);k=a.a?a.a(k):a.call(null,k);x(k)&&be(f,ob.b(d,h));h+=1}else break;return ae(f.Ga(),He(a,lc(c)))}d=H(c);c=Hc(c);return x(a.a?a.a(d):a.call(null,d))?S(d,He(a,c)):He(a,c)}return null},null,null)}function Ie(a,b){return He(ue(a),b)}
function Je(a){return function c(a){return new Wd(null,function(){return S(a,x(vd.a?vd.a(a):vd.call(null,a))?Ge(c,T([F.a?F.a(a):F.call(null,a)],0)):null)},null,null)}(a)}function Ke(a){return He(function(a){return!vd(a)},Hc(Je(a)))}
var Le=function Le(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 0:return Le.v();case 1:return Le.a(arguments[0]);case 2:return Le.b(arguments[0],arguments[1]);case 3:return Le.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};Le.v=function(){return id};Le.a=function(a){return a};
Le.b=function(a,b){return null!=a?null!=a&&(a.D&4||v===a.Vc)?cd(fc(gb(ec,dc(a),b)),qd(a)):gb(mb,a,b):gb(hd,Ic,b)};Le.c=function(a,b,c){return null!=a&&(a.D&4||v===a.Vc)?cd(fc(Kd(b,ge,dc(a),c)),qd(a)):Kd(b,hd,a,c)};Le.A=3;function Me(a,b){return fc(gb(function(b,d){return ge.b(b,a.a?a.a(d):a.call(null,d))},dc(id),b))}function Ne(a,b){this.R=a;this.f=b}
function Oe(a){return new Ne(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function Pe(a,b,c){a.f[b]=c}function Qe(a){return new Ne(a.R,cb(a.f))}function Re(a){a=a.i;return 32>a?0:a-1>>>5<<5}function Se(a,b,c){for(;;){if(0===b)return c;var d=Oe(a);d.f[0]=c;c=d;b-=5}}
var Te=function Te(b,c,d,e){var f=Qe(d),h=b.i-1>>>c&31;5===c?f.f[h]=e:(d=d.f[h],null!=d?(c-=5,b=Te.u?Te.u(b,c,d,e):Te.call(null,b,c,d,e)):b=Se(null,c-5,e),f.f[h]=b);return f};function Ue(a,b){throw Error([B.a("No item "),B.a(a),B.a(" in vector of length "),B.a(b)].join(""));}function Ve(a,b){if(b>=Re(a))return a.wa;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.f[b>>>d&31],d=e;else return c.f}function We(a,b){return 0<=b&&b<a.i?Ve(a,b):Ue(b,a.i)}
var Xe=function Xe(b,c,d,e,f){var h=Qe(d);if(0===c)h.f[e&31]=f;else{var k=e>>>c&31;c-=5;d=d.f[k];b=Xe.F?Xe.F(b,c,d,e,f):Xe.call(null,b,c,d,e,f);Pe(h,k,b)}return h},Ye=function Ye(b,c,d){var e=b.i-2>>>c&31;if(5<c){c-=5;var f=d.f[e];b=Ye.c?Ye.c(b,c,f):Ye.call(null,b,c,f);if(null==b&&0===e)return null;d=Qe(d);d.f[e]=b;return d}if(0===e)return null;d=Qe(d);d.f[e]=null;return d};function Ze(a,b,c,d,e,f){this.o=a;this.nc=b;this.f=c;this.Ia=d;this.start=e;this.end=f}
Ze.prototype.ua=function(){return this.o<this.end};Ze.prototype.next=function(){32===this.o-this.nc&&(this.f=Ve(this.Ia,this.o),this.nc+=32);var a=this.f[this.o&31];this.o+=1;return a};function $e(a,b,c){return new Ze(b,b-b%32,b<O(a)?Ve(a,b):null,a,b,c)}function V(a,b,c,d,e,f){this.j=a;this.i=b;this.shift=c;this.root=d;this.wa=e;this.s=f;this.l=167668511;this.D=8196}g=V.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return"number"===typeof b?this.W(null,b,c):c};
g.Eb=function(a,b,c){a=0;for(var d=c;;)if(a<this.i){var e=Ve(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=f+a,k=e[f],d=b.c?b.c(d,h,k):b.call(null,d,h,k),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.G=function(a,b){return We(this,b)[b&31]};g.W=function(a,b,c){return 0<=b&&b<this.i?Ve(this,b)[b&31]:c};
g.gb=function(a,b,c){if(0<=b&&b<this.i)return Re(this)<=b?(a=cb(this.wa),a[b&31]=c,new V(this.j,this.i,this.shift,this.root,a,null)):new V(this.j,this.i,this.shift,Xe(this,this.shift,this.root,b,c),this.wa,null);if(b===this.i)return this.S(null,c);throw Error([B.a("Index "),B.a(b),B.a(" out of bounds  [0,"),B.a(this.i),B.a("]")].join(""));};g.Ka=function(){return $e(this,0,this.i)};g.N=function(){return this.j};g.P=function(){return this.i};g.Tb=function(){return this.G(null,0)};
g.Ub=function(){return this.G(null,1)};g.eb=function(){return 0<this.i?this.G(null,this.i-1):null};g.fb=function(){if(0===this.i)throw Error("Can't pop empty vector");if(1===this.i)return Ob(id,this.j);if(1<this.i-Re(this))return new V(this.j,this.i-1,this.shift,this.root,this.wa.slice(0,-1),null);var a=Ve(this,this.i-2),b=Ye(this,this.shift,this.root),b=null==b?pe:b,c=this.i-1;return 5<this.shift&&null==b.f[1]?new V(this.j,c,this.shift-5,b.f[0],a,null):new V(this.j,c,this.shift,b,a,null)};
g.Fb=function(){return 0<this.i?new $c(this,this.i-1,null):null};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){if(b instanceof V)if(this.i===O(b))for(var c=this.Ka(null),d=rc(b);;)if(c.ua()){var e=c.next(),f=d.next();if(!L.b(e,f))return!1}else return!0;else return!1;else return ad(this,b)};g.Db=function(){return new af(this.i,this.shift,bf.a?bf.a(this.root):bf.call(null,this.root),cf.a?cf.a(this.wa):cf.call(null,this.wa))};g.T=function(){return cd(id,this.j)};
g.X=function(a,b){return Sc(this,b)};g.Y=function(a,b,c){a=0;for(var d=c;;)if(a<this.i){var e=Ve(this,a);c=e.length;a:for(var f=0;;)if(f<c)var h=e[f],d=b.b?b.b(d,h):b.call(null,d,h),f=f+1;else{e=d;break a}a+=c;d=e}else return d};g.Ba=function(a,b,c){if("number"===typeof b)return this.gb(null,b,c);throw Error("Vector's key for assoc must be a number.");};
g.K=function(){if(0===this.i)return null;if(32>=this.i)return new G(this.wa,0,null);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.f[0];else{a=a.f;break a}}return df?df(this,a,0,0):ef.call(null,this,a,0,0)};g.O=function(a,b){return new V(b,this.i,this.shift,this.root,this.wa,this.s)};
g.S=function(a,b){if(32>this.i-Re(this)){for(var c=this.wa.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.wa[e],e+=1;else break;d[c]=b;return new V(this.j,this.i+1,this.shift,this.root,d,null)}c=(d=this.i>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=Oe(null),Pe(d,0,this.root),Pe(d,1,Se(null,this.shift,new Ne(null,this.wa)))):d=Te(this,this.shift,this.root,new Ne(null,this.wa));return new V(this.j,this.i+1,c,d,[b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.W(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.G(null,c)};a.c=function(a,c,d){return this.W(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.G(null,a)};g.b=function(a,b){return this.W(null,a,b)};
var pe=new Ne(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),id=new V(null,0,5,pe,[],Nc);V.prototype[bb]=function(){return Kc(this)};function ff(a){if(Xa(a))a:{var b=a.length;if(32>b)a=new V(null,b,5,pe,a,null);else for(var c=a.slice(0,32),d=32,e=(new V(null,32,5,pe,c,null)).Db(null);;)if(d<b)c=d+1,e=ge.b(e,a[d]),d=c;else{a=fc(e);break a}}else a=fc(gb(ec,dc(id),a));return a}
function gf(a,b,c,d,e,f){this.Ja=a;this.node=b;this.o=c;this.off=d;this.j=e;this.s=f;this.l=32375020;this.D=1536}g=gf.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.Ca=function(){if(this.off+1<this.node.length){var a;a=this.Ja;var b=this.node,c=this.o,d=this.off+1;a=df?df(a,b,c,d):ef.call(null,a,b,c,d);return null==a?null:a}return this.Cc(null)};
g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(id,this.j)};g.X=function(a,b){var c;c=this.Ja;var d=this.o+this.off,e=O(this.Ja);c=hf?hf(c,d,e):jf.call(null,c,d,e);return Sc(c,b)};g.Y=function(a,b,c){a=this.Ja;var d=this.o+this.off,e=O(this.Ja);a=hf?hf(a,d,e):jf.call(null,a,d,e);return Tc(a,b,c)};g.Z=function(){return this.node[this.off]};
g.ea=function(){if(this.off+1<this.node.length){var a;a=this.Ja;var b=this.node,c=this.o,d=this.off+1;a=df?df(a,b,c,d):ef.call(null,a,b,c,d);return null==a?Ic:a}return this.jc(null)};g.K=function(){return this};g.pc=function(){var a=this.node;return new Zd(a,this.off,a.length)};g.jc=function(){var a=this.o+this.node.length;if(a<kb(this.Ja)){var b=this.Ja,c=Ve(this.Ja,a);return df?df(b,c,a,0):ef.call(null,b,c,a,0)}return Ic};
g.O=function(a,b){return kf?kf(this.Ja,this.node,this.o,this.off,b):ef.call(null,this.Ja,this.node,this.o,this.off,b)};g.S=function(a,b){return S(b,this)};g.Cc=function(){var a=this.o+this.node.length;if(a<kb(this.Ja)){var b=this.Ja,c=Ve(this.Ja,a);return df?df(b,c,a,0):ef.call(null,b,c,a,0)}return null};gf.prototype[bb]=function(){return Kc(this)};
function ef(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 3:return b=arguments[0],c=arguments[1],d=arguments[2],new gf(b,We(b,c),c,d,null,null);case 4:return df(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return kf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function df(a,b,c,d){return new gf(a,b,c,d,null,null)}
function kf(a,b,c,d,e){return new gf(a,b,c,d,e,null)}function lf(a,b,c,d,e){this.j=a;this.Ia=b;this.start=c;this.end=d;this.s=e;this.l=167666463;this.D=8192}g=lf.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return"number"===typeof b?this.W(null,b,c):c};
g.Eb=function(a,b,c){a=this.start;for(var d=0;;)if(a<this.end){var e=d,f=ob.b(this.Ia,a);c=b.c?b.c(c,e,f):b.call(null,c,e,f);d+=1;a+=1}else return c};g.G=function(a,b){return 0>b||this.end<=this.start+b?Ue(b,this.end-this.start):ob.b(this.Ia,this.start+b)};g.W=function(a,b,c){return 0>b||this.end<=this.start+b?c:ob.c(this.Ia,this.start+b,c)};
g.gb=function(a,b,c){a=this.start+b;if(0>b||this.end+1<=a)throw Error([B.a("Index "),B.a(b),B.a(" out of bounds [0,"),B.a(this.P(null)),B.a("]")].join(""));b=this.j;c=kd.c(this.Ia,a,c);var d=this.start,e=this.end;a+=1;a=e>a?e:a;return mf.F?mf.F(b,c,d,a,null):mf.call(null,b,c,d,a,null)};g.Ka=function(){return $e(this.Ia,this.start,this.end)};g.N=function(){return this.j};g.P=function(){return this.end-this.start};g.eb=function(){return ob.b(this.Ia,this.end-1)};
g.fb=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.j,b=this.Ia,c=this.start,d=this.end-1;return mf.F?mf.F(a,b,c,d,null):mf.call(null,a,b,c,d,null)};g.Fb=function(){return this.start!==this.end?new $c(this,this.end-this.start-1,null):null};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(id,this.j)};g.X=function(a,b){return Sc(this,b)};g.Y=function(a,b,c){return Tc(this,b,c)};
g.Ba=function(a,b,c){if("number"===typeof b)return this.gb(null,b,c);throw Error("Subvec's key for assoc must be a number.");};g.K=function(){var a=this;return function(b){return function d(e){return e===a.end?null:S(ob.b(a.Ia,e),new Wd(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};g.O=function(a,b){return mf.F?mf.F(b,this.Ia,this.start,this.end,this.s):mf.call(null,b,this.Ia,this.start,this.end,this.s)};
g.S=function(a,b){var c=this.j,d=Jb(this.Ia,this.end,b),e=this.start,f=this.end+1;return mf.F?mf.F(c,d,e,f,null):mf.call(null,c,d,e,f,null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.G(null,c);case 3:return this.W(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.G(null,c)};a.c=function(a,c,d){return this.W(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};
g.a=function(a){return this.G(null,a)};g.b=function(a,b){return this.W(null,a,b)};lf.prototype[bb]=function(){return Kc(this)};function mf(a,b,c,d,e){for(;;)if(b instanceof lf)c=b.start+c,d=b.start+d,b=b.Ia;else{var f=O(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new lf(a,b,c,d,e)}}
function jf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return b=arguments[0],hf(b,arguments[1],O(b));case 3:return hf(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function hf(a,b,c){return mf(null,a,b,c,null)}function nf(a,b){return a===b.R?b:new Ne(a,cb(b.f))}function bf(a){return new Ne({},cb(a.f))}
function cf(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];Ad(a,0,b,0,a.length);return b}var of=function of(b,c,d,e){d=nf(b.root.R,d);var f=b.i-1>>>c&31;if(5===c)b=e;else{var h=d.f[f];null!=h?(c-=5,b=of.u?of.u(b,c,h,e):of.call(null,b,c,h,e)):b=Se(b.root.R,c-5,e)}Pe(d,f,b);return d};function af(a,b,c,d){this.i=a;this.shift=b;this.root=c;this.wa=d;this.D=88;this.l=275}g=af.prototype;
g.ub=function(a,b){if(this.root.R){if(32>this.i-Re(this))this.wa[this.i&31]=b;else{var c=new Ne(this.root.R,this.wa),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.wa=d;if(this.i>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=Se(this.root.R,this.shift,c);this.root=new Ne(this.root.R,d);this.shift=e}else this.root=of(this,this.shift,this.root,c)}this.i+=1;return this}throw Error("conj! after persistent!");};g.Xb=function(){if(this.root.R){this.root.R=null;var a=this.i-Re(this),b=Array(a);Ad(this.wa,0,b,0,a);return new V(null,this.i,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
g.Gb=function(a,b,c){if("number"===typeof b)return pf(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
function pf(a,b,c){if(a.root.R){if(0<=b&&b<a.i){if(Re(a)<=b)a.wa[b&31]=c;else{var d=function(){return function f(d,k){var h=nf(a.root.R,k);if(0===d)h.f[b&31]=c;else{var m=b>>>d&31;Pe(h,m,f(d-5,h.f[m]))}return h}}(a).call(null,a.shift,a.root);a.root=d}return a}if(b===a.i)return a.ub(null,c);throw Error([B.a("Index "),B.a(b),B.a(" out of bounds for TransientVector of length"),B.a(a.i)].join(""));}throw Error("assoc! after persistent!");}
g.P=function(){if(this.root.R)return this.i;throw Error("count after persistent!");};g.G=function(a,b){if(this.root.R)return We(this,b)[b&31];throw Error("nth after persistent!");};g.W=function(a,b,c){return 0<=b&&b<this.i?this.G(null,b):c};g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return"number"===typeof b?this.W(null,b,c):c};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};function qf(a,b){this.Ib=a;this.ec=b}
qf.prototype.ua=function(){var a=null!=this.Ib&&F(this.Ib);return a?a:(a=null!=this.ec)?this.ec.ua():a};qf.prototype.next=function(){if(null!=this.Ib){var a=H(this.Ib);this.Ib=J(this.Ib);return a}if(null!=this.ec&&this.ec.ua())return this.ec.next();throw Error("No such element");};qf.prototype.remove=function(){return Error("Unsupported operation")};function rf(a,b,c,d){this.j=a;this.Fa=b;this.Va=c;this.s=d;this.l=31850572;this.D=0}g=rf.prototype;g.toString=function(){return tc(this)};
g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};g.Z=function(){return H(this.Fa)};
g.ea=function(){var a=J(this.Fa);return a?new rf(this.j,a,this.Va,null):null==this.Va?this.T(null):new rf(this.j,this.Va,null,null)};g.K=function(){return this};g.O=function(a,b){return new rf(b,this.Fa,this.Va,this.s)};g.S=function(a,b){return S(b,this)};rf.prototype[bb]=function(){return Kc(this)};function sf(a,b,c,d,e){this.j=a;this.count=b;this.Fa=c;this.Va=d;this.s=e;this.l=31858766;this.D=8192}g=sf.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,this.count.a?this.count.a(this):this.count.call(null,this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.Ka=function(){return new qf(this.Fa,rc(this.Va))};g.N=function(){return this.j};g.P=function(){return this.count};g.eb=function(){return H(this.Fa)};
g.fb=function(){if(x(this.Fa)){var a=J(this.Fa);return a?new sf(this.j,this.count-1,a,this.Va,null):new sf(this.j,this.count-1,F(this.Va),id,null)}return this};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(tf,this.j)};g.Z=function(){return H(this.Fa)};g.ea=function(){return Hc(F(this))};g.K=function(){var a=F(this.Va),b=this.Fa;return x(x(b)?b:a)?new rf(null,this.Fa,F(a),null):null};
g.O=function(a,b){return new sf(b,this.count,this.Fa,this.Va,this.s)};g.S=function(a,b){var c;x(this.Fa)?(c=this.Va,c=new sf(this.j,this.count+1,this.Fa,hd.b(x(c)?c:id,b),null)):c=new sf(this.j,this.count+1,hd.b(this.Fa,b),id,null);return c};var tf=new sf(null,0,null,id,Nc);sf.prototype[bb]=function(){return Kc(this)};function uf(){this.l=2097152;this.D=0}uf.prototype.equiv=function(a){return this.w(null,a)};uf.prototype.w=function(){return!1};var vf=new uf;
function wf(a,b){return Dd(wd(b)?O(a)===O(b)?se(function(a){return L.b(E.c(b,H(a),vf),gd(a))},a):null:null)}function xf(a){this.I=a}xf.prototype.next=function(){if(null!=this.I){var a=H(this.I),b=P.c(a,0,null),a=P.c(a,1,null);this.I=J(this.I);return{value:[b,a],done:!1}}return{value:null,done:!0}};function yf(a){this.I=a}yf.prototype.next=function(){if(null!=this.I){var a=H(this.I);this.I=J(this.I);return{value:[a,a],done:!1}}return{value:null,done:!0}};
function zf(a,b){var c;if(b instanceof U)a:{c=a.length;for(var d=b.Wa,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof U&&d===a[e].Wa){c=e;break a}e+=2}}else if(ca(b)||"number"===typeof b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof Fc)a:for(c=a.length,d=b.ab,e=0;;){if(c<=e){c=-1;break a}if(a[e]instanceof Fc&&d===a[e].ab){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=a.length,
d=0;;){if(c<=d){c=-1;break a}if(L.b(b,a[d])){c=d;break a}d+=2}return c}function Af(a,b,c){this.f=a;this.o=b;this.Aa=c;this.l=32374990;this.D=0}g=Af.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.Aa};g.Ca=function(){return this.o<this.f.length-2?new Af(this.f,this.o+2,this.Aa):null};g.P=function(){return(this.f.length-this.o)/2};g.L=function(){return Mc(this)};
g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.Aa)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return new V(null,2,5,pe,[this.f[this.o],this.f[this.o+1]],null)};g.ea=function(){return this.o<this.f.length-2?new Af(this.f,this.o+2,this.Aa):Ic};g.K=function(){return this};g.O=function(a,b){return new Af(this.f,this.o,b)};g.S=function(a,b){return S(b,this)};Af.prototype[bb]=function(){return Kc(this)};
function Bf(a,b,c){this.f=a;this.o=b;this.i=c}Bf.prototype.ua=function(){return this.o<this.i};Bf.prototype.next=function(){var a=new V(null,2,5,pe,[this.f[this.o],this.f[this.o+1]],null);this.o+=2;return a};function Pa(a,b,c,d){this.j=a;this.i=b;this.f=c;this.s=d;this.l=16647951;this.D=8196}g=Pa.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.keys=function(){return Kc(Cf.a?Cf.a(this):Cf.call(null,this))};g.entries=function(){return new xf(F(F(this)))};
g.values=function(){return Kc(Df.a?Df.a(this):Df.call(null,this))};g.has=function(a){return Ed(this,a)};g.get=function(a,b){return this.C(null,a,b)};g.forEach=function(a){for(var b=F(this),c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.b?a.b(f,h):a.call(null,f,h);e+=1}else if(b=F(b))yd(b)?(c=kc(b),b=lc(b),h=c,d=O(c),c=h):(c=H(b),h=P.c(c,0,null),f=P.c(c,1,null),a.b?a.b(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};
g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){a=zf(this.f,b);return-1===a?c:this.f[a+1]};g.Eb=function(a,b,c){a=this.f.length;for(var d=0;;)if(d<a){var e=this.f[d],f=this.f[d+1];c=b.c?b.c(c,e,f):b.call(null,c,e,f);d+=2}else return c};g.Ka=function(){return new Bf(this.f,0,2*this.i)};g.N=function(){return this.j};g.P=function(){return this.i};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Oc(this)};
g.w=function(a,b){if(null!=b&&(b.l&1024||v===b.Zc)){var c=this.f.length;if(this.i===b.P(null))for(var d=0;;)if(d<c){var e=b.C(null,this.f[d],Bd);if(e!==Bd)if(L.b(this.f[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return wf(this,b)};g.Db=function(){return new Ef({},this.f.length,cb(this.f))};g.T=function(){return Ob(re,this.j)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};
g.Sb=function(a,b){if(0<=zf(this.f,b)){var c=this.f.length,d=c-2;if(0===d)return this.T(null);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new Pa(this.j,this.i-1,d,null);L.b(b,this.f[e])||(d[f]=this.f[e],d[f+1]=this.f[e+1],f+=2);e+=2}}else return this};
g.Ba=function(a,b,c){a=zf(this.f,b);if(-1===a){if(this.i<Ff){a=this.f;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new Pa(this.j,this.i+1,e,null)}return Ob(xb(Le.b(Gf,this),b,c),this.j)}if(c===this.f[a+1])return this;b=cb(this.f);b[a+1]=c;return new Pa(this.j,this.i,b,null)};g.Pb=function(a,b){return-1!==zf(this.f,b)};g.K=function(){var a=this.f;return 0<=a.length-2?new Af(a,0,null):null};g.O=function(a,b){return new Pa(b,this.i,this.f,this.s)};
g.S=function(a,b){if(xd(b))return this.Ba(null,ob.b(b,0),ob.b(b,1));for(var c=this,d=F(b);;){if(null==d)return c;var e=H(d);if(xd(e))c=c.Ba(null,ob.b(e,0),ob.b(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};var re=new Pa(null,0,[],Pc),Ff=8;
function ld(a){for(var b=[],c=0;;)if(c<a.length){var d=a[c],e=a[c+1],f=zf(b,d);-1===f?(f=b,f.push(d),f.push(e)):b[f+1]=e;c+=2}else break;return new Pa(null,b.length/2,b,null)}Pa.prototype[bb]=function(){return Kc(this)};function Ef(a,b,c){this.Hb=a;this.yb=b;this.f=c;this.l=258;this.D=56}g=Ef.prototype;g.P=function(){if(x(this.Hb))return Ld(this.yb,2);throw Error("count after persistent!");};g.H=function(a,b){return this.C(null,b,null)};
g.C=function(a,b,c){if(x(this.Hb))return a=zf(this.f,b),-1===a?c:this.f[a+1];throw Error("lookup after persistent!");};g.ub=function(a,b){if(x(this.Hb)){if(null!=b?b.l&2048||v===b.$c||(b.l?0:y(Ab,b)):y(Ab,b))return this.Gb(null,Hf.a?Hf.a(b):Hf.call(null,b),If.a?If.a(b):If.call(null,b));for(var c=F(b),d=this;;){var e=H(c);if(x(e))c=J(c),d=d.Gb(null,Hf.a?Hf.a(e):Hf.call(null,e),If.a?If.a(e):If.call(null,e));else return d}}else throw Error("conj! after persistent!");};
g.Xb=function(){if(x(this.Hb))return this.Hb=!1,new Pa(null,Ld(this.yb,2),this.f,null);throw Error("persistent! called twice");};g.Gb=function(a,b,c){if(x(this.Hb)){a=zf(this.f,b);if(-1===a)return this.yb+2<=2*Ff?(this.yb+=2,this.f.push(b),this.f.push(c),this):he(Jf.b?Jf.b(this.yb,this.f):Jf.call(null,this.yb,this.f),b,c);c!==this.f[a+1]&&(this.f[a+1]=c);return this}throw Error("assoc! after persistent!");};function Jf(a,b){for(var c=dc(Gf),d=0;;)if(d<a)c=gc(c,b[d],b[d+1]),d+=2;else return c}
function Kf(){this.val=!1}function Mf(a,b){return a===b?!0:a===b||a instanceof U&&b instanceof U&&a.Wa===b.Wa?!0:L.b(a,b)}function Nf(a,b,c){a=cb(a);a[b]=c;return a}function Of(a,b){var c=Array(a.length-2);Ad(a,0,c,0,2*b);Ad(a,2*(b+1),c,2*b,c.length-2*b);return c}function Pf(a,b,c,d){a=a.vb(b);a.f[c]=d;return a}function Qf(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var h=a[e+1];c=b.c?b.c(f,c,h):b.call(null,f,c,h)}else c=a[e+1],c=null!=c?c.xb(b,f):f;e+=2;f=c}else return f}
function Rf(a,b,c,d){this.f=a;this.o=b;this.cc=c;this.Ua=d}Rf.prototype.advance=function(){for(var a=this.f.length;;)if(this.o<a){var b=this.f[this.o],c=this.f[this.o+1];null!=b?b=this.cc=new V(null,2,5,pe,[b,c],null):null!=c?(b=rc(c),b=b.ua()?this.Ua=b:!1):b=!1;this.o+=2;if(b)return!0}else return!1};Rf.prototype.ua=function(){var a=null!=this.cc;return a?a:(a=null!=this.Ua)?a:this.advance()};
Rf.prototype.next=function(){if(null!=this.cc){var a=this.cc;this.cc=null;return a}if(null!=this.Ua)return a=this.Ua.next(),this.Ua.ua()||(this.Ua=null),a;if(this.advance())return this.next();throw Error("No such element");};Rf.prototype.remove=function(){return Error("Unsupported operation")};function Sf(a,b,c){this.R=a;this.V=b;this.f=c}g=Sf.prototype;g.vb=function(a){if(a===this.R)return this;var b=Md(this.V),c=Array(0>b?4:2*(b+1));Ad(this.f,0,c,0,2*b);return new Sf(a,this.V,c)};
g.$b=function(){return Tf?Tf(this.f):Uf.call(null,this.f)};g.xb=function(a,b){return Qf(this.f,a,b)};g.qb=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.V&e))return d;var f=Md(this.V&e-1),e=this.f[2*f],f=this.f[2*f+1];return null==e?f.qb(a+5,b,c,d):Mf(c,e)?f:d};
g.Ta=function(a,b,c,d,e,f){var h=1<<(c>>>b&31),k=Md(this.V&h-1);if(0===(this.V&h)){var l=Md(this.V);if(2*l<this.f.length){a=this.vb(a);b=a.f;f.val=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];--l;--c;--f}b[2*k]=d;b[2*k+1]=e;a.V|=h;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=Vf.Ta(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.V>>>d&1)&&(k[d]=null!=this.f[e]?Vf.Ta(a,b+5,Cc(this.f[e]),this.f[e],this.f[e+1],f):this.f[e+1],e+=2),d+=1;else break;return new Wf(a,l+1,k)}b=Array(2*(l+4));Ad(this.f,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;Ad(this.f,2*k,b,2*(k+1),2*(l-k));f.val=!0;a=this.vb(a);a.f=b;a.V|=h;return a}l=this.f[2*k];h=this.f[2*k+1];if(null==l)return l=h.Ta(a,b+5,c,d,e,f),l===h?this:Pf(this,a,2*k+1,l);if(Mf(d,l))return e===h?this:Pf(this,a,2*k+1,e);f.val=!0;f=b+5;d=Xf?Xf(a,f,l,h,c,d,e):Yf.call(null,a,f,l,h,c,d,e);e=2*k;
k=2*k+1;a=this.vb(a);a.f[e]=null;a.f[k]=d;return a};
g.Sa=function(a,b,c,d,e){var f=1<<(b>>>a&31),h=Md(this.V&f-1);if(0===(this.V&f)){var k=Md(this.V);if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[b>>>a&31]=Vf.Sa(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.V>>>c&1)&&(h[c]=null!=this.f[d]?Vf.Sa(a+5,Cc(this.f[d]),this.f[d],this.f[d+1],e):this.f[d+1],d+=2),c+=1;else break;return new Wf(null,k+1,h)}a=Array(2*(k+1));Ad(this.f,
0,a,0,2*h);a[2*h]=c;a[2*h+1]=d;Ad(this.f,2*h,a,2*(h+1),2*(k-h));e.val=!0;return new Sf(null,this.V|f,a)}var l=this.f[2*h],f=this.f[2*h+1];if(null==l)return k=f.Sa(a+5,b,c,d,e),k===f?this:new Sf(null,this.V,Nf(this.f,2*h+1,k));if(Mf(c,l))return d===f?this:new Sf(null,this.V,Nf(this.f,2*h+1,d));e.val=!0;e=this.V;k=this.f;a+=5;a=Zf?Zf(a,l,f,b,c,d):Yf.call(null,a,l,f,b,c,d);c=2*h;h=2*h+1;d=cb(k);d[c]=null;d[h]=a;return new Sf(null,e,d)};
g.ac=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.V&d))return this;var e=Md(this.V&d-1),f=this.f[2*e],h=this.f[2*e+1];return null==f?(a=h.ac(a+5,b,c),a===h?this:null!=a?new Sf(null,this.V,Nf(this.f,2*e+1,a)):this.V===d?null:new Sf(null,this.V^d,Of(this.f,e))):Mf(c,f)?new Sf(null,this.V^d,Of(this.f,e)):this};g.Ka=function(){return new Rf(this.f,0,null,null)};var Vf=new Sf(null,0,[]);function $f(a,b,c){this.f=a;this.o=b;this.Ua=c}
$f.prototype.ua=function(){for(var a=this.f.length;;){if(null!=this.Ua&&this.Ua.ua())return!0;if(this.o<a){var b=this.f[this.o];this.o+=1;null!=b&&(this.Ua=rc(b))}else return!1}};$f.prototype.next=function(){if(this.ua())return this.Ua.next();throw Error("No such element");};$f.prototype.remove=function(){return Error("Unsupported operation")};function Wf(a,b,c){this.R=a;this.i=b;this.f=c}g=Wf.prototype;g.vb=function(a){return a===this.R?this:new Wf(a,this.i,cb(this.f))};
g.$b=function(){return ag?ag(this.f):bg.call(null,this.f)};g.xb=function(a,b){for(var c=this.f.length,d=0,e=b;;)if(d<c){var f=this.f[d];null!=f&&(e=f.xb(a,e));d+=1}else return e};g.qb=function(a,b,c,d){var e=this.f[b>>>a&31];return null!=e?e.qb(a+5,b,c,d):d};g.Ta=function(a,b,c,d,e,f){var h=c>>>b&31,k=this.f[h];if(null==k)return a=Pf(this,a,h,Vf.Ta(a,b+5,c,d,e,f)),a.i+=1,a;b=k.Ta(a,b+5,c,d,e,f);return b===k?this:Pf(this,a,h,b)};
g.Sa=function(a,b,c,d,e){var f=b>>>a&31,h=this.f[f];if(null==h)return new Wf(null,this.i+1,Nf(this.f,f,Vf.Sa(a+5,b,c,d,e)));a=h.Sa(a+5,b,c,d,e);return a===h?this:new Wf(null,this.i,Nf(this.f,f,a))};
g.ac=function(a,b,c){var d=b>>>a&31,e=this.f[d];if(null!=e){a=e.ac(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.i)a:{e=this.f;a=e.length;b=Array(2*(this.i-1));c=0;for(var f=1,h=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,h|=1<<c),c+=1;else{d=new Sf(null,h,b);break a}}else d=new Wf(null,this.i-1,Nf(this.f,d,a));else d=new Wf(null,this.i,Nf(this.f,d,a));return d}return this};g.Ka=function(){return new $f(this.f,0,null)};
function cg(a,b,c){b*=2;for(var d=0;;)if(d<b){if(Mf(c,a[d]))return d;d+=2}else return-1}function dg(a,b,c,d){this.R=a;this.hb=b;this.i=c;this.f=d}g=dg.prototype;g.vb=function(a){if(a===this.R)return this;var b=Array(2*(this.i+1));Ad(this.f,0,b,0,2*this.i);return new dg(a,this.hb,this.i,b)};g.$b=function(){return Tf?Tf(this.f):Uf.call(null,this.f)};g.xb=function(a,b){return Qf(this.f,a,b)};g.qb=function(a,b,c,d){a=cg(this.f,this.i,c);return 0>a?d:Mf(c,this.f[a])?this.f[a+1]:d};
g.Ta=function(a,b,c,d,e,f){if(c===this.hb){b=cg(this.f,this.i,d);if(-1===b){if(this.f.length>2*this.i)return b=2*this.i,c=2*this.i+1,a=this.vb(a),a.f[b]=d,a.f[c]=e,f.val=!0,a.i+=1,a;c=this.f.length;b=Array(c+2);Ad(this.f,0,b,0,c);b[c]=d;b[c+1]=e;f.val=!0;d=this.i+1;a===this.R?(this.f=b,this.i=d,a=this):a=new dg(this.R,this.hb,d,b);return a}return this.f[b+1]===e?this:Pf(this,a,b+1,e)}return(new Sf(a,1<<(this.hb>>>b&31),[null,this,null,null])).Ta(a,b,c,d,e,f)};
g.Sa=function(a,b,c,d,e){return b===this.hb?(a=cg(this.f,this.i,c),-1===a?(a=2*this.i,b=Array(a+2),Ad(this.f,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new dg(null,this.hb,this.i+1,b)):L.b(this.f[a+1],d)?this:new dg(null,this.hb,this.i,Nf(this.f,a+1,d))):(new Sf(null,1<<(this.hb>>>a&31),[null,this])).Sa(a,b,c,d,e)};g.ac=function(a,b,c){a=cg(this.f,this.i,c);return-1===a?this:1===this.i?null:new dg(null,this.hb,this.i-1,Of(this.f,Ld(a,2)))};g.Ka=function(){return new Rf(this.f,0,null,null)};
function Yf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 6:return Zf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return Xf(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}
function Zf(a,b,c,d,e,f){var h=Cc(b);if(h===d)return new dg(null,h,2,[b,c,e,f]);var k=new Kf;return Vf.Sa(a,h,b,c,k).Sa(a,d,e,f,k)}function Xf(a,b,c,d,e,f,h){var k=Cc(c);if(k===e)return new dg(null,k,2,[c,d,f,h]);var l=new Kf;return Vf.Ta(a,b,k,c,d,l).Ta(a,b,e,f,h,l)}function eg(a,b,c,d,e){this.j=a;this.rb=b;this.o=c;this.I=d;this.s=e;this.l=32374860;this.D=0}g=eg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};g.X=function(a,b){return dd(b,this)};
g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return null==this.I?new V(null,2,5,pe,[this.rb[this.o],this.rb[this.o+1]],null):H(this.I)};g.ea=function(){var a=this,b=null==a.I?function(){var b=a.rb,d=a.o+2;return fg?fg(b,d,null):Uf.call(null,b,d,null)}():function(){var b=a.rb,d=a.o,e=J(a.I);return fg?fg(b,d,e):Uf.call(null,b,d,e)}();return null!=b?b:Ic};g.K=function(){return this};g.O=function(a,b){return new eg(b,this.rb,this.o,this.I,this.s)};g.S=function(a,b){return S(b,this)};
eg.prototype[bb]=function(){return Kc(this)};function Uf(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Tf(arguments[0]);case 3:return fg(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function Tf(a){return fg(a,0,null)}
function fg(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new eg(null,a,b,null,null);var d=a[b+1];if(x(d)&&(d=d.$b(),x(d)))return new eg(null,a,b+2,d,null);b+=2}else return null;else return new eg(null,a,b,c,null)}function gg(a,b,c,d,e){this.j=a;this.rb=b;this.o=c;this.I=d;this.s=e;this.l=32374860;this.D=0}g=gg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};g.X=function(a,b){return dd(b,this)};
g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return H(this.I)};g.ea=function(){var a;a=this.rb;var b=this.o,c=J(this.I);a=hg?hg(null,a,b,c):bg.call(null,null,a,b,c);return null!=a?a:Ic};g.K=function(){return this};g.O=function(a,b){return new gg(b,this.rb,this.o,this.I,this.s)};g.S=function(a,b){return S(b,this)};gg.prototype[bb]=function(){return Kc(this)};
function bg(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return ag(arguments[0]);case 4:return hg(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([B.a("Invalid arity: "),B.a(b.length)].join(""));}}function ag(a){return hg(null,a,0,null)}
function hg(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(x(e)&&(e=e.$b(),x(e)))return new gg(a,b,c+1,e,null);c+=1}else return null;else return new gg(a,b,c,d,null)}function ig(a,b,c){this.ya=a;this.Sc=b;this.uc=c}ig.prototype.ua=function(){return!this.uc||this.Sc.ua()};ig.prototype.next=function(){if(this.uc)return this.Sc.next();this.uc=!0;return new V(null,2,5,pe,[null,this.ya],null)};ig.prototype.remove=function(){return Error("Unsupported operation")};
function jg(a,b,c,d,e,f){this.j=a;this.i=b;this.root=c;this.xa=d;this.ya=e;this.s=f;this.l=16123663;this.D=8196}g=jg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.keys=function(){return Kc(Cf.a?Cf.a(this):Cf.call(null,this))};g.entries=function(){return new xf(F(F(this)))};g.values=function(){return Kc(Df.a?Df.a(this):Df.call(null,this))};g.has=function(a){return Ed(this,a)};g.get=function(a,b){return this.C(null,a,b)};
g.forEach=function(a){for(var b=F(this),c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.b?a.b(f,h):a.call(null,f,h);e+=1}else if(b=F(b))yd(b)?(c=kc(b),b=lc(b),h=c,d=O(c),c=h):(c=H(b),h=P.c(c,0,null),f=P.c(c,1,null),a.b?a.b(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return null==b?this.xa?this.ya:c:null==this.root?c:this.root.qb(0,Cc(b),b,c)};
g.Eb=function(a,b,c){a=this.xa?b.c?b.c(c,null,this.ya):b.call(null,c,null,this.ya):c;return null!=this.root?this.root.xb(b,a):a};g.Ka=function(){var a=this.root?rc(this.root):oe();return this.xa?new ig(this.ya,a,!1):a};g.N=function(){return this.j};g.P=function(){return this.i};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Oc(this)};g.w=function(a,b){return wf(this,b)};g.Db=function(){return new kg({},this.root,this.i,this.xa,this.ya)};g.T=function(){return Ob(Gf,this.j)};
g.Sb=function(a,b){if(null==b)return this.xa?new jg(this.j,this.i-1,this.root,!1,null,null):this;if(null==this.root)return this;var c=this.root.ac(0,Cc(b),b);return c===this.root?this:new jg(this.j,this.i-1,c,this.xa,this.ya,null)};g.Ba=function(a,b,c){if(null==b)return this.xa&&c===this.ya?this:new jg(this.j,this.xa?this.i:this.i+1,this.root,!0,c,null);a=new Kf;b=(null==this.root?Vf:this.root).Sa(0,Cc(b),b,c,a);return b===this.root?this:new jg(this.j,a.val?this.i+1:this.i,b,this.xa,this.ya,null)};
g.Pb=function(a,b){return null==b?this.xa:null==this.root?!1:this.root.qb(0,Cc(b),b,Bd)!==Bd};g.K=function(){if(0<this.i){var a=null!=this.root?this.root.$b():null;return this.xa?S(new V(null,2,5,pe,[null,this.ya],null),a):a}return null};g.O=function(a,b){return new jg(b,this.i,this.root,this.xa,this.ya,this.s)};
g.S=function(a,b){if(xd(b))return this.Ba(null,ob.b(b,0),ob.b(b,1));for(var c=this,d=F(b);;){if(null==d)return c;var e=H(d);if(xd(e))c=c.Ba(null,ob.b(e,0),ob.b(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};var Gf=new jg(null,0,null,!1,null,Pc);jg.prototype[bb]=function(){return Kc(this)};
function kg(a,b,c,d,e){this.R=a;this.root=b;this.count=c;this.xa=d;this.ya=e;this.l=258;this.D=56}function lg(a,b,c){if(a.R){if(null==b)a.ya!==c&&(a.ya=c),a.xa||(a.count+=1,a.xa=!0);else{var d=new Kf;b=(null==a.root?Vf:a.root).Ta(a.R,0,Cc(b),b,c,d);b!==a.root&&(a.root=b);d.val&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}g=kg.prototype;g.P=function(){if(this.R)return this.count;throw Error("count after persistent!");};
g.H=function(a,b){return null==b?this.xa?this.ya:null:null==this.root?null:this.root.qb(0,Cc(b),b)};g.C=function(a,b,c){return null==b?this.xa?this.ya:c:null==this.root?c:this.root.qb(0,Cc(b),b,c)};
g.ub=function(a,b){var c;a:if(this.R)if(null!=b?b.l&2048||v===b.$c||(b.l?0:y(Ab,b)):y(Ab,b))c=lg(this,Hf.a?Hf.a(b):Hf.call(null,b),If.a?If.a(b):If.call(null,b));else{c=F(b);for(var d=this;;){var e=H(c);if(x(e))c=J(c),d=lg(d,Hf.a?Hf.a(e):Hf.call(null,e),If.a?If.a(e):If.call(null,e));else{c=d;break a}}}else throw Error("conj! after persistent");return c};
g.Xb=function(){var a;if(this.R)this.R=null,a=new jg(null,this.count,this.root,this.xa,this.ya,null);else throw Error("persistent! called twice");return a};g.Gb=function(a,b,c){return lg(this,b,c)};function mg(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=hd.b(d,a),a=b;else return d}function ng(a,b,c,d,e){this.j=a;this.stack=b;this.hc=c;this.i=d;this.s=e;this.l=32374862;this.D=0}g=ng.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.j};g.P=function(){return 0>this.i?O(J(this))+1:this.i};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};
g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return rd(this.stack)};g.ea=function(){var a=H(this.stack),a=mg(this.hc?a.right:a.left,J(this.stack),this.hc);return null!=a?new ng(null,a,this.hc,this.i-1,null):Ic};g.K=function(){return this};g.O=function(a,b){return new ng(b,this.stack,this.hc,this.i,this.s)};g.S=function(a,b){return S(b,this)};ng.prototype[bb]=function(){return Kc(this)};function og(a,b,c){return new ng(null,mg(a,null,b),b,c,null)}
function pg(a,b,c,d){return c instanceof W?c.left instanceof W?new W(c.key,c.val,c.left.cb(),new qg(a,b,c.right,d,null),null):c.right instanceof W?new W(c.right.key,c.right.val,new qg(c.key,c.val,c.left,c.right.left,null),new qg(a,b,c.right.right,d,null),null):new qg(a,b,c,d,null):new qg(a,b,c,d,null)}
function rg(a,b,c,d){return d instanceof W?d.right instanceof W?new W(d.key,d.val,new qg(a,b,c,d.left,null),d.right.cb(),null):d.left instanceof W?new W(d.left.key,d.left.val,new qg(a,b,c,d.left.left,null),new qg(d.key,d.val,d.left.right,d.right,null),null):new qg(a,b,c,d,null):new qg(a,b,c,d,null)}
function sg(a,b,c,d){if(c instanceof W)return new W(a,b,c.cb(),d,null);if(d instanceof qg)return rg(a,b,c,d.dc());if(d instanceof W&&d.left instanceof qg)return new W(d.left.key,d.left.val,new qg(a,b,c,d.left.left,null),rg(d.key,d.val,d.left.right,d.right.dc()),null);throw Error("red-black tree invariant violation");}
function tg(a,b,c,d){if(d instanceof W)return new W(a,b,c,d.cb(),null);if(c instanceof qg)return pg(a,b,c.dc(),d);if(c instanceof W&&c.right instanceof qg)return new W(c.right.key,c.right.val,pg(c.key,c.val,c.left.dc(),c.right.left),new qg(a,b,c.right.right,d,null),null);throw Error("red-black tree invariant violation");}
var ug=function ug(b,c,d){var e=null!=b.left?function(){var e=b.left;return ug.c?ug.c(e,c,d):ug.call(null,e,c,d)}():d,f=function(){var d=b.key,f=b.val;return c.c?c.c(e,d,f):c.call(null,e,d,f)}();return null!=b.right?function(){var d=b.right;return ug.c?ug.c(d,c,f):ug.call(null,d,c,f)}():f};function qg(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.s=e;this.l=32402207;this.D=0}g=qg.prototype;
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();g.yc=function(a){return a.Ac(this)};g.dc=function(){return new W(this.key,this.val,this.left,this.right,null)};g.cb=function(){return this};g.xc=function(a){return a.zc(this)};g.replace=function(a,b,c,d){return new qg(a,b,c,d,null)};
g.zc=function(a){return new qg(a.key,a.val,this,a.right,null)};g.Ac=function(a){return new qg(a.key,a.val,a.left,this,null)};g.xb=function(a,b){return ug(this,a,b)};g.H=function(a,b){return this.W(null,b,null)};g.C=function(a,b,c){return this.W(null,b,c)};g.G=function(a,b){return 0===b?this.key:1===b?this.val:null};g.W=function(a,b,c){return 0===b?this.key:1===b?this.val:c};g.gb=function(a,b,c){return(new V(null,2,5,pe,[this.key,this.val],null)).gb(null,b,c)};g.N=function(){return null};g.P=function(){return 2};
g.Tb=function(){return this.key};g.Ub=function(){return this.val};g.eb=function(){return this.val};g.fb=function(){return new V(null,1,5,pe,[this.key],null)};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return id};g.X=function(a,b){return Sc(this,b)};g.Y=function(a,b,c){return Tc(this,b,c)};g.Ba=function(a,b,c){return kd.c(new V(null,2,5,pe,[this.key,this.val],null),b,c)};
g.K=function(){var a=this.key;return mb(mb(Ic,this.val),a)};g.O=function(a,b){return cd(new V(null,2,5,pe,[this.key,this.val],null),b)};g.S=function(a,b){return new V(null,3,5,pe,[this.key,this.val,b],null)};g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();
g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};qg.prototype[bb]=function(){return Kc(this)};function W(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.s=e;this.l=32402207;this.D=0}g=W.prototype;
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();g.yc=function(a){return new W(this.key,this.val,this.left,a,null)};g.dc=function(){throw Error("red-black tree invariant violation");};g.cb=function(){return new qg(this.key,this.val,this.left,this.right,null)};
g.xc=function(a){return new W(this.key,this.val,a,this.right,null)};g.replace=function(a,b,c,d){return new W(a,b,c,d,null)};g.zc=function(a){return this.left instanceof W?new W(this.key,this.val,this.left.cb(),new qg(a.key,a.val,this.right,a.right,null),null):this.right instanceof W?new W(this.right.key,this.right.val,new qg(this.key,this.val,this.left,this.right.left,null),new qg(a.key,a.val,this.right.right,a.right,null),null):new qg(a.key,a.val,this,a.right,null)};
g.Ac=function(a){return this.right instanceof W?new W(this.key,this.val,new qg(a.key,a.val,a.left,this.left,null),this.right.cb(),null):this.left instanceof W?new W(this.left.key,this.left.val,new qg(a.key,a.val,a.left,this.left.left,null),new qg(this.key,this.val,this.left.right,this.right,null),null):new qg(a.key,a.val,a.left,this,null)};g.xb=function(a,b){return ug(this,a,b)};g.H=function(a,b){return this.W(null,b,null)};g.C=function(a,b,c){return this.W(null,b,c)};
g.G=function(a,b){return 0===b?this.key:1===b?this.val:null};g.W=function(a,b,c){return 0===b?this.key:1===b?this.val:c};g.gb=function(a,b,c){return(new V(null,2,5,pe,[this.key,this.val],null)).gb(null,b,c)};g.N=function(){return null};g.P=function(){return 2};g.Tb=function(){return this.key};g.Ub=function(){return this.val};g.eb=function(){return this.val};g.fb=function(){return new V(null,1,5,pe,[this.key],null)};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};
g.w=function(a,b){return ad(this,b)};g.T=function(){return id};g.X=function(a,b){return Sc(this,b)};g.Y=function(a,b,c){return Tc(this,b,c)};g.Ba=function(a,b,c){return kd.c(new V(null,2,5,pe,[this.key,this.val],null),b,c)};g.K=function(){var a=this.key;return mb(mb(Ic,this.val),a)};g.O=function(a,b){return cd(new V(null,2,5,pe,[this.key,this.val],null),b)};g.S=function(a,b){return new V(null,3,5,pe,[this.key,this.val,b],null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};W.prototype[bb]=function(){return Kc(this)};
var vg=function vg(b,c,d,e,f){if(null==c)return new W(d,e,null,null,null);var h=function(){var e=c.key;return b.b?b.b(d,e):b.call(null,d,e)}();if(0===h)return f[0]=c,null;if(0>h)return h=function(){var h=c.left;return vg.F?vg.F(b,h,d,e,f):vg.call(null,b,h,d,e,f)}(),null!=h?c.xc(h):null;h=function(){var h=c.right;return vg.F?vg.F(b,h,d,e,f):vg.call(null,b,h,d,e,f)}();return null!=h?c.yc(h):null},wg=function wg(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof W){if(c instanceof W){var d=
function(){var d=b.right,f=c.left;return wg.b?wg.b(d,f):wg.call(null,d,f)}();return d instanceof W?new W(d.key,d.val,new W(b.key,b.val,b.left,d.left,null),new W(c.key,c.val,d.right,c.right,null),null):new W(b.key,b.val,b.left,new W(c.key,c.val,d,c.right,null),null)}return new W(b.key,b.val,b.left,function(){var d=b.right;return wg.b?wg.b(d,c):wg.call(null,d,c)}(),null)}if(c instanceof W)return new W(c.key,c.val,function(){var d=c.left;return wg.b?wg.b(b,d):wg.call(null,b,d)}(),c.right,null);d=function(){var d=
b.right,f=c.left;return wg.b?wg.b(d,f):wg.call(null,d,f)}();return d instanceof W?new W(d.key,d.val,new qg(b.key,b.val,b.left,d.left,null),new qg(c.key,c.val,d.right,c.right,null),null):sg(b.key,b.val,b.left,new qg(c.key,c.val,d,c.right,null))},xg=function xg(b,c,d,e){if(null!=c){var f=function(){var e=c.key;return b.b?b.b(d,e):b.call(null,d,e)}();if(0===f)return e[0]=c,wg(c.left,c.right);if(0>f)return f=function(){var f=c.left;return xg.u?xg.u(b,f,d,e):xg.call(null,b,f,d,e)}(),null!=f||null!=e[0]?
c.left instanceof qg?sg(c.key,c.val,f,c.right):new W(c.key,c.val,f,c.right,null):null;f=function(){var f=c.right;return xg.u?xg.u(b,f,d,e):xg.call(null,b,f,d,e)}();return null!=f||null!=e[0]?c.right instanceof qg?tg(c.key,c.val,c.left,f):new W(c.key,c.val,c.left,f,null):null}return null},yg=function yg(b,c,d,e){var f=c.key,h=b.b?b.b(d,f):b.call(null,d,f);return 0===h?c.replace(f,e,c.left,c.right):0>h?c.replace(f,c.val,function(){var f=c.left;return yg.u?yg.u(b,f,d,e):yg.call(null,b,f,d,e)}(),c.right):
c.replace(f,c.val,c.left,function(){var f=c.right;return yg.u?yg.u(b,f,d,e):yg.call(null,b,f,d,e)}())};function zg(a,b,c,d,e){this.Ma=a;this.mb=b;this.i=c;this.j=d;this.s=e;this.l=418776847;this.D=8192}g=zg.prototype;
g.forEach=function(a){for(var b=F(this),c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.b?a.b(f,h):a.call(null,f,h);e+=1}else if(b=F(b))yd(b)?(c=kc(b),b=lc(b),h=c,d=O(c),c=h):(c=H(b),h=P.c(c,0,null),f=P.c(c,1,null),a.b?a.b(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.get=function(a,b){return this.C(null,a,b)};g.entries=function(){return new xf(F(F(this)))};g.toString=function(){return tc(this)};
g.keys=function(){return Kc(Cf.a?Cf.a(this):Cf.call(null,this))};g.values=function(){return Kc(Df.a?Df.a(this):Df.call(null,this))};g.equiv=function(a){return this.w(null,a)};function Ag(a,b){for(var c=a.mb;;)if(null!=c){var d;d=c.key;d=a.Ma.b?a.Ma.b(b,d):a.Ma.call(null,b,d);if(0===d)return c;c=0>d?c.left:c.right}else return null}g.has=function(a){return Ed(this,a)};g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){a=Ag(this,b);return null!=a?a.val:c};
g.Eb=function(a,b,c){return null!=this.mb?ug(this.mb,b,c):c};g.N=function(){return this.j};g.P=function(){return this.i};g.Fb=function(){return 0<this.i?og(this.mb,!1,this.i):null};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Oc(this)};g.w=function(a,b){return wf(this,b)};g.T=function(){return new zg(this.Ma,null,0,this.j,0)};
g.Sb=function(a,b){var c=[null],d=xg(this.Ma,this.mb,b,c);return null==d?null==P.b(c,0)?this:new zg(this.Ma,null,0,this.j,null):new zg(this.Ma,d.cb(),this.i-1,this.j,null)};g.Ba=function(a,b,c){a=[null];var d=vg(this.Ma,this.mb,b,c,a);return null==d?(a=P.b(a,0),L.b(c,a.val)?this:new zg(this.Ma,yg(this.Ma,this.mb,b,c),this.i,this.j,null)):new zg(this.Ma,d.cb(),this.i+1,this.j,null)};g.Pb=function(a,b){return null!=Ag(this,b)};g.K=function(){return 0<this.i?og(this.mb,!0,this.i):null};
g.O=function(a,b){return new zg(this.Ma,this.mb,this.i,b,this.s)};g.S=function(a,b){if(xd(b))return this.Ba(null,ob.b(b,0),ob.b(b,1));for(var c=this,d=F(b);;){if(null==d)return c;var e=H(d);if(xd(e))c=c.Ba(null,ob.b(e,0),ob.b(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};var Bg=new zg(Fd,null,0,null,Pc);zg.prototype[bb]=function(){return Kc(this)};
var Ae=function Ae(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;c=0<c.length?new G(c.slice(0),0,null):null;return Ae.m(c)};Ae.m=function(a){a=F(a);for(var b=dc(Gf);;)if(a){var c=J(J(a)),b=he(b,H(a),gd(a));a=c}else return fc(b)};Ae.A=0;Ae.B=function(a){return Ae.m(F(a))};function Cg(a,b){this.J=a;this.Aa=b;this.l=32374988;this.D=0}g=Cg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.Aa};g.Ca=function(){var a=(null!=this.J?this.J.l&128||v===this.J.lc||(this.J.l?0:y(tb,this.J)):y(tb,this.J))?this.J.Ca(null):J(this.J);return null==a?null:new Cg(a,this.Aa)};g.L=function(){return Mc(this)};
g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.Aa)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return this.J.Z(null).Tb(null)};g.ea=function(){var a=(null!=this.J?this.J.l&128||v===this.J.lc||(this.J.l?0:y(tb,this.J)):y(tb,this.J))?this.J.Ca(null):J(this.J);return null!=a?new Cg(a,this.Aa):Ic};g.K=function(){return this};g.O=function(a,b){return new Cg(this.J,b)};g.S=function(a,b){return S(b,this)};Cg.prototype[bb]=function(){return Kc(this)};
function Cf(a){return(a=F(a))?new Cg(a,null):null}function Hf(a){return Cb(a)}function Dg(a,b){this.J=a;this.Aa=b;this.l=32374988;this.D=0}g=Dg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.N=function(){return this.Aa};g.Ca=function(){var a=(null!=this.J?this.J.l&128||v===this.J.lc||(this.J.l?0:y(tb,this.J)):y(tb,this.J))?this.J.Ca(null):J(this.J);return null==a?null:new Dg(a,this.Aa)};g.L=function(){return Mc(this)};
g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.Aa)};g.X=function(a,b){return dd(b,this)};g.Y=function(a,b,c){return fd(b,c,this)};g.Z=function(){return this.J.Z(null).Ub(null)};g.ea=function(){var a=(null!=this.J?this.J.l&128||v===this.J.lc||(this.J.l?0:y(tb,this.J)):y(tb,this.J))?this.J.Ca(null):J(this.J);return null!=a?new Dg(a,this.Aa):Ic};g.K=function(){return this};g.O=function(a,b){return new Dg(this.J,b)};g.S=function(a,b){return S(b,this)};Dg.prototype[bb]=function(){return Kc(this)};
function Df(a){return(a=F(a))?new Dg(a,null):null}function If(a){return Db(a)}function Eg(a){return x(te(a))?Hd(function(a,c){return hd.b(x(a)?a:re,c)},a):null}function Fg(a){this.tc=a}Fg.prototype.ua=function(){return this.tc.ua()};Fg.prototype.next=function(){if(this.tc.ua())return this.tc.next().wa[0];throw Error("No such element");};Fg.prototype.remove=function(){return Error("Unsupported operation")};function Gg(a,b,c){this.j=a;this.pb=b;this.s=c;this.l=15077647;this.D=8196}g=Gg.prototype;
g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};g.keys=function(){return Kc(F(this))};g.entries=function(){return new yf(F(F(this)))};g.values=function(){return Kc(F(this))};g.has=function(a){return Ed(this,a)};
g.forEach=function(a){for(var b=F(this),c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e),h=P.c(f,0,null),f=P.c(f,1,null);a.b?a.b(f,h):a.call(null,f,h);e+=1}else if(b=F(b))yd(b)?(c=kc(b),b=lc(b),h=c,d=O(c),c=h):(c=H(b),h=P.c(c,0,null),f=P.c(c,1,null),a.b?a.b(f,h):a.call(null,f,h),b=J(b),c=null,d=0),e=0;else return null};g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return wb(this.pb,b)?b:c};g.Ka=function(){return new Fg(rc(this.pb))};g.N=function(){return this.j};g.P=function(){return kb(this.pb)};
g.L=function(){var a=this.s;return null!=a?a:this.s=a=Oc(this)};g.w=function(a,b){return ud(b)&&O(this)===O(b)&&se(function(a){return function(b){return Ed(a,b)}}(this),b)};g.Db=function(){return new Hg(dc(this.pb))};g.T=function(){return cd(Ig,this.j)};g.Fc=function(a,b){return new Gg(this.j,zb(this.pb,b),null)};g.K=function(){return Cf(this.pb)};g.O=function(a,b){return new Gg(b,this.pb,this.s)};g.S=function(a,b){return new Gg(this.j,kd.c(this.pb,b,null),null)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};var Ig=new Gg(null,re,Pc);Gg.prototype[bb]=function(){return Kc(this)};
function Hg(a){this.lb=a;this.D=136;this.l=259}g=Hg.prototype;g.ub=function(a,b){this.lb=gc(this.lb,b,null);return this};g.Xb=function(){return new Gg(null,fc(this.lb),null)};g.P=function(){return O(this.lb)};g.H=function(a,b){return this.C(null,b,null)};g.C=function(a,b,c){return vb.c(this.lb,b,Bd)===Bd?c:b};
g.call=function(){function a(a,b,c){return vb.c(this.lb,b,Bd)===Bd?c:b}function b(a,b){return vb.c(this.lb,b,Bd)===Bd?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,0,e);case 3:return a.call(this,0,e,f)}throw Error("Invalid arity: "+(arguments.length-1));};c.b=b;c.c=a;return c}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return vb.c(this.lb,a,Bd)===Bd?null:a};g.b=function(a,b){return vb.c(this.lb,a,Bd)===Bd?b:a};
function Jg(a){a=F(a);if(null==a)return Ig;if(a instanceof G&&0===a.o){a=a.f;for(var b=a.length,c=dc(Ig),d=0;;)if(d<b)ec(c,a[d]),d+=1;else break;return fc(c)}for(c=dc(Ig);;)if(null!=a)b=J(a),c=c.ub(null,a.Z(null)),a=b;else return fc(c)}function Vd(a){if(null!=a&&(a.D&4096||v===a.bd))return a.Vb(null);if("string"===typeof a)return a;throw Error([B.a("Doesn't support name: "),B.a(a)].join(""));}function Kg(a,b,c){this.o=a;this.end=b;this.step=c}
Kg.prototype.ua=function(){return 0<this.step?this.o<this.end:this.o>this.end};Kg.prototype.next=function(){var a=this.o;this.o+=this.step;return a};function Lg(a,b,c,d,e){this.j=a;this.start=b;this.end=c;this.step=d;this.s=e;this.l=32375006;this.D=8192}g=Lg.prototype;g.toString=function(){return tc(this)};g.equiv=function(a){return this.w(null,a)};
g.indexOf=function(){var a=null,a=function(a,c){switch(arguments.length){case 1:return N(this,a,0);case 2:return N(this,a,c)}throw Error("Invalid arity: "+(arguments.length-1));};a.a=function(a){return N(this,a,0)};a.b=function(a,c){return N(this,a,c)};return a}();
g.lastIndexOf=function(){function a(a){return R(this,a,O(this))}var b=null,b=function(b,d){switch(arguments.length){case 1:return a.call(this,b);case 2:return R(this,b,d)}throw Error("Invalid arity: "+(arguments.length-1));};b.a=a;b.b=function(a,b){return R(this,a,b)};return b}();g.G=function(a,b){if(b<this.P(null))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};
g.W=function(a,b,c){return b<this.P(null)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};g.Ka=function(){return new Kg(this.start,this.end,this.step)};g.N=function(){return this.j};g.Ca=function(){return 0<this.step?this.start+this.step<this.end?new Lg(this.j,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new Lg(this.j,this.start+this.step,this.end,this.step,null):null};
g.P=function(){return Ya(this.K(null))?0:Math.ceil((this.end-this.start)/this.step)};g.L=function(){var a=this.s;return null!=a?a:this.s=a=Mc(this)};g.w=function(a,b){return ad(this,b)};g.T=function(){return cd(Ic,this.j)};g.X=function(a,b){return Sc(this,b)};g.Y=function(a,b,c){for(a=this.start;;)if(0<this.step?a<this.end:a>this.end)c=b.b?b.b(c,a):b.call(null,c,a),a+=this.step;else return c};g.Z=function(){return null==this.K(null)?null:this.start};
g.ea=function(){return null!=this.K(null)?new Lg(this.j,this.start+this.step,this.end,this.step,null):Ic};g.K=function(){return 0<this.step?this.start<this.end?this:null:0>this.step?this.start>this.end?this:null:this.start===this.end?null:this};g.O=function(a,b){return new Lg(b,this.start,this.end,this.step,this.s)};g.S=function(a,b){return S(b,this)};Lg.prototype[bb]=function(){return Kc(this)};function Mg(a,b){return new Lg(null,a,b,1,null)}
function Ng(a){var b=Og;if("string"===typeof a)return b=b.exec(a),L.b(H(b),a)?1===O(b)?H(b):ff(b):null;throw new TypeError("re-matches must match against a string.");}function Pg(a){if(!(a instanceof RegExp)){var b=/^\(\?([idmsux]*)\)/;if("string"===typeof a)a=b.exec(a),a=null==a?null:1===O(a)?H(a):ff(a);else throw new TypeError("re-find must match against a string.");b=P.c(a,0,null);P.c(a,1,null);O(b)}}
function Qg(a,b,c,d,e,f,h){var k=La;La=null==La?null:La-1;try{if(null!=La&&0>La)return ac(a,"#");ac(a,c);if(0===Va.a(f))F(h)&&ac(a,function(){var a=Rg.a(f);return x(a)?a:"..."}());else{if(F(h)){var l=H(h);b.c?b.c(l,a,f):b.call(null,l,a,f)}for(var m=J(h),n=Va.a(f)-1;;)if(!m||null!=n&&0===n){F(m)&&0===n&&(ac(a,d),ac(a,function(){var a=Rg.a(f);return x(a)?a:"..."}()));break}else{ac(a,d);var p=H(m);c=a;h=f;b.c?b.c(p,c,h):b.call(null,p,c,h);var q=J(m);c=n-1;m=q;n=c}}return ac(a,e)}finally{La=k}}
function Sg(a,b){for(var c=F(b),d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f);ac(a,h);f+=1}else if(c=F(c))d=c,yd(d)?(c=kc(d),e=lc(d),d=c,h=O(c),c=e,e=h):(h=H(d),ac(a,h),c=J(d),d=null,e=0),f=0;else return null}var Tg={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Ug(a){return[B.a('"'),B.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return Tg[a]})),B.a('"')].join("")}
function Vg(a,b){var c=Dd(E.b(a,Sa));return c?(c=null!=b?b.l&131072||v===b.ad?!0:!1:!1)?null!=qd(b):c:c}
function Wg(a,b,c){if(null==a)return ac(b,"nil");if(Vg(c,a)){ac(b,"^");var d=qd(a);Xg.c?Xg.c(d,b,c):Xg.call(null,d,b,c);ac(b," ")}if(a.Mc)return a.ed(b);if(null!=a&&(a.l&2147483648||v===a.U))return a.M(null,b,c);if(!0===a||!1===a||"number"===typeof a)return ac(b,""+B.a(a));if(null!=a&&a.constructor===Object)return ac(b,"#js "),d=Ee.b(function(b){return new V(null,2,5,pe,[Td.a(b),a[b]],null)},zd(a)),Yg.u?Yg.u(d,Xg,b,c):Yg.call(null,d,Xg,b,c);if(Xa(a))return Qg(b,Xg,"#js ["," ","]",c,a);if(ca(a))return x(Ra.a(c))?
ac(b,Ug(a)):ac(b,a);if("function"==r(a)){var e=a.name;c=x(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Function":e;return Sg(b,T(["#object[",c,' "',""+B.a(a),'"]'],0))}if(a instanceof Date)return c=function(a,b){for(var c=""+B.a(a);;)if(O(c)<b)c=[B.a("0"),B.a(c)].join("");else return c},Sg(b,T(['#inst "',""+B.a(a.getUTCFullYear()),"-",c(a.getUTCMonth()+1,2),"-",c(a.getUTCDate(),2),"T",c(a.getUTCHours(),2),":",c(a.getUTCMinutes(),2),":",c(a.getUTCSeconds(),2),".",c(a.getUTCMilliseconds(),
3),"-",'00:00"'],0));if(a instanceof RegExp)return Sg(b,T(['#"',a.source,'"'],0));if(x(a.constructor.mc))return Sg(b,T(["#object[",a.constructor.mc.replace(RegExp("/","g"),"."),"]"],0));e=a.constructor.name;c=x(function(){var a=null==e;return a?a:/^[\s\xa0]*$/.test(e)}())?"Object":e;return Sg(b,T(["#object[",c," ",""+B.a(a),"]"],0))}function Xg(a,b,c){var d=Zg.a(c);return x(d)?(c=kd.c(c,$g,Wg),d.c?d.c(a,b,c):d.call(null,a,b,c)):Wg(a,b,c)}
function ah(a,b){var c=new Ba;a:{var d=new sc(c);Xg(H(a),d,b);for(var e=F(J(a)),f=null,h=0,k=0;;)if(k<h){var l=f.G(null,k);ac(d," ");Xg(l,d,b);k+=1}else if(e=F(e))f=e,yd(f)?(e=kc(f),h=lc(f),f=e,l=O(e),e=h,h=l):(l=H(f),ac(d," "),Xg(l,d,b),e=J(f),f=null,h=0),k=0;else break a}return c}function bh(a){var b=Na();return null==a||Ya(F(a))?"":""+B.a(ah(a,b))}
function ch(a,b,c,d,e){return Qg(d,function(a,b,d){var e=Cb(a);c.c?c.c(e,b,d):c.call(null,e,b,d);ac(b," ");a=Db(a);return c.c?c.c(a,b,d):c.call(null,a,b,d)},[B.a(a),B.a("{")].join(""),", ","}",e,F(b))}function Yg(a,b,c,d){var e=P.c(null,0,null),f=P.c(null,1,null);return x(e)?ch([B.a("#:"),B.a(e)].join(""),f,b,c,d):ch(null,a,b,c,d)}G.prototype.U=v;G.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Wd.prototype.U=v;Wd.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};
ng.prototype.U=v;ng.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};eg.prototype.U=v;eg.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};qg.prototype.U=v;qg.prototype.M=function(a,b,c){return Qg(b,Xg,"["," ","]",c,this)};Af.prototype.U=v;Af.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};gf.prototype.U=v;gf.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Qd.prototype.U=v;Qd.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};
$c.prototype.U=v;$c.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};jg.prototype.U=v;jg.prototype.M=function(a,b,c){return Yg(this,Xg,b,c)};gg.prototype.U=v;gg.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};lf.prototype.U=v;lf.prototype.M=function(a,b,c){return Qg(b,Xg,"["," ","]",c,this)};zg.prototype.U=v;zg.prototype.M=function(a,b,c){return Yg(this,Xg,b,c)};Gg.prototype.U=v;Gg.prototype.M=function(a,b,c){return Qg(b,Xg,"#{"," ","}",c,this)};$d.prototype.U=v;
$d.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};xe.prototype.U=v;xe.prototype.M=function(a,b,c){ac(b,"#object [cljs.core.Atom ");Xg(new Pa(null,1,[dh,this.state],null),b,c);return ac(b,"]")};Dg.prototype.U=v;Dg.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};W.prototype.U=v;W.prototype.M=function(a,b,c){return Qg(b,Xg,"["," ","]",c,this)};V.prototype.U=v;V.prototype.M=function(a,b,c){return Qg(b,Xg,"["," ","]",c,this)};rf.prototype.U=v;
rf.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Od.prototype.U=v;Od.prototype.M=function(a,b){return ac(b,"()")};sf.prototype.U=v;sf.prototype.M=function(a,b,c){return Qg(b,Xg,"#queue ["," ","]",c,F(this))};Pa.prototype.U=v;Pa.prototype.M=function(a,b,c){return Yg(this,Xg,b,c)};Lg.prototype.U=v;Lg.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Cg.prototype.U=v;Cg.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Nd.prototype.U=v;
Nd.prototype.M=function(a,b,c){return Qg(b,Xg,"("," ",")",c,this)};Fc.prototype.Qb=v;Fc.prototype.tb=function(a,b){if(b instanceof Fc)return Ec(this,b);throw Error([B.a("Cannot compare "),B.a(this),B.a(" to "),B.a(b)].join(""));};U.prototype.Qb=v;U.prototype.tb=function(a,b){if(b instanceof U)return Rd(this,b);throw Error([B.a("Cannot compare "),B.a(this),B.a(" to "),B.a(b)].join(""));};lf.prototype.Qb=v;
lf.prototype.tb=function(a,b){if(xd(b))return Gd(this,b);throw Error([B.a("Cannot compare "),B.a(this),B.a(" to "),B.a(b)].join(""));};V.prototype.Qb=v;V.prototype.tb=function(a,b){if(xd(b))return Gd(this,b);throw Error([B.a("Cannot compare "),B.a(this),B.a(" to "),B.a(b)].join(""));};function eh(a,b,c){cc(a,b,c)}var fh=null;function gh(){}
var hh=function hh(b){if(null!=b&&null!=b.Xc)return b.Xc(b);var c=hh[r(null==b?null:b)];if(null!=c)return c.a?c.a(b):c.call(null,b);c=hh._;if(null!=c)return c.a?c.a(b):c.call(null,b);throw A("IEncodeJS.-clj-\x3ejs",b);};function ih(a){return(null!=a?v===a.Wc||(a.Lc?0:y(gh,a)):y(gh,a))?hh(a):"string"===typeof a||"number"===typeof a||a instanceof U||a instanceof Fc?jh.a?jh.a(a):jh.call(null,a):bh(T([a],0))}
var jh=function jh(b){if(null==b)return null;if(null!=b?v===b.Wc||(b.Lc?0:y(gh,b)):y(gh,b))return hh(b);if(b instanceof U)return Vd(b);if(b instanceof Fc)return""+B.a(b);if(wd(b)){var c={};b=F(b);for(var d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f),k=P.c(h,0,null),h=P.c(h,1,null);c[ih(k)]=jh.a?jh.a(h):jh.call(null,h);f+=1}else if(b=F(b))yd(b)?(e=kc(b),b=lc(b),d=e,e=O(e)):(e=H(b),d=P.c(e,0,null),e=P.c(e,1,null),c[ih(d)]=jh.a?jh.a(e):jh.call(null,e),b=J(b),d=null,e=0),f=0;else break;return c}if(null==
b?0:null!=b?b.l&8||v===b.qd||(b.l?0:y(lb,b)):y(lb,b)){c=[];b=F(Ee.b(jh,b));d=null;for(f=e=0;;)if(f<e)k=d.G(null,f),c.push(k),f+=1;else if(b=F(b))d=b,yd(d)?(b=kc(d),f=lc(d),d=b,e=O(b),b=f):(b=H(d),c.push(b),b=J(d),d=null,e=0),f=0;else break;return c}return b},kh=null;function lh(){if(null==kh){var a=new Pa(null,3,[mh,re,nh,re,oh,re],null);kh=ze?ze(a):ye.call(null,a)}return kh}
function ph(a,b,c){var d=L.b(b,c);if(!d&&!(d=Ed(oh.a(a).call(null,b),c))&&(d=xd(c))&&(d=xd(b)))if(d=O(c)===O(b))for(var d=!0,e=0;;)if(d&&e!==O(c))d=ph(a,b.a?b.a(e):b.call(null,e),c.a?c.a(e):c.call(null,e)),e+=1;else return d;else return d;else return d}function qh(a){var b;b=lh();b=M.a?M.a(b):M.call(null,b);a=E.b(mh.a(b),a);return F(a)?a:null}function rh(a,b,c,d){De.b(a,function(){return M.a?M.a(b):M.call(null,b)});De.b(c,function(){return M.a?M.a(d):M.call(null,d)})}
var sh=function sh(b,c,d){var e=(M.a?M.a(d):M.call(null,d)).call(null,b),e=x(x(e)?e.a?e.a(c):e.call(null,c):e)?!0:null;if(x(e))return e;e=function(){for(var e=qh(c);;)if(0<O(e)){var h=H(e);sh.c?sh.c(b,h,d):sh.call(null,b,h,d);e=Hc(e)}else return null}();if(x(e))return e;e=function(){for(var e=qh(b);;)if(0<O(e)){var h=H(e);sh.c?sh.c(h,c,d):sh.call(null,h,c,d);e=Hc(e)}else return null}();return x(e)?e:!1};function th(a,b,c,d){c=sh(a,b,c);return x(c)?c:ph(d,a,b)}
var uh=function uh(b,c,d,e,f,h,k){var l=gb(function(e,h){var k=P.c(h,0,null);P.c(h,1,null);if(ph(M.a?M.a(d):M.call(null,d),c,k)){var l;l=(l=null==e)?l:th(k,H(e),f,M.a?M.a(d):M.call(null,d));l=x(l)?h:e;if(!x(th(H(l),k,f,M.a?M.a(d):M.call(null,d))))throw Error([B.a("Multiple methods in multimethod '"),B.a(b),B.a("' match dispatch value: "),B.a(c),B.a(" -\x3e "),B.a(k),B.a(" and "),B.a(H(l)),B.a(", and neither is preferred")].join(""));return l}return e},null,M.a?M.a(e):M.call(null,e));if(x(l)){if(L.b(M.a?
M.a(k):M.call(null,k),M.a?M.a(d):M.call(null,d)))return De.u(h,kd,c,gd(l)),gd(l);rh(h,e,k,d);return uh.ca?uh.ca(b,c,d,e,f,h,k):uh.call(null,b,c,d,e,f,h,k)}return null};function Y(a,b){throw Error([B.a("No method in multimethod '"),B.a(a),B.a("' for dispatch value: "),B.a(b)].join(""));}function vh(a,b,c,d,e,f,h,k){this.name=a;this.h=b;this.fd=c;this.Zb=d;this.Kb=e;this.ld=f;this.bc=h;this.Ob=k;this.l=4194305;this.D=4352}g=vh.prototype;
g.call=function(){function a(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q,ja){a=this;var X=ne(a.h,b,c,d,e,T([f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q,ja],0)),K=Z(this,X);x(K)||Y(a.name,X);return ne(K,b,c,d,e,T([f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q,ja],0))}function b(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q){a=this;var X=a.h.ra?a.h.ra(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q),K=Z(this,X);x(K)||Y(a.name,X);return K.ra?K.ra(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,
Q):K.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I,Q)}function c(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I){a=this;var X=a.h.qa?a.h.qa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I),K=Z(this,X);x(K)||Y(a.name,X);return K.qa?K.qa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I):K.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C,I)}function d(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C){a=this;var X=a.h.pa?a.h.pa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C):a.h.call(null,b,c,d,e,f,
h,k,l,m,n,p,q,z,u,t,w,D,C),K=Z(this,X);x(K)||Y(a.name,X);return K.pa?K.pa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C):K.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D,C)}function e(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D){a=this;var X=a.h.oa?a.h.oa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D),K=Z(this,X);x(K)||Y(a.name,X);return K.oa?K.oa(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D):K.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w,D)}function f(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w){a=this;
var X=a.h.na?a.h.na(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w),K=Z(this,X);x(K)||Y(a.name,X);return K.na?K.na(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w):K.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t,w)}function h(a,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t){a=this;var w=a.h.ma?a.h.ma(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t),X=Z(this,w);x(X)||Y(a.name,w);return X.ma?X.ma(b,c,d,e,f,h,k,l,m,n,p,q,z,u,t):X.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u,t)}function k(a,
b,c,d,e,f,h,k,l,m,n,p,q,z,u){a=this;var t=a.h.la?a.h.la(b,c,d,e,f,h,k,l,m,n,p,q,z,u):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u),w=Z(this,t);x(w)||Y(a.name,t);return w.la?w.la(b,c,d,e,f,h,k,l,m,n,p,q,z,u):w.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z,u)}function l(a,b,c,d,e,f,h,k,l,m,n,p,q,z){a=this;var u=a.h.ka?a.h.ka(b,c,d,e,f,h,k,l,m,n,p,q,z):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z),t=Z(this,u);x(t)||Y(a.name,u);return t.ka?t.ka(b,c,d,e,f,h,k,l,m,n,p,q,z):t.call(null,b,c,d,e,f,h,k,l,m,n,p,q,z)}function m(a,
b,c,d,e,f,h,k,l,m,n,p,q){a=this;var z=a.h.ja?a.h.ja(b,c,d,e,f,h,k,l,m,n,p,q):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p,q),u=Z(this,z);x(u)||Y(a.name,z);return u.ja?u.ja(b,c,d,e,f,h,k,l,m,n,p,q):u.call(null,b,c,d,e,f,h,k,l,m,n,p,q)}function n(a,b,c,d,e,f,h,k,l,m,n,p){a=this;var q=a.h.ia?a.h.ia(b,c,d,e,f,h,k,l,m,n,p):a.h.call(null,b,c,d,e,f,h,k,l,m,n,p),z=Z(this,q);x(z)||Y(a.name,q);return z.ia?z.ia(b,c,d,e,f,h,k,l,m,n,p):z.call(null,b,c,d,e,f,h,k,l,m,n,p)}function p(a,b,c,d,e,f,h,k,l,m,n){a=this;var p=a.h.ha?
a.h.ha(b,c,d,e,f,h,k,l,m,n):a.h.call(null,b,c,d,e,f,h,k,l,m,n),q=Z(this,p);x(q)||Y(a.name,p);return q.ha?q.ha(b,c,d,e,f,h,k,l,m,n):q.call(null,b,c,d,e,f,h,k,l,m,n)}function q(a,b,c,d,e,f,h,k,l,m){a=this;var n=a.h.ta?a.h.ta(b,c,d,e,f,h,k,l,m):a.h.call(null,b,c,d,e,f,h,k,l,m),p=Z(this,n);x(p)||Y(a.name,n);return p.ta?p.ta(b,c,d,e,f,h,k,l,m):p.call(null,b,c,d,e,f,h,k,l,m)}function t(a,b,c,d,e,f,h,k,l){a=this;var m=a.h.sa?a.h.sa(b,c,d,e,f,h,k,l):a.h.call(null,b,c,d,e,f,h,k,l),n=Z(this,m);x(n)||Y(a.name,
m);return n.sa?n.sa(b,c,d,e,f,h,k,l):n.call(null,b,c,d,e,f,h,k,l)}function u(a,b,c,d,e,f,h,k){a=this;var l=a.h.ca?a.h.ca(b,c,d,e,f,h,k):a.h.call(null,b,c,d,e,f,h,k),m=Z(this,l);x(m)||Y(a.name,l);return m.ca?m.ca(b,c,d,e,f,h,k):m.call(null,b,c,d,e,f,h,k)}function w(a,b,c,d,e,f,h){a=this;var k=a.h.ba?a.h.ba(b,c,d,e,f,h):a.h.call(null,b,c,d,e,f,h),l=Z(this,k);x(l)||Y(a.name,k);return l.ba?l.ba(b,c,d,e,f,h):l.call(null,b,c,d,e,f,h)}function z(a,b,c,d,e,f){a=this;var h=a.h.F?a.h.F(b,c,d,e,f):a.h.call(null,
b,c,d,e,f),k=Z(this,h);x(k)||Y(a.name,h);return k.F?k.F(b,c,d,e,f):k.call(null,b,c,d,e,f)}function D(a,b,c,d,e){a=this;var f=a.h.u?a.h.u(b,c,d,e):a.h.call(null,b,c,d,e),h=Z(this,f);x(h)||Y(a.name,f);return h.u?h.u(b,c,d,e):h.call(null,b,c,d,e)}function I(a,b,c,d){a=this;var e=a.h.c?a.h.c(b,c,d):a.h.call(null,b,c,d),f=Z(this,e);x(f)||Y(a.name,e);return f.c?f.c(b,c,d):f.call(null,b,c,d)}function Q(a,b,c){a=this;var d=a.h.b?a.h.b(b,c):a.h.call(null,b,c),e=Z(this,d);x(e)||Y(a.name,d);return e.b?e.b(b,
c):e.call(null,b,c)}function ja(a,b){a=this;var c=a.h.a?a.h.a(b):a.h.call(null,b),d=Z(this,c);x(d)||Y(a.name,c);return d.a?d.a(b):d.call(null,b)}function Ha(a){a=this;var b=a.h.v?a.h.v():a.h.call(null),c=Z(this,b);x(c)||Y(a.name,b);return c.v?c.v():c.call(null)}var C=null,C=function(C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,Mb,$b,Qc,Ud,Lf){switch(arguments.length){case 1:return Ha.call(this,C);case 2:return ja.call(this,C,ba);case 3:return Q.call(this,C,ba,ea);case 4:return I.call(this,C,ba,
ea,K);case 5:return D.call(this,C,ba,ea,K,fa);case 6:return z.call(this,C,ba,ea,K,fa,ia);case 7:return w.call(this,C,ba,ea,K,fa,ia,oa);case 8:return u.call(this,C,ba,ea,K,fa,ia,oa,ra);case 9:return t.call(this,C,ba,ea,K,fa,ia,oa,ra,xa);case 10:return q.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa);case 11:return p.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga);case 12:return n.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa);case 13:return m.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua);case 14:return l.call(this,
C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za);case 15:return k.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc);case 16:return h.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb);case 17:return f.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb);case 18:return e.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,Mb);case 19:return d.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,Mb,$b);case 20:return c.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,
Mb,$b,Qc);case 21:return b.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,Mb,$b,Qc,Ud);case 22:return a.call(this,C,ba,ea,K,fa,ia,oa,ra,xa,Aa,Ga,Oa,Ua,Za,pc,pb,Bb,Mb,$b,Qc,Ud,Lf)}throw Error("Invalid arity: "+(arguments.length-1));};C.a=Ha;C.b=ja;C.c=Q;C.u=I;C.F=D;C.ba=z;C.ca=w;C.sa=u;C.ta=t;C.ha=q;C.ia=p;C.ja=n;C.ka=m;C.la=l;C.ma=k;C.na=h;C.oa=f;C.pa=e;C.qa=d;C.ra=c;C.qc=b;C.Rb=a;return C}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};
g.v=function(){var a=this.h.v?this.h.v():this.h.call(null),b=Z(this,a);x(b)||Y(this.name,a);return b.v?b.v():b.call(null)};g.a=function(a){var b=this.h.a?this.h.a(a):this.h.call(null,a),c=Z(this,b);x(c)||Y(this.name,b);return c.a?c.a(a):c.call(null,a)};g.b=function(a,b){var c=this.h.b?this.h.b(a,b):this.h.call(null,a,b),d=Z(this,c);x(d)||Y(this.name,c);return d.b?d.b(a,b):d.call(null,a,b)};
g.c=function(a,b,c){var d=this.h.c?this.h.c(a,b,c):this.h.call(null,a,b,c),e=Z(this,d);x(e)||Y(this.name,d);return e.c?e.c(a,b,c):e.call(null,a,b,c)};g.u=function(a,b,c,d){var e=this.h.u?this.h.u(a,b,c,d):this.h.call(null,a,b,c,d),f=Z(this,e);x(f)||Y(this.name,e);return f.u?f.u(a,b,c,d):f.call(null,a,b,c,d)};g.F=function(a,b,c,d,e){var f=this.h.F?this.h.F(a,b,c,d,e):this.h.call(null,a,b,c,d,e),h=Z(this,f);x(h)||Y(this.name,f);return h.F?h.F(a,b,c,d,e):h.call(null,a,b,c,d,e)};
g.ba=function(a,b,c,d,e,f){var h=this.h.ba?this.h.ba(a,b,c,d,e,f):this.h.call(null,a,b,c,d,e,f),k=Z(this,h);x(k)||Y(this.name,h);return k.ba?k.ba(a,b,c,d,e,f):k.call(null,a,b,c,d,e,f)};g.ca=function(a,b,c,d,e,f,h){var k=this.h.ca?this.h.ca(a,b,c,d,e,f,h):this.h.call(null,a,b,c,d,e,f,h),l=Z(this,k);x(l)||Y(this.name,k);return l.ca?l.ca(a,b,c,d,e,f,h):l.call(null,a,b,c,d,e,f,h)};
g.sa=function(a,b,c,d,e,f,h,k){var l=this.h.sa?this.h.sa(a,b,c,d,e,f,h,k):this.h.call(null,a,b,c,d,e,f,h,k),m=Z(this,l);x(m)||Y(this.name,l);return m.sa?m.sa(a,b,c,d,e,f,h,k):m.call(null,a,b,c,d,e,f,h,k)};g.ta=function(a,b,c,d,e,f,h,k,l){var m=this.h.ta?this.h.ta(a,b,c,d,e,f,h,k,l):this.h.call(null,a,b,c,d,e,f,h,k,l),n=Z(this,m);x(n)||Y(this.name,m);return n.ta?n.ta(a,b,c,d,e,f,h,k,l):n.call(null,a,b,c,d,e,f,h,k,l)};
g.ha=function(a,b,c,d,e,f,h,k,l,m){var n=this.h.ha?this.h.ha(a,b,c,d,e,f,h,k,l,m):this.h.call(null,a,b,c,d,e,f,h,k,l,m),p=Z(this,n);x(p)||Y(this.name,n);return p.ha?p.ha(a,b,c,d,e,f,h,k,l,m):p.call(null,a,b,c,d,e,f,h,k,l,m)};g.ia=function(a,b,c,d,e,f,h,k,l,m,n){var p=this.h.ia?this.h.ia(a,b,c,d,e,f,h,k,l,m,n):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n),q=Z(this,p);x(q)||Y(this.name,p);return q.ia?q.ia(a,b,c,d,e,f,h,k,l,m,n):q.call(null,a,b,c,d,e,f,h,k,l,m,n)};
g.ja=function(a,b,c,d,e,f,h,k,l,m,n,p){var q=this.h.ja?this.h.ja(a,b,c,d,e,f,h,k,l,m,n,p):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p),t=Z(this,q);x(t)||Y(this.name,q);return t.ja?t.ja(a,b,c,d,e,f,h,k,l,m,n,p):t.call(null,a,b,c,d,e,f,h,k,l,m,n,p)};g.ka=function(a,b,c,d,e,f,h,k,l,m,n,p,q){var t=this.h.ka?this.h.ka(a,b,c,d,e,f,h,k,l,m,n,p,q):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q),u=Z(this,t);x(u)||Y(this.name,t);return u.ka?u.ka(a,b,c,d,e,f,h,k,l,m,n,p,q):u.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q)};
g.la=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t){var u=this.h.la?this.h.la(a,b,c,d,e,f,h,k,l,m,n,p,q,t):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t),w=Z(this,u);x(w)||Y(this.name,u);return w.la?w.la(a,b,c,d,e,f,h,k,l,m,n,p,q,t):w.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t)};
g.ma=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u){var w=this.h.ma?this.h.ma(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u),z=Z(this,w);x(z)||Y(this.name,w);return z.ma?z.ma(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u):z.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u)};
g.na=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w){var z=this.h.na?this.h.na(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w),D=Z(this,z);x(D)||Y(this.name,z);return D.na?D.na(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w):D.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w)};
g.oa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z){var D=this.h.oa?this.h.oa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z),I=Z(this,D);x(I)||Y(this.name,D);return I.oa?I.oa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z):I.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z)};
g.pa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D){var I=this.h.pa?this.h.pa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D),Q=Z(this,I);x(Q)||Y(this.name,I);return Q.pa?Q.pa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D):Q.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D)};
g.qa=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I){var Q=this.h.qa?this.h.qa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I),ja=Z(this,Q);x(ja)||Y(this.name,Q);return ja.qa?ja.qa(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I):ja.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I)};
g.ra=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q){var ja=this.h.ra?this.h.ra(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q):this.h.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q),Ha=Z(this,ja);x(Ha)||Y(this.name,ja);return Ha.ra?Ha.ra(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q):Ha.call(null,a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q)};
g.qc=function(a,b,c,d,e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja){var Ha=ne(this.h,a,b,c,d,T([e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja],0)),C=Z(this,Ha);x(C)||Y(this.name,Ha);return ne(C,a,b,c,d,T([e,f,h,k,l,m,n,p,q,t,u,w,z,D,I,Q,ja],0))};function wh(a,b,c){De.u(a.Kb,kd,b,c);rh(a.bc,a.Kb,a.Ob,a.Zb)}
function Z(a,b){L.b(M.a?M.a(a.Ob):M.call(null,a.Ob),M.a?M.a(a.Zb):M.call(null,a.Zb))||rh(a.bc,a.Kb,a.Ob,a.Zb);var c=(M.a?M.a(a.bc):M.call(null,a.bc)).call(null,b);if(x(c))return c;c=uh(a.name,b,a.Zb,a.Kb,a.ld,a.bc,a.Ob);return x(c)?c:(M.a?M.a(a.Kb):M.call(null,a.Kb)).call(null,a.fd)}g.Vb=function(){return mc(this.name)};g.Wb=function(){return nc(this.name)};g.L=function(){return this[da]||(this[da]=++ga)};function xh(a,b){this.Bb=a;this.s=b;this.l=2153775104;this.D=2048}g=xh.prototype;
g.toString=function(){return this.Bb};g.equiv=function(a){return this.w(null,a)};g.w=function(a,b){return b instanceof xh&&this.Bb===b.Bb};g.M=function(a,b){return ac(b,[B.a('#uuid "'),B.a(this.Bb),B.a('"')].join(""))};g.L=function(){null==this.s&&(this.s=Cc(this.Bb));return this.s};g.tb=function(a,b){return Fa(this.Bb,b.Bb)};var yh=new U("javelin.core","none","javelin.core/none",1150337088),zh=new U(null,"rel","rel",1378823488),Ah=new U(null,"data-background","data-background",-1315407968),Bh=new U(null,"markdown","markdown",1227225089),Ch=new U(null,"async","async",1050769601),Dh=new U("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517),Eh=new U(null,"fade-toggle","fade-toggle",-1468421852),Sa=new U(null,"meta","meta",1499536964),Ta=new U(null,"dup","dup",556298533),Fh=new U("css",
"*","css/*",-1295355419),Gh=new U("svg","*","svg/*",-1295405562),Hh=new U(null,"unit","unit",375175175),Ih=new U(null,"transition","transition",765692007),Be=new U(null,"validator","validator",-1966190681),Jh=new U(null,"default","default",-1987822328),Kh=new U(null,"value","value",305978217),Lh=new U(null,"slide-toggle","slide-toggle",968641513),Mh=new U(null,"time","time",1385887882),Nh=new U(null,"static","static",1214358571),Oh=new U(null,"background","background",-863952629),Ph=new U(null,"css",
"css",1135045163),Qh=new U(null,"legend","legend",-1027192245),Rh=new U(null,"history","history",-247395220),dh=new U(null,"val","val",128701612),Sh=new U(null,"type","type",1174270348),Th=new U(null,"src","src",-1651076051),Uh=new U(null,"data-transition","data-transition",1821650029),$g=new U(null,"fallback-impl","fallback-impl",-1501286995),Qa=new U(null,"flush-on-newline","flush-on-newline",-151457939),Vh=new U(null,"toggle","toggle",1291842030),Wh=new U(null,"seconds","seconds",-445266194),Xh=
new U(null,"bits","bits",-1206785969),nh=new U(null,"descendants","descendants",1824886031),Yh=new U(null,"data-markdown","data-markdown",-84926065),Zh=new U(null,"title","title",636505583),oh=new U(null,"ancestors","ancestors",-776045424),$h=new U(null,"theme","theme",-1247880880),Ra=new U(null,"readably","readably",1129599760),Rg=new U(null,"more-marker","more-marker",-14717935),ai=new U("hoplon.core","default","hoplon.core/default",-778824365),Va=new U(null,"print-length","print-length",1931866356),
bi=new U(null,"id","id",-1388402092),ci=new U(null,"class","class",-2030961996),di=new U(null,"off","off",606440789),mh=new U(null,"parents","parents",-2027538891),ei=new U(null,"focus-select","focus-select",1107982934),fi=new U(null,"hours","hours",58380855),gi=new U(null,"focus","focus",234677911),qe=new Fc(null,"meta11231","meta11231",-102456680,null),hi=new U(null,"on","on",173873944),ii=new U(null,"minutes","minutes",1319166394),ji=new U(null,"hierarchy","hierarchy",-1053470341),Zg=new U(null,
"alt-impl","alt-impl",670969595),ki=new U(null,"callback","callback",-705136228),li=new U("html","*","html/*",-1283138243),mi=new U(null,"dependencies","dependencies",1108064605),ni=new U(null,"digit","digit",1612650493),oi=new U(null,"href","href",-793805698),pi=new U(null,"scroll-to","scroll-to",-34957602),qi=new U(null,"select","select",1147833503),ri=new U(null,"html","html",-998796897),si=new U(null,"text","text",-1790561697),ti=new U(null,"scrollTop","scrollTop",-1143661921),ui=new U(null,"model",
"model",331153215),vi=new U(null,"attr","attr",-604132353);function wi(a){throw Error(je(B,a));}Pg("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");Pg("^([-+]?[0-9]+)/([0-9]+)$");Pg("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");Pg("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");Pg("^[0-9A-Fa-f]{2}$");Pg("^[0-9A-Fa-f]{4}$");
var xi=function(a,b){return function(c,d){return E.b(x(d)?b:a,c)}}(new V(null,13,5,pe,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new V(null,13,5,pe,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),Og=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;function yi(a){a=parseInt(a,10);return Ya(isNaN(a))?a:null}
function zi(a,b,c,d){a<=b&&b<=c||wi(T([[B.a(d),B.a(" Failed:  "),B.a(a),B.a("\x3c\x3d"),B.a(b),B.a("\x3c\x3d"),B.a(c)].join("")],0));return b}
function Ai(a){var b=Ng(a);P.c(b,0,null);var c=P.c(b,1,null),d=P.c(b,2,null),e=P.c(b,3,null),f=P.c(b,4,null),h=P.c(b,5,null),k=P.c(b,6,null),l=P.c(b,7,null),m=P.c(b,8,null),n=P.c(b,9,null),p=P.c(b,10,null);if(Ya(b))return wi(T([[B.a("Unrecognized date/time syntax: "),B.a(a)].join("")],0));var q=yi(c),t=function(){var a=yi(d);return x(a)?a:1}();a=function(){var a=yi(e);return x(a)?a:1}();var b=function(){var a=yi(f);return x(a)?a:0}(),c=function(){var a=yi(h);return x(a)?a:0}(),u=function(){var a=
yi(k);return x(a)?a:0}(),w=function(){var a;a:if(L.b(3,O(l)))a=l;else if(3<O(l))a=l.substring(0,3);else for(a=new Ba(l);;)if(3>a.nb.length)a=a.append("0");else{a=a.toString();break a}a=yi(a);return x(a)?a:0}(),m=(L.b(m,"-")?-1:1)*(60*function(){var a=yi(n);return x(a)?a:0}()+function(){var a=yi(p);return x(a)?a:0}());return new V(null,8,5,pe,[q,zi(1,t,12,"timestamp month field must be in range 1..12"),zi(1,a,function(){var a;a=0===(q%4+4)%4;x(a)&&(a=Ya(0===(q%100+100)%100),a=x(a)?a:0===(q%400+400)%
400);return xi.b?xi.b(t,a):xi.call(null,t,a)}(),"timestamp day field must be in range 1..last day in month"),zi(0,b,23,"timestamp hour field must be in range 0..23"),zi(0,c,59,"timestamp minute field must be in range 0..59"),zi(0,u,L.b(c,59)?60:59,"timestamp second field must be in range 0..60"),zi(0,w,999,"timestamp millisecond field must be in range 0..999"),m],null)}
var Bi,Ci=Eg(T([new Pa(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=Ai(a),x(b)){a=P.c(b,0,null);var c=P.c(b,1,null),d=P.c(b,2,null),e=P.c(b,3,null),f=P.c(b,4,null),h=P.c(b,5,null),k=P.c(b,6,null);b=P.c(b,7,null);b=new Date(Date.UTC(a,c-1,d,e,f,h,k)-6E4*b)}else b=wi(T([[B.a("Unrecognized date/time syntax: "),B.a(a)].join("")],0));else b=wi(T(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?new xh(a,null):wi(T(["UUID literal expects a string as its representation."],
0))},"queue",function(a){return xd(a)?Le.b(tf,a):wi(T(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(xd(a)){var b=[];a=F(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e);b.push(f);e+=1}else if(a=F(a))c=a,yd(c)?(a=kc(c),e=lc(c),c=a,d=O(a),a=e):(a=H(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return b}if(wd(a)){b={};a=F(a);c=null;for(e=d=0;;)if(e<d){var h=c.G(null,e),f=P.c(h,0,null),h=P.c(h,1,null);b[Vd(f)]=h;e+=1}else if(a=F(a))yd(a)?(d=kc(a),a=lc(a),c=d,d=O(d)):
(d=H(a),c=P.c(d,0,null),d=P.c(d,1,null),b[Vd(c)]=d,a=J(a),c=null,d=0),e=0;else break;return b}return wi(T([[B.a("JS literal expects a vector or map containing "),B.a("only string or unqualified keyword keys")].join("")],0))}],null),re],0));Bi=ze?ze(Ci):ye.call(null,Ci);ze||ye.call(null,null);function Di(a,b,c,d){this.fa=a;this.va=b;this.j=c;this.s=d;this.l=2565220111;this.D=0}g=Di.prototype;g.H=function(a,b){return E.b(this.va,b)};g.C=function(a,b,c){return E.c(this.va,b,c)};g.M=function(a,b,c){return Qg(b,function(){return function(a){return Qg(b,Xg,""," ","",c,a)}}(this),"#tailrecursion.priority-map {",", ","}",c,this)};g.N=function(){return this.j};g.P=function(){return O(this.va)};
g.eb=function(){if(0===O(this.va))return null;var a=H(this.fa);return new V(null,2,5,pe,[H(Db(a)),Cb(a)],null)};g.fb=function(){if(0===O(this.va))throw Error("Can't pop empty priority map");var a=H(this.fa),b=Db(a),c=H(b),a=Cb(a);return L.b(O(b),1)?new Di(md.b(this.fa,a),md.b(this.va,c),this.j,null):new Di(kd.c(this.fa,a,td.b(b,c)),md.b(this.va,c),this.j,null)};
g.Fb=function(){var a=this,b=this;return F(function(){return function(a){return function e(b){return new Wd(null,function(a){return function(){for(var c=b;;){var f=F(c);if(f){var h=f,n=H(h),p=P.c(n,0,null),q=P.c(n,1,null);if(f=F(function(a,b,c,e,f,h,k){return function Ha(l){return new Wd(null,function(a,b,c){return function(){for(;;){var a=F(l);if(a){if(yd(a)){var b=kc(a),e=O(b),f=new Yd(Array(e),0);a:for(var h=0;;)if(h<e){var k=ob.b(b,h);be(f,new V(null,2,5,pe,[k,c],null));h+=1}else{b=!0;break a}return b?
ae(f.Ga(),Ha(lc(a))):ae(f.Ga(),null)}f=H(a);return S(new V(null,2,5,pe,[f,c],null),Ha(Hc(a)))}return null}}}(a,b,c,e,f,h,k),null,null)}}(c,n,p,q,h,f,a)(q)))return fe.b(f,e(Hc(c)));c=Hc(c)}else return null}}}(a),null,null)}}(b)(Zb(a.fa))}())};g.L=function(){var a=this.s;if(null!=a)return a;a:for(var a=0,b=F(this);;)if(b)var c=H(b),a=(a+(Cc(Hf.a?Hf.a(c):Hf.call(null,c))^Cc(If.a?If.a(c):If.call(null,c))))%4503599627370496,b=J(b);else break a;return this.s=a};g.w=function(a,b){return Sb(this.va,b)};
g.T=function(){return cd(Ei,this.j)};g.Sb=function(a,b){var c=this.va.b?this.va.b(b,Dh):this.va.call(null,b,Dh);if(L.b(c,Dh))return this;var d=this.fa.a?this.fa.a(c):this.fa.call(null,c);return L.b(O(d),1)?new Di(md.b(this.fa,c),md.b(this.va,b),this.j,null):new Di(kd.c(this.fa,c,td.b(d,b)),md.b(this.va,b),this.j,null)};
g.Ba=function(a,b,c){a=E.c(this.va,b,null);if(x(a)){if(L.b(a,c))return this;var d=E.b(this.fa,a);return L.b(O(d),1)?new Di(kd.c(md.b(this.fa,a),c,hd.b(E.c(this.fa,c,Ig),b)),kd.c(this.va,b,c),this.j,null):new Di(kd.m(this.fa,a,td.b(E.b(this.fa,a),b),T([c,hd.b(E.c(this.fa,c,Ig),b)],0)),kd.c(this.va,b,c),this.j,null)}return new Di(kd.c(this.fa,c,hd.b(E.c(this.fa,c,Ig),b)),kd.c(this.va,b,c),this.j,null)};g.Pb=function(a,b){return Ed(this.va,b)};
g.K=function(){var a=this,b=this;return F(function(){return function(a){return function e(b){return new Wd(null,function(a){return function(){for(var c=b;;){var f=F(c);if(f){var h=f,n=H(h),p=P.c(n,0,null),q=P.c(n,1,null);if(f=F(function(a,b,c,e,f,h,k){return function Ha(l){return new Wd(null,function(a,b,c){return function(){for(;;){var a=F(l);if(a){if(yd(a)){var b=kc(a),e=O(b),f=new Yd(Array(e),0);a:for(var h=0;;)if(h<e){var k=ob.b(b,h);be(f,new V(null,2,5,pe,[k,c],null));h+=1}else{b=!0;break a}return b?
ae(f.Ga(),Ha(lc(a))):ae(f.Ga(),null)}f=H(a);return S(new V(null,2,5,pe,[f,c],null),Ha(Hc(a)))}return null}}}(a,b,c,e,f,h,k),null,null)}}(c,n,p,q,h,f,a)(q)))return fe.b(f,e(Hc(c)));c=Hc(c)}else return null}}}(a),null,null)}}(b)(a.fa)}())};g.O=function(a,b){return new Di(this.fa,this.va,b,this.s)};g.S=function(a,b){return xd(b)?this.Ba(null,ob.b(b,0),ob.b(b,1)):gb(mb,this,b)};
g.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.H(null,c);case 3:return this.C(null,c,d)}throw Error("Invalid arity: "+(arguments.length-1));};a.b=function(a,c){return this.H(null,c)};a.c=function(a,c,d){return this.C(null,c,d)};return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};g.a=function(a){return this.H(null,a)};g.b=function(a,b){return this.C(null,a,b)};
var Ei=new Di(function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;b=0<b.length?new G(b.slice(0),0,null):null;a:for(b=F(b),d=Bg;;)if(b)c=J(J(b)),d=kd.c(d,H(b),gd(b)),b=c;else break a;return d}(),re,re,null),Fi=""+B.a("tailrecursion.priority-map");E.b(M.a?M.a(Bi):M.call(null,Bi),Fi);De.u(Bi,kd,Fi,function(a){return wd(a)?Le.b(Ei,a):wi(T(["Priority map literal expects a map for its elements."],0))});var Gi=ze?ze(0):ye.call(null,0);function Hi(a,b){return function d(b){var e=rd(b);return x(e)?new Wd(null,function(e){return function(){return S(e,d(Le.b(sd(b),x(Jd.a?Jd.a(e):Jd.call(null,e))?a.a?a.a(e):a.call(null,e):null)))}}(e,e),null,null):null}(hd.b(tf,b))}
function Ii(a){for(;;){var b=H(rd(a));if(x(b)){var c=b,d=sd(a),e=c.prev,f=function(){var a=c.fc;return x(a)?a.v?a.v():a.call(null):c.state}(),h=!L.b(f,e);h&&(c.prev=f,bc(c,e,f));a=h?gb(function(){return function(a,b){return kd.c(a,b,b.Pa)}}(a,d,e,f,h,c,b),d,c.Qa):d}else break}}function Ji(a){return x(Ki.a?Ki.a(a):Ki.call(null,a))?M.a?M.a(a):M.call(null,a):a}function Li(){return De.b(Gi,Rc)}function Mi(a,b){try{return P.b(a,b)}catch(c){if(c instanceof Error)return null;throw c;}}
function Ni(a){if(x(null))De.u(null,kd,a,a.Pa);else{a:for(var b=T([a,a.Pa],0),b=F(b),c=Ei;;)if(b)var d=J(J(b)),c=kd.c(c,H(b),gd(b)),b=d;else break a;Ii(c)}return a}
function Oi(a){var b=T([!0],0),b=P.c(b,0,null),c=a.Nb;a.Nb=id;a.update=null;a.fc=null;x(b)||(a.bb=re);for(var b=F(c),c=null,d=0,e=0;;)if(e<d){var f=c.G(null,e);x(Ki.a?Ki.a(f):Ki.call(null,f))&&(f.Qa=td.b(f.Qa,a));e+=1}else if(b=F(b))c=b,yd(c)?(b=kc(c),d=lc(c),c=b,f=O(b),b=d,d=f):(f=H(c),x(Ki.a?Ki.a(f):Ki.call(null,f))&&(f.Qa=td.b(f.Qa,a)),b=J(c),c=null,d=0),e=0;else break}
function Pi(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;b=1<b.length?new G(b.slice(1),0,null):null;return Qi(arguments[0],b)}
function Qi(a,b){var c=P.c(b,0,null),d=P.c(b,1,null);Oi(a);if(x(c)){a.Nb=hd.b(ff(d),c);for(var e=F(a.Nb),f=null,h=0,k=0;;)if(k<h){var l=f.G(null,k);if(x(Ki.a?Ki.a(l):Ki.call(null,l))&&(l.Qa=hd.b(l.Qa,a),l.Pa>a.Pa))for(var l=F(Hi(function(){return function(a){return a.Qa}}(e,f,h,k,l,b,c,d),l)),m=null,n=0,p=0;;)if(p<n)m.G(null,p).Pa=Li(),p+=1;else if(l=F(l))m=l,yd(m)?(l=kc(m),p=lc(m),m=l,n=O(l),l=p):(H(m).Pa=Li(),l=J(m),m=null,n=0),p=0;else break;k+=1}else if(m=F(e)){l=m;if(yd(l))e=kc(l),k=lc(l),f=
e,h=O(e),e=k;else{n=H(l);if(x(Ki.a?Ki.a(n):Ki.call(null,n))&&(n.Qa=hd.b(n.Qa,a),n.Pa>a.Pa))for(e=F(Hi(function(){return function(a){return a.Qa}}(e,f,h,k,n,l,m,b,c,d),n)),f=null,k=h=0;;)if(k<h)f.G(null,k).Pa=Li(),k+=1;else if(e=F(e))f=e,yd(f)?(e=kc(f),k=lc(f),f=e,h=O(e),e=k):(H(f).Pa=Li(),e=J(f),f=null,h=0),k=0;else break;e=J(l);f=null;h=0}k=0}else break;a.fc=function(b){return function(){return a.state=b(a.Nb)}}(function(){return function(a){return je(Ji(rd(a)),Ee.b(Ji,sd(a)))}}(b,c,d),b,c,d)}return Ni(a)}
function Ri(a,b,c,d,e,f,h,k,l){this.j=a;this.state=b;this.Pa=c;this.prev=d;this.Nb=e;this.Qa=f;this.fc=h;this.bb=k;this.update=l;this.l=2147909632;this.D=98306}g=Ri.prototype;g.M=function(a,b){return Sg(b,T(["#\x3cCell: ",bh(T([this.state],0)),"\x3e"],0))};g.O=function(a,b){return new Ri(b,this.state,this.Pa,this.prev,this.Nb,this.Qa,this.fc,this.bb,this.update)};g.N=function(){return this.j};g.kc=function(){return this.state};
g.Ec=function(a,b){if(x(Si.a?Si.a(this):Si.call(null,this)))this.update.call(null,b);else if(x(Ti.a?Ti.a(this):Ti.call(null,this)))this.state=b,Ni(this);else throw Error("can't swap! or reset! formula cell");return this.state};g.Gc=function(a,b){var c;c=this.state;c=b.a?b.a(c):b.call(null,c);return Ce.b?Ce.b(this,c):Ce.call(null,this,c)};g.Hc=function(a,b,c){a=this.state;b=b.b?b.b(a,c):b.call(null,a,c);return Ce.b?Ce.b(this,b):Ce.call(null,this,b)};
g.Ic=function(a,b,c,d){a=this.state;b=b.c?b.c(a,c,d):b.call(null,a,c,d);return Ce.b?Ce.b(this,b):Ce.call(null,this,b)};g.Jc=function(a,b,c,d,e){a=me(b,this.state,c,d,e);return Ce.b?Ce.b(this,a):Ce.call(null,this,a)};
g.sc=function(a,b,c){a=F(this.bb);for(var d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f),k=P.c(h,0,null),h=P.c(h,1,null);h.u?h.u(k,this,b,c):h.call(null,k,this,b,c);f+=1}else if(a=F(a))yd(a)?(d=kc(a),a=lc(a),k=d,e=O(d),d=k):(d=H(a),k=P.c(d,0,null),h=P.c(d,1,null),h.u?h.u(k,this,b,c):h.call(null,k,this,b,c),a=J(a),d=null,e=0),f=0;else return null};g.rc=function(a,b,c){return this.bb=kd.c(this.bb,b,c)};function Ki(a){return L.b($a(a),Ri)?a:null}
function Si(a){var b=Ki(a);return x(x(b)?a.update:b)?a:null}function Ti(a){var b=Ki(a);x(b)&&(b=Ki(a),b=Ya(x(x(b)?a.fc:b)?a:null));return x(b)?a:null}function Ui(a){return function(){function b(a){var b=null;if(0<arguments.length){for(var b=0,d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new G(d,0)}return c.call(this,b)}function c(b){return Qi(Vi?Vi(yh):Wi.call(null,yh),T([a,b],0))}b.A=0;b.B=function(a){a=F(a);return c(a)};b.m=c;return b}()}
function Wi(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 1:return Vi(arguments[0]);default:return c=new G(b.slice(1),0,null),b=arguments[0],c=null!=c&&(c.l&64||v===c.Ha)?je(Ae,c):c,c=E.b(c,Sa),Pi(new Ri(c,b,Li(),b,id,Ig,null,re,null))}}function Vi(a){return Pi(new Ri(null,a,Li(),a,id,Ig,null,re,null))}
function Xi(a,b){var c=Ui(F).call(null,b);return Ee.b(function(b){return function(c){return Ui(ve.b(a,Mi)).call(null,b,c)}}(c),Mg(0,O(M.a?M.a(c):M.call(null,c))))};function Yi(a){if(a.Ra&&"function"==typeof a.Ra)return a.Ra();if(ca(a))return a.split("");if(aa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ka(a)}
function Zi(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(aa(a)||ca(a))Ca(a,b,c);else{var d;if(a.ob&&"function"==typeof a.ob)d=a.ob();else if(a.Ra&&"function"==typeof a.Ra)d=void 0;else if(aa(a)||ca(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=la(a);for(var e=Yi(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}};function $i(a,b){this.Xa={};this.Da=[];this.da=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}g=$i.prototype;g.Ra=function(){aj(this);for(var a=[],b=0;b<this.Da.length;b++)a.push(this.Xa[this.Da[b]]);return a};g.ob=function(){aj(this);return this.Da.concat()};g.Yb=function(a){return bj(this.Xa,a)};g.clear=function(){this.Xa={};this.da=this.Da.length=0};
g.remove=function(a){return bj(this.Xa,a)?(delete this.Xa[a],this.da--,this.Da.length>2*this.da&&aj(this),!0):!1};function aj(a){if(a.da!=a.Da.length){for(var b=0,c=0;b<a.Da.length;){var d=a.Da[b];bj(a.Xa,d)&&(a.Da[c++]=d);b++}a.Da.length=c}if(a.da!=a.Da.length){for(var e={},c=b=0;b<a.Da.length;)d=a.Da[b],bj(e,d)||(a.Da[c++]=d,e[d]=1),b++;a.Da.length=c}}g.get=function(a,b){return bj(this.Xa,a)?this.Xa[a]:b};g.set=function(a,b){bj(this.Xa,a)||(this.da++,this.Da.push(a));this.Xa[a]=b};
g.addAll=function(a){var b;a instanceof $i?(b=a.ob(),a=a.Ra()):(b=la(a),a=ka(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};g.forEach=function(a,b){for(var c=this.ob(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new $i(this)};function bj(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var cj=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function dj(a,b){if(a)for(var c=a.split("\x26"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d"),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?decodeURIComponent(h.replace(/\+/g," ")):"")}};function ej(a,b){this.ib=this.Ab=this.sb="";this.Lb=null;this.wb=this.Za="";this.Na=this.jd=!1;var c;if(a instanceof ej)this.Na=void 0!==b?b:a.Na,fj(this,a.sb),c=a.Ab,gj(this),this.Ab=c,c=a.ib,gj(this),this.ib=c,hj(this,a.Lb),c=a.Za,gj(this),this.Za=c,ij(this,a.$a.clone()),c=a.wb,gj(this),this.wb=c;else if(a&&(c=String(a).match(cj))){this.Na=!!b;fj(this,c[1]||"",!0);var d=c[2]||"";gj(this);this.Ab=jj(d);d=c[3]||"";gj(this);this.ib=jj(d,!0);hj(this,c[4]);d=c[5]||"";gj(this);this.Za=jj(d,!0);ij(this,
c[6]||"",!0);c=c[7]||"";gj(this);this.wb=jj(c)}else this.Na=!!b,this.$a=new kj(null,0,this.Na)}
ej.prototype.toString=function(){var a=[],b=this.sb;b&&a.push(lj(b,mj,!0),":");var c=this.ib;if(c||"file"==b)a.push("//"),(b=this.Ab)&&a.push(lj(b,mj,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Lb,null!=c&&a.push(":",String(c));if(c=this.Za)this.ib&&"/"!=c.charAt(0)&&a.push("/"),a.push(lj(c,"/"==c.charAt(0)?nj:oj,!0));(c=this.$a.toString())&&a.push("?",c);(c=this.wb)&&a.push("#",lj(c,pj));return a.join("")};
ej.prototype.resolve=function(a){var b=this.clone(),c=!!a.sb;c?fj(b,a.sb):c=!!a.Ab;if(c){var d=a.Ab;gj(b);b.Ab=d}else c=!!a.ib;c?(d=a.ib,gj(b),b.ib=d):c=null!=a.Lb;d=a.Za;if(c)hj(b,a.Lb);else if(c=!!a.Za){if("/"!=d.charAt(0))if(this.ib&&!this.Za)d="/"+d;else{var e=b.Za.lastIndexOf("/");-1!=e&&(d=b.Za.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&
f.push(""):".."==k?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(gj(b),b.Za=d):c=""!==a.$a.toString();c?ij(b,jj(a.$a.toString())):c=!!a.wb;c&&(a=a.wb,gj(b),b.wb=a);return b};ej.prototype.clone=function(){return new ej(this)};function fj(a,b,c){gj(a);a.sb=c?jj(b,!0):b;a.sb&&(a.sb=a.sb.replace(/:$/,""))}function hj(a,b){gj(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Lb=b}else a.Lb=null}
function ij(a,b,c){gj(a);b instanceof kj?(a.$a=b,a.$a.vc(a.Na)):(c||(b=lj(b,qj)),a.$a=new kj(b,0,a.Na))}function gj(a){if(a.jd)throw Error("Tried to modify a read-only Uri");}ej.prototype.vc=function(a){this.Na=a;this.$a&&this.$a.vc(a);return this};function jj(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function lj(a,b,c){return ca(a)?(a=encodeURI(a).replace(b,rj),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function rj(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mj=/[#\/\?@]/g,oj=/[\#\?:]/g,nj=/[\#\?]/g,qj=/[\#\?@]/g,pj=/#/g;function kj(a,b,c){this.da=this.aa=null;this.La=a||null;this.Na=!!c}function sj(a){a.aa||(a.aa=new $i,a.da=0,a.La&&dj(a.La,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}g=kj.prototype;g.add=function(a,b){sj(this);this.La=null;a=tj(this,a);var c=this.aa.get(a);c||this.aa.set(a,c=[]);c.push(b);this.da+=1;return this};
g.remove=function(a){sj(this);a=tj(this,a);return this.aa.Yb(a)?(this.La=null,this.da-=this.aa.get(a).length,this.aa.remove(a)):!1};g.clear=function(){this.aa=this.La=null;this.da=0};g.Yb=function(a){sj(this);a=tj(this,a);return this.aa.Yb(a)};g.ob=function(){sj(this);for(var a=this.aa.Ra(),b=this.aa.ob(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.Ra=function(a){sj(this);var b=[];if(ca(a))this.Yb(a)&&(b=Da(b,this.aa.get(tj(this,a))));else{a=this.aa.Ra();for(var c=0;c<a.length;c++)b=Da(b,a[c])}return b};g.set=function(a,b){sj(this);this.La=null;a=tj(this,a);this.Yb(a)&&(this.da-=this.aa.get(a).length);this.aa.set(a,[b]);this.da+=1;return this};g.get=function(a,b){var c=a?this.Ra(a):[];return 0<c.length?String(c[0]):b};
g.toString=function(){if(this.La)return this.La;if(!this.aa)return"";for(var a=[],b=this.aa.ob(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Ra(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="\x3d"+encodeURIComponent(String(d[f])));a.push(h)}return this.La=a.join("\x26")};g.clone=function(){var a=new kj;a.La=this.La;this.aa&&(a.aa=this.aa.clone(),a.da=this.da);return a};function tj(a,b){var c=String(b);a.Na&&(c=c.toLowerCase());return c}
g.vc=function(a){a&&!this.Na&&(sj(this),this.La=null,this.aa.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),this.remove(b),0<a.length&&(this.La=null,this.aa.set(tj(this,b),Ea(a)),this.da+=a.length))},this));this.Na=a};g.extend=function(a){for(var b=0;b<arguments.length;b++)Zi(arguments[b],function(a,b){this.add(b,a)},this)};Ja=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){return console.log.apply(console,fb?eb(a):db.call(null,a))}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}();
Ka=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){return console.error.apply(console,fb?eb(a):db.call(null,a))}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}();(new ej(window.location.href)).$a.get("prerendering");gb(function(a,b){return kd.c(a,b.getAttribute("static-id"),b)},re,jQuery("[static-id]").get());function uj(a,b){vj(a,b)}
function vj(a,b){var c;null==fh&&(fh=ze?ze(0):ye.call(null,0));c=Gc.a([B.a("G__"),B.a(De.b(fh,Rc))].join(""));var d=M.a?M.a(a):M.call(null,a);b.b?b.b(null,d):b.call(null,null,d);eh(a,c,function(){return function(a,c,d,k){return b.b?b.b(d,k):b.call(null,d,k)}}(c))}function wj(a){a=a.childNodes;for(var b=a.length,c=0,d=dc(id);;){var e;e=(e=L.b(c,b))?fc(d):e;if(x(e))return e;e=c+1;d=ge.b(d,a.item(c));c=e}}
function xj(a){return"string"===typeof a?yj.a?yj.a(a):yj.call(null,a):"number"===typeof a?(a=""+B.a(a),yj.a?yj.a(a):yj.call(null,a)):a}var zj=Element.prototype.removeChild,Aj=Element.prototype.appendChild,Bj=Element.prototype.insertBefore;
function Cj(a,b,c){b=Ie(Wa,Ke(c));var d=Jg(b);c=F(b);H(c);J(c);c=wj(a);var e=F(c);H(e);J(e);e=b;for(b=c;;){e=F(e);c=H(e);var e=J(e),f=c;c=e;var h=F(b),e=H(h),h=J(h),k=e,l=h,m=b;if(x(function(){var a=f;return x(a)?a:k}()))b=L.b(f,k)?l:Ya(k)?function(){var b=l;Aj.call(a,xj(f));return b}():Ya(f)?function(){var b=l;x(d.a?d.a(k):d.call(null,k))||zj.call(a,xj(k));return b}():function(){var b=m;Bj.call(a,xj(f),xj(k));return b}(),e=c;else return null}}
function Dj(a){if(!x(a.Jb)){var b;b=wj(a);b=ze?ze(b):ye.call(null,b);a.Jb=b;vj(b,we(Cj,a))}return a}(function(a,b){return a.appendChild=function(a){Dj(this);var c=b.a?b.a(this):b.call(null,this),e=O(M.a?M.a(c):M.call(null,c));x(Ki(a))?uj(a,function(a,b){return function(c,d){return De.u(a,kd,b,d)}}(c,e,a,this)):De.u(c,kd,e,a);return a}})(Element.prototype,function(a){return a.Jb});
(function(a,b){return a.removeChild=function(a){Dj(this);De.b(b.a?b.a(this):b.call(null,this),function(a){return function(b){return Le.b(id,Ie(we(L,a),b))}}(a,this));return a}})(Element.prototype,function(a){return a.Jb});
(function(a,b){return a.insertBefore=function(a,d){Dj(this);Ya(d)?De.c(b.a?b.a(this):b.call(null,this),hd,a):!L.b(a,d)&&De.b(b.a?b.a(this):b.call(null,this),function(a,b){return function(c){return ff(Ge(function(a){return function(b){return L.b(b,d)?new V(null,2,5,pe,[a,b],null):new V(null,1,5,pe,[b],null)}}(a,b),T([c],0)))}}(a,this));return a}})(Element.prototype,function(a){return a.Jb});
(function(a,b){return a.replaceChild=function(a,d){Dj(this);De.b(b.a?b.a(this):b.call(null,this),function(b,c){return function(d){return Me(function(b){return function(c){return L.b(c,b)?a:c}}(b,c),d)}}(d,this));return d}})(Element.prototype,function(a){return a.Jb});
var Ej=function Ej(b,c){if(null!=b&&null!=b.Oc)return b.Oc(0,c);var d=Ej[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Ej._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ICustomElement.-set-attributes!",b);},Fj=function Fj(b,c){if(null!=b&&null!=b.Pc)return b.Pc(0,c);var d=Fj[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Fj._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ICustomElement.-set-styles!",b);},Gj=function Gj(b,c){if(null!=
b&&null!=b.Nc)return b.Nc(0,c);var d=Gj[r(null==b?null:b)];if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);d=Gj._;if(null!=d)return d.b?d.b(b,c):d.call(null,b,c);throw A("ICustomElement.-append-child!",b);};function Hj(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Ej(arguments[0],arguments[1]);default:return b=new G(b.slice(3),0,null),b=le(Ae,arguments[1],arguments[2],b),Ej(arguments[0],b)}}
function Ij(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;switch(b.length){case 2:return Fj(arguments[0],arguments[1]);default:return b=new G(b.slice(3),0,null),b=le(Ae,arguments[1],arguments[2],b),Fj(arguments[0],b)}}
var Jj=Ya(window.Node),Kj=Jj?function(a){try{return xd(a)}catch(b){if(b instanceof Error)return null;throw b;}}:xd,Lj=Jj?function(a){try{return Cd(a)}catch(b){if(b instanceof Error)return null;throw b;}}:Cd,Mj=function Mj(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 2:return Mj.b(arguments[0],arguments[1]);case 3:return Mj.c(arguments[0],arguments[1],arguments[2]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};
Mj.b=function(a,b){return Mj.c(a,b,null)};Mj.c=function(a,b,c){try{return P.c(a,b,c)}catch(d){if(d instanceof Error)return c;throw d;}};Mj.A=3;function Nj(a,b){return window.setTimeout(a,b)}function Oj(a,b){return a instanceof Element?Nj(function d(){return x(document.documentElement.contains(a))?b.v?b.v():b.call(null):Nj(d,20)},0):b.v?b.v():b.call(null)}
function Pj(a){for(var b=dc(re),c=dc(id),d=F(a),e=H(d),f=J(d),h=b,k=c,l=a;;){var m=h,n=k,p=l,q=F(p),t=H(q),u=J(q),w=t,z=u;if(Ya(w))return new V(null,2,5,pe,[fc(m),fc(n)],null);wd(w)?(h=Id(function(){return function(a,b,c){return gc(a,b,c)}}(h,k,l,m,n,p,q,t,u,w,z,b,c,a,a,d,e,f,e,f),m,w),k=n):w instanceof U?(h=he(m,w,H(z)),k=n,z=Hc(z)):x(Lj.a?Lj.a(w):Lj.call(null,w))?(h=m,k=gb(ge,n,Ke(w))):x(Kj.a?Kj.a(w):Kj.call(null,w))?(h=m,k=gb(ge,n,Ke(w))):(h=m,k=ge.b(n,w));l=z}}
function Qj(a,b){Id(function(a){return function(b,c,f){x(Ki(f))?uj(f,function(a){return function(b,d){return Rj.c?Rj.c(a,c,d):Rj.call(null,a,c,d)}}(b,a)):nd(f)?Sj.c?Sj.c(b,c,f):Sj.call(null,b,c,f):Rj.c?Rj.c(b,c,f):Rj.call(null,b,c,f);return b}}(a),a,b);return a}
function Tj(a,b){var c=F(b);H(c);J(c);for(var c=F(Ke(b)),d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f),h=xj(h);x(h)&&Gj(a,h);f+=1}else if(c=F(c))yd(c)?(e=kc(c),c=lc(c),d=e,e=O(e)):(d=H(c),d=xj(d),x(d)&&Gj(a,d),c=J(c),d=null,e=0),f=0;else break;return a}g=Element.prototype;g.U=v;g.M=function(a,b){return Sg(b,T(["#\x3cElement: ",this.tagName,"\x3e"],0))};
g.call=function(){function a(a,d){var c=null;if(1<arguments.length){for(var c=0,f=Array(arguments.length-1);c<f.length;)f[c]=arguments[c+1],++c;c=new G(f,0)}return b.call(this,0,c)}function b(a,b){var c=Pj(b),d=P.c(c,0,null),c=P.c(c,1,null);Qj(this,d);Tj(this,c);return this}a.A=1;a.B=function(a){H(a);a=Hc(a);return b(0,a)};a.m=b;return a}();g.apply=function(a,b){return this.call.apply(this,[this].concat(cb(b)))};
g.b=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a);a=P.c(b,0,null);b=P.c(b,1,null);Qj(this,a);Tj(this,b);return this}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}();
g.Oc=function(a,b){for(var c=jQuery(this),d=F(b),e=null,f=0,h=0;;)if(h<f){var k=e.G(null,h),l=P.c(k,0,null),k=P.c(k,1,null),l=Vd(l);L.b(!1,k)?c.removeAttr(l):c.attr(l,L.b(!0,k)?l:k);h+=1}else if(d=F(d))yd(d)?(l=kc(d),d=lc(d),e=l,f=l=O(l)):(e=H(d),l=P.c(e,0,null),k=P.c(e,1,null),e=Vd(l),L.b(!1,k)?c.removeAttr(e):c.attr(e,L.b(!0,k)?e:k),d=J(d),e=null,f=0),h=0;else return null};
g.Pc=function(a,b){for(var c=jQuery(this),d=F(b),e=null,f=0,h=0;;)if(h<f){var k=e.G(null,h),l=P.c(k,0,null),k=P.c(k,1,null);c.css(Vd(l),""+B.a(k));h+=1}else if(d=F(d))yd(d)?(e=kc(d),d=lc(d),l=e,f=O(e),e=l):(e=H(d),l=P.c(e,0,null),k=P.c(e,1,null),c.css(Vd(l),""+B.a(k)),d=J(d),e=null,f=0),h=0;else return null};g.Nc=function(a,b){if(Jj)try{return this.appendChild(b)}catch(c){if(c instanceof Error)return null;throw c;}else return this.appendChild(b)};
function Uj(a){return function(){function b(a){var b=null;if(0<arguments.length){for(var b=0,d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new G(d,0)}return c.call(this,b)}function c(b){var c=Pj(b);b=P.c(c,0,null);var c=P.c(c,1,null),d=document.getElementsByTagName(a)[0];Qj(d,b);return Ya(Nh.a(b))?(d.Jb=null,d.innerHTML="",Tj(d,c)):null}b.A=0;b.B=function(a){a=F(a);return c(a)};b.m=c;return b}()}
function Vj(a){return function(){function b(a){var b=null;if(0<arguments.length){for(var b=0,d=Array(arguments.length-0);b<d.length;)d[b]=arguments[b+0],++b;b=new G(d,0)}return c.call(this,b)}function c(b){return je(Dj(document.createElement(a)),b)}b.A=0;b.B=function(a){a=F(a);return c(a)};b.m=c;return b}()}function Wj(a){a=Pj(a);var b=P.c(a,0,null);P.c(a,1,null);return Qj(document.getElementsByTagName("html")[0],b)}
var Xj=Uj("body"),Yj=Uj("head"),Zj=Vj("div"),ak=Vj("h2"),bk=Vj("h4"),ck=Vj("hr"),dk=Vj("li"),ek=Vj("link"),fk=Vj("script"),gk=Vj("section"),hk=Vj("ul");function yj(a){return document.createTextNode(a)}function ik(a){jQuery(function(){return setTimeout(function(){return a.v?a.v():a.call(null)},0)})}ik(function(){return jQuery("body").on("submit",function(a){var b=jQuery(a.target),c=b.attr("action"),b=x(c)?c:b.attr("method");return x(b)?null:a.preventDefault()})});
var jk=function jk(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return jk.a(arguments[0]);case 2:return jk.b(arguments[0],arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};jk.a=function(a){return a.val()};jk.b=function(a,b){var c=""+B.a(b),d=jk.a(a);return L.b(c,d)?null:a.val(c)};jk.A=2;
var kk=function kk(b){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;switch(c.length){case 1:return kk.a(arguments[0]);case 2:return kk.b(arguments[0],arguments[1]);default:throw Error([B.a("Invalid arity: "),B.a(c.length)].join(""));}};kk.a=function(a){return a.is(":checked")};kk.b=function(a,b){return a.prop("checked",Dd(b))};kk.A=2;
if("undefined"===typeof Rj)var Rj=function(){var a=ze?ze(re):ye.call(null,re),b=ze?ze(re):ye.call(null,re),c=ze?ze(re):ye.call(null,re),d=ze?ze(re):ye.call(null,re),e=E.c(new Pa(null,1,[Jh,ai],null),ji,lh());return new vh(Gc.b("hoplon.core","do!"),function(){return function(a,b){var c=Sd(b);return x(c)?Td.b(c,"*"):b}}(a,b,c,d,e),ai,e,a,b,c,d)}();wh(Rj,ai,function(a,b,c){b=ld([b,c]);return Rj.c?Rj.c(a,vi,b):Rj.call(null,a,vi,b)});wh(Rj,Fh,function(a,b,c){return Ij(a,b,c)});
wh(Rj,li,function(a,b,c){return Hj(a,b,c)});wh(Rj,Gh,function(a,b,c){return Hj(a,b,c)});wh(Rj,Kh,function(){function a(a,d,e){var c=null;if(2<arguments.length){for(var c=0,h=Array(arguments.length-2);c<h.length;)h[c]=arguments[c+2],++c;c=new G(h,0)}return b.call(this,a,0,c)}function b(a,b,e){a=jQuery(a);return ke(L.b("checkbox",a.attr("type"))?kk:jk,a,e)}a.A=2;a.B=function(a){var c=H(a);a=J(a);H(a);a=Hc(a);return b(c,0,a)};a.m=b;return a}());wh(Rj,vi,function(a,b,c){return Ej(a,c)});
wh(Rj,ci,function(a,b,c){a=jQuery(a);b=function(){return function(a){var b;a:{var c=Fe(!0);b=dc(re);a=F(a);for(c=F(c);;)if(a&&c)b=he(b,H(a),H(c)),a=J(a),c=J(c);else{b=fc(b);break a}}return b}}(a);c=wd(c)?c:b("string"===typeof c?c.split(/\s+/):F(c));c=F(c);for(var d=null,e=0,f=0;;)if(f<e){var h=d.G(null,f);b=P.c(h,0,null);h=P.c(h,1,null);a.toggleClass(Vd(b),Dd(h));f+=1}else if(c=F(c))yd(c)?(d=kc(c),c=lc(c),b=d,e=O(d),d=b):(d=H(c),b=P.c(d,0,null),h=P.c(d,1,null),a.toggleClass(Vd(b),Dd(h)),c=J(c),d=
null,e=0),f=0;else return null});wh(Rj,Ph,function(a,b,c){return Fj(a,c)});wh(Rj,Vh,function(a,b,c){return jQuery(a).toggle(Dd(c))});wh(Rj,Lh,function(a,b,c){return x(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});wh(Rj,Eh,function(a,b,c){return x(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});wh(Rj,gi,function(a,b,c){return setTimeout(function(){return x(c)?jQuery(a).focus():jQuery(a).focusout()},0)});wh(Rj,qi,function(a){return jQuery(a).select()});
wh(Rj,ei,function(a,b,c){return x(c)?(Rj.c?Rj.c(a,gi,c):Rj.call(null,a,gi,c),Rj.c?Rj.c(a,qi,c):Rj.call(null,a,qi,c)):null});wh(Rj,si,function(a,b,c){return jQuery(a).text(""+B.a(c))});wh(Rj,ri,function(a,b,c){return jQuery(a).html(c)});wh(Rj,pi,function(a,b,c){return x(c)?(b=jQuery("body,html"),a=jQuery(a),b.animate(jh(new Pa(null,1,[ti,a.offset().top],null)))):null});
if("undefined"===typeof Sj)var Sj=function(){var a=ze?ze(re):ye.call(null,re),b=ze?ze(re):ye.call(null,re),c=ze?ze(re):ye.call(null,re),d=ze?ze(re):ye.call(null,re),e=E.c(new Pa(null,1,[Jh,ai],null),ji,lh());return new vh(Gc.b("hoplon.core","on!"),function(){return function(a,b){var c=Sd(b);return x(c)?Td.b(c,"*"):b}}(a,b,c,d,e),ai,e,a,b,c,d)}();jQuery.Event.prototype.kc=function(){return jQuery(this.target).val()};wh(Sj,ai,function(a,b,c){return Oj(a,function(){return jQuery(a).on(Vd(b),c)})});
wh(Sj,li,function(a,b,c){return Oj(a,function(){return jQuery(a).on(Vd(b),c)})});
function lk(a,b){var c=ze?ze(Ic):ye.call(null,Ic),d=Ui(function(){return function(a,b){return a.a?a.a(b):a.call(null,b)}}(c)).call(null,F,a),e=function(a,b){return function(c){return Ui(function(){return function(a,b,c){return c.b?c.b(b,a):c.call(null,b,a)}}(a,b)).call(null,c,b,Mj)}}(c,d),f=function(){return function(a){var b=H(M.a?M.a(a):M.call(null,a));De.b(a,Hc);return b}}(c,d,e),h=Vi(id);uj(d,function(a,c,d,e,f){return function(d,h){var k=O(d),l=O(h),m=l-k;if(0<m)for(var k=F(Mg(k,l)),l=null,n=
m=0;;)if(n<m){var p=l.G(null,n),q=function(){var a=f(c);if(x(a))return a;a=e(p);return b.a?b.a(a):b.call(null,a)}();De.c(a,hd,q);n+=1}else if(k=F(k))l=k,yd(l)?(k=kc(l),n=lc(l),l=k,m=O(k),k=n):(p=H(l),k=function(){var a=f(c);if(x(a))return a;a=e(p);return b.a?b.a(a):b.call(null,a)}(),De.c(a,hd,k),k=J(l),l=null,m=0),n=0;else return null;else if(0>m)for(k=-m,l=0;;)if(l<k)m=rd(M.a?M.a(a):M.call(null,a)),De.b(a,sd),De.c(c,hd,m),l+=1;else return null;else return null}}(h,c,d,e,f));return h};function mk(a){L.b(O(a),1)&&L.b(H(a).nodeType,1)}
var nk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a);a=P.c(b,0,null);b=P.c(b,1,null);a=Eg(T([a,new Pa(null,1,[Yh,""],null)],0));b=fk.c?fk.c(Sh,"text/template",b):fk.call(null,Sh,"text/template",b);return gk.b?gk.b(a,b):gk.call(null,a,b)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}(),ok=function(){function a(a){var c=null;if(0<arguments.length){for(var c=
0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){a=Pj(a);P.c(a,0,null);a=P.c(a,1,null);mk(a);return a}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}(),pk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){a=Pj(a);P.c(a,0,null);a=P.c(a,1,null);mk(a);return a}a.A=0;a.B=function(a){a=F(a);return b(a)};
a.m=b;return a}(),qk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a);a=P.c(b,0,null);var c=null!=a&&(a.l&64||v===a.Ha)?je(Ae,a):a;a=E.b(c,Bh);var f=E.b(c,Zh),h=E.b(c,Oh),k=E.b(c,Ih),b=P.c(b,1,null),c=md.m(c,Bh,T([Zh,Oh,Ih],0)),h=x(h)?kd.c(c,Ah,h):c,k=x(k)?kd.c(h,Uh,k):h,f=x(f)?fe.b(new V(null,1,5,pe,[pk.m(T([f],0))],null),b):b;return x(a)?nk.m(T([k,f],
0)):gk.b?gk.b(k,f):gk.call(null,k,f)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}(),rk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){a=Pj(a);var b=P.c(a,0,null),b=null!=b&&(b.l&64||v===b.Ha)?je(Ae,b):b,b=E.b(b,Zh);a=P.c(a,1,null);return null==b||Ya(F(b))?qk.m(T([re,a],0)):qk.m(T([re,fe.b(new V(null,1,5,pe,[qk.m(T([ok.m(T([b],0))],0))],null),a)],0))}
a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}();function sk(a){return Me(function(a){return new Pa(null,2,[ni,a,Xh,Me(function(b){return 0!=(a&1<<b)},new V(null,4,5,pe,[3,2,1,0],null))],null)},new V(null,2,5,pe,[Ld(a,10),(a%10+10)%10],null))}
var tk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){a=Pj(a);var b=P.c(a,0,null),c=null!=b&&(b.l&64||v===b.Ha)?je(Ae,b):b,f=E.b(c,hi);a=Ui(function(){return function(a,b){return new Pa(null,3,[Hh,!0,hi,b,di,a.a?a.a(b):a.call(null,b)],null)}}(ci,a,b,c,f)).call(null,Ya,f);return Zj.b?Zj.b(ci,a):Zj.call(null,ci,a)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}(),
uk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a),c=P.c(b,0,null),f=null!=c&&(c.l&64||v===c.Ha)?je(Ae,c):c,h=E.b(f,ui);a=hd.b(Me(we(tk,hi),Me(function(a,b,c,d,e,f){return function(h){return Ui(function(){return function(a,b,c){a=Xh.a(a);return b.b?b.b(a,c):b.call(null,a,c)}}(a,b,c,d,e,f)).call(null,f,P,h)}}(ci,"col",b,c,f,h),Mg(0,O(Xh.a(M.a?M.a(h):M.call(null,
h)))))),function(){var a=function(){var a=document.createTextNode("");Ui(function(){return function(a,b){return b.nodeValue=""+B.a(ni.a(a))}}(a,ci,"unit",ci,"col",b,c,f,h)).call(null,h,a);return a}();return Zj.c?Zj.c(ci,"unit",a):Zj.call(null,ci,"unit",a)}());return Zj.c?Zj.c(ci,"col",a):Zj.call(null,ci,"col",a)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}(),vk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+
0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a),c=P.c(b,0,null),f=null!=c&&(c.l&64||v===c.Ha)?je(Ae,c):c,h=E.b(f,ui);a=uk.m(T([ui,Ui(function(){return function(a,b){return a.a?a.a(b):a.call(null,b)}}(ci,"colpair",b,c,f,h)).call(null,H,h)],0));b=uk.m(T([ui,Ui(function(){return function(a,b){return b.a?b.a(a):b.call(null,a)}}(ci,"colpair",a,b,c,f,h)).call(null,h,gd)],0));return Zj.u?Zj.u(ci,"colpair",a,b):Zj.call(null,ci,"colpair",a,b)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=
b;return a}(),wk=function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){var b=Pj(a),c=P.c(b,0,null),f=null!=c&&(c.l&64||v===c.Ha)?je(Ae,c):c,h=E.b(f,Mh),k=E.c(f,Qh,new V(null,4,5,pe,[8,4,2,1],null));a=function(){var a=Ee.b(function(){return function(a){a=""+B.a(a);return Zj.c?Zj.c(ci,"unit",a):Zj.call(null,ci,"unit",a)}}(ci,"col legend",b,c,f,h,k),k);return Zj.c?Zj.c(ci,
"col legend",a):Zj.call(null,ci,"col legend",a)}();var l=vk.m(T([ui,Ui(function(){return function(a){return fi.a(a)}}(a,b,c,f,h,k)).call(null,h)],0)),m=vk.m(T([ui,Ui(function(){return function(a){return ii.a(a)}}(a,l,b,c,f,h,k)).call(null,h)],0)),n=vk.m(T([ui,Ui(function(){return function(a){return Wh.a(a)}}(a,l,m,b,c,f,h,k)).call(null,h)],0));return Zj.u?Zj.u(a,l,m,n):Zj.call(null,a,l,m,n)}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;return a}();
function xk(a){var b=Vi(a.v?a.v():a.call(null));setInterval(function(b){return function(){var c=a.v?a.v():a.call(null);return Ce.b?Ce.b(b,c):Ce.call(null,b,c)}}(b),1E3);return b}
(function(){function a(a){var c=null;if(0<arguments.length){for(var c=0,e=Array(arguments.length-0);c<e.length;)e[c]=arguments[c+0],++c;c=new G(e,0)}return b.call(this,c)}function b(a){a=Pj(a);var b=P.c(a,0,null),c=null!=b&&(b.l&64||v===b.Ha)?je(Ae,b):b,f=E.c(c,$h,"default"),h=P.c(a,1,null);ik(function(a,b,c,d,e,f){return function(){return Reveal.initialize(jh(new Pa(null,2,[Rh,!0,mi,new V(null,4,5,pe,[new Pa(null,1,[Th,"reveal.js/plugin/markdown/marked.js"],null),new Pa(null,1,[Th,"reveal.js/plugin/markdown/markdown.js"],
null),new Pa(null,3,[Th,"reveal.js/plugin/highlight/highlight.js",Ch,!0,ki,function(){return function(){return hljs.initHighlightingOnLoad()}}(a,b,c,d,e,f)],null),new Pa(null,2,[Th,"reveal.js/plugin/notes/notes.js",Ch,!0],null)],null)],null)))}}(a,b,c,c,f,h));return Wj(T([Yj.v?Yj.v():Yj.call(null),function(){var a;a=Eg(T([md.b(c,$h),new Pa(null,1,[ci,"reveal"],null)],0));var b=ek.u?ek.u(zh,"stylesheet",oi,"reveal.js/css/reveal.css"):ek.call(null,zh,"stylesheet",oi,"reveal.js/css/reveal.css"),d;d=
[B.a("reveal.js/css/theme/"),B.a(f),B.a(".css")].join("");d=ek.ba?ek.ba(zh,"stylesheet",oi,d,bi,"theme"):ek.call(null,zh,"stylesheet",oi,d,bi,"theme");var e=ek.u?ek.u(zh,"stylesheet",oi,"reveal.js/plugin/highlight/github.min.css"):ek.call(null,zh,"stylesheet",oi,"reveal.js/plugin/highlight/github.min.css"),p=Zj.c?Zj.c(ci,"slides",h):Zj.call(null,ci,"slides",h);a=Zj.F?Zj.F(a,b,d,e,p):Zj.call(null,a,b,d,e,p);return Xj.a?Xj.a(a):Xj.call(null,a)}()],0))}a.A=0;a.B=function(a){a=F(a);return b(a)};a.m=b;
return a})().m(T([$h,"sky",ek.u?ek.u(zh,"stylesheet",oi,"clock.css"):ek.call(null,zh,"stylesheet",oi,"clock.css"),rk.m(T([Zh,new V(null,3,5,pe,[ak.a?ak.a("Quicklist"):ak.call(null,"Quicklist"),ck.v?ck.v():ck.call(null),bk.a?bk.a("subtitle"):bk.call(null,"subtitle")],null),qk.m(T([function(a){a=lk(a,function(a){a=Xi(Jd,Ui(function(a){return new V(null,1,5,pe,[a],null)}).call(null,a));a=P.c(a,0,null);a=M.a?M.a(a):M.call(null,a);return dk.a?dk.a(a):dk.call(null,a)});return hk.a?hk.a(a):hk.call(null,
a)}(T(["item 1","item 2","item 3","item 4"],0))],0))],0)),rk.m(T([Zh,new V(null,3,5,pe,[ak.a?ak.a("Binary Clock"):ak.call(null,"Binary Clock"),ck.v?ck.v():ck.call(null),function(){var a=xk(function(){var a=new Date;return new Pa(null,3,[fi,sk(a.getHours()),ii,sk(a.getMinutes()),Wh,sk(a.getSeconds())],null)});return wk.m(T([Mh,a],0))}()],null)],0))],0));