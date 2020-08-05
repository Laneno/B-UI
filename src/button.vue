<template>
    <button class="b-button">
        <slot></slot>
    </button>
</template>
<script>
    export default {
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
