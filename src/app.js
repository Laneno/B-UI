import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);
Vue.component('b-button-group', ButtonGroup);

new Vue({
    el:'#app',
    data:{
        loading1: false,    // 默认loading按钮
        loading2: false,    // 左loading按钮
        loading3: false     // 右loading按钮
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect;
{
    // console.log(Button)                  // 打印 Button 组件：是一个对象
    // 动态生成一个按钮
    const Constructor = Vue.extend(Button); // 将Button组件变成一个构造函数(Button是一个VueComponent函数)
    // 通过 VueComponent 函数构造一个button
    const button = new Constructor({        // 通过new button的构造函数,创建一个button实例
        propsData: {
            icon: 'settings'
        }
    });
    button.$mount('#test')                  // 将button实例挂载到test上
    let useElement = button.$el.querySelector('use')    // 在button元素中找use元素
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')    // 拿到useElement中xlink:href元
    expect(href).to.eq('settings')                      // 断言: 我主观认为useElement中xlink:href元素值为settings
}

