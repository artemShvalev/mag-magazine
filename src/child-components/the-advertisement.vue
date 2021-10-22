<template>
    <div class="adver-position">
    <div class="adv-line"></div>
<div>
    <img src="#" alt="160x600">
</div>
    </div>
</template>

<script>
export default {
name: 'the-advertisement',
};
</script>

<style scoped lang=css>
    .adv-line::before{
        content: '---------------------------';
        color: #010101;
        display: inline-block;
    }
    .adver-position{
        position: absolute;
        top: 98%;
        left: 63%;
        right: 0;
    }
</style>
