webpackJsonp([1],{NHnr:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("VCXJ"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"left-nav"},[o("ul",[o("li",[o("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),o("div",[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),o("div",[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),o("div",[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),o("div",[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-liebiao"}),t._v(" "),o("div",[t._v("统计")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),o("div",[t._v("设置")])])])])}]},n={name:"app",components:{LeftNav:o("Mw9A")({},e,!1,function(t){o("xVEp")},null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("left-nav"),this._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]},l=o("Mw9A")(n,i,!1,function(t){o("PNPs")},null,null).exports,c=o("zO6J"),d=o("2sCs"),r=o.n(d),u={name:"Pos",mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},created:function(){var t=this;r.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(s){t.oftenGoods=s.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),r.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(s){t.type0Goods=s.data[0],t.type1Goods=s.data[1],t.type2Goods=s.data[2],t.type3Goods=s.data[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},methods:{addOrderList:function(t){this.totalMoney=0,this.totalCount=0;for(var s=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId==t.goodsId&&(s=!0);if(s){this.tableData.filter(function(s){return s.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(s){return s.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalMoney=0,this.totalCount=0,this.tableData&&this.tableData.forEach(function(s){t.totalCount+=s.count,t.totalMoney=t.totalMoney+s.price*s.count})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkOut:function(){0!=this.totalCount?(this.tableData=[],this.totalMoney=0,this.totalCount=0,this.$message({message:"结账成功，感谢你又为店里出了一份力。",type:"success"})):this.$message.error("没商品不能结账，请选择商品。")}},data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}}},v={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"pos"},[o("el-row",[o("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"数量"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.delSingleGoods(s.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{staticClass:"totalDiv"},[o("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"  "),o("small",[t._v("金额：")]),t._v(t._s(t.totalMoney)+"元\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"div-btn"},[o("el-button",{attrs:{type:"warning",size:"small"}},[t._v("挂单")]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(s){t.delAllGoods()}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"success",size:"small"},on:{click:t.checkOut}},[t._v("结账")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}},[t._v("挂单")]),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")])],1)],1),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"often-price"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"小吃"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]},p=o("Mw9A")(u,v,!1,function(t){o("eKj1")},"data-v-6e07c90a",null).exports;a.default.use(c.a);var _=new c.a({routes:[{path:"/",name:"Pos",component:p}]}),f=o("Zjva"),g=o.n(f);o("SXr1");a.default.config.productionTip=!1,a.default.use(g.a),new a.default({el:"#app",router:_,template:"<App/>",components:{App:l}})},PNPs:function(t,s){},SXr1:function(t,s){},eKj1:function(t,s){},xVEp:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.37c07cf15ce81752c4b0.js.map