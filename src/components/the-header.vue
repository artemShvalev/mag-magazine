<template>
    <div class="container">
        <h1 class="font-navBar text-9xl text-center">MAG MAGAZINE</h1>
        <h3 class="text-center font-navBar">ALL THE LATEST NEWS & INFORMATION IN THE WORLD</h3>
    </div>
    <div class="lines-top"></div> <!-- lines top-->
    <div class="subtitle">
        <ul class="flex ml-5 border-2">
            <li class="font-navBar mr-5 hover:bg-danger rounded cursor-pointer hover:opacity-80">HOME PAGE</li>
            <li class="font-navBar  mr-5 hover:bg-danger rounded cursor-pointer hover:opacity-80">STYLE DEMO</li>
            <li class="font-navBar mr-5 hover:bg-danger rounded cursor-pointer hover:opacity-80">FULL WIDTH</li>
            <li class="font-navBar mr-5 hover:bg-danger rounded cursor-pointer hover:opacity-80">DROP DOWN</li>
            <li class="font-navBar mr-5 hover:bg-danger rounded cursor-pointer hover:opacity-80">LINK TEXT</li>
        </ul>
    </div>
    <div class="lines-bottom"></div> <!-- lines bottom -->
</template>

<script>
export default {
name: 'the-header.vue',
};
</script>

<style scoped lang=css>
    .lines-top::before{
        content: '------------------------------------------------------------------------------------';
        color: #010101;
        display: inline-block;
    }
    .lines-bottom::before{
        content: '------------------------------------------------------------------------------------';
        color: #010101;
        display: inline-block;
    }
</style>
