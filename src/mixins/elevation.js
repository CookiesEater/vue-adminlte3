export default {
  props: {
    elevation: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    elevationClass() {
      return `elevation-${this.elevation}`;
    },
  },
};
