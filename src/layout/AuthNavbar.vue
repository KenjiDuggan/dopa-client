<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        D O P A
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Kenji Duggan.
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
        <router-link
          class="navbar-brand"
          to='/'
        >
          <p class="marsides">How It Works</p>
        </router-link>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#"
          target="_blank"
        >
          <p class="marsides">About Us</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#"
          target="_blank"
        >
          <p class="marsides">Contact Us</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="#"
          target="_blank"
        >
          <p>REGISTER</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="#"
          target="_blank"
        >
          <p>LOGIN</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://github.com/KenjiDuggan"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/kenji.duggan"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { Navbar } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'guest-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.marsides {
  margin-left: 2px !important;
  margin-right: 2px !important;
}
</style>

