<template>
  <div class="container">
    <nav class="navi">
      <router-link to="/" class="link">Home</router-link> |
      <router-link to="/portfolio" class="link">Portfolio</router-link> |
      <router-link to="/skill-sheet" class="link">Skill Sheet</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
.navi {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.link {
  margin: 0 0.5rem 0;
}
.link:last-child {
  margin-right: 0;
}
</style>
