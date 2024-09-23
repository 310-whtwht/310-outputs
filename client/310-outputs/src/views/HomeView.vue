<script setup lang="ts">
</script>

<template>
  <main>
    
    <h1 class="nice-meet-you">Nice meeting you!<span class="border"></span><span class="border2"></span></h1>
    
    <p>はじめまして。310です。</p>
    <p>株式会社iRupという会社でWeb開発をしています。</p>
    <p>得意な技術スタックはVue3+Node.jsです。</p>
    <p>このサイトもVue3で作成しました。</p>
    <p><br></p>
    <p>学習の備忘録として置いておきます。</p>
    <p>よかったら覗いていってください。</p>
  </main>
</template>

<style>
  .nice-meet-you{
    position: relative;
    margin-bottom: 48px;
    color: #C78E78;
  }
  .border{
    position: absolute;
    bottom: -6px;
    left: 0px;
    width: 160px;
    height: 1px;
    background-color: #C78E78;
  }
  .border2{
    position: absolute;
    bottom: -6px;
    left: 214px;
    width: 36px;
    height: 1px;
    background-color: #C78E78;
  }
  p + p {
    margin-top: 16px;
  }

</style>