<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="http://kenjiduggan.com">
              Kenji
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/about">
              About Me
            </a>
          </li>
          <li>
            <a href="">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}
        <a href="http://kenjiduggan.com" target="_blank" rel="noopener"
          >Kenji Duggan</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
