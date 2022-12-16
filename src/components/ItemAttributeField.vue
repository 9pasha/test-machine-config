<template>
  <div
      v-for="attributeKey in attributeKeys"
      :key="attributeKey"
      class="field-wrapper"
  >
    <div v-if="!isIdProp(attributeKey)" class="field">
      <span class="title">{{attributeKey}}:</span>
      <span v-if="isAttributeHasSize(attributeKey)">
        <input
            :value="attribute.size.width"
            type="number"/>
         x
        <input
            :value="attribute.size.height"
            type="number"
        />
      </span>
        <input
            v-else
            :value="attribute[attributeKey]"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {Attribute} from "@/components/types";
import {AttributeType} from "@/components/enums";

const props = defineProps<{
  attribute: Attribute;
}>();

const attributeKeys = computed(() => Object.keys(props.attribute));

const isIdProp = (attributeKey: string) => attributeKey === "id";
const isAttributeHasSize = (attributeKey: string) =>
    attributeKey === AttributeType.size ? true : false;
</script>

<style scoped lang="css">
.field {
  display: flex;
  gap: 5px;
}
.title {
  font-weight: bold;
}
</style>