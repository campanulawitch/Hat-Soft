import { CodeTabs } from "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/component_notes/new_compass/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/component_notes/new_compass/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Butterfly/Desktop/帽子社/Hat-Soft/component_notes/new_compass/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};