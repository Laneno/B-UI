<template>
    <button class="b-button">
        <!--v-if="icon" 当不传 icon 时，icon 的占位消失-->
        <svg v-if="icon" class="icon">
            <!--:是 v-bind 缩写，动态赋值-->
            <!--`#i-${icon}` 是一个js 字符串-->
            <!--${data}是一个模板字符串的插值，来自props-->
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>
    </button>
</template>
<script>
    // props:组件通信
    export default {
        props:['icon']
    }
</script>
<style lang="scss">
    .b-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;         /*按钮左侧空一个字，不在按钮上加宽度width*/
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        /*&表示当前的选择器*/
        &:hover{            /*hover悬停时，边框变深*/
            border-color: var(--border-color-hover);
        }
        &:active{           /*active点击时，背景变深*/
            background-color: var(--button-active-bg);
        }
        &:focus{            /*去掉按钮点击的蓝色边框*/
            outline: none;
        }
    }
</style>
