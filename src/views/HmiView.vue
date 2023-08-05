<template>
    <div class="max-w-screen-sm mx-auto bg-white rounded-[1vmin] flex flex-col justify-center shadow-md mt-[10vh]">
        <hmi-vue/>
    </div>
</template>

<script>
    import HmiVue from '../components/HMI.vue'
   
    export default {
        name : 'HmiView',
        components : {
            HmiVue
        },
       
    }
</script>