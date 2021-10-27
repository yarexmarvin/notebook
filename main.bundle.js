!function(){"use strict";var e,t={6158:function(e,t,n){var r,o=n(5893),i=n(3935),a=n(7294),l=n(9704),c=l.v9;!function(e){e.FETCH_NOTES="FETCH_NOTES",e.SAVE_NOTES="SAVE_NOTES",e.SET_NOTES="SET_NOTES",e.ADD_NOTE="ADD_NOTE",e.UPDATE_NOTE="UPDATE_NOTE",e.DELETE_NOTE="DELETE_NOTE",e.CLEAR_NOTELIST="CLEAR_NOTELIST"}(r||(r={}));var u=n(3727),s=n(5977),d=n(336),f=n(51),h=n(1869),v=n(9617),p=n(3850),x=n(4096),y=n(8017),g=n(4030),b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)},j=((0,v._)({sm:"320px",md:"480px",lg:"640px",xl:"1280","2xl":"1500"}),function(e){var t=e.notes,n=e.chooseNote,r=(0,s.k6)();(0,l.I0)();return(0,o.jsxs)(p.W,b({width:"100%",minHeight:"100%",boxSizing:"border-box"},{children:[(0,o.jsx)(d.X,b({color:"#285E61",as:"h1",size:"2xl",style:{textAlign:"left",margin:"5vh 0 2vh"}},{children:"Notes"}),void 0),(0,o.jsx)(f.Kq,b({direction:"column",spacing:2,align:"center"},{children:t.length?t.map((function(e,t){return(0,o.jsx)(x.k,b({justifyContent:"flex-start",width:"100%"},{children:(0,o.jsx)(y.xu,b({width:"100%",height:"10",bg:"teal.500",textAlign:"left",display:"flex",alignItems:"center",color:"white",borderRadius:"10px",padding:"0 6vw",cursor:"pointer",_hover:{backgroundColor:"rgba(0, 128, 128, 0.4)",color:"teal.500"},transition:"all 0.15s ease",onClick:function(){return function(e){n(e),r.push("/note")}(e)}},{children:(0,o.jsx)(d.X,b({as:"h5",isTruncated:!0,size:"md"},{children:e.title}),void 0)}),t)}),void 0)})):"there is no notes yet"}),void 0),(0,o.jsx)(y.xu,b({display:"flex",justifyContent:"flex-end",style:{margin:"3vh 0"}},{children:(0,o.jsx)(h.z,b({colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(g.I,{},void 0),onClick:function(){return r.push("/form")}},{children:"Add"}),void 0)}),void 0)]}),void 0)}),E=n(9352),m=n(6896),T=n(2827),O=n(9887),w=n(17),S=n(4115),k=n(8420),N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},N.apply(this,arguments)},_=function(e){var t=e.note,n=e.notes,i=e.updateNote,c=(0,a.useState)(""),u=c[0],f=c[1],v=(0,a.useState)(""),g=v[0],b=v[1],j=(0,s.k6)(),_=(0,l.I0)();var C=(0,o.jsxs)(x.k,N({height:"10vh",direction:"row",alignItems:"center"},{children:[(0,o.jsx)(O.I,{value:g,style:{margin:"0 2vw 0 0"},onChange:function(e){return b(e.target.value)},onBlur:I},void 0),(0,o.jsx)(h.z,N({colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(E.n,{},void 0),onClick:I},{children:"save"}),void 0)]}),void 0),A=(0,o.jsxs)(x.k,N({direction:"column"},{children:[(0,o.jsx)(w.g,{mHeight:"30vh",value:g,resize:"vertical",onChange:function(e){return b(e.target.value)},onBlur:I},void 0),(0,o.jsx)(h.z,N({margin:"1vh 0",colorScheme:"teal",variant:"outline",rightIcon:(0,o.jsx)(E.n,{},void 0),onClick:I},{children:"save"}),void 0)]}),void 0);function I(){var e,o,a={note:N(N({},t),(e={},e[u]=g,e)),index:n.findIndex((function(e){return e.id===t.id}))};_(function(e){return{type:r.UPDATE_NOTE,payload:e}}(a)),i(N(N({},t),((o={})[u]=g,o))),f(""),b("")}return(0,o.jsx)(p.W,{children:t?(0,o.jsxs)(x.k,N({direction:"column"},{children:[(0,o.jsx)(y.xu,N({display:"flex",justifyContent:"flex-start"},{children:"title"===u?C:(0,o.jsx)(d.X,N({color:"#285E61",as:"h2",size:"xl",style:{margin:"5vh 0 3vh"},onClick:function(){f("title"),b(t.title)}},{children:t.title}),void 0)}),void 0),(0,o.jsx)("div",{children:"text"===u?A:(0,o.jsx)(S.x,N({color:"#285E61",onClick:function(){f("text"),b(t.text)}},{children:t.text}),void 0)},void 0),(0,o.jsxs)(x.k,N({justify:"space-between",margin:"2vh 0"},{children:[(0,o.jsx)(k.h,{"aria-label":"back to the note list",colorScheme:"teal",icon:(0,o.jsx)(m.R,{},void 0),onClick:function(){return j.push("/")}},void 0),(0,o.jsx)(k.h,{"aria-label":"delete note",variant:"outline",colorScheme:"teal",icon:(0,o.jsx)(T.p,{},void 0),onClick:function(){var e;_((e=t.id,{type:r.DELETE_NOTE,payload:e})),j.push("/")}},void 0)]}),void 0)]}),void 0):"there is no note"},void 0)},C=n(5737),A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A.apply(this,arguments)},I=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],i=(0,a.useState)(""),c=i[0],u=i[1],f=(0,l.I0)(),v=(0,s.k6)();return(0,o.jsxs)(p.W,{children:[(0,o.jsx)(d.X,A({color:"#285E61",as:"h1",size:"lg",style:{textAlign:"left",margin:"5vh 0 3vh"}},{children:"Add a Note!"}),void 0),(0,o.jsxs)(x.k,A({justify:"space-around",alignItems:"flex-start"},{children:[(0,o.jsx)(d.X,A({color:"#285E61",as:"h3",size:"md",style:{textAlign:"left",width:" 20vh"}},{children:"Title"}),void 0),(0,o.jsx)(O.I,{value:t,onChange:function(e){return n(e.target.value)}},void 0)]}),void 0),(0,o.jsxs)(x.k,A({justify:"space-around"},{children:[(0,o.jsx)(d.X,A({color:"#285E61",as:"h3",size:"md",style:{textAlign:"left",width:" 20vh"}},{children:"Text"}),void 0),(0,o.jsx)(w.g,{resize:"vertical",value:c,onChange:function(e){return u(e.target.value)}},void 0)]}),void 0),(0,o.jsx)(y.xu,A({display:"flex",width:"100%",justifyContent:"flex-end",margin:"1vh 0"},{children:(0,o.jsx)(h.z,A({onClick:function(){var e;t&&c&&(f((e={id:Date.now(),title:t,text:c},{type:r.ADD_NOTE,payload:e})),n(""),u(""),v.push("/"))},rightIcon:(0,o.jsx)(g.I,{},void 0)},{children:"create a note"}),void 0)}),void 0)]},void 0)},D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},D.apply(this,arguments)};var P=function(){var e=c((function(e){return e.notes})),t=(0,l.I0)();console.log(e),(0,a.useEffect)((function(){t({type:r.FETCH_NOTES})}),[]),(0,a.useEffect)((function(){var n;t((n=e,{type:r.SAVE_NOTES,payload:n}))}),[e]);var n=(0,a.useState)(e[0]),i=n[0],d=n[1];return(0,o.jsx)("div",D({className:"App"},{children:(0,o.jsx)(u.UT,D({basename:"https://yarexmarvin.github.io/notebook/"},{children:(0,o.jsx)("div",{children:(0,o.jsxs)(s.rs,{children:[(0,o.jsx)(s.AW,D({path:"/",exact:!0},{children:(0,o.jsx)(C.x,{children:(0,o.jsx)(j,{notes:e,chooseNote:d},void 0)},void 0)}),void 0),(0,o.jsx)(s.AW,D({path:"/note",exact:!0},{children:(0,o.jsx)(C.x,{children:(0,o.jsx)(_,{note:i,notes:e,updateNote:d},void 0)},void 0)}),void 0),(0,o.jsx)(s.AW,D({path:"/form",exact:!0},{children:(0,o.jsx)(C.x,{children:(0,o.jsx)(I,{},void 0)},void 0)}),void 0)]},void 0)},void 0)}),void 0)}),void 0)},z=function(e){e&&e instanceof Function&&n.e(216).then(n.bind(n,2131)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))},L=n(7835),F=n(5857),R=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},U=[{id:0,title:"Untitled",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed mi aliquet, rutrum ligula ac, vestibulum enim. Fusce in euismod odio. Vivamus pulvinar tellus at pulvinar rhoncus. Maecenas sagittis suscipit pellentesque. Fusce aliquet luctus elementum. Nunc interdum rutrum ex eget congue. Donec non magna vitae ipsum condimentum hendrerit ac vitae."}],H=function(e,t){switch(void 0===e&&(e=[]),t.type){case r.SET_NOTES:return R(R([],e,!0),t.payload,!0);case r.ADD_NOTE:return R(R([],e,!0),[t.payload],!1);case r.UPDATE_NOTE:return R(R(R([],e.slice(0,t.payload.index),!0),[t.payload.note],!1),e.slice(t.payload.index+1),!0);case r.DELETE_NOTE:return R([],e.filter((function(e){return e.id!==t.payload})),!0);case r.CLEAR_NOTELIST:return[];default:return e}},W=(0,F.UY)({notes:H}),X=n(6936),M=n(4970),V=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},q=function(){return JSON.parse(localStorage.getItem("notes")||JSON.stringify(U))};function B(){var e;return V(this,(function(t){switch(t.label){case 0:return[4,(0,M.RE)(q)];case 1:return e=t.sent(),[4,(0,M.gz)((n=e,{type:r.SET_NOTES,payload:n}))];case 2:return t.sent(),console.log("notes fetched from saga => ",e),[2]}var n}))}function G(){return V(this,(function(e){switch(e.label){case 0:return[4,(0,M.ib)(r.FETCH_NOTES,B)];case 1:return e.sent(),[2]}}))}var J=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};function K(e){var t;return J(this,(function(n){console.log("set saga notes =>",e);try{return t=JSON.stringify(e.payload),[2,localStorage.setItem("notes",t)]}catch(e){throw new Error(e)}return[2]}))}function Y(e){return J(this,(function(t){switch(t.label){case 0:return[4,(0,X.RE)(K,e)];case 1:return t.sent(),console.log("changes saved in localStorage"),[2]}}))}function Z(){return J(this,(function(e){switch(e.label){case 0:return[4,(0,X.ib)(r.SAVE_NOTES,Y)];case 1:return e.sent(),[2]}}))}var $=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var Q=(0,L.ZP)(),ee=(0,F.MT)(W,(0,F.md)(Q));Q.run((function(){return $(this,(function(e){switch(e.label){case 0:return[4,(0,X.$6)([G(),Z()])];case 1:return e.sent(),[2]}}))}));var te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},te.apply(this,arguments)};i.render((0,o.jsx)(l.zt,te({store:ee},{children:(0,o.jsx)(P,{},void 0)}),void 0),document.getElementById("root")),z()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],i=e[s][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.e=function(){return Promise.resolve()},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var s=c(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;return r.O(s)},n=self.webpackChunknotebook=self.webpackChunknotebook||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[216],(function(){return r(6158)}));o=r.O(o)}();