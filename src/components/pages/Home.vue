<script lang="ts">
import HelloWorld from '@/components/atoms/HelloWorld.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld,
  },
})
export default class extends Vue {}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>
