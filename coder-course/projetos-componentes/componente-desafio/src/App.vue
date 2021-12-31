<template>
    <v-app>
        <Navigation/>
        <AppBar/>
        <Content/>
        <Footer/>
    </v-app>
</template>

<script>
    import Navigation from "./components/Navigation";
    import AppBar from "./components/AppBar";
    import Content from "./components/Content";
    import Footer from "./components/Footer";

    export default {
        components: {
            Navigation,
            AppBar,
            Content,
            Footer
        }
    }
</script>
