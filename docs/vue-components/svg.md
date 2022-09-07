---
prev: modal.md
---

# Svg

> Vue에서 SVG 사용 방법

## Codes

<CodeGroup>
  <CodeGroupItem title="App.vue">

``` vue
<script>
import SvgBase from './SvgBase.vue'

export default {
  components: {
    SvgBase
  }
}
</script>

<template>
  <svgBase
    width="48"
    height="48"
    name="search"
  >
    <path d="m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z"/>
  </svgBase>
</template>
```

  </CodeGroupItem>
  <CodeGroupItem title="SvgBase.vue">

``` vue
<template>
  <svg
    xmlns="http://www.w3.org/svg"
    :width="width"
    :height="height"
    :viewBox="getViewBox"
    :aria-labelledby="name"
  >
    <title>{{ name }}</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
  },
  computed: {
    getViewBox () {
      return this.viewBox || `0 0 ${this.width} ${this.height}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
```

  </CodeGroupItem>
</CodeGroup>

::: tip reference
- [Vue에서 SVG 사용하는 방법](https://hasudoki.tistory.com/entry/Vuejs-Vue%EC%97%90%EC%84%9C-SVG-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95How-to-use-svg-in-vue-app)
:::