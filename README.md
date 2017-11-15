# vue-test测试项

> 需要服务器等的测试,偏向于用vue实现和结合

## better-scroll
专注于移动端滚动
## animate.css
与jquery的传统配合使用就是 $.(e).addclass()
  
与vue配合 直接在main.js中 import 'animate.css'即可
 
### vue transition组件使用
 
```html
    <transition enter-active-class="animated wobble" leave-active-class="animated wobble">
        <div class="aaa" v-show="show"></div>
      </transition>
```
### 原始书写方式
```css
    .aaa{
      width: 300px;
      height: 300px;
      background: red;
    }

    .fade-enter-active,.fade-leave-active{
      transition:all 1s ease;
    }
    .fade-enter,.fade-leave-active{
      width: 100px;
      height: 100px;
      opacity: 0;
    }

```
* .fade-enter-active,.fade-leave-active只用去管动画的过程
* .fade-enter,.fade-leave-active管的是开始状态和结束状态
* 元素本身就定义的视为中间状态

高版本vue中现在是6个类名 但使用还是一样
## toast 全局组件(插件)
install注册为全局的,有全局方法
```js
['bottom', 'center', 'top'].forEach((type) => {
        Vue.prototype.$toast[type] = tips => Vue.prototype.$toast(tips, type)
    })
```
## worker 
这种环境下使用,需要使用webpack的worker的loader
## proxy代理跨域
webpack中设置
## notification
```js
Notification.requestPermission(function (status) {
    new Notification('通知标题', { body: '这里是通知内容！' })
})
```
## zrn-utils
初步尝试,可以使用 npm发布成功,按需加载和全部加载都可以
