<template>
    <div class="tag-position">


<div class="categories-line"></div>
<h3>Categories</h3>
    <div class="categories-lists">
        <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
        </ul>
    </div>
    <!-- Links -->
    <div class="links-line"></div>
    <h3>Links Header</h3>
    <div class="link-lists">
        <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
        </ul>
    </div>
    <!-- Tags -->
    <div class="tag-line"></div>
    <h3>Links Header</h3>
    <div class="tag-lists">
        <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
name: 'the-categories',
};
</script>

<style scoped lang=css>
    .categories-line::before{
        content: '---------------------------';
        color: #010101;
        display: inline-block;
    }
    .links-line::before{
        content: '---------------------------';
        color: #010101;
        display: inline-block;
    }
    .tag-line::before{
        content: '---------------------------';
        color: #010101;
        display: inline-block;
    }
    .tag-position{
        position: absolute;
        top: 98%;
        left: 75%;
    }
</style>
