<template>
  <BNavbar
    v-b-color-mode="'dark'"
    toggleable="lg"
    variant="dark"
    class="my-navbar"
  >
    <BNavbarBrand to="/my_front/resume">凰喜的作品集</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem to="/my_front/resume" @click="refresh">關於我</BNavItem>
      </BNavbarNav>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="遊戲" right>
          <BDropdownItem to="/my_front/snake">貪吃蛇</BDropdownItem>
          <BDropdownItem to="/my_front/mario">馬力歐</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="資料結構學習" right>
          <BDropdownItem to="/my_front/stack">stack</BDropdownItem>
          <BDropdownItem to="/my_front/queue">queue</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <!--      <BNavForm class="d-flex">-->
      <!--        <BFormInput class="me-2" placeholder="Search" />-->
      <!--        <BButton type="submit" variant="outline-success">Search</BButton>-->
      <!--      </BNavForm>-->
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["refresh"]);

function refresh() {
  emit("refresh");
}
</script>

<style scoped>
.my-navbar {
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
}
</style>
