<template>
  <div class="control">
    <div class="control__wrapper">
      <input type="text" placeholder="Promocode" class="input rounded">
      <div class="control__buttons">
        <button class="button button-primary">Purchase {{ sum }} ₽</button>
        <button class="button">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Control',
  props: {
    sum: {
      type: String,
      default: '0',
    },
  },
};
</script>
<style scoped lang="scss">
  .control {
    position: absolute;
    height: 195px;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $gray-light;
    border-top: 1px solid #e5e5e5;
    display: flex;
  }

  .control__wrapper {
    padding: 30px;
    flex-grow: 1;
  }

  .control__buttons {
    display: flex;
    margin-top: 30px;

    .button {
      flex-grow: 1;
    }
  }

</style>
