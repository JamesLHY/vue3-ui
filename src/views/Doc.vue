<template>
  <div class="layout">
    <TopNav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content" v-on:click="hidePanel">
      <aside id="myPanel" v-if="asideVisible">
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
    const hidePanel = function (event) {
      var sp = document.getElementById("myPanel");

      if (sp) {
        if (!sp.contains(event.target)) {
          //这句是说如果我们点击到了id为myPanel以外的区域
          this.asideVisible = false;
          
        }
      }
    };
    return { asideVisible,hidePanel };
  },
};
</script>
<style lang="scss" scoped>

.router-link-active {
  position: relative;
  color: #1890ff;
  > li {
    background: #f0faff;
  }
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
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
@keyframes slidein {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}
aside {
  background: #f0f0f0;
  border-right: 1px solid #c7c9cc;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 20;
  animation: slidein 1s;
  > h2 {
    margin-bottom: 4px;
    padding: 0 0 0 10px;
  }

  > ol {
    a > li {
      margin: 10px 0;
      padding: 5px 0 5px 10px;
    }
  }

  main {
    overflow: auto;
  }
}
</style>