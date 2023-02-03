<script setup>
import { reactive, ref, computed } from 'vue'
import DataT from '../Components/Table.vue'
import ProcessModal from '../components/ProcessModal.vue';

const message = 'There is no item in the Cart!'
// const props = defineProps(['amountPaid'])
const headerItems = reactive([
  {
    text: 'ITEM CODE',
    align: 'start',
    filterable: false,
    value: 'tcode'
  },
  { text: 'DATE', value: 'date' },
  { text: 'ITEM NAME', value: 'name' },
  { text: 'QUANTITY/KILO', value: 'quantity' },
  { text: 'PRICE', value: 'price' },
  { text: 'SOLD', value: 'sold' },
  { text: 'TOTAL', value: 'total' },
])



const tableItems = reactive([
  {tcode:3413134314, date: '10-20-33', name: 'Item 1',quantity:40, price: 10, sold:10, total: 200},
])


const displayModal = () => {
  showModal.value = true
}

// const eachTotal = computed(() => {
//   let eachTotal = 0
//   eachTotal = newQuantity.value * 40
//   return eachTotal
// })

const addItem = () =>{

tableItems.push({
  tcode: newItemCode.value,
  date: '01-01-23',
  name: newItemName.value,
  quantity: newQuantity.value,
  price:40,
  sold: 20,
  total:200
})
newItemCode.value=" ",
newItemName.value=" ",
newQuantity.value=" ",
showModal.value = false
}

const cartTotal = computed(() => {
     let total = 0
     tableItems?.forEach((item) => {
        total += item.total
     })
     return total
})

// const change = computed(() => {
//      let change = 0
//      change =   - tableItems.total 
//      return change
// })

const remove = () => {
  newItemName.value=" ",
  newQuantity.value=" ",
  newItemCode.value=" ",
  newItemCode.placeholder="ITEM CODE",
  newItemName.placeholder="ITEM CODE",
  newQuantity.placeholder="QUANTITY/KILO"
}

const newItemCode = ref(null)
const newItemName = ref(null)
const newQuantity = ref(null)

const showModal = ref(false)

</script>

<template>
    <main class="cart-page">
        <h1>Cart</h1>
        <p>This is the Cart Page</p>
        <DataT :tableItems="tableItems" :headerItems="headerItems" :message="message" />
        <form @submit.prevent ="">
        <div class="details">
            <input v-model="newItemCode" placeholder="ITEM CODE" required>
            <input v-model="newItemName" placeholder="ITEM NAME" required>
            <input v-model="newQuantity" placeholder="QUANTITY/KILO" required>
            <div class="buttons">
              <button @click="remove()">REMOVE</button>
              <button type="submit" @click="addItem()">ADD TO CART</button>
            </div>
          </div>
        </form>  
          <div class="info">
          <div class="content"><h3>120</h3><p>Stock</p></div>
          <div class="content"><h3>30</h3><p>Price</p></div>
          <button class="dummy"></button>
          <div class="buttons">
              <button class="dummy1"></button>
              <button @click="displayModal()">PROCESS</button>
            </div>
          </div>
    <ProcessModal v-if="showModal" @click-close="showModal = false" :total="cartTotal"></ProcessModal>
    </main>
</template>

<style>
  .content p{
    margin-top: 10px;
    color: black;
  }

  .info{
    
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100% !important;
  }

  .info .content{
    flex-grow: 1;
    text-align: center;
    border: 2px solid black;
    border-radius: 4px;
    width: 250px;
    margin-right: 10px;
    color: white;
    background-color: black;
    height: 30px;
  }

  .details{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100% !important; 
  }

  .details input {
    flex-grow: 1;
    width: 250px;
    border: 1px solid black;
    border-radius: 4px;
    margin-right: 10px;
    height: 30px;

  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .buttons button{
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;
    color: white;
    background-color: blue;
    width: 200px;
    white-space: nowrap;
    margin-left: 10px;
  }

  .dummy {
    flex-grow:1;
    width: 250px;
    margin-right: 10px;
  }

  .buttons .dummy1{
    border: 0px solid black;
    background: transparent;
    width: 200px;
    margin-left: 10px;
  }

  input::-webkit-input-placeholder { 
  text-align: center;
  }

  .subtitle{
    flex-grow: 1;
    text-align: center;
  }
  
</style>
