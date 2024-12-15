import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import DatePicker from 'primevue/datepicker'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'




const queryClient = new QueryClient()
const app = createApp(App)

app.use(VueQueryPlugin, {
  queryClient,
})
app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.component('AppDatePicker', DatePicker)


app.mount('#app')
