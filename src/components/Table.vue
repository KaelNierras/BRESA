<script setup>
import VueLatestTable from '/lib/VueLatestTable.vue'
const headers = [
  {
    text: 'DATE',
    align: 'start',
    filterable: false,
    value: 'date'
  },
  { text: 'ITEM CODE', value: 'code' },
  { text: 'ITEM NAME', value: 'price' },
  { text: 'ITEM PRICE', value: 'price' },
  { text: 'ITEM SOLD', value: 'sold' },
  { text: 'TOTAL', value: 'total' },
]
const desserts = [
  {
    date: '01-10-23',
    code: '2397715239',
    name: 159,
    price: 6.0,
    sold: 24,
    total: 4.0,
  },
  {
    date: '01-10-23',
    code: '7071031570',
    name: 'Pork Belly',
    price: 9.0,
    sold: 37,
    total: 4.3,
  },
  {
    date: '01-10-23',
    code: '0455487915',
    name: 'Ribs',
    price: 16.0,
    sold: 23,
    total: 6.0,
  },
  {
    date: '01-10-23',
    code: '1318735926e',
    name: 'Bones',
    price: 3.7,
    sold: 67,
    total: 4.3,
  },
  {
    date: '01-10-23',
    code: '5544958150',
    name: 'Skin',
    price: 16.0,
    sold: 49,
    total: 3.9,
  },
  {
    date: '01-10-23',
    code: '2230870908',
    name: 'Pig Liver',
    price: 0.0,
    sold: 94,
    total: 0.0,
  },
  {
    date: '01-10-23',
    code: '3003983189',
    name: 'Skin',
    price: 12,
    sold: 98,
    total: 0,
  },
  {
    date: '01-10-23',
    code: '6849392714',
    name: 'Liver',
    price: 3.2,
    sold: 87,
    total: 6.5,
  },
  {
    date: '01-10-23',
    code: '9016088903',
    name: 452,
    price: 25.0,
    sold: 51,
    total: 4.9,
  },
  {
    date: '01-10-23',
    code: '1974064030',
    name: 518,
    price: 26.0,
    sold: 65,
    total: 7,
  },
  {
    date: '02-10-28',
    code: '0985546037',
    name: 452,
    price: 25.0,
    sold: 51,
    total: 4.9,
  }
]
</script>

<template>
  <VueLatestTable
    :headers="headers"
    :data="desserts"
    :isSearchable="true"
    searchPlaceholder="Search"
    :footer="{
      rowsPerPage: [3, '1', 'dsas', 10, 20, -1],
      allText: 'ALL'
    }"
    :defaultTheme="true"
    noData="Sorry, there is no data to show for now..."
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