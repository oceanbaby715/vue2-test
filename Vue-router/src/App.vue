<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> 
    <router-link to="/params/15/terry website">Params</router-link> 
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/goParams/15123/terry123 website123">goParams</router-link>
    <router-link to="/hi1">hi1</router-link>
    <router-link to="/terry">terry</router-link>
    <router-link to="/121">我是瞎写的会跳到404页面</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  float:left;width:50%;height:300px;background:red
}
.right{
  float:left;width:50%;height:300px;background:green
}
.fade-enter{
  opacity: 0
}
.fade-enter-active{
  transition: opacity 0.5s
}
.fade-leave{
  opacity: 1
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s
}
</style>
