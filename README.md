# Vue AdminLTE v.3

**Under development**

## Install

1. Install

```bash
npm i github:CookiesEater/vue-adminlte3
```

2. Add to app

main.js, for example:

```js
import VueAdminLte from 'vue-adminlte3';

Vue.use(VueAdminLte, {/* options */});
```

3. Configure icon component with 2 ways

  - Install https://github.com/FortAwesome/vue-fontawesome

  - Create your own component (or use exist like fontawesome) and configure iconComponent option. Component should have icon prop.

4. Include AdminLTE and Bootstrap styles with your own way

## Options

| Name             | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| iconComponent    | Name of icon component (default is "font-awesome-icon"). Component should be available in global.                            |
