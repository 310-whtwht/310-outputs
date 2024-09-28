<template>
  <markdownContent />
</template>

<script setup>
import markdown from '../assets/markdown.md';
// import { marked } from "marked";
import { ref, shallowRef } from 'vue';
const markdownContent = shallowRef(markdown);
console.log("aaa")

// const markedContent = mounted(() => marked.parse(markdownContent));
</script>

<style>
  .markdown-wrapper{
    background-color: aqua;
    width: 1000px;
    height: 800px;
  }
</style>


<!-- 
<template>
  <div class="markdown-wrapper" v-html="htmlContent"></div>
</template>

<script setup>
import markdown from '../assets/markdown.md'; // Markdownファイルをインポート
import { computed } from 'vue';
import { marked } from 'marked';

// MarkdownをHTMLに変換
const htmlContent = computed(() => marked(markdown));
</script>

<style>
  .markdown-wrapper {
    background-color: aqua;
    width: 1000px;
    height: 800px;
  }
</style> -->
