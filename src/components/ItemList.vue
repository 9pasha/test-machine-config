<template>
	<div class="list">
    <!--Fixed key value-->
		<span
        v-for="(item) in items"
        :key="item.id"
        class="item"
        :class="{ itemSelected: item === selectedItem}"
        @click="() => onClick(item)"
    >
			{{ item.name }}
		</span>
	</div>

</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue';
import {Product} from "@/components/types";
// Add types to props
defineProps<{
	items: Array<Product>;
}>();

const emit = defineEmits(['click']);

const selectedItem = ref();

const onClick = (item: Product) => {
	selectedItem.value = item;
	emit('click', item);
}
</script>
<!--Add scoped attribute-->
<style scoped lang="css">
.list {
	display: flex;
	flex-direction: column;
	border: 1px solid lightblue;
}

.item {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
}

.itemSelected {
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	min-width: 250px;
	background: lightskyblue;
}

.item:hover {
	background: #f0f0ff;
}
</style>
