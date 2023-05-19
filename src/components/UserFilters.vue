<template>
  <div>
    <!-- здесь работаем с выбором, эмитим события и передаем состояние полей -->

    <v-select
      :value="filters.country"
      @change="$emit('update-country', $event)"
      :items="$options.countries"
      clearable
      label="Filter by country"
    ></v-select>

    <v-select
      :value="filters.score"
      @change="$emit('update-score', $event)"
      :items="$options.score"
      clearable
      label="Filter by score"
      :item-text="'title'"
      :item-value="'value'"
      return-object
    ></v-select>
  </div>
</template>

<script>
// страны и очки определены здесь, т.к. они не планируются меняться,
// небольшая оптимизация, чтобы вью за ними не следил,
// для достижения большей универсальности в рабочих проектах можно прокидывать через пропсы,
const countries = ["Russia", "Usa"];
const score = [
  {
    title: "< 10",
    condition: "less",
    value: 10,
  },
  {
    title: "> 20",
    condition: "larger",
    value: 20,
  },
];

export default {
  countries,
  score,

  props: {
    filters: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
