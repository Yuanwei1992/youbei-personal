webpackJsonp([47],{"3q8C":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("tLM0");a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,function(){return o[t]})}(n);var r=a("CMg0"),i=a.n(r),s=a("I3/C");var d=function(t){a("6/we")},u=a("VU/8")(i.a,s.a,!1,d,"data-v-17de512f",null);e.default=u.exports},"6/we":function(t,e){},CMg0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(a("ABCa")),n=u(a("WZtS")),r=u(a("Msp2")),i=u(a("63CM")),s=u(a("2sLL")),d=a("E3TW");function u(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{TransferDom:i.default},data:function(){return{menus:{menu1:"退出登录"},showMenus:!1,height:document.documentElement.clientHeight-220+"px",option:{penColor:"rgb(0, 0, 0)",backgroundColor:"rgb(255,255,255)"},idCardBackImg:"",idCardBackUrl:"",name:""}},created:function(){this.checkIOS()?this.getData():this.$router.push("/home")},components:{XHeader:o.default,PopupHeader:n.default,Actionsheet:r.default,XButton:s.default},methods:{getData:function(){var t=this,e=this,a=this.$qs.stringify({page:1});this.$axios({method:"post",url:d.httpUrl.userInformation,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:a}).then(function(a){console.log(a.data),200==a.data.errCode?t.name=a.data.retData.idcard_name:201==a.data.errCode?t.$vux.toast.show({type:"warn",text:a.data.retMsg}):401==a.data.errCode&&t.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){e.$router.push("/quick_login")}})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},onUpload:function(t){var e=this,a=this.$route.query.orderid;console.log(t);var o=new FileReader,n=t.target.files[0];o.readAsDataURL(n),o.onloadend=function(){e.upLoadVideo(o.result,a)}},upLoadVideo:function(t,e){var a=this,o=this;this.$vux.loading.show({text:"正在上传..."});var n=this.$qs.stringify({orderid:e,file:t});this.$axios({method:"post",url:d.httpUrl.setVideo,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:n}).then(function(t){console.log(t.data),a.$vux.loading.hide(),200==t.data.errCode?(a.$vux.toast.show({text:"上传成功",type:"success",onHide:function(){o.getWxPayData()}}),a.updatedata()):201==t.data.errCode?a.$vux.toast.show({text:t.data.retMsg,type:"warn",onHide:function(){}}):401==t.data.errCode&&a.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){o.$router.push("/quick_login")}})})},updatedata:function(){var t=this,e=this.$route.query.orderid,a=this,o=this.$qs.stringify({orderid:e,is_sign:1});this.$axios({method:"post",url:d.httpUrl.updatedata,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:o}).then(function(e){console.log(e.data),t.$vux.loading.hide(),200==e.data.errCode||(201==e.data.errCode?t.$vux.toast.show({text:e.data.retMsg,type:"warn",onHide:function(){}}):401==e.data.errCode&&t.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){a.$router.push("/quick_login")}}))}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},onCancel:function(){this.$router.push("/bill_list")},getWxPayData:function(){var t=this,e=this,a=this.$route.query.orderid;console.log(a);var o=this.$qs.stringify({is_apple:1,orderid:a});this.$axios({method:"post",url:"http://ybuser.youxia.com/Pay/wxPay",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:o}).then(function(a){201==a.data.errCode?t.$vux.toast.show({type:"warn",text:a.data.retMsg}):e.weixinPay(JSON.parse(a.data))})},weixinPay:function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.onBridgeReady(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.onBridgeReady(t)),document.attachEvent("onWeixinJSBridgeReady",this.onBridgeReady(t))):this.onBridgeReady(t)},onBridgeReady:function(t){var e=this.$route.query.step_type,a=this.$route.query.orderid,o=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?o.$vux.toast.show({text:"支付成功",type:"success",onHide:function(){"1"==e?o.$router.push({path:"/verify_step",query:{orderid:a}}):o.$router.push("/home")}}):"get_brand_wcpay_request:fail"==t.err_msg&&o.$vux.toast.show({text:"支付失败"+t.err_msg,type:"warn",onHide:function(){o.$router.push("/home")}})})},LoginOut:function(){var t=this;this.$axios({method:"post",url:d.httpUrl.loginOut,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){console.log(e.data),200==e.data.errCode?t.$router.push("/quick_login"):201==e.data.errCode&&t.$vux.toast.show({type:"warn",text:e.data.retMsg})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},goHome:function(){this.$router.push("/home")}}}},"I3/C":function(t,e,a){"use strict";var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("popup-header",{attrs:{"left-text":"游呗个人视频认证"}}),t._v(" "),a("div",{staticStyle:{margin:"20px"}},[a("div",{staticStyle:{background:"rgba(255,255,204,0.6)",border:"1px dashed #ffccd6",padding:"10px","border-radius":"6px"}},[t._m(0),t._v(" "),a("p",{staticStyle:{"font-weight":"bold",margin:"10px 0","font-size":"15px",color:"red"}},[t._v('"我叫'),a("span",[t._v(t._s(t.name))]),t._v('，我在深圳游侠公司购买旅游产品，我申请分期付款。我已阅读合同并签字。"')])]),t._v(" "),a("a",{staticClass:"a-upload",attrs:{href:"javascript:;"}},[a("input",{staticClass:"videoBtn",attrs:{type:"file",id:"video",accept:"video/*",capture:"user"},on:{change:t.onUpload}}),t._v("\n            开始录制视频\n        ")])]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("actionsheet",{attrs:{menus:t.menus,"show-cancel":""},on:{"on-click-menu-menu1":t.LoginOut},model:{value:t.showMenus,callback:function(e){t.showMenus=e},expression:"showMenus"}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{margin:"10px 0","font-size":"13px",opacity:"0.7"}},[e("span",{staticStyle:{color:"red"}},[this._v("提示：")]),this._v("请记住下面这段文字，确认记住后点击'开始录制视频'按钮，出示身份证正面，对着镜头录制下面这段文字 ——")])}]};e.a=o},tLM0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(a("ABCa")),n=u(a("WZtS")),r=u(a("Msp2")),i=u(a("63CM")),s=u(a("2sLL")),d=a("E3TW");function u(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{TransferDom:i.default},data:function(){return{menus:{menu1:"退出登录"},showMenus:!1,height:document.documentElement.clientHeight-220+"px",option:{penColor:"rgb(0, 0, 0)",backgroundColor:"rgb(255,255,255)"},idCardBackImg:"",idCardBackUrl:"",name:""}},created:function(){this.checkIOS()?this.getData():this.$router.push("/home")},components:{XHeader:o.default,PopupHeader:n.default,Actionsheet:r.default,XButton:s.default},methods:{getData:function(){var t=this,e=this,a=this.$qs.stringify({page:1});this.$axios({method:"post",url:d.httpUrl.userInformation,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:a}).then(function(a){console.log(a.data),200==a.data.errCode?t.name=a.data.retData.idcard_name:201==a.data.errCode?t.$vux.toast.show({type:"warn",text:a.data.retMsg}):401==a.data.errCode&&t.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){e.$router.push("/quick_login")}})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},onUpload:function(t){var e=this,a=this.$route.query.orderid;console.log(t);var o=new FileReader,n=t.target.files[0];o.readAsDataURL(n),o.onloadend=function(){e.upLoadVideo(o.result,a)}},upLoadVideo:function(t,e){var a=this,o=this;this.$vux.loading.show({text:"正在上传..."});var n=this.$qs.stringify({orderid:e,file:t});this.$axios({method:"post",url:d.httpUrl.setVideo,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:n}).then(function(t){console.log(t.data),a.$vux.loading.hide(),200==t.data.errCode?(a.$vux.toast.show({text:"上传成功",type:"success",onHide:function(){o.getWxPayData()}}),a.updatedata()):201==t.data.errCode?a.$vux.toast.show({text:t.data.retMsg,type:"warn",onHide:function(){}}):401==t.data.errCode&&a.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){o.$router.push("/quick_login")}})})},updatedata:function(){var t=this,e=this.$route.query.orderid,a=this,o=this.$qs.stringify({orderid:e,is_sign:1});this.$axios({method:"post",url:d.httpUrl.updatedata,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:o}).then(function(e){console.log(e.data),t.$vux.loading.hide(),200==e.data.errCode||(201==e.data.errCode?t.$vux.toast.show({text:e.data.retMsg,type:"warn",onHide:function(){}}):401==e.data.errCode&&t.$vux.alert.show({title:"错误提示",content:"未登录，请先登录",onHide:function(){a.$router.push("/quick_login")}}))}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},onCancel:function(){this.$router.push("/bill_list")},getWxPayData:function(){var t=this,e=this,a=this.$route.query.orderid;console.log(a);var o=this.$qs.stringify({is_apple:1,orderid:a});this.$axios({method:"post",url:"http://ybuser.youxia.com/Pay/wxPay",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},data:o}).then(function(a){201==a.data.errCode?t.$vux.toast.show({type:"warn",text:a.data.retMsg}):e.weixinPay(JSON.parse(a.data))})},weixinPay:function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",this.onBridgeReady(t),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",this.onBridgeReady(t)),document.attachEvent("onWeixinJSBridgeReady",this.onBridgeReady(t))):this.onBridgeReady(t)},onBridgeReady:function(t){var e=this.$route.query.step_type,a=this.$route.query.orderid,o=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?o.$vux.toast.show({text:"支付成功",type:"success",onHide:function(){"1"==e?o.$router.push({path:"/verify_step",query:{orderid:a}}):o.$router.push("/home")}}):"get_brand_wcpay_request:fail"==t.err_msg&&o.$vux.toast.show({text:"支付失败"+t.err_msg,type:"warn",onHide:function(){o.$router.push("/home")}})})},LoginOut:function(){var t=this;this.$axios({method:"post",url:d.httpUrl.loginOut,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){console.log(e.data),200==e.data.errCode?t.$router.push("/quick_login"):201==e.data.errCode&&t.$vux.toast.show({type:"warn",text:e.data.retMsg})}).catch(function(){this.$vux.toast.show({text:"网络异常，请稍后再试",type:"warn"})})},goHome:function(){this.$router.push("/home")}}}}});
//# sourceMappingURL=47.08534e34e107008c7898.js.map