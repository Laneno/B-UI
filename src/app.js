import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);

new Vue({
    el:'#app',
    data:{
        loading1: false,    // 默认loading按钮
        loading2: false,    // 左loading按钮
        loading3: false     // 右loading按钮
    }
})
