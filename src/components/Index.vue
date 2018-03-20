<template>
  <div class="am-g am-g-fixed blog-fixed">
    <v-left></v-left>
    <v-right></v-right>
  </div>
</template>

<script>
import vLeft from './Index_left.vue'
import vRight from './Index_right.vue'

export default {
  components: {
    vLeft,
    vRight
  }
}
</script>
