export default {
  bind(el) {
    el.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapse');
      document.body.classList.toggle('sidebar-open');
    });
  },
};
