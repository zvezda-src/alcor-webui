import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginLayout from '@/layouts/LoginLayout.vue';
import Login from '@/views/Login/LoginApp.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import Dashboard from '@/views/Dashboard/DashboardApp.vue';
import Cluster from '@/views/Ganeti/Cluster/ClusterApp.vue';
import Groups from '@/views/Ganeti/Groups/GroupsApp.vue';
import Nodes from '@/views/Ganeti/Nodes/NodesApp.vue';
import Instances from '@/views/Ganeti/Instances/InstancesApp.vue';
import Jobs from '@/views/Ganeti/Jobs/JobsApp.vue';
import PeerStatus from '@/views/Gluster/PeerStatus/PeerStatus.vue';
import BricksStatus from '@/views/Gluster/BricksStatus/BricksStatus.vue';
import Volumes from '@/views/Gluster/Volumes/VolumesApp.vue';
import Switches from '@/views/Openflow/Switches/SwitchesApp.vue';
import Networks from '@/views/Openflow/Networks/NetworksApp.vue';
import i18n from '@/i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: Login
      }
    ]
  },
  {
    path: '/main',
    component: AppLayout,
    children: [
      {
        path: '/main',
        name: 'dashboard',
        meta: {
          title: i18n.t('appPageTitle.dashboard')
        },
        component: Dashboard
      },
      {
        path: '/ganeti/cluster',
        name: 'cluster',
        meta: {
          title: i18n.t('appPageTitle.cluster')
        },
        component: Cluster
      },
      {
        path: '/ganeti/groups',
        name: 'groups',
        meta: {
          title: i18n.t('appPageTitle.groups')
        },
        component: Groups
      },
      {
        path: '/ganeti/nodes',
        name: 'nodes',
        meta: {
          title: i18n.t('appPageTitle.nodes')
        },
        component: Nodes
      },
      {
        path: '/ganeti/instances',
        name: 'instances',
        meta: {
          title: i18n.t('appPageTitle.instances')
        },
        component: Instances
      },
      {
        path: '/ganeti/jobs',
        name: 'jobs',
        meta: {
          title: i18n.t('appPageTitle.jobs')
        },
        component: Jobs
      },
      {
        path: '/gluster/peer-status',
        name: 'peer-status',
        meta: {
          title: i18n.t('appPageTitle.peerStatus')
        },
        component: PeerStatus
      },
      {
        path: '/gluster/bricks-status',
        name: 'bricks-status',
        meta: {
          title: i18n.t('appPageTitle.bricksStatus')
        },
        component: BricksStatus
      },
      {
        path: '/gluster/volumes',
        name: 'volumes',
        meta: {
          title: i18n.t('appPageTitle.volumes')
        },
        component: Volumes
      },
      {
        path: '/openflow/switches',
        name: 'switches',
        meta: {
          title: i18n.t('appPageTitle.switches')
        },
        component: Switches
      },
      {
        path: '/openflow/networks',
        name: 'networks',
        meta: {
          title: i18n.t('appPageTitle.networks')
        },
        component: Networks
      }
    ]
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'nav-link--current'
});

export default router;
