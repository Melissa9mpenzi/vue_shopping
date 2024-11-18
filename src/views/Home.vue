<template>
  <div>
    <h1>Shopping List</h1>
    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="Enter item" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="item in shoppingList" :key="item.id">
        <span :class="{ completed: item.completed }">{{ item.name }}</span>
        <button @click="markOffItem(item.id)">Mark Off</button>
        <button @click="confirmDelete(item.id)">Delete</button>
      </li>
    </ul>
    <Modal
      v-if="showModal"
      :show="showModal"
      title="Delete Item"
      message="Are you sure you want to delete this item?"
      @confirm="deleteItem"
      @cancel="cancelModal"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from '@/components/Modal.vue';

export default {
  components: { Modal },
  data() {
    return {
      newItem: '',
      showModal: false,
      itemIdToDelete: null
    };
  },
  computed: mapState(['shoppingList']),
  methods: {
    ...mapActions(['addItem', 'toggleMarkOff', 'deleteItem']),
    addItem() {
      const item = {
        id: Date.now(),
        name: this.newItem,
        completed: false
      };
      this.addItem(item);
      this.newItem = '';
    },
    markOffItem(id) {
      this.toggleMarkOff(id);
    },
    confirmDelete(id) {
      this.itemIdToDelete = id;
      this.showModal = true;
    },
    deleteItem() {
      this.deleteItem(this.itemIdToDelete);
      this.showModal = false;
    },
    cancelModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>








