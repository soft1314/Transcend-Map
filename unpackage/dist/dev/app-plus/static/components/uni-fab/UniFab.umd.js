(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UniFab"] = factory();
	else
		root["UniFab"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/uni-fab/uni-fab.vue?vue&type=template&id=1933c2ca&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "uni-cursor-point"
  }, [_vm.popMenu && (_vm.leftBottom || _vm.rightBottom || _vm.leftTop || _vm.rightTop) && _vm.content.length > 0 ? _c('div', {
    staticClass: "uni-fab",
    class: {
      'uni-fab--leftBottom': _vm.leftBottom,
      'uni-fab--rightBottom': _vm.rightBottom,
      'uni-fab--leftTop': _vm.leftTop,
      'uni-fab--rightTop': _vm.rightTop
    },
    style: _vm.nvueBottom
  }, [_c('div', {
    staticClass: "uni-fab__content",
    class: {
      'uni-fab__content--left': _vm.horizontal === 'left',
      'uni-fab__content--right': _vm.horizontal === 'right',
      'uni-fab__content--flexDirection': _vm.direction === 'vertical',
      'uni-fab__content--flexDirectionStart': _vm.flexDirectionStart,
      'uni-fab__content--flexDirectionEnd': _vm.flexDirectionEnd,
      'uni-fab__content--other-platform': !_vm.isAndroidNvue
    },
    style: {
      width: _vm.boxWidth,
      height: _vm.boxHeight,
      backgroundColor: _vm.styles.backgroundColor
    },
    attrs: {
      "elevation": "5"
    }
  }, [_vm.flexDirectionStart || _vm.horizontalLeft ? _c('div', {
    staticClass: "uni-fab__item uni-fab__item--first"
  }) : _vm._e(), _vm._l(_vm.content, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "uni-fab__item",
      class: {
        'uni-fab__item--active': _vm.isShow
      },
      on: {
        "click": function ($event) {
          return _vm._onItemClick(index, item);
        }
      }
    }, [_c('image', {
      staticClass: "uni-fab__item-image",
      attrs: {
        "src": item.active ? item.selectedIconPath : item.iconPath,
        "mode": "aspectFit"
      }
    }), _c('text', {
      staticClass: "uni-fab__item-text",
      style: {
        color: item.active ? _vm.styles.selectedColor : _vm.styles.color
      }
    }, [_vm._v(_vm._s(item.text))])]);
  }), _vm.flexDirectionEnd || _vm.horizontalRight ? _c('div', {
    staticClass: "uni-fab__item uni-fab__item--first"
  }) : _vm._e()], 2)]) : _vm._e(), _c('div', {
    staticClass: "uni-fab__circle uni-fab__plus",
    class: {
      'uni-fab__circle--leftBottom': _vm.leftBottom,
      'uni-fab__circle--rightBottom': _vm.rightBottom,
      'uni-fab__circle--leftTop': _vm.leftTop,
      'uni-fab__circle--rightTop': _vm.rightTop,
      'uni-fab__content--other-platform': !_vm.isAndroidNvue
    },
    style: {
      'background-color': _vm.styles.buttonColor,
      'bottom': _vm.nvueBottom
    },
    on: {
      "click": _vm._onClick
    }
  }, [_c('uni-icons', {
    staticClass: "fab-circle-icon",
    class: {
      'uni-fab__plus--active': _vm.isShow && _vm.content.length > 0
    },
    attrs: {
      "type": _vm.styles.icon,
      "color": _vm.styles.iconColor,
      "size": "32"
    }
  })], 1)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/uni-fab/uni-fab.vue?vue&type=script&lang=js&
let platform = 'other';

// platform = 'android'

