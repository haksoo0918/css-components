# _mixins.sass

> 활용 가능한 mixins

## clearfix

floating 해제  
참조: [bootstrap - clearfix](https://getbootstrap.com/docs/5.2/helpers/clearfix/)

```scss
@mixin clearfix() {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}

.clearfix {
  @include clearfix;
}
```

## stretched link

확장 링크  
참조: [bootstrap - stretched link](https://getbootstrap.com/docs/5.2/helpers/stretched-link/)

```scss
@mixin stretched-link() {
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    // box-sizing: border-box;
  }
}

.stretched-link {
  @include stretched-link;
}
```

## text-clamp

문자 넘김 제한(한줄)

```scss
@mixin ellipsis() {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ellipsis {
  @include ellipsis;
}
```

## line-clamp

여러줄 문장 제한

```scss
@mixin line-clamp($num: 2) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $num;
  overflow: hidden;
  // text-overflow: ellipsis;
}
```
