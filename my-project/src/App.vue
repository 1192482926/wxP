<template>
  <div id="app">
    <img src="./assets/logo.png"> 
    <!--<div>
    	<router-link to="/">首页</router-link> | 
    	<router-link to="/hi">hi页面</router-link> | 
    	<router-link :to="{name:'hi1',params:{username:'jspang'}}">hi页面1</router-link> | 
    	<router-link to="/hi/hi2">hi页面2</router-link> | 
    </div>
    <p> {{$route.name}}</p> 
    <router-view></router-view>-->
    
    <!--<router-link to="/">首页</router-link>
    <router-link to="/hi">hi页面</router-link> 
    <router-view></router-view>
    <router-view name="left" style="float:left;border:1px solid red;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:green;height:300px;"></router-view>-->
  
    <router-link to="/">首页</router-link>
    <router-link :to="{path:'/params/id',query:{item:a}}">params 页面</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/111/YOU YOU YOU">goParams</router-link>
    
    <transition  name="fade" mode="out-in">
    	<router-view></router-view>
    </transition>
     
    <router-link to="/hi1">hi1</router-link>
    <router-link to="/jspang">jspang</router-link>
    
    <router-link to="/aa">error页面</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		a:{
  			mes:6666,
  			name:'qqqqqqqq'
  		}
  		
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
 
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

</style>
