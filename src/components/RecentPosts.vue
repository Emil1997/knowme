<template>
    <div class="bg-white py-10 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Latest Posts</h2>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <Post 
                    v-for="post in posts"
                    :key="`post-${post.id}`"
                    :title="post.title" 
                    :description="post.desc" 
                    :category="post.category.name" 
                    :date="post.date" 
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Post from './Post.vue';

const posts = reactive([])

const fetchLatestPosts = async() => {
    try {
        const response = await fetch(`http://localhost:3000/api/posts/latest`, { method: "GET" });
        const data = await response.json();
        posts.push(...data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

onMounted(() => {
    fetchLatestPosts();
})
</script>