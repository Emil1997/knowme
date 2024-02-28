<template>
    <div class="bg-white py-10 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Latest Posts</h2>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <Post 
                    v-for="post in dummyPosts"
                    :key="`post-${post.id}`"
                    :title="post.title" 
                    :description="post.description" 
                    :category="post.category" 
                    :date="post.date" 
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Post from './Post.vue';

const dummyPosts = reactive([
    { id: 1, title: "Post 1", description: "Lorem ipsum dolor sir amet", category: "Category 1", date: "1 March 2024" },
    { id: 2, title: "Post 2", description: "Lorem ipsum dolor sir amet", category: "Category 2", date: "2 March 2024" },
    { id: 3, title: "Post 3", description: "Lorem ipsum dolor sir amet", category: "Category 3", date: "3 March 2024" },
])
</script>