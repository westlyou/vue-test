/* eslint-disable */
const Toast = {};
Toast.install = function (Vue, options) {
    const opt = {
        defaultType: 'bottom',   // 默认显示位置
        duration: '2500'         // 持续时间
    }
    for (const property in options) {
        opt[property] = options[property];  // 使用 options 的配置
    }
    Vue.prototype.$toast = (tips, type) => {
        if (type) {
            opt.defaultType = type;         // 如果有传type，位置则设为该type
        }
        if (document.getElementsByClassName('vue-toast').length) {
            // 如果toast还在，则不再执行
            return;
        }
        const toastTpl = Vue.extend({
            template: `<div class="vue-toast toast-${opt.defaultType}">${tips}</div>`
        });
        const tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl);
        setTimeout(() => {
            document.body.removeChild(tpl);
        }, opt.duration)
    }
    ['bottom', 'center', 'top'].forEach((type) => {
        Vue.prototype.$toast[type] = tips => Vue.prototype.$toast(tips, type)
    })
}
export default Toast;
