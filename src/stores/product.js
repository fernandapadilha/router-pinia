import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'salgado frito', price: 4.5, qty: 100},
    {id: 2, name: 'pão de batata', price: 5.5, qty: 50},
    {id: 3, name: 'pão de queijo', price: 2.25, qty: 70},
    {id: 4, name: 'suco de laranja', price: 7, qty: 1000},
    {id: 5, name: 'Trento', price: 3, qty: 2000}
  ])

  function getProductById(id) {
    // Modelo universal
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
    }
    return {}

    // Modelo javaScript
    // return products.value.find((product) => product.id == id)
  }

  return { products, getProductById }
})
