(this["webpackJsonp@reality.eth/template-generator"]=this["webpackJsonp@reality.eth/template-generator"]||[]).push([[0],{319:function(e){e.exports=JSON.parse('{"ab":"Abkhaz","aa":"Afar","af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","an":"Aragonese","hy":"Armenian","as":"Assamese","av":"Avaric","ae":"Avestan","ay":"Aymara","az":"Azerbaijani","bm":"Bambara","ba":"Bashkir","eu":"Basque","be":"Belarusian","bn":"Bengali","bh":"Bihari","bi":"Bislama","bs":"Bosnian","br":"Breton","bg":"Bulgarian","my":"Burmese","ca":"Catalan; Valencian","ch":"Chamorro","ce":"Chechen","ny":"Chichewa; Chewa; Nyanja","zh":"Chinese","cv":"Chuvash","kw":"Cornish","co":"Corsican","cr":"Cree","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi; Dhivehi; Maldivian;","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fo":"Faroese","fj":"Fijian","fi":"Finnish","fr":"French","ff":"Fula; Fulah; Pulaar; Pular","gl":"Galician","ka":"Georgian","de":"German","el":"Greek, Modern","gn":"Guaran\xed","gu":"Gujarati","ht":"Haitian; Haitian Creole","ha":"Hausa","he":"Hebrew","iw":"Hebrew","hz":"Herero","hi":"Hindi","ho":"Hiri Motu","hu":"Hungarian","is":"Icelandic","io":"Ido","ig":"Igbo","id":"Indonesian","ia":"Interlingua","ie":"Interlingue","iu":"Inuktitut","ik":"Inupiaq","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kl":"Kalaallisut, Greenlandic","kn":"Kannada","kr":"Kanuri","ks":"Kashmiri","kk":"Kazakh","km":"Khmer","ki":"Kikuyu, Gikuyu","rw":"Kinyarwanda","ky":"Kirghiz, Kyrgyz","rn":"Kirundi","kv":"Komi","kg":"Kongo","ko":"Korean","ku":"Kurdish","kj":"Kwanyama, Kuanyama","lo":"Lao","la":"Latin","lv":"Latvian","li":"Limburgish, Limburgan, Limburger","ln":"Lingala","lt":"Lithuanian","lu":"Luba-Katanga","lg":"Luganda","lb":"Luxembourgish, Letzeburgesch","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","gv":"Manx","mr":"Marathi (Mar\u0101\u1e6dh\u012b)","mh":"Marshallese","mn":"Mongolian","mi":"M\u0101ori","na":"Nauru","nv":"Navajo, Navaho","ng":"Ndonga","ne":"Nepali","nd":"North Ndebele","se":"Northern Sami","no":"Norwegian","nb":"Norwegian Bokm\xe5l","nn":"Norwegian Nynorsk","ii":"Nuosu","oc":"Occitan","oj":"Ojibwe, Ojibwa","cu":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","or":"Oriya","om":"Oromo","os":"Ossetian, Ossetic","pa":"Panjabi, Punjabi","ps":"Pashto, Pushto","fa":"Persian","pl":"Polish","pt":"Portuguese","pi":"P\u0101li","qu":"Quechua","ro":"Romanian, Moldavian, Moldovan","rm":"Romansh","ru":"Russian","sm":"Samoan","sg":"Sango","sa":"Sanskrit (Sa\u1e41sk\u1e5bta)","sc":"Sardinian","gd":"Scottish Gaelic; Gaelic","sr":"Serbian","sn":"Shona","sd":"Sindhi","si":"Sinhala, Sinhalese","sk":"Slovak","sl":"Slovene","so":"Somali","nr":"South Ndebele","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","ss":"Swati","sv":"Swedish","tl":"Tagalog","ty":"Tahitian","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","bo":"Tibetan Standard, Tibetan, Central","ti":"Tigrinya","to":"Tonga (Tonga Islands)","ts":"Tsonga","tn":"Tswana","tr":"Turkish","tk":"Turkmen","tw":"Twi","ug":"Uighur, Uyghur","uk":"Ukrainian","ur":"Urdu","uz":"Uzbek","ve":"Venda","vi":"Vietnamese","vo":"Volap\xfck","wa":"Walloon","cy":"Welsh","fy":"Western Frisian","wo":"Wolof","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","za":"Zhuang, Chuang"}')},329:function(e,t,n){},330:function(e,t,n){},332:function(e,t){},339:function(e,t){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){},365:function(e,t,n){},377:function(e,t){},398:function(e,t){},400:function(e,t){},469:function(e,t){},471:function(e,t){},481:function(e,t){},483:function(e,t){},508:function(e,t){},514:function(e,t){},527:function(e,t){},549:function(e,t){},566:function(e,t){},677:function(e,t,n){},678:function(e,t,n){},679:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),i=n(312),r=n.n(i),s=(n(329),n(330),n.p+"static/media/realitio_header_logo.da16ed6c.png"),o=n.p+"static/media/line_style.d0e8d16f.png",l=n(19),u=n(40),b=n(313),d=n.n(b),j=window.ethereum,h=d()((function(){return j?new u.a.providers.Web3Provider(j,"any"):u.a.getDefaultProvider()})),f=function(){var e=Object(a.useState)((function(){return h()}));return Object(l.a)(e,1)[0]};function v(){var e,t=f(),n=Object(a.useState)(null===(e=t.network)||void 0===e?void 0:e.chainId),c=Object(l.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){t.on("network",(function(e){r(e.chainId)}))}),[t]),i}var m={1:"Main Ethereum Network",4:"Rinkeby Test Network",8:"Ubiq Main Network",42:"Kovan Test Network",56:"Binance Smart Chain",77:"Sokal Network",100:"XDAI Network",137:"Polygon Main Network (Matic)",42161:"Arbitrum One Network",421611:"Arbitrum Rinkeby Test Network",123411710:"Local Test Network"};function O(e){return m[e]||"Unknown Test Network"}var p=n(95),g=n(9),x=function(){var e=v(),t=e?O(e):"";return Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"header-container",children:Object(g.jsxs)("div",{className:"header-logo-container",children:[Object(g.jsx)(p.b,{to:"/",children:Object(g.jsx)("img",{src:s,alt:"Logo",className:"header-logo"})}),Object(g.jsx)("span",{className:"network-text",children:t})]})}),Object(g.jsx)("div",{className:"divider",style:{backgroundImage:"url(".concat(o,")")}})]})},y=n(32),N=n(27),k=n(3),w=n.n(k),S=n(35);n(347);var C=["event LogNewTemplate(uint256 indexed template_id, address indexed user, string question_text)","function createTemplate(string content) returns (uint256)"];function T(e,t){return new u.a.Contract(e,C,t)}n(348);var I=function(e){var t=e.title,n=e.children;return Object(g.jsxs)("div",{className:"box",children:[t?Object(g.jsx)("div",{className:"box-title-container",children:Object(g.jsx)("h3",{className:"box-title",children:t})}):null,Object(g.jsx)("div",{className:"box-content",children:n})]})};n(349),n(350);function M(){return Object(g.jsx)("div",{className:"spinner"})}var A=function(e){var t=e.title,n=e.text;return Object(g.jsx)(I,{title:t,children:Object(g.jsx)("div",{className:"center-container",children:Object(g.jsxs)("div",{className:"loader-container",children:[Object(g.jsx)(M,{}),Object(g.jsx)("span",{children:n})]})})})};function E(){return(E=Object(S.a)(w.a.mark((function e(t,n,a){var c,i,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=T(n,t),e.next=3,c.functions.createTemplate(JSON.stringify(a));case 3:return i=e.sent,e.next=6,i.wait();case 6:if(r=e.sent,s=r.events.find((function(e){return"LogNewTemplate"===e.event}))){e.next=10;break}throw new Error("Transaction did not fired the `LogNewTemplate` event.");case 10:return e.abrupt("return",s.args[0]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=e.instance,n=e.template,c=e.onClose,i=e.onCreate,r=Object(a.useState)(!1),s=Object(l.a)(r,2),o=s[0],b=s[1],d=Object(a.useRef)(!1),j=function(){var e=f(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),o=s[0],b=s[1],d=Object(a.useCallback)(Object(S.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof u.a.providers.Web3Provider)){t.next=15;break}return b(!0),t.prev=2,t.next=5,e.send("eth_requestAccounts",[]);case 5:i(!0),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(2),i(!1),t.t0;case 12:return t.prev=12,b(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,8,12,15]])}))),[e]),j=Object(a.useMemo)((function(){return e instanceof u.a.providers.Web3Provider?e.getSigner():null}),[e]);return Object(a.useEffect)((function(){j&&j.getAddress().then((function(){return i(!0)})).catch((function(){return i(!1)}))}),[j]),{signer:j,connected:c,connect:d,connecting:o}}(),h=j.signer,v=j.connected,m=j.connect,O=Object(a.useCallback)((function(){b(!0),setTimeout(c,3e3)}),[c]);return Object(a.useEffect)((function(){h&&v?d.current||(d.current=!0,function(e,t,n){return E.apply(this,arguments)}(h,t,n).then((function(e){return i(e.toNumber())})).catch((function(){return O()}))):m().catch((function(){return O()}))}),[m,v,O,t,d,i,h,n]),o?Object(g.jsx)(I,{title:"Creating Template...",children:Object(g.jsx)("div",{className:"center-container",children:Object(g.jsx)("h3",{style:{textAlign:"center"},children:"Transaction Failed"})})}):Object(g.jsx)(A,{title:"Creating Template...",text:"Creating Template..."})}n(351);var B=n(62),P=(n(352),n(69)),H=n.n(P),K=["label","value","options","onChange","className","disabled"];function D(e){var t=e.label,n=e.value,c=e.options,i=e.onChange,r=e.className,s=e.disabled,o=Object(B.a)(e,K),u=Object(a.useState)((function(){return c.findIndex((function(e){return e.value===n}))})),b=Object(l.a)(u,2),d=b[0],j=b[1];Object(a.useEffect)((function(){var e=c.findIndex((function(e){return e.value===n}));d!==e&&n&&(j(e),i(n))}),[d,i,c,n]);var h=function(e){var t=parseInt(e),n=c[t].value;j(t),i(n)};return Object(g.jsxs)("div",Object(N.a)(Object(N.a)({},o),{},{className:H()("custom-select-container",{"select-disabled":s},r),children:[Object(g.jsxs)("span",{className:H()("custom-select-label",{"custom-select-selected":n}),children:[t,": ",n?function(e){var t=c[e];return t?t.label:n}(d):null]}),Object(g.jsx)("select",{disabled:s,className:"custom-select",value:d,onChange:function(e){return h(e.target.value)},children:c.map((function(e,t){return Object(g.jsx)("option",{value:t,children:e.label},t)}))})]}))}n(353),n(354);var R,V=["className","disabled","label","error"],z=function(e){var t=e.className,n=e.disabled,a=e.label,c=e.error,i=Object(B.a)(e,V),r=Object(g.jsxs)("div",{className:H()("custom-input",{"custom-input-disabled":n,"input-error":c},t),children:[a?Object(g.jsxs)("span",{children:[a,":"]}):null,Object(g.jsx)("input",Object(N.a)({type:"text",disabled:n},i))]});return c?Object(g.jsxs)(g.Fragment,{children:[r,Object(g.jsx)("span",{className:"custom-input-error-text",children:c})]}):r},q=n(127),F=["title","titleId"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,c=e.titleId,i=U(e,F);return a.createElement("svg",G({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?a.createElement("title",{id:c},n):null,R||(R=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 6V4.5C9 2.84315 10.3431 1.5 12 1.5H19.5C21.1569 1.5 22.5 2.84315 22.5 4.5V15C22.5 16.6569 21.1569 18 19.5 18H15V19.5C15 21.1569 13.6569 22.5 12 22.5H4.5C2.84315 22.5 1.5 21.1569 1.5 19.5V9C1.5 7.34315 2.84315 6 4.5 6H9ZM15 15H19.5V4.5H12V6C13.6569 6 15 7.34315 15 9V15ZM4.5 19.5V9H12V19.5H4.5Z",fill:"#B2B5B2"})))}var W=a.forwardRef(J);n.p;function _(e){var t=e.onChange,n=e.value,c=e.disabled,i=v(),r=Object(a.useMemo)((function(){return function(e){var t=Object(q.chainTokenList)(e);return Object.keys(t).map((function(t){return Object(N.a)(Object(N.a)({},Object(q.realityETHConfig)(e,t,"3.0")),{},{token:t})})).filter((function(e){return e.address}))}(i||1).map((function(e){return{label:"".concat(e.token," - ").concat(e.address),value:e.address}}))}),[i]),s=Object(a.useState)((function(){return n||r[0]&&r[0].value})),o=Object(l.a)(s,2),u=o[0],b=o[1],d=Object(a.useState)(!r.length),j=Object(l.a)(d,2),h=j[0],f=j[1],m=Object(a.useCallback)((function(e){b(e),t(e)}),[t]);Object(a.useEffect)((function(){r.length&&(r.some((function(e){return e.value===u}))||b(r[0].value))}),[u,r]),Object(a.useEffect)((function(){!n&&u&&t(u)}),[u,t,n]);var O=function(e){f(e),e||(b(r[0].value),t(r[0].value))};return h?Object(g.jsxs)("div",{className:"instance-field",children:[Object(g.jsx)(z,{disabled:c,label:"Reality Instance",value:n,placeholder:"Reality.eth Instance Address (0x123...)",onChange:function(e){return m(e.currentTarget.value)}}),c?null:Object(g.jsx)("button",{onClick:function(){return O(!1)},className:"link-button custom-instance-button",children:"Use Default Instance"})]}):Object(g.jsxs)("div",{className:"instance-field",children:[Object(g.jsx)(D,{disabled:c,label:"Reality Instance",value:u,onChange:function(e){return m(e)},options:r}),c?Object(g.jsx)(W,{className:"copy-btn",onClick:function(){!function(e){var t=function(t){t.preventDefault(),t.clipboardData&&t.clipboardData.setData("text/plain",e)},n=document.createRange(),a=document.getSelection();a&&(n.selectNodeContents(document.body),a.addRange(n),document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t),a.removeAllRanges())}(u)}}):Object(g.jsx)("button",{onClick:function(){return O(!0)},className:"link-button custom-instance-button",children:"Add Custom Instance"})]})}n(365);var Z=["className"],Y=function(e){var t=e.className,n=Object(B.a)(e,Z);return Object(g.jsx)("button",Object(N.a)({className:H()("custom-btn",t)},n))},X=n(319),Q=Object.entries(X).map((function(e){var t=Object(l.a)(e,2),n=t[0];return{label:t[1],value:n}}));function $(e){return Object(g.jsx)(D,Object(N.a)({label:"Language",options:Q},e))}var ee=n(323);var te=function(e){var t=e.onChange,n=e.disabled,c=Object(a.useState)(""),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),b=u[0],d=u[1],j=function(e){return s(e),e?function(e){try{return Object(ee.a)(e).length}catch(t){return!1}}(e)?(d(!1),void t({type:"bool",category:"DAO proposal",title:(n=e.trim(),"Did the Snapshot proposal with the id %s in the "+"".concat(n," space pass the execution of the array of Module transactions ")+"that have the hash 0x%s and does it meet the requirements of the document "+"referenced in the dao requirements record at ".concat(n,"? The hash is ")+"the keccak of the concatenation of the individual EIP-712 hashes of the Module transactions. If this question was asked before the corresponding Snapshot proposal was resolved, it should ALWAYS be resolved to INVALID!")})):(t(void 0),void d(!0)):(t(void 0),void d(!1));var n};return Object(g.jsx)(z,{disabled:n,value:r,error:b?"Invalid ENS":"",className:"input-space",placeholder:"ENS Name",onChange:function(e){return j(e.currentTarget.value)}})},ne=n(155),ae=(n(677),["className"]),ce=function(e){var t=e.className,n=Object(B.a)(e,ae);return Object(g.jsx)("textarea",Object(N.a)(Object(N.a)({},n),{},{className:"custom-textarea ".concat(t)}))},ie=[{value:"bool",label:"Bool"},{value:"uint",label:"Uint"},{value:"datetime",label:"Date/Time"},{value:"single-select",label:"Single Select"},{value:"multiple-select",label:"Multiple Select"}];function re(e){return{isSelect:"single-select"===e||"multiple-select"===e,isInt:"uint"===e}}function se(e){return e.trim()?e.split(",").map((function(e){return e.trim()})).filter((function(e){return e})):[]}var oe=function(e){var t,n=e.onChange,c=e.disabled,i=e.template,r=Object(a.useState)((null===i||void 0===i?void 0:i.type)||"bool"),s=Object(l.a)(r,2),o=s[0],u=s[1],b=Object(a.useState)((null===i||void 0===i?void 0:i.category)||""),d=Object(l.a)(b,2),j=d[0],h=d[1],f=Object(a.useState)((null===i||void 0===i?void 0:i.title)||""),v=Object(l.a)(f,2),m=v[0],O=v[1],p=Object(a.useState)((null===i||void 0===i||null===(t=i.outcomes)||void 0===t?void 0:t.join(","))||""),x=Object(l.a)(p,2),y=x[0],k=x[1],w=Object(a.useState)((null===i||void 0===i?void 0:i.decimals)||18),S=Object(l.a)(w,2),C=S[0],T=S[1],I=function(e,t){var a=re("type"===e?t:o),c=a.isInt,r=a.isSelect,s=Object(N.a)(Object(N.a)({},i),{},Object(ne.a)({type:o,category:j,title:m,outcomes:r?se(y):void 0,decimals:c?C:void 0},e,t));n(s)},M=re(o),A=M.isInt,E=M.isSelect;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(z,{disabled:c,label:"Category",value:j,onChange:function(e){return function(e){h(e),I("category",e)}(e.currentTarget.value)},className:"input-space"}),Object(g.jsx)(D,{disabled:c,label:"Type",value:o,onChange:function(e){u(e),I("type",e)},options:ie,className:"input-space"}),A?Object(g.jsx)(z,{disabled:c,label:"Decimals",value:C,onChange:function(e){return function(e){var t=parseInt(e);isNaN(t)||(T(t),I("decimals",t))}(e.currentTarget.value)},className:"input-space"}):null,E?Object(g.jsx)(z,{disabled:c,label:"Outcomes",value:y,onChange:function(e){return function(e){k(e);var t=se(e);I("outcomes",t)}(e.currentTarget.value)},className:"input-space"}):null,Object(g.jsx)(ce,{disabled:c,value:m,rows:5,className:"input-space",placeholder:"Did the Olympian with the name %s win gold?",onChange:function(e){return function(e){O(e),I("title",e)}(e.currentTarget.value)}})]})};function le(e){return"reality"===e.type?Object(g.jsx)(te,Object(N.a)({},e)):Object(g.jsx)(oe,Object(N.a)({},e))}n(678);var ue=["className"];function be(e){var t=e.className,n=Object(B.a)(e,ue);return Object(g.jsx)("div",Object(N.a)({className:H()("text-block",t)},n))}var de=n(322);function je(e,t){if(!(e&&Object(de.isAddress)(e)&&t&&t.type&&t.category&&t.title))return!1;var n,a=re(t.type),c=a.isInt,i=a.isSelect;return c?!(!(null===t||void 0===t?void 0:t.decimals)||isNaN(t.decimals)):!i||!!(null===t||void 0===t||null===(n=t.outcomes)||void 0===n?void 0:n.length)}var he=[{label:"Custom",value:"custom"},{label:"Zodiac Reality Module",value:"reality"}],fe=function(e){var t=e.id,n=e.lang,c=e.type,i=void 0===c?"custom":c,r=e.instance,s=e.template,o=e.onChange,l=e.onSubmit,u=void 0!==t,b=u?"Template: ".concat(t):"Template Builder",d=je(r,s),j=Object(a.useCallback)((function(e){return function(t){o&&o(e,t)}}),[o]);return Object(g.jsx)(I,{title:b,children:Object(g.jsxs)("div",{className:"template-builder-content",children:[Object(g.jsx)(_,{disabled:u,value:r,onChange:j("instance")}),Object(g.jsx)(D,{disabled:u,label:"Template Type",value:i,onChange:j("type"),options:he,className:"input-space"}),Object(g.jsx)($,{disabled:u,value:n||(null===s||void 0===s?void 0:s.lang),onChange:j("language"),className:"input-space"}),Object(g.jsx)(le,{disabled:u,type:i,template:s,onChange:j("template")}),s&&d?Object(g.jsx)(be,{className:"input-space",children:JSON.stringify(s,void 0,4)}):null,u?null:Object(g.jsx)(Y,{disabled:!d,onClick:l,className:"input-space",children:"Create Template"})]})})},ve=["custom","reality"];var me=function(){var e=Object(y.g)().type,t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(),s=Object(l.a)(r,2),o=s[0],u=s[1],b=Object(a.useState)("en"),d=Object(l.a)(b,2),j=d[0],h=d[1],f=Object(a.useState)(),v=Object(l.a)(f,2),m=v[0],O=v[1],p=Object(a.useState)(),x=Object(l.a)(p,2),k=x[0],w=x[1],S=Object(a.useState)((function(){return e&&(t=e,ve.includes(t))?e:"custom";var t})),C=Object(l.a)(S,2),T=C[0],I=C[1];return o&&k&&c&&!m?Object(g.jsx)(L,{instance:o,template:k,onClose:function(){i(!1),w(void 0)},onCreate:function(e){I("custom"),O(e)}}):Object(g.jsx)(fe,{id:m,lang:j,type:T,instance:o,template:k,onSubmit:function(){je(o,k)&&i(!0)},onChange:function(e,t){switch(e){case"instance":u(t);break;case"type":I(t),w(void 0);break;case"language":if(h(t),k){var n=Object(N.a)({},k);n.lang=t,w(n)}break;case"template":w((a=t)?Object(N.a)({lang:j},a):void 0)}var a}})},Oe=n(20);function pe(){var e=Object(y.f)(),t=f(),n=v(),c=Object(a.useState)(),i=Object(l.a)(c,2),r=i[0],s=i[1],o=Object(y.g)(),u=o.id,b=o.token,d=o.chainId,j=parseInt(d),h=j===n,m=Object(a.useMemo)((function(){try{return Object(q.realityETHConfig)(j,b,"3.0")}catch(e){return}}),[j,b]);if(Object(a.useEffect)((function(){!isNaN(parseInt(u))&&m||e.replace("/")}),[e,u,m]),Object(a.useEffect)((function(){if(h&&m){var n=T(m.address,t),a=n.filters.LogNewTemplate(Oe.a.from(u));n.queryFilter(a).then((function(t){if(t.length){var n=t[0].args.question_text;n=n.replace('"outcomes": [%s]','"outcomes": ["%s"]');var a=JSON.parse(n);s(a)}else e.replace("/")})).catch((function(){return e.replace("/")}))}}),[u,e,j,t,n,h,m]),!h){var p=O(j).toLowerCase();return Object(g.jsx)(A,{text:"Please change your current network to the ".concat(p)})}return r?Object(g.jsx)(fe,{id:parseInt(u),template:r}):Object(g.jsx)(A,{})}function ge(){return Object(g.jsxs)(y.c,{children:[Object(g.jsx)(y.a,{path:"/template/:chainId/:token/:id",component:pe}),Object(g.jsx)(y.a,{path:"/type/:type",component:me}),Object(g.jsx)(y.a,{path:"/",component:me})]})}var xe=function(){return Object(g.jsx)(p.a,{children:Object(g.jsxs)("div",{className:"app-container",children:[Object(g.jsx)(x,{}),Object(g.jsx)(ge,{})]})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(xe,{})}),document.getElementById("root"))}},[[679,1,2]]]);
//# sourceMappingURL=main.cc3d982e.chunk.js.map