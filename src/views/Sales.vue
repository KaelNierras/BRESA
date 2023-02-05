<script setup>
import salesComponent from '../Components/SalesComponent.vue'
import DataT from '../Components/Table.vue'

const message = 'There is no item in the Cart!'

const headerItems = [
  {
    text: 'DATE',
    align: 'start',
    filterable: false,
    value: 'date'
  },
  { text: 'ITEM CODE', value: 'code' },
  { text: 'ITEM NAME', value: 'name' },
  { text: 'ITEM PRICE', value: 'price' },
  { text: 'ITEM SOLD', value: 'sold' },
  { text: 'TOTAL', value: 'total' },
]

const tableItems = [
  {
    date: '01-10-23',
    code: '2397715239',
    name: 'Hello',
    price: 453,
    sold: 24,
    total: 6,
  },
  {
    date: '01-10-23',
    code: '7071031570',
    name: 'Pork Belly',
    price: 453,
    sold: 37,
    total: 4,
  },
  {
    date: '01-10-23',
    code: '0455487915',
    name: 'Ribs',
    price: 16.0,
    sold: 23,
    total: 6,
  },
  {
    date: '01-10-23',
    code: '1318735926e',
    name: 'Bones',
    price: 3.7,
    sold: 67,
    total: 15,
  },
  {
    date: '01-10-23',
    code: '5544958150',
    name: 'Skin',
    price: 16.0,
    sold: 49,
    total: 11,
  },
  {
    date: '01-10-23',
    code: '2230870908',
    name: 'Pig Liver',
    price: 0.0,
    sold: 94,
    total: 14,
  },
  {
    date: '01-10-23',
    code: '3003983189',
    name: 'Skin',
    price: 12,
    sold: 98,
    total: 10,
  },
  {
    date: '01-10-23',
    code: '6849392714',
    name: 'Liver',
    price: 3.2,
    sold: 87,
    total: 6,
  },
  {
    date: '01-10-23',
    code: '9016088903',
    name: 'Fats',
    price: 25.0,
    sold: 51,
    total: 9,
  },
  {
    date: '01-10-23',
    code: '1974064030',
    name: 'Pig mask',
    price: 26.0,
    sold: 65,
    total: 7,
  },
  {
    date: '02-10-28',
    code: '0985546037',
    name: 'Ribs',
    price: 25.0,
    sold: 51,
    total: 7
    
  }
]

</script>

<template>
    <main class="sales-page">
        <salesComponent />
        <DataT :tableItems="tableItems" :headerItems="headerItems" :message="message"/>
    </main>
</template>

<style lang="scss" scoped>


</style>
