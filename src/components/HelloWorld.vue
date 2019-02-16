<template>
  <div class="dropdown">
    <select v-model="selectedOption">
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
  </div></template
>

<script>
export default {
  name: "HelloWorld",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedOption: null
    };
  },
  mounted() {
    this.selectedOption = this.value;
  },

  watch: {
    value: function(newValue) {
      this.selectedOption = newValue;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
