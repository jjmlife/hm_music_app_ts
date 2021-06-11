<template>
  <div class="tab-bar-item" @click="itemClick">
      <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
      <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
      <div class="item-text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        link: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive: {
            get() {
                return false;
            }
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.link)
        }
    }
}
</script>

<style scoped lang="scss">
.tab-bar-item {
    flex:1;
}

.item-icon {
    width: 20px;
    height: 20px;
}

.item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
}

</style>