<template>
	<div class="pos">
		<el-row>
			<el-col :span='7' class='pos-order' id='order-list'>
				<el-tabs>
					<el-tab-pane label="点餐">
						<el-table :data="tableData" style="width: 100%">
							<el-table-column prop="goodsName" label="商品名称"></el-table-column>
							<el-table-column prop="count" label="数量"></el-table-column>
							<el-table-column prop="price" label="金额"></el-table-column>
							<el-table-column label="操作" fixed="right">
								<template slot-scope="scope">
									<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
									<el-button @click="addOrderList(scope.row)" type="text" size="small">增加</el-button>
								</template>
							</el-table-column>
						</el-table>
						<div class="totalDiv">
							<small>数量：</small>{{totalCount}}  <small>金额：</small>{{totalMoney}}元
						</div>
						<div class="div-btn">
							<el-button type="warning" size="small">挂单</el-button>
							<el-button type="danger" size="small" @click="delAllGoods()">删除</el-button>
							<el-button type="success" size="small" @click="checkOut">结账</el-button>
						</div>
					</el-tab-pane>
					<el-tab-pane label="挂单">挂单</el-tab-pane>
					<el-tab-pane label="外卖">外卖</el-tab-pane>
				</el-tabs>
			</el-col>
			<el-col :span='17'>
				<div class="often-goods">
					<div class="title">常用商品</div>
					<div class="often-goods-list">
						<ul>
							<li v-for="item in oftenGoods" @click="addOrderList(item)">
								<span>{{ item.goodsName }}</span>
								<span class="often-price">￥{{ item.price }}元</span>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="goods-type">
					<el-tabs>
						<el-tab-pane label="汉堡">
							<div>
								<ul class="cookList">
									<li v-for="goods in type0Goods" @click="addOrderList(goods)">
									    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
									    <span class="foodName">{{goods.goodsName}}</span>
									    <span class="foodPrice">￥{{goods.price}}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="小吃">
							<div>
								<ul class="cookList">
									<li v-for="goods in type1Goods" @click="addOrderList(goods)">
									    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
									    <span class="foodName">{{goods.goodsName}}</span>
									    <span class="foodPrice">￥{{goods.price}}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="饮料">
							<div>
								<ul class="cookList">
									<li v-for="goods in type2Goods" @click="addOrderList(goods)">
									    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
									    <span class="foodName">{{goods.goodsName}}</span>
									    <span class="foodPrice">￥{{goods.price}}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
						<el-tab-pane label="套餐">
							<div>
								<ul class="cookList">
									<li v-for="goods in type3Goods" @click="addOrderList(goods)">
									    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
									    <span class="foodName">{{goods.goodsName}}</span>
									    <span class="foodPrice">￥{{goods.price}}元</span>
									</li>
								</ul>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>

			</el-col>
		</el-row>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Pos',
    mounted:function(){
  		var orderHeight=document.body.clientHeight;
  		document.getElementById('order-list').style.height=orderHeight+"px";
  	},
  	created:function(){
    	axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    	.then(response=>{
    		this.oftenGoods=response.data;
    	})
    	.catch(error=>{
    		console.log(error);
    		alert("网络错误，不能访问")
    	})

    	axios.get('http://jspang.com/DemoApi/typeGoods.php')
    	.then(response=>{
    		this.type0Goods=response.data[0];
         	this.type1Goods=response.data[1];
         	this.type2Goods=response.data[2];
         	this.type3Goods=response.data[3];
    	})
    	.catch(error=>{
    		console.log(error);
    		alert("网络错误，不能访问")
    	})
    },
    methods:{
    	addOrderList(goods){
    		this.totalMoney=0;
    		this.totalCount=0;

    		//是否存在
    		let isHave=false;
    		for (let i = 0; i<this.tableData.length; i++) {
    			if (this.tableData[i].goodsId==goods.goodsId) {
    				isHave=true;
    			}
    		}
    		if (isHave) {
    			let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId)
    			arr[0].count++;
    		}else{
    			let newGoods={
    				goodsId:goods.goodsId,
    				goodsName:goods.goodsName,
    				price:goods.price,
    				count:1
    			}
    			this.tableData.push(newGoods)
    		}
    		this.getAllMoney();
    	},
    	//列表删除单个商品
    	delSingleGoods(goods){
    		this.tableData=this.tableData.filter(o=>o.goodsId!=goods.goodsId)
    		this.getAllMoney();
    	},
    	//计算总金额和价格
    	getAllMoney(){
    		this.totalMoney=0;
    		this.totalCount=0;
    		if (this.tableData) {
	    		this.tableData.forEach((element)=>{
	    			this.totalCount+=element.count;
	    			this.totalMoney=this.totalMoney+(element.price*element.count)
	    		})
    		}
    	},
    	//删除所有商品
    	delAllGoods(){
    		this.tableData=[];
    		this.totalCount=0;
    		this.totalMoney=0;
    	},
    	//结账
    	checkOut(){
    		if (this.totalCount!=0) {
    			this.tableData=[];
    			this.totalMoney=0;
    			this.totalCount=0;
    			this.$message({
    				message:'结账成功，感谢你又为店里出了一份力。',
    				type:'success'
    			})
    		}else{
    			this.$message.error("没商品不能结账，请选择商品。")
    		}
    	}
    },
    data() {
      return {
        tableData:[],
        oftenGoods:[],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        totalMoney:0,
        totalCount:0
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pos-order{
		background-color: #F9FAFC;
		border-right: 1px solid #ddd;

	}
	.div-btn{
		margin-top: 10px
	}
	.title{
		height: 20px;
		border-bottom: 1px solid #ddd;
		background-color: #F9FAFC;
		padding: 10px;
		text-align: left;
	}
	.often-goods-list ul li{
		list-style-type: none;
		float: left;
		border:1px solid #ddd;
		padding:10px;
		margin: 10px;
		background-color: #fff;
	}
	.often-price{
		color:#58BFFF
	}
	.goods-type{
		clear: both;
	}
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
       cursor: pointer;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 14px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   .totalDiv{
   	background-color: white;
   	padding: 10px;
   	border-bottom: 1px solid #ddd;
   }
</style>
