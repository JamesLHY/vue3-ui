<template>
    <div class="layout">
        <TopNav :toggleMenuButtonVisible="true" class="nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/Doc/Intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/Install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/GetStarted">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/Doc/Switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/Button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/DiaLog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/Doc/Tabs">Tabs组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import TopNav from '../components/TopNav.vue'
    import {inject, Ref} from "vue";

    export default {
        components: {
            TopNav
        },
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible')
            return {asideVisible}
        }
    }
</script>
<style lang="scss" scoped>
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
            background: lightgreen;
        }
    }

    aside {
        background: lightblue;
        width: 150px;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
        height: 100%;

        > h2 {
            margin-bottom: 4px;
        }

        > ol {
            > li {
                padding: 4px 0;
            }
        }

        main {
            overflow: auto;
        }
    }
</style>