<template>
  <div class="projects-container">
    <toggle-menu>
      <template>
        <slot>
        </slot>
      </template>
    </toggle-menu>
    <div class="docs-container">
    </div>
  </div>
</template>

<script>
import toggleMenu from './menu.vue';

export default {
  name: 'projects',
  components: {
    toggleMenu,
  },
};
</script>
