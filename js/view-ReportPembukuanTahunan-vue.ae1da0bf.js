(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-ReportPembukuanTahunan-vue"],{"0fd9":function(t,e,r){"use strict";r("a4d3"),r("99af"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("4ec9"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("5319"),r("159b"),r("ddb0");var a=r("ade3"),n=(r("4b85"),r("2b0e")),i=r("d9f7"),s=r("80d2");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(r,a){return r[t+Object(s["C"])(a)]=e(),r}),{})}var f=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},p=u("align",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:v}})),b=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:b}})),k={align:Object.keys(p),justify:Object.keys(h),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,r){var a=y[t];if(null!=r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return a+="-".concat(r),a.toLowerCase()}}var O=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},p,{justify:{type:String,default:null,validator:v}},h,{alignContent:{type:String,default:null,validator:b}},g),render:function(t,e){var r=e.props,n=e.data,s=e.children,o="";for(var d in r)o+=String(r[d]);var l=O.get(o);return l||function(){var t,e;for(e in l=[],k)k[e].forEach((function(t){var a=r[t],n=x(e,t,a);n&&l.push(n)}));l.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(a["a"])(t,"align-".concat(r.align),r.align),Object(a["a"])(t,"justify-".concat(r.justify),r.justify),Object(a["a"])(t,"align-content-".concat(r.alignContent),r.alignContent),t)),O.set(o,l)}(),t(r.tag,Object(i["a"])(n,{staticClass:"row",class:l}),s)}})},"1a10":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"template"}},[r("v-btn",{staticClass:"blue white--text",attrs:{id:"print"},on:{click:function(e){return t.printReport()}}},[t._v("Print")]),r("v-btn",{staticClass:"ml-4 red white--text",attrs:{id:"print",to:"/bukutahunan",link:""}},[t._v("Back")]),t.statusButton?r("v-btn",{staticClass:"ml-4 green accent-4 white--text",attrs:{id:"print"},on:{click:function(e){return t.updateSaldo()}}},[t._v("Update Saldo")]):t._e(),[r("br"),r("h2",{staticClass:"text-center"},[t._v("Report "+t._s(t.saldo.JenisPerkiraan))]),r("br"),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("h4",{staticClass:"text-left"},[t._v("No Perkiraan: "+t._s(t.saldo.KodeUnik))])]),r("v-col",{attrs:{cols:"6"}},[r("h4",{staticClass:"text-right"},[t._v("Nama Perkiraan: "+t._s(t.saldo.JenisPerkiraan))])])],1),r("table",{attrs:{id:"table",width:"750"}},[r("thead",[r("tr",{staticStyle:{"font-size":"9pt"}},[r("th",{attrs:{id:"th"}},[t._v("Tanggal")]),r("th",{attrs:{id:"th"}},[t._v("No Bukti")]),r("th",{attrs:{id:"th"}},[t._v("Keterangan")]),r("th",{attrs:{id:"th"}},[t._v("Kode Perkiraan")]),r("th",{attrs:{id:"th"}},[t._v("Debet")]),r("th",{attrs:{id:"th"}},[t._v("Kredit")]),r("th",{attrs:{id:"th"}},[t._v("Saldo")])])]),r("tbody",[r("tr",{staticStyle:{"font-size":"9pt"}},[r("td",{staticClass:"text-center",attrs:{id:"td"}},[t._v(t._s(t.saldo["Tanggal"]))]),r("td",{attrs:{id:"td"}},[t._v("Saldo")]),r("td",{attrs:{id:"td"}}),r("td",{attrs:{id:"td"}}),r("td",{attrs:{id:"td"}}),r("td",{attrs:{id:"td"}}),r("td",{staticClass:"text-right",attrs:{id:"td"}},[t._v(t._s(t._f("currency")(t.saldo["Debet"])))])]),t._l(t.reports,(function(e){return r("tr",{key:e.id,staticStyle:{"font-size":"9pt"}},[r("td",{staticClass:"text-center",attrs:{width:"75.5px",id:"td"}},[t._v(" "+t._s(e.tanggal)+" ")]),"null"===e.nobukti?r("td",{attrs:{classs:"text-left",id:"td",width:"56.6px"}},[t._v("kosong")]):r("td",{attrs:{classs:"text-left",id:"td",width:"56.6px"}},[t._v(t._s(e.nobukti))]),r("td",{staticClass:"text-left",attrs:{id:"td",width:"190px"}},[t._v(t._s(e.keterangan))]),e.kodekredit===t.$route.params.kode?r("td",{staticClass:"text-center",attrs:{id:"td",width:"75px"}},[t._v(t._s(e["kodedebet"]))]):e.kodedebet===t.$route.params.kode?r("td",{staticClass:"text-center",attrs:{id:"td",width:"75px"}},[t._v(t._s(e["kodekredit"]))]):t._e(),r("td",{staticClass:"text-right",attrs:{id:"td",width:"150px"}},[t._v("Rp "+t._s(t._f("currency")(e.kredit)))]),r("td",{staticClass:"text-right",attrs:{id:"td",width:"150px"}},[t._v("Rp "+t._s(t._f("currency")(e.debet)))]),r("td",{staticClass:"text-right",attrs:{id:"td",width:"150px"}},[t._v("Rp "+t._s(t._f("currency")(e.total)))])])})),r("tr",{staticStyle:{"font-size":"9pt"}},[r("td",{staticClass:"text-right",attrs:{id:"td",colspan:"4"}},[t._v("Total")]),r("td",{staticClass:"text-right",attrs:{id:"td"}},[t._v("Rp "+t._s(t._f("currency")(t.totalKredit)))]),r("td",{staticClass:"text-right",attrs:{id:"td"}},[t._v("Rp "+t._s(t._f("currency")(t.totalDebet)))]),r("td",{staticClass:"text-right",attrs:{id:"td"}},[t._v("Rp "+t._s(t._f("currency")(t.totalSeluruh)))])])],2)])]],2)},n=[],i={data:function(){return{saldo:{},keyword:"",load:!1,headers:[{text:"No",value:"no"},{text:"Tanggal",value:"tanggal"},{text:"No Bukti",value:"nobukti"},{text:"Keterangan",value:"keterangan"},{text:"Kode Debit",value:"kodedebet"},{text:"Kode Kredit",value:"kodekredit"},{text:"Debet",value:"debet"},{text:"Kredit",value:"kredit"}],reports:[],totalpembukuans:"",saldoTable:0,total:0,totalDebet:0,totalKredit:0,totalSeluruh:0,statusButton:!1,updatedId:"",form:{jumlah:"",debet:"",kredit:"",saldo:""},listperkiraan:new FormData}},methods:{getData:function(){var t=this,e=this.$apiUrl+"reportjurnaltahunan/"+this.$route.params.kode;this.$http.get(e).then((function(e){t.reports=e.data;var r=t.$apiUrl+"listperkiraan/"+t.$route.params.kode;t.$http.get(r).then((function(e){for(var r in t.saldo=e.data[0],t.saldoTable=t.saldo.Debet,t.reports)t.reports[r].kodekredit===t.$route.params.kode?(t.saldoTable-=t.reports[r].debet,t.saldoTable+=t.reports[r].kredit,t.reports[r].total=t.saldoTable,t.totalDebet+=t.reports[r].debet,t.totalKredit+=t.reports[r].kredit,t.totalSeluruh+=t.reports[r].kredit,t.totalSeluruh-=t.reports[r].debet):t.reports[r].kodedebet===t.$route.params.kode&&(t.saldoTable-=t.reports[r].debet,t.saldoTable+=t.reports[r].kredit,t.reports[r].total=t.saldoTable,t.totalDebet+=t.reports[r].debet,t.totalKredit+=t.reports[r].kredit,t.totalSeluruh+=t.reports[r].kredit,t.totalSeluruh-=t.reports[r].debet);t.totalSeluruh+=t.saldo.Debet}))}))},printReport:function(){window.print(),this.statusButton=!0},updateSaldo:function(){var t=this;this.updatedId=this.$route.params.kode,this.listperkiraan.append("jenisperkiraan",this.saldo.JenisPerkiraan),this.listperkiraan.append("kodeunik",this.saldo.KodeUnik),this.listperkiraan.append("kumulatifdebet",this.totalDebet),this.listperkiraan.append("kumulatifkredit",this.totalKredit),this.totalSeluruh<0?this.listperkiraan.append("kredit",this.totalSeluruh):this.listperkiraan.append("debet",this.totalSeluruh);var e=this.$apiUrl+"listperkiraan/"+this.updatedId;this.load=!0,this.$http.post(e,this.listperkiraan).then((function(e){t.snackbar=!0,t.color="green",t.text=e.data,t.load=!1,t.dialog=!1,t.statusUpdate=!0,t.statusButton=!1,t.typeInput="new"})).catch((function(e){t.errors=e,t.snackbar=!0,t.text="Try Again",t.color="red",t.load=!1,t.typeInput="new"}))}},mounted:function(){this.getData()}},s=i,o=(r("5b6c"),r("2877")),d=r("6544"),l=r.n(d),c=r("8336"),u=r("62ad"),f=r("a523"),p=r("0fd9"),v=Object(o["a"])(s,a,n,!1,null,null,null);e["default"]=v.exports;l()(v,{VBtn:c["a"],VCol:u["a"],VContainer:f["a"],VRow:p["a"]})},"4b85":function(t,e,r){},"4ec9":function(t,e,r){"use strict";var a=r("6d61"),n=r("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},"5b6c":function(t,e,r){"use strict";var a=r("792f"),n=r.n(a);n.a},"62ad":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var a=r("ade3"),n=(r("4b85"),r("2b0e")),i=r("d9f7"),s=r("80d2");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(s["C"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["order"+Object(s["C"])(e)]={type:[String,Number],default:null},t}),{})}(),p={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(f)};function v(t,e,r){var a=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");a+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(a+="-".concat(r),a.toLowerCase()):a.toLowerCase()}}var h=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:d({cols:{type:[Boolean,String,Number],default:!1}},c,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},f,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,n=e.data,s=e.children,o=(e.parent,"");for(var d in r)o+=String(r[d]);var l=h.get(o);return l||function(){var t,e;for(e in l=[],p)p[e].forEach((function(t){var a=r[t],n=v(e,t,a);n&&l.push(n)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!r.cols},Object(a["a"])(t,"col-".concat(r.cols),r.cols),Object(a["a"])(t,"offset-".concat(r.offset),r.offset),Object(a["a"])(t,"order-".concat(r.order),r.order),Object(a["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(o,l)}(),t(r.tag,Object(i["a"])(n,{class:l}),s)}})},6566:function(t,e,r){"use strict";var a=r("9bf2").f,n=r("7c73"),i=r("e2cc"),s=r("0366"),o=r("19aa"),d=r("2266"),l=r("7dd0"),c=r("2626"),u=r("83ab"),f=r("f183").fastKey,p=r("69f3"),v=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,r,l){var c=t((function(t,a){o(t,c,e),v(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=a&&d(a,t[l],t,r)})),p=h(e),b=function(t,e,r){var a,n,i=p(t),s=g(t,e);return s?s.value=r:(i.last=s={index:n=f(e,!0),key:e,value:r,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),u?i.size++:t.size++,"F"!==n&&(i.index[n]=s)),t},g=function(t,e){var r,a=p(t),n=f(e);if("F"!==n)return a.index[n];for(r=a.first;r;r=r.next)if(r.key==e)return r};return i(c.prototype,{clear:function(){var t=this,e=p(t),r=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete r[a.index],a=a.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,r=p(e),a=g(e,t);if(a){var n=a.next,i=a.previous;delete r.index[a.index],a.removed=!0,i&&(i.next=n),n&&(n.previous=i),r.first==a&&(r.first=n),r.last==a&&(r.last=i),u?r.size--:e.size--}return!!a},forEach:function(t){var e,r=p(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),i(c.prototype,r?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return b(this,0===t?0:t,e)}}:{add:function(t){return b(this,t=0===t?0:t,t)}}),u&&a(c.prototype,"size",{get:function(){return p(this).size}}),c},setStrong:function(t,e,r){var a=e+" Iterator",n=h(e),i=h(a);l(t,e,(function(t,e){v(this,{type:a,target:t,state:n(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(e)}}},"6d61":function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("94ca"),s=r("6eeb"),o=r("f183"),d=r("2266"),l=r("19aa"),c=r("861d"),u=r("d039"),f=r("1c7e"),p=r("d44e"),v=r("7156");t.exports=function(t,e,r){var h=-1!==t.indexOf("Map"),b=-1!==t.indexOf("Weak"),g=h?"set":"add",k=n[t],y=k&&k.prototype,x=k,O={},w=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(b&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return b&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(b&&!c(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof k||!(b||y.forEach&&!u((function(){(new k).entries().next()})))))x=r.getConstructor(e,t,h,g),o.REQUIRED=!0;else if(i(t,!0)){var j=new x,_=j[g](b?{}:-0,1)!=j,m=u((function(){j.has(1)})),S=f((function(t){new k(t)})),C=!b&&u((function(){var t=new k,e=5;while(e--)t[g](e,e);return!t.has(-0)}));S||(x=e((function(e,r){l(e,x,t);var a=v(new k,e,x);return void 0!=r&&d(r,a[g],a,h),a})),x.prototype=y,y.constructor=x),(m||C)&&(w("delete"),w("has"),h&&w("get")),(C||_)&&w(g),b&&y.clear&&delete y.clear}return O[t]=x,a({global:!0,forced:x!=k},O),p(x,t),b||r.setStrong(x,t,h),x}},"792f":function(t,e,r){},a523:function(t,e,r){"use strict";r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85");var a=r("e8f2"),n=r("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,a=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(r||[])}),s)}})},e8f2:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("99af"),r("4de4"),r("a15b"),r("b64b"),r("2ca0"),r("498a");var a=r("2b0e");function n(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var a=r.props,n=r.data,i=r.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,i)}})}}}]);
//# sourceMappingURL=view-ReportPembukuanTahunan-vue.ae1da0bf.js.map