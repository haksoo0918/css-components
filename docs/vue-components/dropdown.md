---
next: modal.md
---

# Dropdown

> Tooltip, Popover, Dropdown

# Codes

<CodeGroup>
  <CodeGroupItem title="App.vue">

``` vue
<script>
import Dropdown from './Dropdown.vue'

export default {
  components: {
    Dropdown
  },
  data () {
    return {
      showDropdown: false,
    }
  }
}
</script>

<template>
  <dropdown
    class="custom-dropdown"
    :show="showDropdown"
    buttonText="드롭다운 토글 버튼"
    @close="showDropdown = false"
    @toggle="showDropdown = !showDropdown"
  >
    <template #content>
      In excepteur ea commodo exercitation fugiat cupidatat laborum eiusmod ut. Nostrud culpa non ea officia irure dolore ad occaecat eu ea id. Deserunt laboris quis Lorem elit voluptate velit adipisicing deserunt qui fugiat quis ipsum irure esse. Esse consequat reprehenderit eiusmod Lorem.
    </template>
  </dropdown>
</template>

<style lang="scss" scoped>
.custom-dropdown {
  --content-text-color: blue;
  --content-bg-color: #eee;
}
</style>
```

  </CodeGroupItem>
  <CodeGroupItem title="Dropdown.vue">

``` vue
<template>
  <div class="dropdown">
    <button
      type="button"
      class="dropdown__button"
      :class="{ 'active' : show }"
      @click="dropdownToggle"
    >
      <slot>{{ buttonText }}</slot>
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z"/></svg>
    </button>

    <Transition name="fade">
      <div v-show="show" class="dropdown__content">
        <slot name="content">dropdown content</slot>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    buttonText: String,
  },
  mounted () {
    document.addEventListener('click', this.dropdownClose)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.dropdownClose)
  },
  methods: {
    dropdownToggle () {
      this.$emit('toggle')
    },
    dropdownClose (e) {
      const target = e.target

      if ( !target || this.$el.contains(target) ) return

      this.$emit('close')
    }
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  --content-text-color: #222;
  --content-bg-color: #fff;
  --content-left: auto;
  --content-top: auto;
  --content-right: auto;
  --content-button: auto;
  --content-width: 20rem;
  --content-height: 10rem;
  --content-padding: 0.5rem 1rem;

  position: relative;
  display: inline-block;

  &__button {
    position: relative;
    padding-right: 24px;
    cursor: pointer;
    &.active {
      .icon {
        transform: rotate(180deg);
      }
    }
    .icon {
      position: absolute;
      margin: auto 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 24px;
      height: 24px;
    }
  }

  &__content {
    position: absolute;
    width: var(--content-width);
    max-height: var(--content-height);
    left: var(--content-left);
    top: var(--content-top);
    right: var(--content-right);
    bottom: var(--content-bottom);
    margin-top: 2px;
    padding: var(--content-padding);
    color: var(--content-text-color);
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: var(--content-bg-color);
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    z-index: 1010;
    transition: all 0.3s ease;
  }
}

.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
```

  </CodeGroupItem>
</CodeGroup>
