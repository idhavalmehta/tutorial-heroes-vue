(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tutorial-heroes-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1261:function(e,t,n){},"49a7":function(e,t,n){"use strict";var r=n("c33d"),o=n.n(r);o.a},"571d":function(e,t,n){"use strict";var r=n("e538"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"8ab8":function(e,t,n){"use strict";var r=n("d1f2"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b0f5:function(e,t,n){},c33d:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(e._s(e.title))]),n("nav",[n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),n("router-link",{attrs:{to:"/heroes"}},[e._v("Heroes")])],1),n("router-view"),n("messages-component")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.messageService.messages.length?n("div",[n("h2",[e._v("Messages")]),n("button",{staticClass:"clear",on:{click:function(t){return e.messageService.clear()}}},[e._v("clear")]),e._l(e.messageService.messages,(function(t,r){return n("div",{key:r},[e._v(" "+e._s(t)+" ")])}))],2):e._e()},s=[],c={messages:[],add:function(e){this.messages.push(e)},clear:function(){this.messages=[]}},u=r["a"].extend({name:"MessagesComponent",data:function(){return{messageService:c}}}),l=u,d=(n("e6d9"),n("2877")),f=Object(d["a"])(l,i,s,!1,null,"571f6376",null),p=f.exports,h=r["a"].extend({data:function(){return{title:"Tour of Heroes"}},components:{MessagesComponent:p}}),v=h,m=(n("5c0b"),n("8ab8"),Object(d["a"])(v,o,a,!1,null,"c8b4021c",null)),g=m.exports,b=n("9483");Object(b["a"])("".concat("/tutorial-heroes-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("My Heroes")]),n("ul",{staticClass:"heroes"},e._l(e.heroes,(function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/detail/"+t.id}},[n("span",{staticClass:"badge"},[e._v(e._s(t.id))]),e._v(" "+e._s(t.name)+" ")])],1)})),0)])},w=[];function k(e){return e.toUpperCase()}n("7db0"),n("d3b7");var S=[{id:11,name:"Dr Nice"},{id:12,name:"Narco"},{id:13,name:"Bombasto"},{id:14,name:"Celeritas"},{id:15,name:"Magneta"},{id:16,name:"RubberMan"},{id:17,name:"Dynama"},{id:18,name:"Dr IQ"},{id:19,name:"Magma"},{id:20,name:"Tornado"}],H={getHeroes:function(){return c.add("HeroService: fetched heroes"),Promise.resolve(S)},getHero:function(e){c.add("HeroService: fetched hero id=".concat(e));var t=S.find((function(t){return t.id===e}))||null;return Promise.resolve(t)}},x=r["a"].extend({name:"HeroesComponent",data:function(){return{heroes:[],heroService:H}},created:function(){this.getHeroes()},methods:{getHeroes:function(){var e=this;this.heroService.getHeroes().then((function(t){return e.heroes=t}))}},filters:{uppercase:k}}),O=x,j=(n("49a7"),Object(d["a"])(O,y,w,!1,null,"f613d8dc",null)),C=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Top Heroes")]),n("div",{staticClass:"grid grid-pad"},e._l(e.heroes,(function(t){return n("router-link",{key:t.id,staticClass:"col-1-4",attrs:{to:"/detail/"+t.id}},[n("div",{staticClass:"module hero"},[n("h4",[e._v(e._s(t.name))])])])})),1)])},P=[],N=(n("fb6a"),r["a"].extend({name:"DashboardComponent",data:function(){return{heroes:[],heroService:H}},created:function(){this.getHeroes()},methods:{getHeroes:function(){var e=this;this.heroService.getHeroes().then((function(t){return e.heroes=t.slice(1,5)}))}}})),$=N,D=(n("ff9c"),Object(d["a"])($,M,P,!1,null,"dea419fc",null)),E=D.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hero?n("div",[n("h2",[e._v(e._s(e._f("uppercase")(e.hero.name))+" Details")]),n("div",[n("span",[e._v("id:")]),e._v(" "+e._s(e.hero.id)+" ")]),n("div",[n("label",[e._v(" name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hero.name,expression:"hero.name"}],attrs:{placeholder:"name"},domProps:{value:e.hero.name},on:{input:function(t){t.target.composing||e.$set(e.hero,"name",t.target.value)}}})])]),n("button",{on:{click:function(t){return e.goBack()}}},[e._v("go back")])]):e._e()},I=[],B=r["a"].extend({name:"HeroDetailComponent",props:{id:{type:String,validator:function(e){var t=parseInt(e,10);return!isNaN(t)}}},data:function(){return{hero:null,heroService:H}},computed:{parsedId:function(){return parseInt(this.id,10)}},created:function(){this.getHero()},methods:{getHero:function(){var e=this,t=this.parsedId;this.heroService.getHero(t).then((function(t){return e.hero=t}))},goBack:function(){this.$router.back()}},filters:{uppercase:k}}),A=B,F=(n("571d"),Object(d["a"])(A,T,I,!1,null,"583b8f03",null)),J=F.exports;r["a"].use(_["a"]);var q=[{path:"/",redirect:"/dashboard"},{path:"/dashboard",component:E},{path:"/detail/:id",component:J,props:!0},{path:"/heroes",component:C}],Q=new _["a"]({routes:q}),R=Q,U=n("2f62");r["a"].use(U["a"]);var z=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:z,render:function(e){return e(g)}}).$mount("#app")},d1f2:function(e,t,n){},e538:function(e,t,n){},e6d9:function(e,t,n){"use strict";var r=n("1261"),o=n.n(r);o.a},ff9c:function(e,t,n){"use strict";var r=n("b0f5"),o=n.n(r);o.a}});
//# sourceMappingURL=app.1cffff7d.js.map