// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
import VueMui from "./entry";

// import SButton from './button'
// import SFCButton from './SFCButton.vue'
// import JSXButton from './JSXButton'


createApp({
  template: `
      <div>
        <SButton color="blue" icon="search">蓝色按钮</SButton>
        <SButton color="green" icon="edit">绿色按钮</SButton>
        <SButton color="gray" icon="check" >灰色按钮</SButton>
        <SButton color="yellow" icon="message" >黄色按钮</SButton>
        <SButton color="red" icon="delete">红色按钮</SButton>
        <SButton color="pink" icon="share">红色按钮</SButton>
      </div>
  `
})
  .use(VueMui)
  .mount("#app");