import {{uppercase name}} from '../src/Component.vue'

function install (Vue) {
  Vue.component('{{name}}', {{uppercase name}});
};

export default install

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install)
}
