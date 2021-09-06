#ディレクトリ構成について

sass
├ style.scss//@importを使って全部まとめるためのファイル
│
├ 1.Foundation // セレクタはidやclassを使わずに、プロパティを上書きしやすくする
│  ├ _reset.scss //ノーマライズやリセットなどがこれ
│  ├ _base.scss //font-sizeやcolor inputなどを共通化しておく。
│  ├ _color.scss //プロジェクト内で利用する色コードを変数化して一元管理するファイル
│  etc
│
├ 2.Layout //サイト全体のブロックを定義する。
│  ├ _l-header.scss //クラス名は .l-header__xxx
│  ├ _l-header.scss //クラス名は .l-header__xxx
│  ├ _l-container.scss //クラス名は .l-container__xxx
│  ├ _l-spacer.scss //クラス名は .l-spacer__xxx
│  └ _l-footer.scss //クラス名は .l-footer__xxx
│
└   3.object
        ├ 3.component // サイト内で使用されるオブジェクト(モジュール)で汎用性が高いもの 
        │  ├ _radio.scss //クラス名は .c-radio__xxx
        │  ├ _input.scss //クラス名は .c-input__xxx
        │  ├ _step.scss //クラス名は .c-step__xxx
        │  ├ _button.scss //クラス名は .c-button__xxx
        │  ├ _table.scss //クラス名は .c-table__xxx
        │  ├ _modal.scss //クラス名は .c-modal__xxx
        │  ├ _slider.scss //クラス名は .c-slider__xxx
        │  ├ _head_title.scss //クラス名は .c-head_title__xxx
        │  ├ _label.scss //クラス名は .c-label__xxx
        │  ├ _validation_msg.scss //クラス名は .c-validation_msg__xxx
        │  ├ _image_trimer.scss //クラス名は .c-image_trimer__xxx
        │  │
        │  more...
        │
        └ 4.project(もしくはpages) //ページ単体でのみ使用されるオブジェクト(モジュール)で汎用性が低いもの
        │ ├ sitemap.scss //クラス名は .p-sitemap__xxx
        │  ├ sitepolicy.scss //クラス名は .p-sitepolicy__xxx
        │  ├ contact_form.scss //クラス名は .p-contact_form__xxx
        │  │
        │  more...
        │
        5.Utility //一時的な対処のために利用する
        └ _utility.scss //クラス名は .u-"プロパティ"__”値”　ex) .u-margin__bottom__large


