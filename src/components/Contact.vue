<template>
  <div>
    <liy-address-panel></liy-address-panel>
    <g-map></g-map>
  </div>
</template>

<script>

import GoogleMap from './GoogleMap.vue'
import AddressPanel from './AddressPanel.vue'

export default {
  components: {
    gMap: GoogleMap,
    liyAddressPanel: AddressPanel
  }

  
}
</script>

<style>

</style>
