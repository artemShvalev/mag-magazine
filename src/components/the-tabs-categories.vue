<template>
    <div class="tabs-top-lines"></div>
    <!--1-->
    <div>
        <button class="flex ml-4">Financial World</button>
        <h3 class="flex ml-4"></h3>
        <img class="mb-2 ml-4" src="#" alt="122x80">
        <p class="ml-4">
        </p>
        <span class="ml-4">Tag:<span class="text-red">Tag name</span></span>
    </div>
    <!--2-->
    <div class="mt-2 flex flex-col justify-center items-center sports">
        <button>Sports World</button>
        <h3>Sports</h3>
        <img src="#" alt="122x80">
        <p>
            bla-bla
        </p>
        <span>Tag:<span>Tag name</span></span>
    </div>
    <!--3-->
    <div class="flex flex-col justify-center items-center prime">
        <button>Prime World</button>
        <h3>Prime world</h3>
        <img src="#" alt="122x80">
        <p>
            bla-bla-bla
        </p>
        <span>Tag:<span>Tag name</span></span>
    </div>
    <!--4-->
    <div class="flex flex-col justify-center items-center music">
        <button class="flex">Music&Arts World</button>
        <h3></h3>
        <img src="#" alt="122x80">
        <p>o
        </p>
        <span>Tag:<span>Tag name</span></span>
    </div>
</template>

<script>
export default {
name: 'the-tabs-categories',
};
</script>

<style scoped lang=css>
    .tabs-top-lines::before{
        content: '------------------------------------------------------------------------------------------------------------------------------------------------------';
        color: #010101;
        display: inline-block;
    }
    .sports{
        position: absolute;
        right: 75%;
        top: 246%;
    }
    .prime{
        position: absolute;
        right: 65%;
        top: 246%;
    }
    .music{
        position: absolute;
        right: 55%;
        top: 246%;
    }
</style>
