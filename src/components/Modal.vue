<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button @click="onConfirm">Confirm</button>
      <button @click="onCancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show', 'title', 'message'],
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style>
.modal {
  /* Your styling */
}
</style>
