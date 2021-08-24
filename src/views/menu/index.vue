<template>
  <!--菜单列表-->
  <TableBox v-if="isChild">
    <span>菜单列表</span>
  </TableBox>
  <!--二级路由容器-->
  <router-view v-else />
</template>
<script>
import TableBox from "@comps/templates/TableBox.vue";
import ChildMixin from "@comps/mixins/ChildMixin";
export default {
  name: "MenuManage",
  components: {TableBox},
  mixins:[ChildMixin],
  data() {
    return {

    };
  },
  methods:{

  }
}
</script>

<style scoped>

</style>