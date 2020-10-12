<template>
    <div>
        tabsDemo的文档
    </div>
    <h1>示例一</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航一">tab1</Tab>
        <Tab title="导航二">tab2</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'

export default {
components:{Tabs,Tab},
setup(){
    const x = ref('导航一')
    return{x}
}
}
</script>

