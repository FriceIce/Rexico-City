import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import DatePicker from 'primevue/datepicker'

const app = createApp(App)
app.use(PrimeVue)
app.component('AppDatePicker', DatePicker)

app.use(createPinia())
app.use(router)

app.mount('#app')
