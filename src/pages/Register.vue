<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/united.svg'" alt="" />
            </div>
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Full Name..."
            >
            </fg-input>
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Email..."
            >
            </fg-input>
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Password..."
            >
            </fg-input>
<!-- 
            <Yearofbirth />

            <div class="col-md-3 dropdown">
                <a href="#" class="btn btn-simple dropdown-toggle" data-toggle="dropdown">
                    Gender
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#">Male</a></li>
                    <li><a href="#">Female</a></li>
                    <li><a href="#">Other</a></li>
                </ul>
            </div> -->

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="#pablo"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <GuestFooter />
  </div>
</template>
<script>

import { Card, Button, FormGroupInput } from '@/components';
// import Yearofbirth from './components/Register/Yearofbirth';
import GuestFooter from '@/layout/GuestFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    // Yearofbirth,
    GuestFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
