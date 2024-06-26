import{d as Er}from"./chunk-55KE2TB7.js";var Ar=Er((He,ze)=>{(function(S,k){typeof He=="object"&&typeof ze<"u"?ze.exports=k():typeof define=="function"&&define.amd?define(k):(S=typeof globalThis<"u"?globalThis:S||self,S.DOMPurify=k())})(He,function(){"use strict";function S(r){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(r)}function k(r,n){return k=Object.setPrototypeOf||function(u,c){return u.__proto__=c,u},k(r,n)}function gt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Q(r,n,o){return gt()?Q=Reflect.construct:Q=function(c,R,g){var C=[null];C.push.apply(C,R);var F=Function.bind.apply(c,C),V=new F;return g&&k(V,g.prototype),V},Q.apply(null,arguments)}function M(r){return St(r)||bt(r)||Ot(r)||Rt()}function St(r){if(Array.isArray(r))return me(r)}function bt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Ot(r,n){if(r){if(typeof r=="string")return me(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return me(r,n)}}function me(r,n){(n==null||n>r.length)&&(n=r.length);for(var o=0,u=new Array(n);o<n;o++)u[o]=r[o];return u}function Rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Lt=Object.hasOwnProperty,Ge=Object.setPrototypeOf,Mt=Object.isFrozen,Nt=Object.getPrototypeOf,Dt=Object.getOwnPropertyDescriptor,v=Object.freeze,b=Object.seal,Ct=Object.create,We=typeof Reflect<"u"&&Reflect,ee=We.apply,de=We.construct;ee||(ee=function(n,o,u){return n.apply(o,u)}),v||(v=function(n){return n}),b||(b=function(n){return n}),de||(de=function(n,o){return Q(n,M(o))});var wt=O(Array.prototype.forEach),Be=O(Array.prototype.pop),Y=O(Array.prototype.push),te=O(String.prototype.toLowerCase),_e=O(String.prototype.toString),$e=O(String.prototype.match),N=O(String.prototype.replace),It=O(String.prototype.indexOf),xt=O(String.prototype.trim),_=O(RegExp.prototype.test),Te=kt(TypeError);function je(r){return typeof r=="number"&&isNaN(r)}function O(r){return function(n){for(var o=arguments.length,u=new Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];return ee(r,n,u)}}function kt(r){return function(){for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];return de(r,o)}}function s(r,n,o){var u;o=(u=o)!==null&&u!==void 0?u:te,Ge&&Ge(r,null);for(var c=n.length;c--;){var R=n[c];if(typeof R=="string"){var g=o(R);g!==R&&(Mt(n)||(n[c]=g),R=g)}r[R]=!0}return r}function P(r){var n=Ct(null),o;for(o in r)ee(Lt,r,[o])===!0&&(n[o]=r[o]);return n}function re(r,n){for(;r!==null;){var o=Dt(r,n);if(o){if(o.get)return O(o.get);if(typeof o.value=="function")return O(o.value)}r=Nt(r)}function u(c){return console.warn("fallback value for",c),null}return u}var Xe=v(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),he=v(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ve=v(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pt=v(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ee=v(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ft=v(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ye=v(["#text"]),Ve=v(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ae=v(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),qe=v(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ae=v(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ut=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ht=b(/<%[\w\W]*|[\w\W]*%>/gm),zt=b(/\${[\w\W]*}/gm),Gt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Wt=b(/^aria-[\-\w]+$/),Bt=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$t=b(/^(?:\w+script|data):/i),jt=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Xt=b(/^html$/i),Yt=b(/^[a-z][.\w]*(-[.\w]+)+$/i),Vt=function(){return typeof window>"u"?null:window},qt=function(n,o){if(S(n)!=="object"||typeof n.createPolicy!="function")return null;var u=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(u=o.currentScript.getAttribute(c));var R="dompurify"+(u?"#"+u:"");try{return n.createPolicy(R,{createHTML:function(C){return C},createScriptURL:function(C){return C}})}catch{return console.warn("TrustedTypes policy "+R+" could not be created."),null}};function Ke(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Vt(),n=function(e){return Ke(e)};if(n.version="2.5.4",n.removed=[],!r||!r.document||r.document.nodeType!==9)return n.isSupported=!1,n;var o=r.document,u=r.document,c=r.DocumentFragment,R=r.HTMLTemplateElement,g=r.Node,C=r.Element,F=r.NodeFilter,V=r.NamedNodeMap,Zt=V===void 0?r.NamedNodeMap||r.MozNamedAttrMap:V,Jt=r.HTMLFormElement,Qt=r.DOMParser,ne=r.trustedTypes,ie=C.prototype,er=re(ie,"cloneNode"),tr=re(ie,"nextSibling"),rr=re(ie,"childNodes"),q=re(ie,"parentNode");if(typeof R=="function"){var ye=u.createElement("template");ye.content&&ye.content.ownerDocument&&(u=ye.content.ownerDocument)}var D=qt(ne,o),ge=D?D.createHTML(""):"",oe=u,Se=oe.implementation,ar=oe.createNodeIterator,nr=oe.createDocumentFragment,ir=oe.getElementsByTagName,or=o.importNode,Ze={};try{Ze=P(u).documentMode?u.documentMode:{}}catch{}var w={};n.isSupported=typeof q=="function"&&Se&&Se.createHTMLDocument!==void 0&&Ze!==9;var be=Ut,Oe=Ht,Re=zt,lr=Gt,sr=Wt,ur=$t,Je=jt,fr=Yt,Le=Bt,p=null,Qe=s({},[].concat(M(Xe),M(he),M(ve),M(Ee),M(Ye))),m=null,et=s({},[].concat(M(Ve),M(Ae),M(qe),M(ae))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),K=null,Me=null,tt=!0,Ne=!0,rt=!1,at=!0,G=!1,De=!0,U=!1,Ce=!1,we=!1,W=!1,le=!1,se=!1,nt=!0,it=!1,cr="user-content-",Ie=!0,Z=!1,B={},$=null,ot=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),lt=null,st=s({},["audio","video","img","source","image","track"]),xe=null,ut=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ue="http://www.w3.org/1998/Math/MathML",fe="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xhtml",j=I,ke=!1,Pe=null,pr=s({},[ue,fe,I],_e),H,mr=["application/xhtml+xml","text/html"],dr="text/html",d,X=null,ft=255,_r=u.createElement("form"),ct=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(e){X&&X===e||((!e||S(e)!=="object")&&(e={}),e=P(e),H=mr.indexOf(e.PARSER_MEDIA_TYPE)===-1?H=dr:H=e.PARSER_MEDIA_TYPE,d=H==="application/xhtml+xml"?_e:te,p="ALLOWED_TAGS"in e?s({},e.ALLOWED_TAGS,d):Qe,m="ALLOWED_ATTR"in e?s({},e.ALLOWED_ATTR,d):et,Pe="ALLOWED_NAMESPACES"in e?s({},e.ALLOWED_NAMESPACES,_e):pr,xe="ADD_URI_SAFE_ATTR"in e?s(P(ut),e.ADD_URI_SAFE_ATTR,d):ut,lt="ADD_DATA_URI_TAGS"in e?s(P(st),e.ADD_DATA_URI_TAGS,d):st,$="FORBID_CONTENTS"in e?s({},e.FORBID_CONTENTS,d):ot,K="FORBID_TAGS"in e?s({},e.FORBID_TAGS,d):{},Me="FORBID_ATTR"in e?s({},e.FORBID_ATTR,d):{},B="USE_PROFILES"in e?e.USE_PROFILES:!1,tt=e.ALLOW_ARIA_ATTR!==!1,Ne=e.ALLOW_DATA_ATTR!==!1,rt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,at=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,G=e.SAFE_FOR_TEMPLATES||!1,De=e.SAFE_FOR_XML!==!1,U=e.WHOLE_DOCUMENT||!1,W=e.RETURN_DOM||!1,le=e.RETURN_DOM_FRAGMENT||!1,se=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,nt=e.SANITIZE_DOM!==!1,it=e.SANITIZE_NAMED_PROPS||!1,Ie=e.KEEP_CONTENT!==!1,Z=e.IN_PLACE||!1,Le=e.ALLOWED_URI_REGEXP||Le,j=e.NAMESPACE||I,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ct(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ct(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),G&&(Ne=!1),le&&(W=!0),B&&(p=s({},M(Ye)),m=[],B.html===!0&&(s(p,Xe),s(m,Ve)),B.svg===!0&&(s(p,he),s(m,Ae),s(m,ae)),B.svgFilters===!0&&(s(p,ve),s(m,Ae),s(m,ae)),B.mathMl===!0&&(s(p,Ee),s(m,qe),s(m,ae))),e.ADD_TAGS&&(p===Qe&&(p=P(p)),s(p,e.ADD_TAGS,d)),e.ADD_ATTR&&(m===et&&(m=P(m)),s(m,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&s(xe,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&($===ot&&($=P($)),s($,e.FORBID_CONTENTS,d)),Ie&&(p["#text"]=!0),U&&s(p,["html","head","body"]),p.table&&(s(p,["tbody"]),delete K.tbody),v&&v(e),X=e)},pt=s({},["mi","mo","mn","ms","mtext"]),mt=s({},["foreignobject","annotation-xml"]),Tr=s({},["title","style","font","a","script"]),ce=s({},he);s(ce,ve),s(ce,Pt);var Ue=s({},Ee);s(Ue,Ft);var hr=function(e){var t=q(e);(!t||!t.tagName)&&(t={namespaceURI:j,tagName:"template"});var a=te(e.tagName),l=te(t.tagName);return Pe[e.namespaceURI]?e.namespaceURI===fe?t.namespaceURI===I?a==="svg":t.namespaceURI===ue?a==="svg"&&(l==="annotation-xml"||pt[l]):!!ce[a]:e.namespaceURI===ue?t.namespaceURI===I?a==="math":t.namespaceURI===fe?a==="math"&&mt[l]:!!Ue[a]:e.namespaceURI===I?t.namespaceURI===fe&&!mt[l]||t.namespaceURI===ue&&!pt[l]?!1:!Ue[a]&&(Tr[a]||!ce[a]):!!(H==="application/xhtml+xml"&&Pe[e.namespaceURI]):!1},E=function(e){Y(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=ge}catch{e.remove()}}},pe=function(e,t){try{Y(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{Y(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!m[e])if(W||le)try{E(t)}catch{}else try{t.setAttribute(e,"")}catch{}},dt=function(e){var t,a;if(we)e="<remove></remove>"+e;else{var l=$e(e,/^[\r\n\t ]+/);a=l&&l[0]}H==="application/xhtml+xml"&&j===I&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var A=D?D.createHTML(e):e;if(j===I)try{t=new Qt().parseFromString(A,H)}catch{}if(!t||!t.documentElement){t=Se.createDocument(j,"template",null);try{t.documentElement.innerHTML=ke?ge:A}catch{}}var h=t.body||t.documentElement;return e&&a&&h.insertBefore(u.createTextNode(a),h.childNodes[0]||null),j===I?ir.call(t,U?"html":"body")[0]:U?t.documentElement:h},_t=function(e){return ar.call(e.ownerDocument||e,e,F.SHOW_ELEMENT|F.SHOW_COMMENT|F.SHOW_TEXT|F.SHOW_PROCESSING_INSTRUCTION|F.SHOW_CDATA_SECTION,null,!1)},Tt=function(e){return e instanceof Jt&&(typeof e.__depth<"u"&&typeof e.__depth!="number"||typeof e.__removalCount<"u"&&typeof e.__removalCount!="number"||typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Zt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},J=function(e){return S(g)==="object"?e instanceof g:e&&S(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},x=function(e,t,a){w[e]&&wt(w[e],function(l){l.call(n,t,a,X)})},ht=function(e){var t;if(x("beforeSanitizeElements",e,null),Tt(e)||_(/[\u0080-\uFFFF]/,e.nodeName))return E(e),!0;var a=d(e.nodeName);if(x("uponSanitizeElement",e,{tagName:a,allowedTags:p}),e.hasChildNodes()&&!J(e.firstElementChild)&&(!J(e.content)||!J(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)||a==="select"&&_(/<template/i,e.innerHTML)||e.nodeType===7||De&&e.nodeType===8&&_(/<[/\w]/g,e.data))return E(e),!0;if(!p[a]||K[a]){if(!K[a]&&Et(a)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a)))return!1;if(Ie&&!$[a]){var l=q(e)||e.parentNode,A=rr(e)||e.childNodes;if(A&&l)for(var h=A.length,T=h-1;T>=0;--T){var z=er(A[T],!0);z.__removalCount=(e.__removalCount||0)+1,l.insertBefore(z,tr(e))}}return E(e),!0}return e instanceof C&&!hr(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&_(/<\/no(script|embed|frames)/i,e.innerHTML)?(E(e),!0):(G&&e.nodeType===3&&(t=e.textContent,t=N(t,be," "),t=N(t,Oe," "),t=N(t,Re," "),e.textContent!==t&&(Y(n.removed,{element:e.cloneNode()}),e.textContent=t)),x("afterSanitizeElements",e,null),!1)},vt=function(e,t,a){if(nt&&(t==="id"||t==="name")&&(a in u||a in _r||a==="__depth"||a==="__removalCount"))return!1;if(!(Ne&&!Me[t]&&_(lr,t))){if(!(tt&&_(sr,t))){if(!m[t]||Me[t]){if(!(Et(e)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&_(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,a)||f.tagNameCheck instanceof Function&&f.tagNameCheck(a))))return!1}else if(!xe[t]){if(!_(Le,N(a,Je,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&It(a,"data:")===0&&lt[e])){if(!(rt&&!_(ur,N(a,Je,"")))){if(a)return!1}}}}}}return!0},Et=function(e){return e!=="annotation-xml"&&$e(e,fr)},At=function(e){var t,a,l,A;x("beforeSanitizeAttributes",e,null);var h=e.attributes;if(h){var T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m};for(A=h.length;A--;){t=h[A];var z=t,L=z.name,y=z.namespaceURI;if(a=L==="value"?t.value:xt(t.value),l=d(L),T.attrName=l,T.attrValue=a,T.keepAttr=!0,T.forceKeepAttr=void 0,x("uponSanitizeAttribute",e,T),a=T.attrValue,!T.forceKeepAttr&&(pe(L,e),!!T.keepAttr)){if(!at&&_(/\/>/i,a)){pe(L,e);continue}if(De&&_(/((--!?|])>)|<\/(style|title)/i,a)){pe(L,e);continue}G&&(a=N(a,be," "),a=N(a,Oe," "),a=N(a,Re," "));var yt=d(e.nodeName);if(vt(yt,l,a)){if(it&&(l==="id"||l==="name")&&(pe(L,e),a=cr+a),D&&S(ne)==="object"&&typeof ne.getAttributeType=="function"&&!y)switch(ne.getAttributeType(yt,l)){case"TrustedHTML":{a=D.createHTML(a);break}case"TrustedScriptURL":{a=D.createScriptURL(a);break}}try{y?e.setAttributeNS(y,L,a):e.setAttribute(L,a),Tt(e)?E(e):Be(n.removed)}catch{}}}}x("afterSanitizeAttributes",e,null)}},vr=function i(e){var t,a=_t(e);for(x("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)if(x("uponSanitizeShadowNode",t,null),!ht(t)){var l=q(t);t.nodeType===1&&(l&&l.__depth?t.__depth=(t.__removalCount||0)+l.__depth+1:t.__depth=1),(t.__depth>=ft||je(t.__depth))&&E(t),t.content instanceof c&&(t.content.__depth=t.__depth,i(t.content)),At(t)}x("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,a,l,A,h;if(ke=!i,ke&&(i="<!-->"),typeof i!="string"&&!J(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw Te("dirty is not a string, aborting")}else throw Te("toString is not a function");if(!n.isSupported){if(S(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(J(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ce||Fe(e),n.removed=[],typeof i=="string"&&(Z=!1),Z){if(i.nodeName){var T=d(i.nodeName);if(!p[T]||K[T])throw Te("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof g)t=dt("<!---->"),a=t.ownerDocument.importNode(i,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?t=a:t.appendChild(a);else{if(!W&&!G&&!U&&i.indexOf("<")===-1)return D&&se?D.createHTML(i):i;if(t=dt(i),!t)return W?null:se?ge:""}t&&we&&E(t.firstChild);for(var z=_t(Z?i:t);l=z.nextNode();)if(!(l.nodeType===3&&l===A)&&!ht(l)){var L=q(l);l.nodeType===1&&(L&&L.__depth?l.__depth=(l.__removalCount||0)+L.__depth+1:l.__depth=1),(l.__depth>=ft||je(l.__depth))&&E(l),l.content instanceof c&&(l.content.__depth=l.__depth,vr(l.content)),At(l),A=l}if(A=null,Z)return i;if(W){if(le)for(h=nr.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return(m.shadowroot||m.shadowrootmod)&&(h=or.call(o,h,!0)),h}var y=U?t.outerHTML:t.innerHTML;return U&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&_(Xt,t.ownerDocument.doctype.name)&&(y="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+y),G&&(y=N(y,be," "),y=N(y,Oe," "),y=N(y,Re," ")),D&&se?D.createHTML(y):y},n.setConfig=function(i){Fe(i),Ce=!0},n.clearConfig=function(){X=null,Ce=!1},n.isValidAttribute=function(i,e,t){X||Fe({});var a=d(i),l=d(e);return vt(a,l,t)},n.addHook=function(i,e){typeof e=="function"&&(w[i]=w[i]||[],Y(w[i],e))},n.removeHook=function(i){if(w[i])return Be(w[i])},n.removeHooks=function(i){w[i]&&(w[i]=[])},n.removeAllHooks=function(){w={}},n}var Kt=Ke();return Kt})});export default Ar();