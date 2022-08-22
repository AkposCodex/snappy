<script>
export default {
  props: ["title", "sub_title", "content", "image", "reversed", "inner_html"],
};
</script>
<template>
  <div class="text-pink p-6 flex items-center justify-between">
    <div class="w-1/2 p-3">
      <div>
        <h3 class="text-4xl font-bold p-3">{{ title }}</h3>
        <p class="text-2xl p-3">{{ sub_title }}</p>
        <p class="pl-3">{{ content }}</p>
      </div>
    </div>
    <img :src="image" alt="" class="rounded-[4rem] w-3/6 p-6 h-1/2" />
    <!-- <button
            class="p-2 w-52 text-white bottom-0 bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700">Get
            Started</button> -->
  </div>
</template>
