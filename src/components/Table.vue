<script setup>
import VueLatestTable from '/lib/VueLatestTable.vue'

const props = defineProps(['tableItems','headerItems','message'])

</script>

<template>
  <VueLatestTable
    :headers="props.headerItems"
    :data="props.tableItems"
    :isSearchable="true"
    searchPlaceholder="Search"
    :footer="{
      rowsPerPage: [3, '1', 'dsas', 10, 20, -1],
      allText: 'ALL'
    }"
    :defaultTheme="true"
    :noData="props.message"
    rowsPerPageText="Rows per page"
  />
</template>

<style lang="scss" scoped>
body {
  max-width: 80%;
  margin: 0 auto;
}
#vueLatestTable {
  /* we can implement some CSS for this "Vue Latest Table" here */
  margin: 0 auto;
  margin-top: 30px;
  .searchBox {
    color: #333 !important;
  }
}
</style>