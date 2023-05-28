import{_ as Ie}from"./preload-helper.41c905a7.js";import{S as be,i as ke,s as Te,k as p,q as D,a as S,l as g,m as h,r as M,h as u,c as V,n as i,p as Le,b as Y,D as n,H as me,J as je,o as De,K as ie,L as ce,u as oe,e as ye,y as Se,z as Ve,A as Ae,g as Ce,d as Re,B as Ue,M as He}from"./index.c5784ed6.js";var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ne(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Me={exports:{}};(function(d){(function(){var a=function(e){return typeof e=="number"?e={precision:e}:e=e||{},e.precision=e.precision||5,e.factor=e.factor||Math.pow(10,e.precision),e.dimension=e.dimension||2,e},s={encode:function(e,t){t=a(t);for(var l=[],r=0,o=e.length;r<o;++r){var f=e[r];if(t.dimension===2)l.push(f.lat||f[0]),l.push(f.lng||f[1]);else for(var v=0;v<t.dimension;++v)l.push(f[v])}return this.encodeDeltas(l,t)},decode:function(e,t){t=a(t);for(var l=this.decodeDeltas(e,t),r=[],o=0,f=l.length;o+(t.dimension-1)<f;){for(var v=[],P=0;P<t.dimension;++P)v.push(l[o++]);r.push(v)}return r},encodeDeltas:function(e,t){t=a(t);for(var l=[],r=0,o=e.length;r<o;)for(var f=0;f<t.dimension;++f,++r){var v=e[r].toFixed(t.precision),P=v-(l[f]||0);l[f]=v,e[r]=P}return this.encodeFloats(e,t)},decodeDeltas:function(e,t){t=a(t);for(var l=[],r=this.decodeFloats(e,t),o=0,f=r.length;o<f;)for(var v=0;v<t.dimension;++v,++o)r[o]=Math.round((l[v]=r[o]+(l[v]||0))*t.factor)/t.factor;return r},encodeFloats:function(e,t){t=a(t);for(var l=0,r=e.length;l<r;++l)e[l]=Math.round(e[l]*t.factor);return this.encodeSignedIntegers(e)},decodeFloats:function(e,t){t=a(t);for(var l=this.decodeSignedIntegers(e),r=0,o=l.length;r<o;++r)l[r]/=t.factor;return l},encodeSignedIntegers:function(e){for(var t=0,l=e.length;t<l;++t){var r=e[t];e[t]=r<0?~(r<<1):r<<1}return this.encodeUnsignedIntegers(e)},decodeSignedIntegers:function(e){for(var t=this.decodeUnsignedIntegers(e),l=0,r=t.length;l<r;++l){var o=t[l];t[l]=o&1?~(o>>1):o>>1}return t},encodeUnsignedIntegers:function(e){for(var t="",l=0,r=e.length;l<r;++l)t+=this.encodeUnsignedInteger(e[l]);return t},decodeUnsignedIntegers:function(e){for(var t=[],l=0,r=0,o=0,f=e.length;o<f;++o){var v=e.charCodeAt(o)-63;l|=(v&31)<<r,v<32?(t.push(l),l=0,r=0):r+=5}return t},encodeSignedInteger:function(e){return e=e<0?~(e<<1):e<<1,this.encodeUnsignedInteger(e)},encodeUnsignedInteger:function(e){for(var t,l="";e>=32;)t=(32|e&31)+63,l+=String.fromCharCode(t),e>>=5;return t=e+63,l+=String.fromCharCode(t),l}};if(d.exports=s,typeof L=="object"){L.Polyline.prototype.fromEncoded||(L.Polyline.fromEncoded=function(e,t){return L.polyline(s.decode(e),t)}),L.Polygon.prototype.fromEncoded||(L.Polygon.fromEncoded=function(e,t){return L.polygon(s.decode(e),t)});var c={encodePath:function(){return s.encode(this.getLatLngs())}};L.Polyline.prototype.encodePath||L.Polyline.include(c),L.Polygon.prototype.encodePath||L.Polygon.include(c),L.PolylineUtil=s}})()})(Me);var Be=Me.exports;const fe=Ne(Be);function Fe(d){let a=`${d.road}: ${d.incidentType}`;return d.events&&d.events[0]&&(a+=`<br/> ${d.events[0].text}`),d.delay!=null&&d.distance!=null&&(a+=`<br/> ~${Math.round(d.delay/60)}Min - ${Math.round(d.distance/100)/10} km`),a}function Pe(d,a,s,c,e){const t=fe.decode(a.polyline),l=d.polyline(t,{color:c});e&&l.addEventListener("click",e),l.addTo(s)}function ue(d,a,s,c,e=[15,15],t){const l=d.icon({iconUrl:c,iconSize:e}),r=d.marker(a.goToMap,{icon:l});t&&r.addEventListener("click",t),r.addTo(s)}function ne(d,a,s,c){d.popup().setLatLng(c).setContent(Fe(a)).openOn(s).openPopup()}function Oe(d,a,s){ue(d,a,s,"images/trafficjam.png",[35,35],()=>{ne(d,a,s,a.goToMap)}),a.polyline&&Pe(d,a,s,a.delay?a.delay>=600?"#ff0000":"#ffae00":"#000000",()=>{ne(d,a,s,a.goToMap)})}function $e(d,a,s){ue(d,a,s,"images/speedcamera.png")}function qe(d,a,s){ue(d,a,s,"images/roadwork.png",[15,15],()=>{ne(d,a,s,a.goToMap)}),a.polyline&&Pe(d,a,s,"#000000",()=>{ne(d,a,s,a.goToMap)})}function _e(d,a,s){const c=d.slice();return c[2]=a[s],c}function we(d){let a,s=d[2].delay!=null&&d[2].distance!=null&&xe(d);return{c(){s&&s.c(),a=ye()},l(c){s&&s.l(c),a=ye()},m(c,e){s&&s.m(c,e),Y(c,a,e)},p(c,e){c[2].delay!=null&&c[2].distance!=null?s?s.p(c,e):(s=xe(c),s.c(),s.m(a.parentNode,a)):s&&(s.d(1),s=null)},d(c){s&&s.d(c),c&&u(a)}}}function xe(d){let a,s=Math.round(d[2].delay/60)+"",c,e,t=Math.round(d[2].distance/100)/10+"",l,r;return{c(){a=D("~"),c=D(s),e=D("Min - "),l=D(t),r=D(" km")},l(o){a=M(o,"~"),c=M(o,s),e=M(o,"Min - "),l=M(o,t),r=M(o," km")},m(o,f){Y(o,a,f),Y(o,c,f),Y(o,e,f),Y(o,l,f),Y(o,r,f)},p(o,f){f&1&&s!==(s=Math.round(o[2].delay/60)+"")&&oe(c,s),f&1&&t!==(t=Math.round(o[2].distance/100)/10+"")&&oe(l,t)},d(o){o&&u(a),o&&u(c),o&&u(e),o&&u(l),o&&u(r)}}}function Ee(d){let a,s,c=d[2].road+"",e,t,l,r=d[2].category.charAt(0).toUpperCase()+d[2].category.slice(1)+"",o,f,v,P=(d[2].reason??d[2].events[0].text)+"",j,A,C,T,I,E,R,x,H,G,N,w=d[2].category=="jams"&&we(d);return{c(){a=p("tr"),s=p("td"),e=D(c),t=S(),l=p("td"),o=D(r),f=S(),v=p("td"),j=D(P),A=S(),C=p("td"),w&&w.c(),T=S(),I=p("td"),E=ie("svg"),R=ie("path"),x=ie("path"),N=S(),this.h()},l(b){a=g(b,"TR",{class:!0});var y=h(a);s=g(y,"TD",{class:!0});var B=h(s);e=M(B,c),B.forEach(u),t=V(y),l=g(y,"TD",{class:!0});var z=h(l);o=M(z,r),z.forEach(u),f=V(y),v=g(y,"TD",{class:!0});var q=h(v);j=M(q,P),q.forEach(u),A=V(y),C=g(y,"TD",{class:!0});var Q=h(C);w&&w.l(Q),Q.forEach(u),T=V(y),I=g(y,"TD",{class:!0});var J=h(I);E=ce(J,"svg",{class:!0,"data-lat":!0,"data-lon":!0,xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var F=h(E);R=ce(F,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0,class:!0}),h(R).forEach(u),x=ce(F,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0,class:!0}),h(x).forEach(u),F.forEach(u),J.forEach(u),N=V(y),y.forEach(u),this.h()},h(){i(s,"class","whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 svelte-80dg4t"),i(l,"class","whitespace-nowrap px-3 py-4 text-sm text-gray-300 svelte-80dg4t"),i(v,"class","px-3 py-4 text-sm text-gray-300 w-48 svelte-80dg4t"),i(C,"class","whitespace-nowrap px-3 py-4 text-sm text-gray-300 svelte-80dg4t"),i(R,"stroke-linecap","round"),i(R,"stroke-linejoin","round"),i(R,"d","M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"),i(R,"class","svelte-80dg4t"),i(x,"stroke-linecap","round"),i(x,"stroke-linejoin","round"),i(x,"d","M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"),i(x,"class","svelte-80dg4t"),i(E,"class","map-button cursor-pointer w-6 h-6 svelte-80dg4t"),i(E,"data-lat",H=d[2].goToMap[0]),i(E,"data-lon",G=d[2].goToMap[1]),i(E,"xmlns","http://www.w3.org/2000/svg"),i(E,"fill","none"),i(E,"viewBox","0 0 24 24"),i(E,"stroke-width","1.5"),i(E,"stroke","currentColor"),i(I,"class","whitespace-nowrap px-3 py-4 text-sm text-gray-300 svelte-80dg4t"),i(a,"class","svelte-80dg4t")},m(b,y){Y(b,a,y),n(a,s),n(s,e),n(a,t),n(a,l),n(l,o),n(a,f),n(a,v),n(v,j),n(a,A),n(a,C),w&&w.m(C,null),n(a,T),n(a,I),n(I,E),n(E,R),n(E,x),n(a,N)},p(b,y){y&1&&c!==(c=b[2].road+"")&&oe(e,c),y&1&&r!==(r=b[2].category.charAt(0).toUpperCase()+b[2].category.slice(1)+"")&&oe(o,r),y&1&&P!==(P=(b[2].reason??b[2].events[0].text)+"")&&oe(j,P),b[2].category=="jams"?w?w.p(b,y):(w=we(b),w.c(),w.m(C,null)):w&&(w.d(1),w=null),y&1&&H!==(H=b[2].goToMap[0])&&i(E,"data-lat",H),y&1&&G!==(G=b[2].goToMap[1])&&i(E,"data-lon",G)},d(b){b&&u(a),w&&w.d()}}}function ze(d){let a,s,c,e,t,l,r,o,f,v,P,j,A,C,T,I,E,R,x,H,G,N,w,b,y,B,z,q,Q,J,F,K=d[0],m=[];for(let _=0;_<K.length;_+=1)m[_]=Ee(_e(d,K,_));return{c(){a=p("div"),s=p("div"),c=p("div"),e=p("h1"),t=D("Traffic Jams & Roadworks"),l=S(),r=p("p"),o=D("A list of all the incidents currently happening in the Netherlands."),f=S(),v=p("div"),P=p("div"),j=p("div"),A=p("table"),C=p("thead"),T=p("tr"),I=p("th"),E=D("Road"),R=S(),x=p("th"),H=D("Category"),G=S(),N=p("th"),w=D("Incident"),b=S(),y=p("th"),B=D("Extra info"),z=S(),q=p("th"),Q=D("Map"),J=S(),F=p("tbody");for(let _=0;_<m.length;_+=1)m[_].c();this.h()},l(_){a=g(_,"DIV",{class:!0,style:!0});var O=h(a);s=g(O,"DIV",{class:!0});var k=h(s);c=g(k,"DIV",{class:!0});var U=h(c);e=g(U,"H1",{class:!0});var ee=h(e);t=M(ee,"Traffic Jams & Roadworks"),ee.forEach(u),l=V(U),r=g(U,"P",{class:!0});var W=h(r);o=M(W,"A list of all the incidents currently happening in the Netherlands."),W.forEach(u),U.forEach(u),k.forEach(u),f=V(O),v=g(O,"DIV",{class:!0});var te=h(v);P=g(te,"DIV",{class:!0});var ae=h(P);j=g(ae,"DIV",{class:!0});var X=h(j);A=g(X,"TABLE",{class:!0});var Z=h(A);C=g(Z,"THEAD",{class:!0});var re=h(C);T=g(re,"TR",{class:!0});var $=h(T);I=g($,"TH",{scope:!0,class:!0});var se=h(I);E=M(se,"Road"),se.forEach(u),R=V($),x=g($,"TH",{scope:!0,class:!0});var le=h(x);H=M(le,"Category"),le.forEach(u),G=V($),N=g($,"TH",{scope:!0,class:!0});var he=h(N);w=M(he,"Incident"),he.forEach(u),b=V($),y=g($,"TH",{scope:!0,class:!0});var pe=h(y);B=M(pe,"Extra info"),pe.forEach(u),z=V($),q=g($,"TH",{scope:!0,class:!0});var ge=h(q);Q=M(ge,"Map"),ge.forEach(u),$.forEach(u),re.forEach(u),J=V(Z),F=g(Z,"TBODY",{class:!0});var ve=h(F);for(let de=0;de<m.length;de+=1)m[de].l(ve);ve.forEach(u),Z.forEach(u),X.forEach(u),ae.forEach(u),te.forEach(u),O.forEach(u),this.h()},h(){i(e,"class","text-base font-semibold leading-6 text-white svelte-80dg4t"),i(r,"class","mt-2 text-sm text-gray-100 svelte-80dg4t"),i(c,"class","sm:flex-auto svelte-80dg4t"),i(s,"class","sm:flex sm:items-center svelte-80dg4t"),i(I,"scope","col"),i(I,"class","py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0 svelte-80dg4t"),i(x,"scope","col"),i(x,"class","px-3 py-3.5 text-left text-sm font-semibold text-white svelte-80dg4t"),i(N,"scope","col"),i(N,"class","px-3 py-3.5 text-left text-sm font-semibold text-white svelte-80dg4t"),i(y,"scope","col"),i(y,"class","px-3 py-3.5 text-left text-sm font-semibold text-white svelte-80dg4t"),i(q,"scope","col"),i(q,"class","px-3 py-3.5 text-left text-sm font-semibold text-white svelte-80dg4t"),i(T,"class","svelte-80dg4t"),i(C,"class","svelte-80dg4t"),i(F,"class","divide-y divide-gray-200 svelte-80dg4t"),i(A,"class","min-w-full divide-y divide-gray-300 svelte-80dg4t"),i(j,"class","inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 svelte-80dg4t"),i(P,"class","-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 svelte-80dg4t"),i(v,"class","mt-8 flow-root svelte-80dg4t"),i(a,"class","px-4 sm:px-6 lg:px-8 overflow-y-auto svelte-80dg4t"),Le(a,"height","80vh")},m(_,O){Y(_,a,O),n(a,s),n(s,c),n(c,e),n(e,t),n(c,l),n(c,r),n(r,o),n(a,f),n(a,v),n(v,P),n(P,j),n(j,A),n(A,C),n(C,T),n(T,I),n(I,E),n(T,R),n(T,x),n(x,H),n(T,G),n(T,N),n(N,w),n(T,b),n(T,y),n(y,B),n(T,z),n(T,q),n(q,Q),n(A,J),n(A,F);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(F,null)},p(_,[O]){if(O&1){K=_[0];let k;for(k=0;k<K.length;k+=1){const U=_e(_,K,k);m[k]?m[k].p(U,O):(m[k]=Ee(U),m[k].c(),m[k].m(F,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=K.length}},i:me,o:me,d(_){_&&u(a),je(m,_)}}}function Je(d,a,s){let{traffic:c}=a,{map:e}=a;return De(async()=>{document.querySelectorAll(".map-button").forEach(t=>{t.addEventListener("click",()=>{e.setView([t.dataset.lat,t.dataset.lon],12)})})}),d.$$set=t=>{"traffic"in t&&s(0,c=t.traffic),"map"in t&&s(1,e=t.map)},[c,e]}class Ge extends be{constructor(a){super(),ke(this,a,Je,ze,Te,{traffic:0,map:1})}}function Ke(d){let a,s,c,e,t,l,r,o,f,v,P,j,A,C,T,I,E,R,x,H,G,N,w,b,y,B,z,q,Q,J,F,K;return l=new Ge({props:{map:d[0],traffic:d[1]}}),{c(){a=p("div"),s=p("div"),c=p("div"),e=S(),t=p("div"),Se(l.$$.fragment),r=S(),o=p("div"),f=p("div"),v=D("Legenda"),P=S(),j=p("div"),A=p("span"),C=D("Below 10 min"),T=S(),I=p("p"),E=D("This color is used when the delay in a traffic jam is below 10 min"),R=S(),x=p("div"),H=p("span"),G=D("Above 10 min"),N=S(),w=p("p"),b=D("This color is used when the delay in a traffic jam is above 10 min"),y=S(),B=p("div"),z=p("span"),q=D("Roadworks / Closed"),Q=S(),J=p("p"),F=D("This color is used when the road is completely blocked off, either by roadworks or just closed"),this.h()},l(m){a=g(m,"DIV",{class:!0});var _=h(a);s=g(_,"DIV",{class:!0});var O=h(s);c=g(O,"DIV",{id:!0,class:!0}),h(c).forEach(u),O.forEach(u),e=V(_),t=g(_,"DIV",{class:!0});var k=h(t);Ve(l.$$.fragment,k),k.forEach(u),_.forEach(u),r=V(m),o=g(m,"DIV",{class:!0});var U=h(o);f=g(U,"DIV",{});var ee=h(f);v=M(ee,"Legenda"),ee.forEach(u),P=V(U),j=g(U,"DIV",{class:!0});var W=h(j);A=g(W,"SPAN",{class:!0});var te=h(A);C=M(te,"Below 10 min"),te.forEach(u),T=V(W),I=g(W,"P",{class:!0});var ae=h(I);E=M(ae,"This color is used when the delay in a traffic jam is below 10 min"),ae.forEach(u),W.forEach(u),R=V(U),x=g(U,"DIV",{class:!0});var X=h(x);H=g(X,"SPAN",{class:!0});var Z=h(H);G=M(Z,"Above 10 min"),Z.forEach(u),N=V(X),w=g(X,"P",{class:!0});var re=h(w);b=M(re,"This color is used when the delay in a traffic jam is above 10 min"),re.forEach(u),X.forEach(u),y=V(U),B=g(U,"DIV",{class:!0});var $=h(B);z=g($,"SPAN",{class:!0});var se=h(z);q=M(se,"Roadworks / Closed"),se.forEach(u),Q=V($),J=g($,"P",{class:!0});var le=h(J);F=M(le,"This color is used when the road is completely blocked off, either by roadworks or just closed"),le.forEach(u),$.forEach(u),U.forEach(u),this.h()},h(){i(c,"id","map"),i(c,"class","svelte-1pbqabu"),i(s,"class","bg-white p-2 rounded col-span-4"),i(t,"class","col-span-6"),i(a,"class","grid grid-cols-10 p-12 gap-4"),i(A,"class","col-span-2 inline-flex items-center rounded-md bg-orange-400/10 px-2 py-1 text-xs font-medium text-orange-400 ring-1 ring-inset ring-orange-400/20"),i(I,"class","col-span-8"),i(j,"class","grid grid-cols-10 gap-4"),i(H,"class","col-span-2 inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20"),i(w,"class","col-span-8"),i(x,"class","grid grid-cols-10 gap-4"),i(z,"class","col-span-2 inline-flex items-center rounded-md bg-gray-900/10 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-900/20"),i(J,"class","col-span-8 text-black"),i(B,"class","grid grid-cols-10 gap-4 bg-gray-300 p-2 rounded-md"),i(o,"class","flex justify-start flex-col gap-8 mt-24 mb-24 text-white px-8")},m(m,_){Y(m,a,_),n(a,s),n(s,c),n(a,e),n(a,t),Ae(l,t,null),Y(m,r,_),Y(m,o,_),n(o,f),n(f,v),n(o,P),n(o,j),n(j,A),n(A,C),n(j,T),n(j,I),n(I,E),n(o,R),n(o,x),n(x,H),n(H,G),n(x,N),n(x,w),n(w,b),n(o,y),n(o,B),n(B,z),n(z,q),n(B,Q),n(B,J),n(J,F),K=!0},p(m,[_]){const O={};_&1&&(O.map=m[0]),l.$set(O)},i(m){K||(Ce(l.$$.fragment,m),K=!0)},o(m){Re(l.$$.fragment,m),K=!1},d(m){m&&u(a),Ue(l),m&&u(r),m&&u(o)}}}function Ye(d,a,s){let{data:c={traffic:{}}}=a,e;const t=[],l=[52,5];return c.traffic.roads.forEach(r=>{r.segments.forEach(o=>{o.jams&&t.push(...o.jams),o.radars&&t.push(...o.radars),o.roadworks&&t.push(...o.roadworks)})}),t.forEach(r=>{r.category==="jams"&&(r.goToMap=r.polyline?fe.decode(r.polyline)[0]:[r.toLoc.lat,r.toLoc.lon]),r.category==="radars"&&(r.goToMap=[r.loc.lat,r.loc.lon]),r.category==="roadworks"&&(r.goToMap=r.polyline?fe.decode(r.polyline)[0]:[r.toLoc.lat,r.toLoc.lon])}),De(async()=>{{const r=await Ie(()=>import("./leaflet-src.d3be426d.js").then(f=>f.l),[],import.meta.url),o=document.querySelector("#map");s(0,e=r.map(o).setView(l,6)),r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),t.filter(f=>f.category==="jams").forEach(f=>{Oe(r,f,e)}),t.filter(f=>f.category==="radars").forEach(f=>{$e(r,f,e)}),t.filter(f=>f.category==="roadworks").forEach(f=>{qe(r,f,e)})}}),He(async()=>{e&&e.remove()}),d.$$set=r=>{"data"in r&&s(2,c=r.data)},[e,t,c]}class Ze extends be{constructor(a){super(),ke(this,a,Ye,Ke,Te,{data:2})}}export{Ze as P,Xe as c,Ne as g};
