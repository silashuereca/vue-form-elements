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
  margin-top: 100px;
  height: 200px;
  width: 100%;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: var(--white)
}
</style>
