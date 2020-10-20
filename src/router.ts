import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
const history = createWebHashHistory()
export const router = createRouter(
    {
        history: history,
        routes: [
            { path: '/', component: Home },
            {
                path: '/doc', component: Doc, children: [
                    { path: '', redirect:'/doc/intro' },
                    { path: 'install', component: Install},
                    { path: 'getStarted', component: GetStarted },
                    { path: 'intro', component: Intro },
                    { path: 'switch', component: SwitchDemo },
                    { path: 'button', component: ButtonDemo },
                    { path: 'dialog', component: DialogDemo },
                    { path: 'tabs', component: TabsDemo }
                ]
            }
        ]
    }
)
router.afterEach(() => {
    console.log("路由切换了");
}); 