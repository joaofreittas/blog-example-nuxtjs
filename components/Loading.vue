<template>
  <div class="loading">
    <div class="spinner-border text-info" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="css" scoped>
.loading{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>