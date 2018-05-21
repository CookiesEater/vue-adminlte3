export default (def = 2) => ({
  props: {
    elevation: {
      type: Number,
      default: def,
    },
  },
  computed: {
    elevationClass() {
      return this.elevation ? `elevation-${this.elevation}` : '';
    },
  },
});
