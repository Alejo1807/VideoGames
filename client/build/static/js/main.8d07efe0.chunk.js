(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,a,n){e.exports={outside:"Form_outside__2eFdv",form:"Form_form__1JzOw",spin:"Form_spin__1dqe4",separador:"Form_separador__3yseb",columan1:"Form_columan1__4aNBN",campo:"Form_campo__TxiQq",campo2:"Form_campo2__2RD9b",campo3:"Form_campo3__1nXMI",btm:"Form_btm__CModr",error:"Form_error__1eDYi"}},17:function(e,a,n){e.exports={home:"Home_home__1oGCf",menu:"Home_menu__3pHtu",burger:"Home_burger__1Ro-1",aside:"Home_aside__1OveO",btm:"Home_btm__3xULN",spin:"Home_spin__3B3Jr",cards:"Home_cards__1it8x",input:"Home_input__26_-2"}},20:function(e,a,n){e.exports={division:"Detail_division__51abD",spin:"Detail_spin__1Mmhx",columna1:"Detail_columna1__JBHQM",columna2:"Detail_columna2__1SEUy",contenedor:"Detail_contenedor__1GsBD",descripcion:"Detail_descripcion__3xoar",contenedor2:"Detail_contenedor2__3XARj",btm:"Detail_btm__3UYbq"}},23:function(e,a,n){e.exports={nav:"Nav_nav__3Utrr",navs:"Nav_navs__X-1xh",navlink:"Nav_navlink__2KoCJ",active:"Nav_active__3S0xE",spin:"Nav_spin__2dwWk",div:"Nav_div__3-dsh",typing:"Nav_typing__fp75P",blink:"Nav_blink__3FJ-w"}},29:function(e,a,n){e.exports={main:"Landing_main__XRgDF",div:"Landing_div__23yB0",typing:"Landing_typing__16HT-",blink:"Landing_blink__1gw_z",sub_btm:"Landing_sub_btm__12sOI",btm:"Landing_btm__3yj51",spin:"Landing_spin__AsIM9"}},30:function(e,a,n){e.exports={card:"Card_card__1yXLe",spin:"Card_spin__3DjLO",inside:"Card_inside__123kd",nav:"Card_nav__3mJNQ",figure:"Card_figure__WyVrc"}},43:function(e,a,n){e.exports={contenedor:"Nogames_contenedor__1RKtm",caja:"Nogames_caja__2bs_J",spin:"Nogames_spin__15Xl7"}},44:function(e,a,n){e.exports={contenedor:"Loading_contenedor__mjL8T",caja:"Loading_caja__3eNjI",spin:"Loading_spin__UVV__"}},48:function(e,a,n){e.exports={searchbar:"Searchbar_searchbar__-9FYh",spin:"Searchbar_spin__HsPkN"}},49:function(e,a,n){e.exports={error:"Error_error__viYzB",spin:"Error_spin__16ed0"}},55:function(e,a,n){},56:function(e,a,n){},65:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(33),i=n.n(r),s=(n(55),n(56),n(4)),o=n(19),d=n(29),l=n.n(d),j=n(1);function b(e){return Object(j.jsxs)("div",{className:l.a.main,children:[Object(j.jsxs)("div",{className:l.a.div,children:[" ",Object(j.jsx)("span",{children:"Bienvenido a Henry Videogames!"})," "]}),Object(j.jsx)("div",{className:l.a.sub_btm,children:Object(j.jsx)("button",{onClick:function(){return e.goToHome()},className:l.a.btm,children:"Ir a p\xe1gina princial"})})]})}var m=n(5),u=n(8),O=n(6),h=n(67),g={getGame:function(e){return function(){var a=Object(u.a)(Object(m.a)().mark((function a(n){var t,c;return Object(m.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!e){a.next=8;break}return a.next=4,h.a.get("/videogames/name?=".concat(e));case 4:c=a.sent,t=c.data,a.next=12;break;case 8:return a.next=10,h.a.get("/videogames");case 10:c=a.sent,t=c.data;case 12:n({type:"GET_GAMES",payload:t}),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),console.log(Error(a.t0));case 18:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}()},orderGameByName:function(e){return{type:"ORDER_NAME",payload:e.target.value}},orderGameByRating:function(e){return{type:"ORDER_RATING",payload:e.target.value}},filterGameByGenre:function(e){return{type:"FILTER_GENRE",payload:e.target.value}},filterGameByOrigin:function(e){return{type:"FILTER_ORIGIN",payload:e.target.value}},resetVideogames:function(){return{type:"RESET_VIDEOGAMES"}}},x=g,p=n(16),v=n(30),f=n.n(v);function y(e){var a=e.name,n=e.image,t=e.genres,c=e.id,r=t.map((function(e){return e.name}));return Object(j.jsx)("div",{className:f.a.card,children:Object(j.jsx)("div",{className:f.a.inside,children:Object(j.jsxs)(p.b,{to:"/detail/".concat(c),className:f.a.nav,children:[Object(j.jsx)("h1",{children:Object(j.jsx)("p",{children:a})}),Object(j.jsx)("figure",{className:f.a.figure,children:Object(j.jsx)("img",{src:n,alt:"".concat(a)})}),Object(j.jsxs)("h2",{children:["G\xe9neros: ",Object(j.jsx)("span",{children:r.toString().replaceAll(",",", ")})]})]})})})}var N=n(48),A=n.n(N),E="data:image/png;base64,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";function G(){var e=Object(t.useState)(""),a=Object(O.a)(e,2),n=a[0],c=a[1],r=Object(o.b)();return Object(j.jsxs)("div",{className:A.a.searchbar,children:[Object(j.jsx)("input",{type:"search",placeholder:"Buscar por nombre...",onChange:function(e){c(e.target.value)}}),Object(j.jsxs)("button",{onClick:function(){var e;(e=n)&&r(x.getGame(e))},children:[" ",Object(j.jsx)("img",{src:E,alt:"\ud83d\udd0d\ufe0e"})," "]})]})}var w=n(43),R=n.n(w);function S(){return Object(j.jsx)("div",{className:R.a.contenedor,children:Object(j.jsx)("div",{className:R.a.caja,children:Object(j.jsx)("div",{children:"No se han encontrado considencias \ud83d\ude1e"})})})}var D=n(17),F=n.n(D),Y=n(44),M=n.n(Y);function B(){var e=Object(t.useState)(!1),a=Object(O.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)((function(){setTimeout(c,4e3,!0)}),[]),n?Object(j.jsx)(S,{}):Object(j.jsx)("div",{className:M.a.contenedor,children:Object(j.jsx)("div",{className:M.a.caja,children:Object(j.jsx)("div",{children:"Loading..."})})})}function J(e){var a=e.videogames,n=Object(t.useState)([]),c=Object(O.a)(n,2),r=c[0],i=c[1],s=Object(o.b)(),d=Object(t.useState)(!1),l=Object(O.a)(d,2),b=l[0],g=l[1],p=15,v=Math.ceil(a.length/p),f=Object(t.useState)(0),N=Object(O.a)(f,2),A=N[0],E=N[1],w=Object(t.useState)(p),R=Object(O.a)(w,2),D=R[0],Y=R[1],M=Object(t.useState)(Math.ceil(D/p)),J=Object(O.a)(M,2),H=J[0],I=J[1],Z=Object(t.useState)([]),k=Object(O.a)(Z,2),z=k[0],T=k[1];function L(e){a.hasOwnProperty("error")||(s(x.orderGameByName(e)),E(0),Y(p))}function V(e){a.hasOwnProperty("error")||(s(x.orderGameByRating(e)),E(0),Y(p))}return Object(t.useEffect)((function(){a.length>0&&(I(Math.ceil(D/p)),T(a.slice(A,D)))}),[a,A,D]),Object(t.useEffect)((function(){function e(){return(e=Object(u.a)(Object(m.a)().mark((function e(){var a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/genres");case 3:a=e.sent,(n=a.data)?i(n):window.alert("No se encontraron datos"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("No se encontraron datos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),Object(j.jsxs)("div",{className:F.a.home,children:[Object(j.jsxs)("aside",{children:[Object(j.jsxs)("div",{className:F.a.menu,children:[Object(j.jsxs)("button",{className:F.a.burger,onClick:function(){g(!b)},children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]}),Object(j.jsx)("div",{children:"Men\xfa"})]}),b?Object(j.jsxs)("div",{className:F.a.aside,children:[Object(j.jsx)(G,{}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("div",{children:"Ordenar por Nombre"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"OrderByName",value:"Ascendente",onChange:L})," Ascendente"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"OrderByName",value:"Descendente",onChange:L})," Descendente"]})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("div",{children:"Ordenar por Rating"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"OrderByRating",value:"Ascendente",onChange:V})," Ascendente"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"OrderByRating",value:"Descendente",onChange:V})," Descendente"]})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("div",{children:"Filtrar por:"}),Object(j.jsx)("h3",{children:"G\xe9nero:"}),Object(j.jsxs)("select",{name:"FilterByGenres",defaultValue:"(seleccione g\xe9nero)",onChange:function(e){a.hasOwnProperty("error")||(s(x.filterGameByGenre(e)),E(0),Y(p))},children:[Object(j.jsx)("option",{disabled:"disabled",children:"(seleccione g\xe9nero)"}),r.map((function(e){return Object(j.jsx)("option",{children:e.name},r.indexOf(e))}))]}),Object(j.jsx)("h3",{children:"Origen:"}),Object(j.jsxs)("select",{name:"FilterByOrigin",defaultValue:"(seleccione origen)",onChange:function(e){a.hasOwnProperty("error")||(s(x.filterGameByOrigin(e)),E(0),Y(p))},children:[Object(j.jsx)("option",{disabled:"disabled",children:"(seleccione origen)"}),Object(j.jsx)("option",{value:"API",children:"API"}),Object(j.jsx)("option",{value:"PostgreSQL",children:"PostgreSQL"})]})]}),Object(j.jsx)("button",{onClick:function(){a.hasOwnProperty("error")||(s(x.resetVideogames()),E(0),Y(p))},className:F.a.btm,children:"Reset"})]}):Object(j.jsx)("div",{})]}),a.hasOwnProperty("error")?Object(j.jsx)(S,{}):0===a.length?Object(j.jsx)(B,{}):Object(j.jsx)("div",{className:F.a.cards,children:z.map((function(e){return Object(j.jsx)(y,{name:e.name,genres:e.genres,image:e.background_image,id:e.id},z.indexOf(e))}))}),!a.hasOwnProperty("error")&&a.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){A>14&&(E(A-p),Y(H===v?p*(v-1):D-p))},className:F.a.btm,children:"\u21e6"}),Object(j.jsx)("button",{onClick:function(){D<=a.length-1&&(E(A+p),Y(Math.min(D+p,a.length)))},className:F.a.btm,children:" \u21e8"}),Object(j.jsxs)("div",{children:["P\xe1gina ",H," de ",v]}),Object(j.jsx)("label",{children:"Ir a p\xe1gina:"}),Object(j.jsx)("input",{type:"number",onChange:function(e){A>14&&D<=a.length-1&&(E((e.target.value-1)*p),Y(parseInt((e.target.value-1)*p)+p))},className:F.a.input})]}):Object(j.jsx)("div",{})]})}var H=n(20),I=n.n(H);function Z(){var e=Object(t.useState)({}),a=Object(O.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)([]),i=Object(O.a)(r,2),o=i[0],d=i[1],l=Object(t.useState)([]),b=Object(O.a)(l,2),g=b[0],x=b[1],p=Object(t.useState)("No return"),v=Object(O.a)(p,2),f=v[0],y=v[1],N=Object(t.useState)(),A=Object(O.a)(N,2),E=A[0],G=A[1],w=Object(s.o)().id,R=Object(s.m)();return Object(t.useEffect)((function(){function e(){return(e=Object(u.a)(Object(m.a)().mark((function e(){var a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/videogames/".concat(w));case 3:a=e.sent,(n=a.data).name?c(n):window.alert("No hay personajes con ese ID"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("estoy en error"),window.alert("No hay personajes con ese ID");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]),Object(t.useEffect)((function(){if(Object.values(n).length>0){y(n.description);var e,a,t=new Date(n.released);G(t.toLocaleDateString()),console.log(n),"API"===(36===n.id.length?"PostgreSQL":"API")?(e=n.platforms.map((function(e){return e.platform.name})),d(e)):(e=n.platforms.split(","),d(e)),a=n.genres.map((function(e){return e.name})),x(a)}}),[n]),Object(j.jsxs)("div",{className:I.a.division,children:[Object(j.jsxs)("div",{className:I.a.columna1,children:[Object(j.jsx)("h1",{children:n.name}),Object(j.jsxs)("div",{className:I.a.contenedor,children:[Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("div",{children:" ID "}),"  ",n.id]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:" Lanzamiento "})," ",E]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:" Rating    "})," ",n.rating," "]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"Descripci\xf3n:"}),Object(j.jsx)("div",{className:I.a.descripcion,dangerouslySetInnerHTML:{__html:f}})]}),Object(j.jsxs)("div",{className:I.a.columna2,children:[Object(j.jsx)("figure",{children:Object(j.jsx)("img",{src:n.background_image,alt:n.name})}),Object(j.jsxs)("div",{className:I.a.contenedor2,children:["Plataformas: ",o.map((function(e){return Object(j.jsx)("div",{children:e},o.indexOf(e))}))]}),Object(j.jsxs)("div",{className:I.a.contenedor2,children:["G\xe9neros: ",g.map((function(e){return Object(j.jsx)("div",{children:e},g.indexOf(e))}))]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:I.a.btm,children:Object(j.jsx)("button",{onClick:function(){R("/home")},children:"Volver"})})]})}var k=n(23),z=n.n(k);function T(){return Object(j.jsxs)("div",{className:z.a.nav,children:[Object(j.jsxs)("div",{className:z.a.div,children:[" ",Object(j.jsx)("span",{children:"Henry Videogames!"})," "]}),Object(j.jsxs)("div",{className:z.a.navs,children:[Object(j.jsx)(p.b,{className:function(e){return e.isActive?z.a.active:z.a.navlink},to:"/home",children:"Home"}),Object(j.jsx)(p.b,{className:function(e){return e.isActive?z.a.active:z.a.navlink},to:"/form",children:"A\xf1adir Videogame"})]})]})}var L=n.p+"static/media/mariosad.654ce5d6.png",V=n(49),C=n.n(V);function P(){var e=Object(s.m)();return Object(t.useEffect)((function(){e("/error")}),[e]),Object(j.jsxs)("div",{className:C.a.error,children:[Object(j.jsx)("img",{src:L,alt:"error.png"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"404"}),Object(j.jsx)("h2",{children:"Opps! Page no found"})]})})]})}var Q=n(9),K=n(10),U=n(12),_=/https?:\/\/([a-zA-Z0-9]([^ @&%$\\/()=?\xbf!.,:;]|\d)*[a-zA-Z0-9][.])+[a-zA-Z]{2,4}([.][a-zA-Z]{2})?\/?((?<=\/)(([^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*%|]|\d)+[/]?)*(#(?<=#)[^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*%|]*)?(\?(?<=\?)([^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*|]+[=][^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*|]+(&(?<=&)[^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*|]+[=][^ @&$#\\/()+=?\xbf!,:;'&quot;^\xb4*|]+)*))?)?/;var W=["PC","PlayStation 5","PlayStation 4","Xbox One","Xbox Series S/X","Nintendo Switch","iOS","Android","Nintendo 3DS","Nintendo DS","Nintendo DSi","macOS","Linux","Xbox 360","Xbox","PlayStation 3","PlayStation 2","PlayStation","PS Vita","PSP","Wii U","Wii","GameCube","Nintendo 64","Game Boy Advance","Game Boy Color","Game Boy","SNES","NES","Classic Macintosh","Apple II","Commodore / Amiga","Atari 7800","Atari 5200","Atari 2600","Atari Flashback","Atari 8-bit","Atari ST","Atari Lynx","Atari XEGS","Genesis","SEGA Saturn","SEGA CD","SEGA 32X","SEGA Master System","Dreamcast","3DO","Jaguar","Game Gear","Neo Geo","web"],X=n(11),q=n.n(X);function $(){var e=Object(t.useState)([]),a=Object(O.a)(e,2),n=a[0],c=a[1],r=Object(t.useState)({name:"",description:"",platforms:"",background_image:"",released:"",rating:"",genres:[]}),i=Object(O.a)(r,2),s=i[0],o=i[1],d=Object(t.useState)({name:"",description:"",platforms:"",background_image:"",released:"",rating:"",genres:[]}),l=Object(O.a)(d,2),b=l[0],g=l[1],x=Object(t.useState)([]),p=Object(O.a)(x,2),v=p[0],f=p[1],y=Object(t.useState)([]),N=Object(O.a)(y,2),A=N[0],E=N[1];function G(e){o(Object(K.a)(Object(K.a)({},s),{},Object(Q.a)({},e.target.name,e.target.value))),g(function(e){var a={};e.name.length>40&&(a.name="el nombre del videogame debe ser de m\xe1ximo 40 caracteres"),e.description.length>240&&(a.description="La descripci\xf3n del videogame debe ser de m\xe1ximo 240 caracteres");var n=new Date(Date.now()),t=new Date("".concat(e.released,"T00:00:00"));return""!==e.released&&t>n&&(a.released="La fecha de lanzamiento no puede ser un valor futuro"),(e.rating<0||e.rating>5)&&(a.rating="El rating debe ser un n\xfamero entre 0 y 5 (puede incluir decimales)"),""===e.background_image||_.test(e.background_image)||(a.background_image="Debe ingresar una URL v\xe1lida ej:'http://www.miimagen.com/abcd'"),a}(Object(K.a)(Object(K.a)({},s),{},Object(Q.a)({},e.target.name,e.target.value))))}var w=function(){var e=Object(u.a)(Object(m.a)().mark((function e(a){var n,t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object.values(b),t=Object.values(s).some((function(e){return 0===e.length})),0!==n.length||t){e.next=14;break}return e.prev=3,e.next=6,h.a.post("http://localhost:3001/videogames",s);case 6:window.alert("Videogame a\xf1adido con \xe9xito"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log(e.t0);case 12:e.next=16;break;case 14:a.preventDefault(),alert("Debes diligenciar todos los campos con \u2735");case 16:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){function e(){return(e=Object(u.a)(Object(m.a)().mark((function e(){var a,n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("http://localhost:3001/genres");case 3:a=e.sent,(n=a.data)?c(n):window.alert("No se encontraron datos"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("No se encontraron datos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(t.useEffect)((function(){var e=v.map((function(e){return e.id}));o((function(a){return Object(K.a)(Object(K.a)({},a),{},{genres:e})}))}),[v,o]),Object(t.useEffect)((function(){var e=A.toString();o((function(a){return Object(K.a)(Object(K.a)({},a),{},{platforms:e})}))}),[A,o]),Object(j.jsx)("div",{className:q.a.outside,children:Object(j.jsxs)("form",{onSubmit:w,className:q.a.form,children:[Object(j.jsx)("h1",{children:"A\xf1ade tu videojuego!"}),Object(j.jsx)("p",{children:'Ingresa la siguiente informaci\xf3n y haz clic en el bot\xf3n "a\xf1adir":'}),Object(j.jsxs)("div",{className:q.a.separador,children:[Object(j.jsxs)("div",{className:q.a.columan1,children:[Object(j.jsxs)("div",{className:q.a.campo,children:[Object(j.jsx)("label",{children:"Nombre videojuego\u2735 "}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Ingrese nombre (max. 40 caracteres)",onBlur:G})]}),b.name?Object(j.jsx)("p",{className:q.a.error,children:b.name}):Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:q.a.campo,children:[Object(j.jsx)("label",{children:"URL imagen videojuego\u2735"}),Object(j.jsx)("input",{type:"url",name:"background_image",placeholder:"Ej. https://www.miimagen.com/img.jpg",onBlur:G})]}),b.background_image?Object(j.jsx)("p",{className:q.a.error,children:b.background_image}):Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:q.a.campo2,children:[Object(j.jsx)("label",{children:"Fecha de lanzamiento\u2735"}),Object(j.jsx)("input",{type:"date",name:"released",onBlur:G})]}),b.released?Object(j.jsx)("p",{className:q.a.error,children:b.released}):Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:q.a.campo2,children:[Object(j.jsx)("label",{children:"Rating\u2735"}),Object(j.jsx)("input",{type:"number",name:"rating",step:"any",onBlur:G})]}),b.rating?Object(j.jsx)("p",{className:q.a.error,children:b.rating}):Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:q.a.columan1,children:[Object(j.jsxs)("div",{className:q.a.campo,children:[Object(j.jsx)("label",{children:"Descripci\xf3n\u2735:"}),Object(j.jsx)("textarea",{name:"description",rows:4,placeholder:"Ingrese una descripci\xf3n (max. 240 caracteres)",onBlur:G})]}),b.description?Object(j.jsx)("p",{className:q.a.error,children:b.description}):Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:q.a.campo2,children:[Object(j.jsx)("label",{children:"A\xf1adir platafomas\u2735"}),Object(j.jsxs)("select",{defaultValue:"(seleccione plataformas)",name:"platforms",onChange:function(e){A.some((function(a){return a===e.target.value}))?window.alert("Este g\xe9nero ya ha sido agregado previamente"):E([].concat(Object(U.a)(A),[e.target.value]))},children:[Object(j.jsx)("option",{disabled:"disabled",children:"(seleccione plataformas)"}),W.map((function(e){return Object(j.jsx)("option",{children:e},W.indexOf(e))}))]})]}),Object(j.jsx)("div",{className:q.a.campo3,children:A.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[e,Object(j.jsx)("button",{onClick:function(){return function(e){var a=A.filter((function(a){return a!==e}));E(a)}(e)},children:"X"})]})},A.indexOf(e))}))}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:q.a.campo2,children:[Object(j.jsx)("label",{children:"A\xf1adir G\xe9neros\u2735"}),Object(j.jsxs)("select",{defaultValue:"(seleccione g\xe9neros)",name:"genres",onChange:function(e){if(v.some((function(a){return a.name===e.target.value})))window.alert("Este g\xe9nero ya ha sido agregado previamente");else{var a=n.find((function(a){return a.name===e.target.value}));f([].concat(Object(U.a)(v),[a]))}},children:[Object(j.jsx)("option",{disabled:"disabled",children:"(seleccione g\xe9neros)"}),n.map((function(e){return Object(j.jsx)("option",{children:e.name},n.indexOf(e))}))]})]}),Object(j.jsx)("div",{className:q.a.campo3,children:v.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[e.name,Object(j.jsx)("button",{onClick:function(){return function(e){var a=v.filter((function(a){return a.name!==e}));f(a)}(e.name)},children:"X"})]})},v.indexOf(e))}))})]})]}),Object(j.jsx)("button",{type:"submit",className:q.a.btm,children:"A\xf1adir Videogame"})]})})}var ee=function(){var e=Object(o.b)(),a=Object(s.k)();Object(t.useEffect)((function(){e(x.getGame())}),[e]);var n=Object(s.m)(),c=Object(o.c)((function(e){return e.videogamesFiltered}));return Object(j.jsxs)("div",{className:"App",children:["/"!==a.pathname&&"/error"!==a.pathname?Object(j.jsx)(T,{}):"",Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(b,{goToHome:function(){n("/home")}})}),Object(j.jsx)(s.a,{path:"/home",element:Object(j.jsx)(J,{videogames:c})}),Object(j.jsx)(s.a,{path:"/detail/:id",element:Object(j.jsx)(Z,{})}),Object(j.jsx)(s.a,{path:"/form",element:Object(j.jsx)($,{})}),Object(j.jsx)(s.a,{path:"*",element:Object(j.jsx)(P,{})})]})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;n(e),t(e),c(e),r(e),i(e)}))},ne=n(45),te=n(50),ce={videogames:[],videogamesFiltered:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_GAMES":return{videogames:a.payload,videogamesFiltered:a.payload};case"FILTER_GENRE":return Object(K.a)(Object(K.a)({},e),{},{videogamesFiltered:e.videogames.filter((function(e){return e.genres.some((function(e){return e.name===a.payload}))}))});case"FILTER_ORIGIN":return Object(K.a)(Object(K.a)({},e),{},{videogamesFiltered:e.videogames.filter((function(e){return"API"===a.payload?void 0===e.id.length:36===e.id.length}))});case"ORDER_NAME":return Object(K.a)(Object(K.a)({},e),{},{videogamesFiltered:Object(U.a)(e.videogamesFiltered).sort((function(e,n){return"Ascendente"===a.payload?e.name>n.name?1:e.name<n.name?-1:0:n.name>e.name?1:n.name<e.name?-1:0}))});case"ORDER_RATING":return Object(K.a)(Object(K.a)({},e),{},{videogamesFiltered:Object(U.a)(e.videogamesFiltered).sort((function(e,n){return"Ascendente"===a.payload?e.rating-n.rating:n.rating-e.rating}))});case"RESET_VIDEOGAMES":return Object(K.a)(Object(K.a)({},e),{},{videogamesFiltered:Object(U.a)(e.videogames)});default:return ce}},ie=Object(ne.b)(re,Object(ne.a)(te.a));h.a.defaults.baseURL="http://localhost:3001",i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{store:ie,children:Object(j.jsx)(p.a,{children:Object(j.jsx)(ee,{})})})}),document.getElementById("root")),ae()}},[[65,1,2]]]);
//# sourceMappingURL=main.8d07efe0.chunk.js.map