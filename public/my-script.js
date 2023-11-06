export default {
    data() {
      return {
        isHidden: false,
       
      };
    },
    methods: {
      toggleMenu() {
        if (window.innerWidth <= 640) {
          this.isHidden = !this.isHidden;
        }
      },
    },
    mounted() {
      window.addEventListener('resize', this.toggleMenu);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.toggleMenu);
    },
  };
  