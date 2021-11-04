<template>
<div class="container mx-auto mt-5 grid-cols-6 bg-secondary">
    <NavBar/>
    <Header/>
    <Main/>
    <Categories/>
    <Tabs/>
    <TabsMainComponent/>
</div>
</template>

<script>
import NavBar from './components/nav-bar';
import Header from './components/the-header';
import Main   from './components/the-main';
import Categories from './components/the-categories';
import Tabs from './components/the-tabs-categories';
import TabsMainComponent from './components/the-main-text';

export default {
  name: 'App',
  components:{
    // eslint-disable-next-line no-mixed-spaces-and-tabs
  	NavBar,
    Header,
    Main,
    Categories,
    Tabs,
    TabsMainComponent
  }
}
</script>
