<template>
    <div class="max-w-screen-sm mx-auto mt-[10vh] text-center bg-white p-3 rounded-[1vmin] shadow-md">
        <home-content-vue/>
    </div>
</template>

<script>
    import HomeContentVue from '@/components/HomeContent.vue'
    export default {
        name : 'HomeView',
        components : {
            HomeContentVue
        },
        mounted(){
            document.title = this.$route.meta.title
        }
     
    }
</script>