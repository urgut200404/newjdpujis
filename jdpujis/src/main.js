import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './Router/index.js' 
import { create, NButton } from 'naive-ui';
const naive = create({
  components: [NButton],
});
const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')


