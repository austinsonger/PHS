(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{210:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return c});const r=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let n;t&&(n=e.reduce((e,n)=>(e[n]=t(`statuses.${n}`),e),{}));return{keys:e,i18nKeys:n,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},c=(t,e)=>{const n=r(t);return{title:n.i18nKeys[e],icon:n.icons[e]}}},211:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},212:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},213:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},214:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},215:function(t,e,n){"use strict";var r=n(47);n.n(r).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},216:function(t,e,n){"use strict";n(35);var r={props:{date:{type:String,required:!0},includeUTC:{type:Boolean,default:!0},format:{default:"short",validator:function(t){return-1!==["short","long","month"].indexOf(t)}}},computed:{label:function(){var t=this.$t.bind(this),e=this.$statusfy.dates.parse(this.date),n=this.includeUTC?t("dates.formats.".concat(this.format)):t("dates.formats.".concat(this.format)).replace(" UTC","");return this.$statusfy.dates.format(e,n,this.$i18n.locale)}}},c=n(4),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])},[],!1,null,null,null);e.a=component.exports},217:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(path,t={}){const e=Object.keys(t);let n,r=`${this.basePath}${path}`;if(this.isStatic)r="/static/content"+r,r+=(n=e.map(e=>`${e}-${t[e]}`).join("."))?`.${n}`:"",r+=`.${this.lang}.json`;else{const n=e.map(e=>`${e}=${t[e]}`).join("&");r+=n?`?${n}`:""}return r}async getSystems(){return await this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return await this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return await this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return await this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return await this.axios.$get(this.buildUrl("/incidents/timeline"))}async getScheduled(){return await this.axios.$get(this.buildUrl("/scheduled"))}}},218:function(t,e,n){"use strict";var r=n(10),c=(n(219),n(210)),l=(n(211),n(212),n(213),n(214),n(215),n(47));n.n(l).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var o={components:{NiceDate:n(216).a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},scheduled:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return-1!==[0,3,4].indexOf(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(c.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return Object(r.a)({value:this.incident.resolved},Object(c.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var n=this.$refs.content.querySelectorAll(".update-block"),r=this.$refs.content.querySelectorAll("a.external"),c=this.$refs["external-link-icon"].$el;n.forEach(function(n,i){var r=n.querySelectorAll(".update-block-date")[0],c=t.$statusfy.dates.parse(r.innerHTML);r.innerHTML=t.$statusfy.dates.format(c,e("dates.formats.long"),t.$i18n.locale)}),r.forEach(function(t,i){t.appendChild(c)})}},methods:{getScheduledEndDate:function(){return this.$statusfy.dates.parse(this.incident.scheduled).add(this.incident.duration,"m").toISOString()}}},d=n(4),component=Object(d.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incident",class:t.incident.severity+(t.resolved.value?" resolved":" unresolved")+(t.incident.scheduled?" scheduled":"")},[n("div",{staticClass:"incident-header",class:"level-"+t.level},[t.incident.scheduled?n("div",{staticClass:"incident-title"},[[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])]],2):n("div",{staticClass:"incident-title"},[n("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?n("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,function(e){return n("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])}),0)]),t._v(" "),n("div",{staticClass:"incident-subtitle"},[t.incident.scheduled?t._e():n("div",{staticClass:"status"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),t.incident.scheduled?n("div",[n("nice-date",{attrs:{date:t.incident.scheduled,"include-u-t-c":!1,format:"long"}}),t._v("\n       - \n      "),n("nice-date",{attrs:{date:t.getScheduledEndDate(),"include-u-t-c":!1,format:"long"}}),t._v("\n      (UTC)\n    ")],1):n("div",[n("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),n("div",{staticClass:"incident-body"},[t.summary?n("div",[t.incident.description?n("div",[t._v("\n        "+t._s(t.incident.description)+"\n      ")]):t._e()]):n("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),n("div",{staticClass:"hidden"},[n("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])},[],!1,null,null,null);e.a=component.exports},219:function(t,e,n){"use strict";var r=n(5),c=n(22),l=n(29),o=n(126),d=n(66),h=n(12),f=n(67).f,v=n(89).f,m=n(13).f,y=n(220).trim,_=r.Number,C=_,$=_.prototype,w="Number"==l(n(88)($)),x="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,c,l=(e=x?e.trim():y(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+e}for(var code,o=e.slice(2),i=0,h=o.length;i<h;i++)if((code=o.charCodeAt(i))<48||code>c)return NaN;return parseInt(o,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(w?h(function(){$.valueOf.call(n)}):"Number"!=l(n))?o(new C(S(e)),n,_):S(e)};for(var k,I=n(8)?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;I.length>j;j++)c(C,k=I[j])&&!c(_,k)&&m(_,k,v(C,k));_.prototype=$,$.constructor=_,n(14)(r,"Number",_)}},220:function(t,e,n){var r=n(7),c=n(28),l=n(12),o=n(221),d="["+o+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var c={},d=l(function(){return!!o[t]()||"​"!="​"[t]()}),h=c[t]=d?e(m):o[t];n&&(c[n]=h),r(r.P+r.F*d,"String",c)},m=v.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},221:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},234:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),c=(n(36),n(68),n(69),n(15),n(30),n(210)),l=n(217),o=n(218),d=n(216),h={components:{Incident:o.a,NiceDate:d.a},props:{data:{type:Object,required:!0}},computed:{days:function(){var t=this.data.days.slice(0),e=!0,n=!1,r=void 0;try{for(var c,l=t[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var o=c.value;o.status=this.getDayStatus(o.incidents)}}catch(t){n=!0,r=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw r}}return t}},methods:{getDayStatus:function(t){var e=this.$t.bind(this),n=Object(c.b)(e),r="operational",l=!0,o=!1,d=void 0;try{for(var h,f=n.keys[Symbol.iterator]();!(l=(h=f.next()).done);l=!0){var v=h.value,m=!0,y=!1,_=void 0;try{for(var C,$=t[Symbol.iterator]();!(m=(C=$.next()).done);m=!0){if(C.value.severity===v){r=v;break}}}catch(t){y=!0,_=t}finally{try{m||null==$.return||$.return()}finally{if(y)throw _}}}}catch(t){o=!0,d=t}finally{try{l||null==f.return||f.return()}finally{if(o)throw d}}return{key:r,title:n.i18nKeys[r],icon:n.icons[r]}}}},f=n(4),v=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline-container"},[n("h2",[t._v(t._s(t.$t("incidents.latest-incidents")))]),t._v(" "),n("ul",{staticClass:"timeline"},[t.data.daysSinceLatest>0?n("li",{staticClass:"timeline-incident"},[n("h3",{staticClass:"timeline-incident-title"},[t._v("\n        "+t._s(t.$tc("incidents.incidents-history-days-since-latest",t.data.daysSinceLatest,{days:t.data.daysSinceLatest}))+"\n      ")])]):t._e(),t._v(" "),t._l(t.days,function(e){return n("li",{key:e.date,staticClass:"timeline-incident",class:e.status.key},[n("h3",{staticClass:"timeline-incident-title"},[n("nice-date",{attrs:{date:e.date}})],1),t._v(" "),n("div",{staticClass:"timeline-incident-body"},[0===e.incidents.length?n("div",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("incidents.no-incidents"))+"\n        ")]):t._e(),t._v(" "),t._l(e.incidents,function(t){return n("incident",{key:t.id,attrs:{incident:t}})})],2)])})],2),t._v(" "),n("div",{staticClass:"text-center"},[n("nuxt-link",{staticClass:"btn mb-4",attrs:{to:t.localePath("history")}},[t._v("\n      "+t._s(t.$t("incidents.incidents-history"))+"\n    ")])],1)])},[],!1,null,null,null).exports,m=(n(23),n(47));n.n(m).a.register({"fortawesome/question-circle-regular":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/>'}});n(211),n(212),n(213),n(214),n(215);var y={components:{"v-popover":function(){return n.e(18).then(n.bind(null,233)).then(function(t){return t.VPopover})}},props:{system:{type:Object,required:!0}},computed:{description:function(){var t=this.$t.bind(this),e=this.$te.bind(this),n="systems.items.".concat(this.system.name,".description");return e(n)?t(n):null},status:function(){var t=this.$t.bind(this);return Object(c.a)(t,this.system.status)}}},_={components:{System:Object(f.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"system flex flex-row justify-between",class:t.system.status},[n("div",{staticClass:"system-title"},[t._v("\n    "+t._s(t.$t("systems.items."+t.system.name+".title"))+"\n\n    "),t.description?n("v-popover",{staticClass:"hidden sm:inline",attrs:{trigger:"hover focus",placement:"top","popover-class":"popover"}},[n("span",{staticClass:"system-title-info"},[n("svgicon",{staticClass:"ml-1 svg-inline--fa fa-w-16",attrs:{name:"fortawesome/question-circle-regular"}})],1),t._v(" "),n("template",{slot:"popover"},[t._v("\n        "+t._s(t.description)+"\n      ")])],2):t._e()],1),t._v(" "),n("div",{staticClass:"system-status"},[n("span",{staticClass:"hidden sm:inline"},[t._v(t._s(t.status.title))]),t._v(" "),n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)])},[],!1,null,null,null).exports},props:{systems:{type:Array,require:!0,default:function(){return[]}}}},C=Object(f.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"systems-container flex flex-col"},this._l(this.systems,function(t){return e("system",{key:t.name,attrs:{system:t}})}),1)])},[],!1,null,null,null).exports,$={components:{Incident:o.a},props:{data:{type:Object,required:!0}}},w={layout:"home",components:{IncidentsTimeline:v,SystemStatus:C,Scheduled:Object(f.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data&&t.data.count>0?n("div",{staticClass:"scheduled-container"},[n("h2",[t._v(t._s(t.$t("incidents.scheduled")))]),t._v(" "),n("div",{staticClass:"incidents-container"},[n("ul",{staticClass:"list-reset"},t._l(t.data.incidents,function(t){return n("li",{key:t.id},[n("incident",{attrs:{incident:t,scheduled:!0,level:3}})],1)}),0)])]):t._e()},[],!1,null,null,null).exports},computed:{status:function(){var t=this,e=this.$t.bind(this),n=Object(c.b)(e),r="operational",l=!0,o=!1,d=void 0;try{for(var h,f=function(){var e=h.value;if(t.systems.find(function(t){return t.status===e}))return r=e,"break"},v=n.keys[Symbol.iterator]();!(l=(h=v.next()).done);l=!0){if("break"===f())break}}catch(t){o=!0,d=t}finally{try{l||null==v.return||v.return()}finally{if(o)throw d}}return{title:n.i18nKeys[r],icon:n.icons[r],key:r}}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,o,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,r=new l.a(n.$axios,n.i18n.locale),t.next=4,r.getSystems();case 4:return c=t.sent,t.next=7,r.getIncidentsTimeline();case 7:return o=t.sent,t.next=10,r.getScheduled();case 10:return d=t.sent,t.abrupt("return",{systems:c,timelineData:o,scheduled:d});case 12:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),head:function(){var t=this.$t.bind(this);return{title:t("incidents.current-status"),meta:[{hid:"description",name:"description",content:t("incidents.current-status-description")}]}}},x=Object(f.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},["aboveGlobalStatus"===t.$statusfy.theme.scheduled.position?n("scheduled",{attrs:{data:t.scheduled}}):t._e(),t._v(" "),n("div",{staticClass:"global-status flex justify-center",class:t.status.key},[n("span",[t._v(t._s(t.status.title))]),t._v(" "),n("span",{staticClass:"global-status-icon"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)]),t._v(" "),"aboveSystems"===t.$statusfy.theme.scheduled.position?n("scheduled",{attrs:{data:t.scheduled}}):t._e(),t._v(" "),n("system-status",{attrs:{systems:t.systems}}),t._v(" "),"belowSystems"===t.$statusfy.theme.scheduled.position?n("scheduled",{attrs:{data:t.scheduled}}):t._e(),t._v(" "),n("incidents-timeline",{attrs:{data:t.timelineData}})],1)},[],!1,null,null,null);e.default=x.exports}}]);