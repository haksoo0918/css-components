# Modal

> Vue3 기반 모달

## Codes

<CodeGroup>
  <CodeGroupItem title="App.vue">

``` vue
<script>
import Modal from './Moadl.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<template>
  <button class="btn" @click="showModal = true">open Modal</button>

  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat dolore maxime totam repudiandae sapiente voluptatibus minus optio provident! Veniam eum aliquam ratione modi officia, cupiditate mollitia recusandae possimus eligendi?</p>
      </template>
    </modal>
  </Teleport>
</template>
```

  </CodeGroupItem>
  <CodeGroupItem title="Modal.vue">

``` vue
<template>
  <Transition name="fade">
    <div v-if="show" class="modal">
      <div class="modal-content">
        <header class="modal-header">
          <slot name="header">
            <h5 class="modal-title">{{ title }}</h5>
          </slot>
        </header>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            <button class="btn" @click="$emit('close')">{{ closeButtonText }}</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: {
      type: String,
      default: '알림',
    },
    closeButtonText: {
      type: String,
      default: '닫기',
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  --content-width: 500px;
  --title-font-size: 1.25rem;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &-content {
    width: var(--content-width);
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  &-header {
    padding: 1rem 1rem 0.5rem;
  }
  &-title {
    margin: 0;
    font-size: var(--title-font-size);
  }
  &-body {
    padding: 1rem;
  }
  &-footer {
    padding: 0.5rem 1rem 1rem;
    text-align: right;
  }

  // transition
}
.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
    .modal-content {
      transform: scale(1.1);
    }
  }
}
</style>
```

  </CodeGroupItem>
</CodeGroup>

::: tip reference
- [Examples - Modal | Vue.js](https://vuejs.org/examples/#modal)
:::