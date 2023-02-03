<script setup>
import DataT from '../Components/Table.vue'

const message = 'Sorry, there is no data to show for now...'

const headerItems = [
  {
    text: 'ITEM CODE',
    align: 'start',
    filterable: false,
    value: 'code'
  },
  { text: 'ITEM NAME', value: 'name' },
  { text: 'ITEM PRICE', value: 'price' },
  { text: 'STOCK', value: 'total' },
]

const tableItems = [
  {
    code: '2397715239',
    name: 'Hello',
    price: 453,
    category: 'PORK',
    total: 4.2,
  },
  {
    code: '7071031570',
    name: 'Pork Belly',
    price: 453,
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
    name: 'Fats',
    price: 25.0,
    sold: 51,
    total: 4.9,
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
    total: 4.9,
  }
]

</script>


<template>
    <main class="item-page">
        <h1>Available Items</h1>
        <p>This is the Available Items Page</p>
        <DataT :tableItems="tableItems" :headerItems="headerItems" :message="message" />
    </main>
</template>


<style lang='scss' scoped>
    .add {
        background-color: aqua;
    }


</style> 