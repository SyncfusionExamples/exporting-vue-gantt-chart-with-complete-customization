import { createApp } from 'vue'
import App from './App.vue'
import {registerLicense} from '@syncfusion/ej2-base';
createApp(App).mount('#app')
registerLicense("Your license key")
