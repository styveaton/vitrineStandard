<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content ? `${content}`:'GESSIIA' }}</template>
    </metainfo>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>