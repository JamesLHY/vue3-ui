<template>
  <div class="topnavAndBanner">
    <TopNav />
    <div class="banner">
      <h1>UI</h1>
      <h2>UI detail</h2>
      <p class="actions">
        <a href>github</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue3" />
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-Typescript" />
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-LightBlub" />
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {
    TopNav,
  },
};
</script>
<style lang="scss" scoped>
.features {
  margin: 64px auto;
  width: 400px;
    @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
   >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }

}
.topnavAndBanner {
  background: linear-gradient(
    139deg,
    rgba(208, 243, 255, 1) 0%,
    rgba(136, 217, 246, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: rgb(2 115 109);
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;
    a {
      background: #348dfe;
      margin: 0 8px;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>