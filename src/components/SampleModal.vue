<template>
<div id="demo-modal" class="modal">
    <div class="modal__content">
        <form @submit.prevent="emit('add-item', {code:8482489798, name: newItemName,  price: newItemPrice, stock:50, } )">
            <div class="info"><h3>8482489798</h3> </div>
            <p class="details">ITEM CODE</p>
            <input v-model="newItemName" placeholder="Item Name" required>
            <p class="details">ITEM NAME</p>
            <div class="info"><h3>50</h3> </div>
            <p class="details">STOCKS</p>
            <input v-model="newItemPrice" placeholder="Item Price" required>
            <p class="details">PRICE</p>
            <button type="submit">Add</button>
        </form> 
        <a href="#" class="modal__close" @click="emit('click-close')">&times;</a>
    </div>
</div>
</template>

<style scoped lang="scss">
.details{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 3px;
    margin-bottom: 10px;
    font-size: 11px;
    color: white;
}

.info{
    border-radius: 5px;
    margin-left: 10px;
    width: 220px;
    height: 30px;
    background-color: grey; 
    padding-top: 5px;
    text-align: center;
}

h3{
    color: black;
    text-align: center;
}

button{
    color: white;
    background-color: var(--dark);
    width: 100px;
    height: 30px;
    justify-content: center;
    margin-top: 20px;
    margin-left: 70px;
    text-align: center;
}

input{
    margin-left: 10px;
    width: 220px;
    color: black;
    border-radius: 5px;
    height: 30px;
    text-align: center;
}
form {
    display: flex;
    flex-direction: column;
    width: 240px;
    margin-top: 20px;
}
.modal {
  visibility: visible;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, 0.7);
  transition: all 0.4s;
}

.modal__content {  
  border-radius: 10px;
  position: relative;
  width: 300px;
  background: black;
  padding: 1em 2em;
}

.modal__footer {
  text-align: right;
  a {
    color: #585858;
  }
  i {
    color: #d02d2c;
  }
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

</style>

<script setup>
const emit = defineEmits(['click-close','add-item'])
</script>