<template>
  <div class="app-container">
    <app-header class="app-header" />
    <app-navigation class="app-navigation" />
    <page-container class="app-content">
      <router-view
        ref="routerView"
        :key="routerKey"
      />
    </page-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppNavigation from '@/components/AppNavigation.vue';
import PageContainer from '@/components/Global/PageContainer.vue';

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppNavigation,
    PageContainer
  },
  data() {
    return {
      routerKey: 0
    };
  },
  mounted() {
    this.$root.$on('refresh-application', () => this.refresh());
  },
  methods: {
    refresh() {
      // Changing the component :key value will trigger
      // a component re-rendering and 'refresh' the view
      this.routerKey += 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'header'
    'content';

  @include media-breakpoint-up($responsive-layout-bp) {
    grid-template-columns: $navigation-width 1fr;
    grid-template-areas:
      'header header'
      'navigation content';
  }
}

.app-header {
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: $zindex-fixed + 1;
}

.app-navigation {
  grid-area: navigation;
}

.app-content {
  grid-area: content;
  background-color: $white;
}
</style>
