<template>
  <div>
    <div class="page-header clear-filter" filter-color="">
      <div
        class="page-header-image"
        style="background-image: url('img/contact.jpg')"
      >
      </div>
      <Form />
    </div>
  </div>
</template>

<script>
import { Button, FormGroupInput } from '@/components';
import Form from './components/Contact/Form';
export default {
  name: 'contact-page',
  bodyClass: 'contact-page',
  components: {
    Form,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
