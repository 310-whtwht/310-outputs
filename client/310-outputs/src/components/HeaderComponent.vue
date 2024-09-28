<template>
  <header>
    <div class="header-wrapper">
      <div class="header-logo">
        <RouterLink to="/"><img src="/src/assets/img/310outputs.svg" alt="logo" /></RouterLink>
      </div>
      <nav class="header-nav">
        <div class="header-nav-router">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="header-nav-router">
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style>
* {
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
}
.header-nav-router a {
  color: #73bf8e;
}
.header-nav-router a:hover {
  color: #c0e6cd;
  transform: scale(110%);
  transition: 0.5s;
}
.header-logo {
  height: 35px;
  /* width: 100%; */
  display: block;
  /* background-color: #73bf8e; */
}
.header-logo img {
  height: 100%;
  width: 100%;
}
.header-logo img:hover {
  transform: scale(102%);
  transition: 0.5s;
}

.header-wrapper {
  position: fixed; /*fixedで固定*/
  right: 0;
  left: 0;
  top: 0;
  background-color: #2d2d2d;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  /* drop-shadow: 0 10px 100px #eeeeee; */
}
.header-nav {
  display: flex;
  gap: 15px;
  font-size: 16px;
}
</style>

