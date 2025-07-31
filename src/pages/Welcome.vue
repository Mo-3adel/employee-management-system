
<script setup>
import bg from '@/assets/backdrop1.jpg';
import bg2 from '@/assets/backdrop2.jpg';


</script>


<template>
    <div class="flex items-center w-full h-full min-h-screen from-black to-blue-950 bg-gradient-to-br justify-between"> ">
        <div class="p-8 flex flex-col items-center justify-center rounded-lg shadow-md w-1/3 max-w-md border-2 border-blue-800 shadow-blue-200 m-px hover:shadow-2xl">
            <h1 class="text-2xl text-blue-600 font-bold mb-4">Your all in one management system </h1>
            <p class="mb-4 text-white">Boost your productivity. Start using our app today.</p>
            <div class="flex flex-row gap-4">
                <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>  
                <router-link to="/signup" class="text-blue-600 hover:underline ">signup</router-link>  
            </div>
        </div>
        <div class="w-6/12 h-screen flex flex-col m-px align-items-center justify-center backdrop-blur-md">
            <img :src="bg" alt="Background Image" class="w-12/13 h-12/13 object-cover opacity-50" />
        </div>

    </div>
</template>
