<template>
  <div class="main-tabar">
      <tab-bar>
        <tab-bar-item v-for="(item) in tabbarData" :key="item.link" :link="item.link">
          <div slot="text">{{item.title}}</div>
          <template v-slot:icon>
                <van-icon name="sign" size="25"></van-icon>
          </template>
          <div slot="active-icon">{{item.activeIcon}}</div>
        </tab-bar-item>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import TabBarItem from '@/components/tab-bar/tab-bar-item'

export default {
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabbarData: [
        {
            title: '发现',
            icon: '',
            activeIcon: '',
            link: '/recommand'
        },
        {
            title: '播客',
            icon: '',
            activeIcon: '',
            link: '/podcast'
        },
        {
            title: '我的',
            icon: '',
            activeIcon: '',
            link: '/mine'
        },
        {
            title: 'k歌',
            icon: '',
            activeIcon: '',
            link: '/ksong'
        },
        {
            title: '云村',
            icon: '',
            activeIcon: '',
            link: '/cloud'
        }
      ]
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">


</style>