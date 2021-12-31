<template>
    <v-app>
        <app-navigation/>

        <app-bar/>

        <app-content/>
        <app-footer/>
    </v-app>
</template>

<script>
    import Navigation from "./components/Navigation";
    import AppBar from "./components/AppBar";
    import Content from "./components/Content";
    import Footer from "./components/Footer";

    export default {
        components: {
            appNavigation: Navigation,
            appBar: AppBar,
            appContent: Content,
            appFooter: Footer
        }
    }
</script>
