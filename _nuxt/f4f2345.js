(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{242:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3f2c2002",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n.r(e);n(244);var r=n(19),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex flex-col items-center bgd font-regular"},[n("div",{staticClass:"flex flex-row items-center colorful-border p-8"},[n("div",{staticClass:"p-2"},[n("p",{staticClass:"text-gray-300 font-normal"},[t._v("\n        Mari is a brazilian "),n("span",{staticClass:"underline text-white"},[t._v("developer")]),t._v(", she loves the magic of building applications. (´･ᴗ･ ` )\n      ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(243).default})},244:function(t,e,n){"use strict";n(242)},245:function(t,e,n){var r=n(38)((function(i){return i[1]}));r.push([t.i,"*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box\n}\n.colorful-border{\n  border:1px solid #b48ead\n}",""]),t.exports=r},250:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("bad8e090",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n(250)},271:function(t,e,n){var r=n(38)((function(i){return i[1]}));r.push([t.i,"background{\n  background:#202020\n}\n.font-colorful{\n  color:#b48ead\n}",""]),t.exports=r},288:function(t,e,n){"use strict";n.r(e);var r=n(6),l=(n(40),{components:{CustomHeader:n(243).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).only(["title","description","slug"]).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(270),n(19)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-11 lg:mx-48 lg:h-full"},[n("custom-header"),t._v(" "),n("div",{staticClass:"mt-20"},[t._m(0),t._v(" "),n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("div",{staticClass:"flex flex-col border-solid border border-white-400 p-8 mb-5"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("h2",{staticClass:"font-bold font-colorful"},[t._v("\n              "+t._s(article.title)+"\n            ")])]),t._v(" "),n("p",{staticClass:"font-regular text-gray-300 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])],1)])})),0)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"font-bold text-white mb-10"},[n("span",{staticClass:"underline"},[t._v("Recent posts")])])}],!1,null,null,null);e.default=component.exports}}]);