webpackJsonp([23],{"4P9b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("ABCa")),a=i(n("WZtS")),u=i(n("Msp2")),s=(i(n("63CM")),i(n("EmH9"))),r=i(n("2sLL")),c=n("E3TW");function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{menus:{menu1:"退出登录"},showMenus:!1,checked:!1,status_name:"",orderid:""}},created:function(){},components:{XHeader:o.default,PopupHeader:a.default,Actionsheet:u.default,CheckIcon:s.default,XButton:r.default},methods:{submit:function(){},LoginOut:function(){var t=this;this.$axios({method:"post",url:c.httpUrl.loginOut,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){200==e.data.errCode?t.$router.push("/quick_login"):201==e.data.errCode&&t.$vux.toast.show({type:"warn",text:e.data.retMsg})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},goHome:function(){this.$router.push("/home")}}}},GDdq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("YGy4");n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var u=n("4P9b"),s=n.n(u),r=n("UxuC");var c=function(t){n("m94a")},i=n("VU/8")(s.a,r.a,!1,c,"data-v-ae07bec4",null);e.default=i.exports},UxuC:function(t,e,n){"use strict";var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("popup-header",{attrs:{"left-text":"芝麻信用"}}),t._v(" "),n("div",{staticStyle:{margin:"20px 10px",color:"#656565"}},[t._m(0),t._v(" "),n("check-icon",{staticClass:"checkicon",attrs:{value:t.checked},on:{"update:value":function(e){t.checked=e}}},[t._v("允许游侠游呗访问您的芝麻信用")]),t._v(" "),n("x-button",{staticClass:"subBtn",attrs:{type:"primary",disabled:!this.checked},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("提 交")])],1),t._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("actionsheet",{attrs:{menus:t.menus,"show-cancel":""},on:{"on-click-menu-menu1":t.LoginOut},model:{value:t.showMenus,callback:function(e){t.showMenus=e},expression:"showMenus"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zmImg"},[e("img",{staticClass:"zmIcon",attrs:{src:n("nE7J")}}),this._v(" "),e("p",{staticStyle:{"font-size":"25px","font-weight":"100"}},[this._v("芝麻信用")])])}]};e.a=o},YGy4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("ABCa")),a=i(n("WZtS")),u=i(n("Msp2")),s=(i(n("63CM")),i(n("EmH9"))),r=i(n("2sLL")),c=n("E3TW");function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{menus:{menu1:"退出登录"},showMenus:!1,checked:!1,status_name:"",orderid:""}},created:function(){},components:{XHeader:o.default,PopupHeader:a.default,Actionsheet:u.default,CheckIcon:s.default,XButton:r.default},methods:{submit:function(){},LoginOut:function(){var t=this;this.$axios({method:"post",url:c.httpUrl.loginOut,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){200==e.data.errCode?t.$router.push("/quick_login"):201==e.data.errCode&&t.$vux.toast.show({type:"warn",text:e.data.retMsg})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},goHome:function(){this.$router.push("/home")}}}},m94a:function(t,e){},nE7J:function(t,e,n){t.exports=n.p+"static/img/zm_icon.6f82525.png"}});
//# sourceMappingURL=23.70ecdf93bf0856f352f0.js.map