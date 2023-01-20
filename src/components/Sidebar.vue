<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/logo.png" alt="Bresa">
            <h2>BRESA Meatshop</h2>
           <div class="profile">
            <img src="../assets/profile.png" alt="">
            <span class="name">Kyle Gwapo</span>
            <span class="position">Cashier</span>
           </div>

        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/sales">
                <span class="material-icons">trending_up</span>
                <span class="text">Sales</span>
            </router-link>

            <router-link class="button" to="/cart">
                <span class="material-icons">shopping_cart</span>
                <span class="text">Cart</span>
            </router-link>

            <router-link class="button" to="/items">
                <span class="material-icons">description</span>
                <span class="text">Available Items</span>
            </router-link>

            <router-link class="button" to="/stock">
                <span class="material-icons">inventory_2</span>
                <span class="text">Stocks</span>
            </router-link>

        </div>
        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" >
                <span class="material-icons">logout</span>
                <span class="text">Logout</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import {ref} from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () =>{
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value)
}

</script >

<style lang="scss" scoped>

aside{
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    .profile{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .flex {
        flex: 1 1 0;
    }
    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        transition: 0.2s ease-out;

        img {
            width: 2rem;
            transition: 0.2s ease-out;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rems;
                color: var(--light);
            }

            &:hover {
                .material-icons {
                    transform: translateX(0.5rem);
                    transition: 0.2s ease-out;
                }
            }

        }
    }

    h3,h2, .button .text {
        opacity: 0;
        transition: 0.2s ease-out;
    }

    h3 {
        color: var(--light);
        font-size: 0.875rem;
        margin-bottom: .5rem;
        text-transform: uppercase;
    }

    .name, .position, h2 {
        font-size: 0;
        opacity: 0;
        transition: 0.2s ease-out;
    }

    

    .menu{
        margin: 0 -1rem;
        
        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;
            .material-icons{
                font-size: 2rem;
                color: var(--light);
                transition: 0.2 ease-out;
            }
            .text{
                color: var(--light);
                transition: 0.2 ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons, .text {
                    color: var(--light);
                }
            }

            &.router-link-exact-active{
                border-right: 5px solid chocolate;
            }
        }
    }

    &.is-expanded{
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }

       
        h3,h2, .button .text {
            opacity: 1;
            transition: 0.2s ease-out;
        }

        h2{
            color: var(--light);
            font-size: 1.5rem;
            margin-bottom: .5rem;
            text-transform: uppercase;
        }
        .name{
            margin-top: .5rem;
            opacity: 1;
            color: var(--light);
            font-size: 1rem;
            text-transform: uppercase;
            transition: 0.2s ease-out;
        }

        .position{
            margin-top: .2rem;
            font-style: italic;
            opacity: 1;
            color: var(--light);
            font-size: .7rem;
            transition: 0.2s ease-out;
        }

        .profile img{
            width: 1rem;
        }


        .logo{
        margin-bottom: 0.5rem;
        }

        .logo img {
            width: 4rem;
            transition: 0.2s ease-out;
        }

        .profile img {
            width: 7rem;
            transition: 0.2s ease-out;
        }

        .button{
            .material-icons{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px){
        position: fixed;
        z-index: 99;
    }
}
</style>