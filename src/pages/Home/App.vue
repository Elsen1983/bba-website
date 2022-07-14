<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>Hello on Home Page</h1>
    <BannerComponent></BannerComponent>
    <NavComponent></NavComponent>
    <AddComponent></AddComponent>
    <TileMenuComponent></TileMenuComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import BannerComponent from '../../components/main/BannerComponent.vue'
import NavComponent from '../../components/main/NavComponent.vue'
import AddComponent from '../../components/main/AddComponent.vue'
import TileMenuComponent from '../../components/home/TileMenuComponent.vue'
import FooterComponent from '../../components/main/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    BannerComponent,
    NavComponent,
    AddComponent,
    TileMenuComponent,
    FooterComponent
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
