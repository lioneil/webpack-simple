import {{uppercase name}} from '../src/Component.vue'

function install (Vue) {
  Vue.component('{{name}}', {{uppercase name}});
};

module.exports = install

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install)
}
