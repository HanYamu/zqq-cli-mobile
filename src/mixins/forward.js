export default {
  methods: {
    forward() {
      let path = this.$route.path;
      console.log(this.$route);
      if (path && path != "/" && path != "/index" && path != "/login") {
        this.$router.replace({
          path: this.$route.path
        });
      } else {
        this.$router.replace({
          path: "home"
        });
      }
    }
  }
};
