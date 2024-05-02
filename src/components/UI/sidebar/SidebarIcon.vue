<script setup>
const props = defineProps({
  routeName: String
})
</script>

<template>
<RouterLink :to="{name : props.routeName}" active-class="active">
  <div class="dashboard-nav-wrapper w-full">
    <p class="text-dashboard capitalize">
      {{routeName}}
    </p>
  </div>
</RouterLink>
</template>

<style scoped>

</style>