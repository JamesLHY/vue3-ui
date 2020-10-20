<template>
  <div class="layout">
    <TopNav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <router-link to="/Doc/Intro">
            <li>介绍</li>
          </router-link>
          <router-link to="/Doc/Install">
            <li>安装</li>
          </router-link>
          <router-link to="/Doc/GetStarted">
            <li>开始使用</li>
          </router-link>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <router-link to="/Doc/Switch">
            <li>Switch组件</li>
          </router-link>
          <router-link to="/Doc/Button">
            <li>Button组件</li>
          </router-link>
          <router-link to="/Doc/DiaLog">
            <li>Dialog组件</li>
          </router-link>
          <router-link to="/Doc/Tabs">
            <li>Tabs组件</li>
          </router-link>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";

export default {
  components: {
    TopNav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.router-link-active {
  position: relative;
  color: #1890ff;
}
.router-link-active::before {
  z-index: -1;
  position: fixed;
  display: block;
  clear: both;
  content: "";
  width: 100%;
  height: 2em;
  background: #e6f7ff;
  transform: translateY(-0.5em);
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    z-index: 10;
    flex-grow: 1;
    padding: 16px;
    background: #f5f5f5;
  }
}

aside {
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;

  > h2 {
    margin-bottom: 4px;
    padding: 0 0 0 10px;
  }

  > ol {
    a > li {
      margin: 10px 0;
      padding: 0 0 0 10px;
    }
  }

  main {
    overflow: auto;
  }
}
</style>