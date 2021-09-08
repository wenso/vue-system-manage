<template>
  <!--内容区-->
  <div class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  computed:{
    cachedViews(){

    },
    key(){
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.main{ }

</style>