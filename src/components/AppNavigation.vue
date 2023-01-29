<template>
  <div>
    <div
      class="nav-container"
      :class="{ open: isNavigationOpen }"
    >
      <nav ref="nav">
        <b-nav
          vertical
          class="mb-4"
        >
          <template v-for="(navItem, index) in navigationItems">
            <!-- Navigation items with no children -->
            <b-nav-item
              v-if="!navItem.children"
              :key="index"
              :to="navItem.route"
              :data-test-id="`nav-item-${navItem.id}`"
            >
              <component :is="navItem.icon" />
              {{ navItem.label }}
            </b-nav-item>

            <!-- Navigation items with children -->
            <li
              v-else
              :key="index"
              class="nav-item"
            >
              <b-button
                v-b-toggle="`${navItem.id}`"
                variant="link"
                :data-test-id="`nav-button-${navItem.id}`"
              >
                <component :is="navItem.icon" />
                {{ navItem.label }}
                <icon-chevron-up class="icon-expand" />
              </b-button>
              <b-collapse
                :id="navItem.id"
                tag="ul"
                class="nav-item__nav"
              >
                <li
                  class="nav-item"
                  v-for="(subNavItem, i) of navItem.children"
                  :key="i"
                >
                  <router-link
                    :to="subNavItem.route"
                    :data-test-id="`nav-item-${subNavItem.id}`"
                    class="nav-link"
                  >
                    {{ subNavItem.label }}
                  </router-link>
                </li>
              </b-collapse>
            </li>
          </template>
        </b-nav>
      </nav>
    </div>
    <transition name="fade">
      <div
        v-if="isNavigationOpen"
        id="nav-overlay"
        class="nav-overlay"
      />
    </transition>
  </div>
</template>

<script>
import IconDashboard from '@carbon/icons-vue/es/dashboard/16';
import IconGaneti from '@carbon/icons-vue/es/virtual-machine/16';
import IconGluster from '@carbon/icons-vue/es/cloud-app/16';
import IconOpenflow from '@carbon/icons-vue/es/data-vis--1/16';
import IconChevronUp from '@carbon/icons-vue/es/chevron--up/16';

export default {
  name: 'AppNavigation',
  components: {
    IconDashboard,
    IconGaneti,
    IconGluster,
    IconOpenflow,
    IconChevronUp
  },
  data() {
    return {
      isNavigationOpen: false,
      navigationItems: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          route: '/main',
          icon: 'IconDashboard'
        },
        {
          id: 'ganeti',
          label: 'Ganeti',
          icon: 'IconGaneti',
          children: [
            {
              id: 'cluster',
              label: 'Cluster',
              route: '/ganeti/cluster'
            },
            {
              id: 'groups',
              label: 'Groups',
              route: '/ganeti/groups'
            },
            {
              id: 'nodes',
              label: 'Nodes',
              route: '/ganeti/nodes'
            },
            {
              id: 'instances',
              label: 'Instances',
              route: '/ganeti/instances'
            },
            {
              id: 'jobs',
              label: 'Jobs',
              route: '/ganeti/jobs'
            }
          ]
        },
        {
          id: 'gluster',
          label: 'Gluster',
          icon: 'IconGluster',
          children: [
            {
              id: 'peer-status',
              label: 'Peer status',
              route: '/gluster/peer-status'
            },
            {
              id: 'bricks-status',
              label: 'Bricks status',
              route: '/gluster/bricks-status'
            },
            {
              id: 'volumes',
              label: 'Volumes',
              route: '/gluster/volumes'
            }
          ]
        },
        {
          id: 'openflow',
          label: 'OVS / openflow',
          icon: 'IconOpenflow',
          children: [
            {
              id: 'switches',
              label: 'Switches',
              route: '/openflow/switches'
            },
            {
              id: 'networks',
              label: 'Networks',
              route: '/openflow/networks'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
svg {
  fill: currentColor;
  height: 1.2rem;
  width: 1.2rem;
  margin-left: 0 !important; //!important overriding button specificity
  vertical-align: text-bottom;

  &:not(.icon-expand) {
    margin-right: $spacer;
  }
}

.nav {
  padding-top: calc($spacer / 4);
  @include media-breakpoint-up($responsive-layout-bp) {
    padding-top: $spacer;
  }
}

.nav-item__nav {
  list-style: none;
  padding-left: 0;
  margin-left: 0;

  .nav-item {
    outline: none;
  }

  .nav-link {
    padding-left: $spacer * 4;
    outline: none;

    &:not(.nav-link--current) {
      font-weight: normal;
    }
  }
}

.btn-link {
  display: inline-block;
  width: 100%;
  text-align: left;
  text-decoration: none !important;
  border-radius: 0;

  &.collapsed {
    .icon-expand {
      transform: rotate(180deg);
    }
  }
}

.icon-expand {
  float: right;
  margin-top: calc($spacer / 4);
}

.btn-link,
.nav-link {
  position: relative;
  font-weight: $headings-font-weight;
  padding-left: $spacer; // defining consistent padding for links and buttons
  padding-right: $spacer;
  color: $gray-800;

  &:hover {
    background-color: theme-color-level(dark, -10.5);
    color: theme-color('dark');
  }

  &:focus {
    background-color: theme-color-level(light, 0);
    box-shadow: inset 0 0 0 2px theme-color('primary');
    color: theme-color('dark');
    outline: 0;
  }

  &:active {
    background-color: theme-color('secondary');
    color: $white;
  }
}

.nav-link--current {
  font-weight: $headings-font-weight;
  background-color: $gray-800;
  color: $gray-100;
  cursor: default;
  box-shadow: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background-color: theme-color('primary');
  }

  &:hover,
  &:focus {
    background-color: theme-color('secondary');
    color: theme-color('light');
  }
}

.nav-container {
  position: fixed;
  width: $navigation-width;
  top: $header-height;
  bottom: 0;
  left: 0;
  z-index: $zindex-fixed;
  overflow-y: auto;
  background-color: theme-color('light');
  transform: translateX(-$navigation-width);
  transition: transform $exit-easing--productive $duration--moderate-02;
  border-right: 1px solid theme-color-level('light', 2.85);

  @include media-breakpoint-down(md) {
    z-index: $zindex-fixed + 2;
  }

  &.open,
  &:focus-within {
    transform: translateX(0);
    transition-timing-function: $entrance-easing--productive;
  }

  @include media-breakpoint-up($responsive-layout-bp) {
    transition-duration: $duration--fast-01;
    transform: translateX(0);
  }
}

.nav-overlay {
  position: fixed;
  top: $header-height;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $zindex-fixed + 1;
  background-color: $black;
  opacity: 0.5;

  &.fade-enter-active {
    transition: opacity $duration--moderate-02 $entrance-easing--productive;
  }

  &.fade-leave-active {
    transition: opacity $duration--fast-02 $exit-easing--productive;
  }

  &.fade-enter, // Remove this vue2 based only class when switching to vue3
  &.fade-enter-from, // This is vue3 based only class modified from 'fade-enter'
  &.fade-leave-to {
    opacity: 0;
  }

  @include media-breakpoint-up($responsive-layout-bp) {
    display: none;
  }
}
</style>
