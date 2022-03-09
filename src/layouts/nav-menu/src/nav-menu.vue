<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="../../../assets/originjs.png" alt="logo" />
      <span v-if="!collapse" class="title">Originjs</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :router="true"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="'/' + subitem.path">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="'/' + item.path">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue';

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const userMenus = reactive([
      {
        type: 1,
        id: 1,
        name: 'VueEco',
        icon: '',
        path: '',
        children: [
          {
            type: 1,
            id: 2,
            name: 'mavon-editor',
            icon: '',
            path: 'VueEco/mavoneditor/mavoneditor'
          },
          {
            type: 1,
            id: 3,
            name: 'vue-grid-layout',
            icon: '',
            path: 'VueEco/vuegridlayout/vuegridlayout'
          },
          {
            type: 1,
            id: 4,
            name: 'swiper',
            icon: '',
            path: 'VueEco/swiper/swiper'
          },
          {
            type: 1,
            id: 4,
            name: 'draggable',
            icon: '',
            path: 'VueEco/draggable/draggable'
          }
        ]
      },
      {
        type: 1,
        id: 5,
        name: 'OriPlugins',
        icon: '',
        path: '',
        children: [
          {
            type: 1,
            id: 6,
            name: 'vite-plugin-federation',
            icon: '',
            path: 'OriPlugins/vite-plugin-federation/vite-plugin-federation'
          },
          {
            type: 1,
            id: 7,
            name: 'vite-plugin-global-style',
            icon: '',
            path: 'OriPlugins/vite-plugin-global-style/vite-plugin-global-style'
          },
          {
            type: 1,
            id: 8,
            name: 'vite-plugin-content',
            icon: '',
            path: 'OriPlugins/vite-plugin-content/vite-plugin-content'
          }
        ]
      },
      {
        type: 1,
        id: 10,
        name: '常用功能示例',
        icon: '',
        children: [
          {
            type: 1,
            id: 11,
            name: '用户管理',
            icon: '',
            path: 'bbb'
          }
        ]
      }
    ]);
    return { userMenus };
  }
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
