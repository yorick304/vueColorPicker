import colorPicker from '../component/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }
  Vue.component(colorPicker.name, colorPicker)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '0.0.1'

export {
  install,
  version,
  colorPicker
}
