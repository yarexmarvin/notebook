!function(){"use strict";var e,t={6158:function(e,t,n){var r,o=n(5893),i=n(3935),l=n(7294),a=n(9704),c=a.v9;!function(e){e.FETCH_NOTES="FETCH_NOTES",e.SAVE_NOTES="SAVE_NOTES",e.SET_NOTES="SET_NOTES",e.ADD_NOTE="ADD_NOTE",e.UPDATE_NOTE="UPDATE_NOTE",e.DELETE_NOTE="DELETE_NOTE",e.CLEAR_NOTELIST="CLEAR_NOTELIST"}(r||(r={}));var u=n(5977),s=n(336),d=n(51),f=n(1869),h=n(9617),v=n(3850),p=n(4096),x=n(8017),y=n(4030),g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},b=((0,h._)({sm:"320px",md:"480px",lg:"640px",xl:"1280","2xl":"1500"}),function(e){var t=e.notes,n=e.chooseNote,r=(0,u.k6)();(0,a.I0)();return(0,o.jsxs)(v.W,g({width:"100%",minHeight:"100%",boxSizing:"border-box"},{children:[(0,o.jsx)(s.X,g({color:"#285E61",as:"h1",size:"2xl",style:{textAlign:"left",margin:"5vh 0 2vh"}},{children:"Notes"}),void 0),(0,o.jsx)(d.Kq,g({direction:"column",spacing:2,align:"center"},{children:t.length?t.map((function(e,t){return(0,o.jsx)(p.k,g({justifyContent:"flex-start",width:"100%"},{children:(0,o.jsx)(x.xu,g({width:"100%",height:"10",bg:"teal.500",textAlign:"left",display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"0 6vw",cursor:"pointer",_hover:{backgroundColor:"rgba(0, 128, 128, 0.4)",color:"teal.500"},transition:"all 0.15s ease",onClick:function(){return function(e){n(e),r.push("/note")}(e)}},{children:(0,o.jsx)(s.X,g({as:"h5",isTruncated:!0,size:"md"},{children:e.title}),void 0)}),t)}),void 0)})):"there is no notes yet"}),void 0),(0,o.jsx)(x.xu,g({display:"flex",justifyContent:"flex-end",style:{margin:"3vh 0"}},{children:(0,o.jsx)(f.z,g({colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(y.I,{},void 0),onClick:function(){return r.push("/form")}},{children:"Add"}),void 0)}),void 0)]}),void 0)}),j=n(9352),E=n(6896),m=n(2827),T=n(9887),O=n(17),w=n(4115),S=n(8420),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)},N=function(e){var t=e.note,n=e.notes,i=e.updateNote,c=(0,l.useState)(""),d=c[0],h=c[1],y=(0,l.useState)(""),g=y[0],b=y[1],N=(0,u.k6)(),_=(0,a.I0)();var C=(0,o.jsxs)(p.k,k({height:"10vh",direction:"row",alignItems:"center"},{children:[(0,o.jsx)(T.I,{value:g,style:{margin:"0 2vw 0 0"},onChange:function(e){return b(e.target.value)},onBlur:I},void 0),(0,o.jsx)(f.z,k({colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(j.n,{},void 0),onClick:I},{children:"save"}),void 0)]}),void 0),A=(0,o.jsxs)(p.k,k({direction:"column"},{children:[(0,o.jsx)(O.g,{mHeight:"30vh",value:g,resize:"vertical",onChange:function(e){return b(e.target.value)},onBlur:I},void 0),(0,o.jsx)(f.z,k({margin:"1vh 0",colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(j.n,{},void 0),onClick:I},{children:"save"}),void 0)]}),void 0);function I(){var e,o,l={note:k(k({},t),(e={},e[d]=g,e)),index:n.findIndex((function(e){return e.id===t.id}))};_(function(e){return{type:r.UPDATE_NOTE,payload:e}}(l)),i(k(k({},t),((o={})[d]=g,o))),h(""),b("")}return(0,o.jsx)(v.W,{children:t?(0,o.jsxs)(p.k,k({direction:"column"},{children:[(0,o.jsx)(x.xu,k({display:"flex",justifyContent:"flex-start"},{children:"title"===d?C:(0,o.jsx)(s.X,k({color:"#285E61",as:"h2",size:"xl",style:{margin:"5vh 0 3vh"},onClick:function(){h("title"),b(t.title)}},{children:t.title}),void 0)}),void 0),(0,o.jsx)("div",{children:"text"===d?A:(0,o.jsx)(w.x,k({color:"#285E61",onClick:function(){h("text"),b(t.text)}},{children:t.text}),void 0)},void 0),(0,o.jsxs)(p.k,k({justify:"space-between",margin:"2vh 0"},{children:[(0,o.jsx)(S.h,{"aria-label":"back to the note list",colorScheme:"teal",icon:(0,o.jsx)(E.R,{},void 0),onClick:function(){return N.push("/")}},void 0),(0,o.jsx)(S.h,{"aria-label":"delete note",variant:"outline",colorScheme:"teal",icon:(0,o.jsx)(m.p,{},void 0),onClick:function(){var e;_((e=t.id,{type:r.DELETE_NOTE,payload:e})),N.push("/")}},void 0)]}),void 0)]}),void 0):"there is no note"},void 0)},_=n(5737),C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)},A=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],i=(0,l.useState)(""),c=i[0],d=i[1],h=(0,a.I0)(),g=(0,u.k6)();return(0,o.jsxs)(v.W,{children:[(0,o.jsx)(s.X,C({color:"#285E61",as:"h1",size:"lg",style:{textAlign:"left",margin:"5vh 0 3vh"}},{children:"Add a Note!"}),void 0),(0,o.jsxs)(p.k,C({justify:"space-around",alignItems:"flex-start"},{children:[(0,o.jsx)(s.X,C({color:"#285E61",as:"h3",size:"md",style:{textAlign:"left",width:" 20vh"}},{children:"Title"}),void 0),(0,o.jsx)(T.I,{value:t,onChange:function(e){return n(e.target.value)}},void 0)]}),void 0),(0,o.jsxs)(p.k,C({justify:"space-around"},{children:[(0,o.jsx)(s.X,C({color:"#285E61",as:"h3",size:"md",style:{textAlign:"left",width:" 20vh"}},{children:"Text"}),void 0),(0,o.jsx)(O.g,{resize:"vertical",value:c,onChange:function(e){return d(e.target.value)}},void 0)]}),void 0),(0,o.jsx)(x.xu,C({display:"flex",width:"100%",justifyContent:"flex-end",margin:"1vh 0"},{children:(0,o.jsx)(f.z,C({onClick:function(){var e;t&&c&&(h((e={id:Date.now(),title:t,text:c},{type:r.ADD_NOTE,payload:e})),n(""),d(""),g.push("/"))},rightIcon:(0,o.jsx)(y.I,{},void 0)},{children:"create a note"}),void 0)}),void 0)]},void 0)},I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},I.apply(this,arguments)};var D=function(){var e=c((function(e){return e.notes})),t=(0,a.I0)();console.log(e),(0,l.useEffect)((function(){t({type:r.FETCH_NOTES})}),[]),(0,l.useEffect)((function(){var n;t((n=e,{type:r.SAVE_NOTES,payload:n}))}),[e]);var n=(0,l.useState)(e[0]),i=n[0],s=n[1];return(0,o.jsxs)("div",I({className:"App"},{children:[(0,o.jsx)("h1",{children:"f"},void 0),(0,o.jsx)("div",{children:(0,o.jsxs)(u.rs,{children:[(0,o.jsx)(u.AW,I({path:"/",exact:!0},{children:(0,o.jsx)(_.x,{children:(0,o.jsx)(b,{notes:e,chooseNote:s},void 0)},void 0)}),void 0),(0,o.jsx)(u.AW,I({path:"/note",exact:!0},{children:(0,o.jsx)(_.x,{children:(0,o.jsx)(N,{note:i,notes:e,updateNote:s},void 0)},void 0)}),void 0),(0,o.jsx)(u.AW,I({path:"/form",exact:!0},{children:(0,o.jsx)(_.x,{children:(0,o.jsx)(A,{},void 0)},void 0)}),void 0)]},void 0)},void 0)]}),void 0)},P=function(e){e&&e instanceof Function&&n.e(216).then(n.bind(n,2131)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),o(e),i(e),l(e)}))},z=n(7835),L=n(5857),F=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},R=[{id:0,title:"Untitled",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed mi aliquet, rutrum ligula ac, vestibulum enim. Fusce in euismod odio. Vivamus pulvinar tellus at pulvinar rhoncus. Maecenas sagittis suscipit pellentesque. Fusce aliquet luctus elementum. Nunc interdum rutrum ex eget congue. Donec non magna vitae ipsum condimentum hendrerit ac vitae."}],U=function(e,t){switch(void 0===e&&(e=[]),t.type){case r.SET_NOTES:return F(F([],e,!0),t.payload,!0);case r.ADD_NOTE:return F(F([],e,!0),[t.payload],!1);case r.UPDATE_NOTE:return F(F(F([],e.slice(0,t.payload.index),!0),[t.payload.note],!1),e.slice(t.payload.index+1),!0);case r.DELETE_NOTE:return F([],e.filter((function(e){return e.id!==t.payload})),!0);case r.CLEAR_NOTELIST:return[];default:return e}},H=(0,L.UY)({notes:U}),W=n(6936),X=n(4970),M=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},V=function(){return JSON.parse(localStorage.getItem("notes")||JSON.stringify(R))};function q(){var e;return M(this,(function(t){switch(t.label){case 0:return[4,(0,X.RE)(V)];case 1:return e=t.sent(),[4,(0,X.gz)((n=e,{type:r.SET_NOTES,payload:n}))];case 2:return t.sent(),console.log("notes fetched from saga => ",e),[2]}var n}))}function B(){return M(this,(function(e){switch(e.label){case 0:return[4,(0,X.ib)(r.FETCH_NOTES,q)];case 1:return e.sent(),[2]}}))}var G=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function J(e){var t;return G(this,(function(n){console.log("set saga notes =>",e);try{return t=JSON.stringify(e.payload),[2,localStorage.setItem("notes",t)]}catch(e){throw new Error(e)}return[2]}))}function K(e){return G(this,(function(t){switch(t.label){case 0:return[4,(0,W.RE)(J,e)];case 1:return t.sent(),console.log("changes saved in localStorage"),[2]}}))}function Y(){return G(this,(function(e){switch(e.label){case 0:return[4,(0,W.ib)(r.SAVE_NOTES,K)];case 1:return e.sent(),[2]}}))}var Z=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};var $=(0,z.ZP)(),Q=(0,L.MT)(H,(0,L.md)($));$.run((function(){return Z(this,(function(e){switch(e.label){case 0:return[4,(0,W.$6)([B(),Y()])];case 1:return e.sent(),[2]}}))}));var ee=n(3727),te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},te.apply(this,arguments)};i.render((0,o.jsx)(a.zt,te({store:Q},{children:(0,o.jsx)(ee.UT,{children:(0,o.jsx)(D,{},void 0)},void 0)}),void 0),document.getElementById("root")),P()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<l&&(l=i));if(a){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.e=function(){return Promise.resolve()},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,l=n[0],a=n[1],c=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r)}for(t&&t(n);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[l[u]]=0;return r.O(s)},n=self.webpackChunknotebook=self.webpackChunknotebook||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[216],(function(){return r(6158)}));o=r.O(o)}();