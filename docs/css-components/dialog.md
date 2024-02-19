---
prev: card.md
next: divider.md
---

# Dialog

> 다이얼로그, 모달, 레이어 팝업

## Examples

<div class="box">
  <button class="btn" type="button" @click="openDialog">dialog open</button>

  <dialog class="dialog" ref="dialog">
    <header class="dialog-header"><h5 class="dialog-title">Dialog Title</h5></header>
    <div class="dialog-body">Dialog content</div>
    <footer class="dialog-footer">
      <button type="button" class="btn" @click="closeDialog">Close</button>
    </footer>
  </dialog>
</div>

## Codes

<CodeGroup>
  <CodeGroupItem title="html">

```html
<!-- open button -->
<button class="btn" type="button" onclick="openDialog('d-1')">dialog open</button>

<!-- dialog -->
<dialog id="d-1" class="dialog">
  <header class="dialog-header"><h5 class="dialog-title">Dialog Title</h5></header>
  <div class="dialog-body">Dialog content</div>
  <footer class="dialog-footer">
    <button type="button" class="btn" onclick="closeDialog('d-1')">Close</button>
  </footer>
</dialog>
```

  </CodeGroupItem>
  <CodeGroupItem title="SCSS">

```scss
@keyframes showDialog {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes showDialogBackdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog {
  $width: 30rem;
  $border-width: 0px;
  $border-radius: 0.25rem;
  $bg-color: #fff;
  $text-color: #333;
  $ani-speed: 0.3s;

  width: $width;
  padding: 0;
  color: $text-color;
  border-width: $border-width;
  border-radius: $border-radius;
  background-color: $bg-color;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  z-index: 1050;

  &-header {
    padding: 1rem 1rem 0.5rem;
  }
  &-title {
    margin: 0;
    font-size: 1.25rem;
  }
  &-body {
    padding: 1rem;
  }
  &-footer {
    padding: 0.5rem 1rem 1rem;
    text-align: right;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
  }

  &[open] {
    animation: showDialog $ani-speed ease;

    &::backdrop {
      animation: showDialogBackdrop $ani-speed ease;
    }
  }
}
```

  </CodeGroupItem>
  <CodeGroupItem title="JS">

```js
// var dialog = document.querySelector('.dialog');

function openDialog(id) {
  document.getElementById(id).showModal();
}
function closeDialog(id) {
  document.getElementById(id).close();
}
```

  </CodeGroupItem>
</CodeGroup>

::: tip reference
- [Building a dialog component | web.dev](https://web.dev/building-a-dialog-component/)
:::

<style lang="scss" scoped>
@keyframes showDialog {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes showDialogBackdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog {
  $width: 30rem;
  $border-width: 0px;
  $border-radius: 0.25rem;
  $bg-color: #fff;
  $text-color: #333;
  $ani-speed: 0.5s;

  width: $width;
  padding: 0;
  color: $text-color;
  border-width: $border-width;
  border-radius: $border-radius;
  background-color: $bg-color;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  z-index: 1050;

  &-header {
    padding: 1rem 1rem 0.5rem;
  }
  &-title {
    margin: 0;
    font-size: 1.25rem;
  }
  &-body {
    padding: 1rem;
  }
  &-footer {
    padding: 0.5rem 1rem 1rem;
    text-align: right;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
  }

  &[open] {
    animation: showDialog $ani-speed ease;

    &::backdrop {
      animation: showDialogBackdrop $ani-speed ease;
    }
  }
}
</style>

<script>
export default {
  methods: {
    openDialog() {
      this.$refs.dialog.showModal()
    },
    closeDialog() {
      this.$refs.dialog.close()
    }
  }
}
</script>