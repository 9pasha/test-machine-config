<template>
	<div class="main">
		<item-list
        :items="data"
        class="sidebar"
        @click="changeSelectedItem"
    />
		<item-content
        v-if="selectedItem"
        :item="selectedItem"
        @click="onClick"
    />
	</div>
</template>

<script setup lang="ts">
import ItemList from './components/ItemList.vue';
import ItemContent from './components/ItemContent.vue';
import {data as Data} from './components/mockData';
import {ref} from "vue";
import {Attribute, Product, WithId} from "@/components/types";
import {AttributeType} from "@/components/enums";
import {useId} from "@/components/useId";

const data = ref(Data);

const selectedItem = ref();

const attributesWithId = (item: Product) => ({
  ...item,
  attributes: item.attributes
      .map((attribute) => ({ ...attribute, id: useId() }))
});

const changeSelectedItem = (item: Product) => {
  selectedItem.value = attributesWithId(item);
};

const getBaseAttributeFields = () => ({
  id: useId(),
  code: 'new code',
  name: 'new field',
});

const addAttributeToSelectedItem = (attribute: WithId<Attribute>) => {
  selectedItem.value?.attributes.push(attribute);
};

const onClick = (value: AttributeType) => {
	switch (value) {
    // Add enum AttributeType
		case AttributeType.color: {
      addAttributeToSelectedItem({
        ...getBaseAttributeFields(),
				color: 'color'
			});
			break;
		}
		case AttributeType.size: {
      addAttributeToSelectedItem({
        ...getBaseAttributeFields(),
				size: {
					width: 0,
					height: 0
				}
			});
			break;
		}
		case AttributeType.weight: {
      addAttributeToSelectedItem({
        ...getBaseAttributeFields(),
				weight: 0
			});
			break;
		}
    // Add default case
    default:
      break;
	}
}
</script>

<style scoped lang="css">
.main {
	display: flex;
	gap: 20px;
}
.sidebar {
	width: auto;
}
</style>
