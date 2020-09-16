<template>
  <div id="app">
    <router-view/>
    <footer>
      <p>Created by Silas Huereca</p>
    </footer>
  </div>
</template>

<style scoped>

footer {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: var(--dark)
}
</style>
