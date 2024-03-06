<template>
    <article class="flex flex-col items-start justify-between">
        <div class="relative w-full">
            <img v-if="thumbnailSrc" :src="thumbnailSrc" :alt="title" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
            <div v-if="!thumbnailSrc" role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-100 rounded-l">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="max-w-xl">
            <div class="mt-8 flex items-center text-xs">
                <time :datetime="date" class="text-gray-500">{{ date }}</time>
                <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ category }}</a>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        {{ title }}
                    </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {{ description }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        thumbnailSrc: String,
        title: String,
        description: String,
        date: String,
        category: String,
    })
</script>