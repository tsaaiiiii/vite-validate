import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import fields from './fields/zh_TW.json'
import router from './router'
import App from './App.vue'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({
    zh_TW: {
      fields,
      messages: zhTW.messages
    }
  }),
  validateOnInput: true
})
setLocale('zh_TW')
const app = createApp(App)
defineRule('phoneStartingWith09', (value) => {
  if (!value.startsWith('09')) {
    return '電話號碼必須以 09 開頭'
  }
  return true
})
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.component('DefineRule', defineRule)
app.use(router)

app.mount('#app')
