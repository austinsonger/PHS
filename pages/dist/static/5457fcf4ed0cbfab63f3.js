(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{235:function(t,n,e){"use strict";e.r(n);e(16);var r=e(2),o=e(217),c=e(225),d={layout:"incidents",components:{IncidentsHistory:e(224).a,IncidentsPaginator:c.a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){var e,r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=new o.a(e.$axios,e.i18n.locale),t.next=4,r.getIncidentsHistory();case 4:return c=t.sent,t.abrupt("return",{count:c.count,periods:c.periods,pageInfo:{page:c.page,pageSize:c.page_size,totalPages:c.total_pages}});case 6:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),head:function(){var t=this.$t.bind(this);return{title:t("incidents.incidents-history"),meta:[{hid:"description",name:"description",content:t("incidents.incidents-history-description")}]}}},h=e(4),component=Object(h.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this.count>0?n("div",[n("incidents-history",{attrs:{periods:this.periods}}),this._v(" "),n("incidents-paginator",{attrs:{info:this.pageInfo}})],1):n("div",{staticClass:"text-center"},[n("h2",[this._v(this._s(this.$t("incidents.no-incidents")))])])])},[],!1,null,null,null);n.default=component.exports}}]);