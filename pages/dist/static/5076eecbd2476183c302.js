(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return c});const r=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let n;t&&(n=e.reduce((e,n)=>(e[n]=t(`statuses.${n}`),e),{}));return{keys:e,i18nKeys:n,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},c=(t,e)=>{const n=r(t);return{title:n.i18nKeys[e],icon:n.icons[e]}}},211:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},212:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},213:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},214:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},215:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},216:function(t,e,n){"use strict";n(35);var r={props:{date:{type:String,required:!0},includeUTC:{type:Boolean,default:!0},format:{default:"short",validator:function(t){return-1!==["short","long","month"].indexOf(t)}}},computed:{label:function(){var t=this.$t.bind(this),e=this.$statusfy.dates.parse(this.date),n=this.includeUTC?t("dates.formats.".concat(this.format)):t("dates.formats.".concat(this.format)).replace(" UTC","");return this.$statusfy.dates.format(e,n,this.$i18n.locale)}}},c=n(4),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])},[],!1,null,null,null);e.a=component.exports},217:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(path,t={}){const e=Object.keys(t);let n,r=`${this.basePath}${path}`;if(this.isStatic)r="/static/content"+r,r+=(n=e.map(e=>`${e}-${t[e]}`).join("."))?`.${n}`:"",r+=`.${this.lang}.json`;else{const n=e.map(e=>`${e}=${t[e]}`).join("&");r+=n?`?${n}`:""}return r}async getSystems(){return await this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return await this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return await this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return await this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return await this.axios.$get(this.buildUrl("/incidents/timeline"))}async getScheduled(){return await this.axios.$get(this.buildUrl("/scheduled"))}}},218:function(t,e,n){"use strict";var r=n(10),c=(n(219),n(210)),o=(n(211),n(212),n(213),n(214),n(215),n(47));n.n(o).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var l={components:{NiceDate:n(216).a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},scheduled:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return-1!==[0,3,4].indexOf(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(c.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return Object(r.a)({value:this.incident.resolved},Object(c.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var n=this.$refs.content.querySelectorAll(".update-block"),r=this.$refs.content.querySelectorAll("a.external"),c=this.$refs["external-link-icon"].$el;n.forEach(function(n,i){var r=n.querySelectorAll(".update-block-date")[0],c=t.$statusfy.dates.parse(r.innerHTML);r.innerHTML=t.$statusfy.dates.format(c,e("dates.formats.long"),t.$i18n.locale)}),r.forEach(function(t,i){t.appendChild(c)})}},methods:{getScheduledEndDate:function(){return this.$statusfy.dates.parse(this.incident.scheduled).add(this.incident.duration,"m").toISOString()}}},d=n(4),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incident",class:t.incident.severity+(t.resolved.value?" resolved":" unresolved")+(t.incident.scheduled?" scheduled":"")},[n("div",{staticClass:"incident-header",class:"level-"+t.level},[t.incident.scheduled?n("div",{staticClass:"incident-title"},[[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])]],2):n("div",{staticClass:"incident-title"},[n("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?n("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,function(e){return n("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])}),0)]),t._v(" "),n("div",{staticClass:"incident-subtitle"},[t.incident.scheduled?t._e():n("div",{staticClass:"status"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),t.incident.scheduled?n("div",[n("nice-date",{attrs:{date:t.incident.scheduled,"include-u-t-c":!1,format:"long"}}),t._v("\n       - \n      "),n("nice-date",{attrs:{date:t.getScheduledEndDate(),"include-u-t-c":!1,format:"long"}}),t._v("\n      (UTC)\n    ")],1):n("div",[n("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),n("div",{staticClass:"incident-body"},[t.summary?n("div",[t.incident.description?n("div",[t._v("\n        "+t._s(t.incident.description)+"\n      ")]):t._e()]):n("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),n("div",{staticClass:"hidden"},[n("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])},[],!1,null,null,null);e.a=component.exports},219:function(t,e,n){"use strict";var r=n(5),c=n(22),o=n(29),l=n(126),d=n(66),h=n(12),f=n(67).f,v=n(89).f,m=n(13).f,_=n(220).trim,y=r.Number,w=y,C=y.prototype,$="Number"==o(n(88)(C)),x="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,c,o=(e=x?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,h=l.length;i<h;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&($?h(function(){C.valueOf.call(n)}):"Number"!=o(n))?l(new w(k(e)),n,y):k(e)};for(var I,S=n(8)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;S.length>N;N++)c(w,I=S[N])&&!c(y,I)&&m(y,I,v(w,I));y.prototype=C,C.constructor=y,n(14)(r,"Number",y)}},220:function(t,e,n){var r=n(7),c=n(28),o=n(12),l=n(221),d="["+l+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var c={},d=o(function(){return!!l[t]()||"​"!="​"[t]()}),h=c[t]=d?e(m):l[t];n&&(c[n]=h),r(r.P+r.F*d,"String",c)},m=v.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},221:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("2d172f50",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("36dede1a",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var r={components:{Incident:n(218).a},props:{incidents:{type:Array,required:!0}},data:function(){return{collapsed:!0}}},c=(n(226),n(4)),o={components:{IncidentsCollapse:Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"list-reset",class:{collapse:t.collapsed&&t.incidents.length>3}},[t._l(t.incidents,function(t){return n("li",{key:t.id},[n("incident",{attrs:{incident:t,summary:!0,level:3}})],1)}),t._v(" "),t.incidents.length>3?n("div",{staticClass:"btn",on:{click:function(e){t.collapsed=!t.collapsed}}},[t.collapsed?[t._v("\n        + "+t._s(t.$t("incidents.collapse.show",{count:t.incidents.length}))+"\n      ")]:[t._v("\n        - "+t._s(t.$t("incidents.collapse.hide"))+"\n      ")]],2):t._e()],2)])},[],!1,null,"e40dfb28",null).exports,NiceDate:n(216).a},props:{periods:{type:Array,required:!0}}},l=(n(228),Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incidents-container"},t._l(t.periods,function(e){return n("div",{key:e.date,staticClass:"incidents-period"},[n("div",[n("h2",{staticClass:"incidents-period-title"},[n("nice-date",{attrs:{date:e.id,format:"month"}})],1),t._v(" "),0===e.incidents.length?n("div",{staticClass:"incidents-message"},[t._v("\n        "+t._s(t.$t("incidents.no-incidents"))+"\n      ")]):t._e(),t._v(" "),n("incidents-collapse",{attrs:{incidents:e.incidents}})],1)])}),0)},[],!1,null,"6c61429d",null));e.a=l.exports},225:function(t,e,n){"use strict";var r=n(47),c=n.n(r);c.a.register({"fortawesome/chevron-right-solid":{width:16,height:16,viewBox:"0 0 320 512",data:'<path pid="0" _fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>'}}),c.a.register({"fortawesome/chevron-left-solid":{width:16,height:16,viewBox:"0 0 320 512",data:'<path pid="0" _fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>'}});var o={props:{info:{type:Object,required:!0,default:function(){return{page:1,pageSize:10,totalPages:1}}}},computed:{previousLink:function(){return 2===this.info.page?this.localePath("history"):this.localePath({name:"history-page",params:{page:this.info.page-1}})}}},l=n(4),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.info.totalPages>1?n("div",{staticClass:"text-center pb-4 mb-2"},[1!==t.info.page?n("nuxt-link",{staticClass:"btn mx-2",attrs:{to:t.previousLink}},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16 mr-1",attrs:{name:"fortawesome/chevron-left-solid"}}),t._v("\n    "+t._s(t.$t("incidents.paginator.previous"))+"\n  ")],1):t._e(),t._v(" "),t.info.page!==t.info.totalPages?n("nuxt-link",{staticClass:"btn mx-2",attrs:{to:t.localePath({name:"history-page",params:{page:t.info.page+1}})}},[t._v("\n    "+t._s(t.$t("incidents.paginator.next"))+"\n    "),n("svgicon",{staticClass:"svg-inline--fa fa-w-16 mr-1",attrs:{name:"fortawesome/chevron-right-solid"}})],1):t._e()],1):t._e()},[],!1,null,null,null);e.a=component.exports},226:function(t,e,n){"use strict";var r=n(222);n.n(r).a},227:function(t,e,n){(t.exports=n(48)(!1)).push([t.i,".collapse li[data-v-e40dfb28]:nth-child(n+4){display:none}.btn[data-v-e40dfb28]{margin-top:1rem;margin-bottom:1rem;text-align:center;cursor:pointer;width:100%}",""])},228:function(t,e,n){"use strict";var r=n(223);n.n(r).a},229:function(t,e,n){(t.exports=n(48)(!1)).push([t.i,".incidents-container[data-v-6c61429d]{margin-top:1rem;margin-bottom:1rem}.incidents-period[data-v-6c61429d]{padding-top:1rem;padding-bottom:1rem;position:relative}.incidents-period-title[data-v-6c61429d]{font-size:1.25rem;padding-top:.25rem;font-weight:500;margin-bottom:1rem}.incidents-message[data-v-6c61429d]{color:var(--grey-darker)}",""])}}]);