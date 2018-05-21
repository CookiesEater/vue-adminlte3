export default (def = 2) => ({
  props: {
    elevation: {
      type: Number,
      default: def,
    },
  },
  computed: {
    elevationClass() {
      return `elevation-${this.elevation}`;
    },
  },
});