/**
 * Fab 悬浮按钮
 * @description 点击可展开一个图形按钮菜单
 * @tutorial https://ext.dcloud.net.cn/plugin?id=144
 * @property {Object} pattern 可选样式配置项
 * @property {Object} horizontal = [left | right] 水平对齐方式
 * 	@value left 左对齐
 * 	@value right 右对齐
 * @property {Object} vertical = [bottom | top] 垂直对齐方式
 * 	@value bottom 下对齐
 * 	@value top 上对齐
 * @property {Object} direction = [horizontal | vertical] 展开菜单显示方式
 * 	@value horizontal 水平显示
 * 	@value vertical 垂直显示
 * @property {Array} content 展开菜单内容配置项
 * @property {Boolean} popMenu 是否使用弹出菜单
 * @event {Function} trigger 展开菜单点击事件，返回点击信息
 * @event {Function} fabClick 悬浮按钮点击事件
 */
/* harmony default export */ var uni_fabvue_type_script_lang_js_ = ({
  name: 'UniFab',
  emits: ['fabClick', 'trigger'],
  props: {
    pattern: {
      type: Object,
      default() {
        return {};
      }
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    vertical: {
      type: String,
      default: 'bottom'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    content: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: false
    },
    popMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fabShow: false,
      isShow: false,
      isAndroidNvue: platform === 'android',
      styles: {
        color: '#3c3e49',
        selectedColor: '#007AFF',
        backgroundColor: '#fff',
        buttonColor: '#007AFF',
        iconColor: '#fff',
        icon: 'plusempty'
      }
    };
  },
  computed: {
    contentWidth(e) {
      return (this.content.length + 1) * 55 + 15 + 'px';
    },
    contentWidthMin() {
      return '55px';
    },
    // 动态计算宽度
    boxWidth() {
      return this.getPosition(3, 'horizontal');
    },
    // 动态计算高度
    boxHeight() {
      return this.getPosition(3, 'vertical');
    },
    // 计算左下位置
    leftBottom() {
      return this.getPosition(0, 'left', 'bottom');
    },
    // 计算右下位置
    rightBottom() {
      return this.getPosition(0, 'right', 'bottom');
    },
    // 计算左上位置
    leftTop() {
      return this.getPosition(0, 'left', 'top');
    },
    rightTop() {
      return this.getPosition(0, 'right', 'top');
    },
    flexDirectionStart() {
      return this.getPosition(1, 'vertical', 'top');
    },
    flexDirectionEnd() {
      return this.getPosition(1, 'vertical', 'bottom');
    },
    horizontalLeft() {
      return this.getPosition(2, 'horizontal', 'left');
    },
    horizontalRight() {
      return this.getPosition(2, 'horizontal', 'right');
    },
    // 计算 nvue bottom
    nvueBottom() {
      return 30;
    }
  },
  watch: {
    pattern: {
      handler(val, oldVal) {
        this.styles = Object.assign({}, this.styles, val);
      },
      deep: true
    }
  },
  created() {
    this.isShow = this.show;
    if (this.top === 0) {
      this.fabShow = true;
    }
    // 初始化样式
    this.styles = Object.assign({}, this.styles, this.pattern);
  },
  methods: {
    _onClick() {
      this.$emit('fabClick');
      if (!this.popMenu) {
        return;
      }
      this.isShow = !this.isShow;
    },
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    },
    /**
     * 按钮点击事件
     */
    _onItemClick(index, item) {
      if (!this.isShow) {
        return;
      }
      this.$emit('trigger', {
        index,
        item
      });
    },
    /**
     * 获取 位置信息
     */
    getPosition(types, paramA, paramB) {
      if (types === 0) {
        return this.horizontal === paramA && this.vertical === paramB;
      } else if (types === 1) {
        return this.direction === paramA && this.vertical === paramB;
      } else if (types === 2) {
        return this.direction === paramA && this.horizontal === paramB;
      } else {
        return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/uni-fab/uni-fab.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_fab_uni_fabvue_type_script_lang_js_ = (uni_fabvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=1933c2ca&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=1933c2ca&prod&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/uni-fab/uni-fab.vue



;


/* normalize component */

var component = normalizeComponent(
  uni_fab_uni_fabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var uni_fab = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (uni_fab);


__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=UniFab.umd.js.map