<template>
  <a href="https://ooos.ru/oswidget" target="_blank" class="logo">
    <b>OS</b>widget
  </a>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss">
.logo {
  position: absolute;
  bottom: 30px;
  left: 30px;
  font-size: 25px;
  line-height: 30px;
  color: #D6D6D6;
  font-weight: 500;
  z-index: 1;
  transition: all .3s;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: $gray;
  }
}
</style>
