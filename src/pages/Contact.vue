<template>
<div>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    >
    </div>
     <Form />
  </div>
    <GuestFooter />
</div>
</template>

<script>

import { Button, FormGroupInput } from '@/components';
import Form from './components/Contact/Form';
import GuestFooter from '@/layout/GuestFooter';
export default {
  name: 'contact-page',
  bodyClass: 'contact-page',
  components: {
    GuestFooter,
    Form,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
