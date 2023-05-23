<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" class="font-bold text-lime-600">Nuxt LOGO</NuxtLink>
      </nav>
    </header>

    <div>
      <slot />
    </div>
    <footer class="bg-blue-400 my-2">
      <ul class="flex gap-5">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  color: green;
}
</style>
