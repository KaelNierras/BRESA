<script setup>
import { reactive, ref } from 'vue'
import DataT from '../Components/Table.vue'
import SampleModal from '../components/SampleModal.vue';

const message = 'There is no available Stack!'

const headerItems = reactive([
  {
    text: 'ITEM CODE',
    align: 'start',
    filterable: false,
    value: 'code'
  },
  { text: 'ITEM NAME', value: 'name' },
  { text: 'ITEM PRICE', value: 'price' },
  { text: 'STOCK', value: 'stock' },
])

const showModal = ref(false)

const tableItems = reactive([
    {code:3413134314, name: 'Item 1', price: 10, stock:10},
    {code:1232134314, name: 'Item 2', price: 20, stock:20},
])

const displayModal = () => {
  showModal.value = true
}

const addItem = (nameAndPrice) =>{

  tableItems.push({
    code: nameAndPrice.code,
    name: nameAndPrice.name,
    price: nameAndPrice.price,
    stock: nameAndPrice.stock
  })

  showModal.value = false
}

</script>

<template>
    <main class="stock-page">
        <h1>Stocks</h1>
        <p>This is the Stocks Page</p>
        <DataT :tableItems="tableItems" :headerItems="headerItems" :message="message" />
        <div class="buttons">
          <button class="add" @click="displayModal()">Add Item</button>
        </div>
        <SampleModal v-if="showModal" @click-close="showModal = false" @add-item="addItem"></SampleModal>
    </main>
</template>

<style lang="scss" scoped>

    .buttons{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    button{
        
        width: 250px;
        height: 30px;
        font-size: 16px;
        margin-top: 10px;
        border-radius: 4px;
        color: white;
        background-color: var(--dark);
    }

</style>
