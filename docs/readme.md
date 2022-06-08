# CSS Components

만든 이유는 페이지를 만들때 마다 만들었던 비슷한 CSS를 계속 반속해서 만드는것에,
또 했던 고민을 다시 반복하는 것 또한 효율이 너무 떨어진다 판단 했기 때문이다.

만들어 두고 가능한 복사해서 사용하기 위해, 변수는 중요하다 판단한 부분만 정의했다.

꼭 필요한 기능을 제하고선 JavaScript는 최대한 배제할 예정이다.

많은 부분을 부트스트랩을 참고 하였고, 기타 UI 프레임워크도 같이 참고하여 만들었다.
지속적으로 업데이트 할 예정이다.
컴퍼넌트도 추가 될 수도 있고, 만들었던 컴퍼넌트도 수정될 가능성이 높다.
가능한 내가 사용함에 있어 가장 효율적으로 만들어갈 예정이다.

## 작업 예상 컴포넌트

- [x] [accordion](components/accordion.html): use `input:radio`
- [x] [avatar](components/avatar.html): base, circle
- [x] [breadcrumbs](components/breadcrumbs.html): base
- [x] [button](components/button.html): base, outline, disabled
- [x] [card](components/card.html): base(vertical), horizontal(hrz)
- [x] [dialog](components/dialog.html): base
- [x] [divider](components/divider.html): base, text, dashed
- [x] [empty](components/empty.html): use `:emtpy` selector
- [x] [image](components/image.html): fluid, block, figure, picture
- [ ] input
  - [ ] text
  - [ ] checkbox
  - [ ] radio
  - [ ] switch
  - [ ] textarea
- [x] [loading](components/loading.html): circle
- [x] [navbar](components/navbar.html): base
- [x] [pagination](components/pagination.html): base
- [x] [progress](components/progress.html): base, custom, striped, animation
- [x] [table](components/table.html): base, bordered, striped
- [x] [tag](components/tag.html): link, with close button

## scss 활용

- [-] [_mixins.scss](sass/mixins.html)
- [ ] _functions.scss
- [-] [_variables.scss](sass/variables.html)
- [ ] breakpoints
- [ ] utils
- [ ] layout
