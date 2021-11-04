<template>
<div class="mt-10 text-lines"></div>
    <div v-for="t in text" :key='t.id' class="flex flex-row flex-grow justify-between items-center">
        <h3 class="font-navBar text-500 text-normal text-yellow ml-4">{{t.title}}</h3>
        <p class="">{{t.textStr}}</p>
    </div>
</template>

<script>
export default {
name: 'the-main-text',
  data(){
	return{
        text:[
          {// eslint-disable-next-line no-mixed-spaces-and-tabs
            title: 'Title',
            textStr: "hello i'm text"
          },
          {// eslint-disable-next-line no-mixed-spaces-and-tabs
            title: 'Title',
            textStr: "hello i'm text"
          },
          {// eslint-disable-next-line no-mixed-spaces-and-tabs
            title: 'Title',
            textStr: "hello i'm text"
          },
          {// eslint-disable-next-line no-mixed-spaces-and-tabs
            title: 'Title',
            textStr: "hello i'm text"
          },
          {// eslint-disable-next-line no-mixed-spaces-and-tabs
            title: 'Title',
            textStr: "hello i'm text"
          },

        ]
    }
  }
};
</script>

<style scoped lang=css>
    .text-lines::before{
        content: '------------------------------------------------------------------------------------------------------------------------------------------------------';
        color: #010101;
        display: inline-block;
    }
</style>
