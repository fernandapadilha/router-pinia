<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore} from '@/stores/product';

const props = defineProps(['id']);
const product = ref({});
const productStore = useProductStore();

onMounted(() => {
    product.value = productStore.getProductById(props.id)
});
</script>

<template>
    <h1>Detalhes do produto - {{ id }}</h1>
    
    <h2>Nome: {{ product.name }}</h2>
    <h2>Preço: {{ product.price }}</h2>
    <h2>Quantidade: {{ product.qty }}</h2>
</template>