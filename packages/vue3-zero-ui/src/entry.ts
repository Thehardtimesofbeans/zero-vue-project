import { App } from "vue";
import MyButton from "./button/Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
import ZeroLoading from "./loading/Loading";

import "uno.css";

// 导出单独组件
export { MyButton, SFCButton, JSXButton, ZeroLoading };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(ZeroLoading.name, ZeroLoading);
  },
};
