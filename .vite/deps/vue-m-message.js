import {
  Fragment,
  Transition,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  isVNode,
  normalizeClass,
  normalizeStyle,
  onBeforeMount,
  onMounted,
  openBlock,
  reactive,
  ref,
  render,
  renderSlot,
  resolveComponent,
  toDisplayString,
  withCtx
} from "./chunk-NQAMSBYT.js";
import "./chunk-LQ2VYIYD.js";

// node_modules/.pnpm/vue-m-message@4.0.2/node_modules/vue-m-message/dist/index.es.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var icons = {};
var addIcon = function(name, options) {
  icons[name] = options;
};
var Icon = defineComponent({
  name: "Icon",
  props: {
    name: String,
    color: String
  },
  computed: {
    svg() {
      if (!this.name)
        return void 0;
      return icons[this.name];
    }
  },
  render(h) {
    const svg = this.svg;
    if (!svg) {
      console.warn(`The name of '${this.name}' could not be found.`);
      return createVNode("span", {
        "class": "m-svg-icon"
      }, null);
    }
    const style2 = {
      color: this.color ? this.color : svg.fill ? svg.fill : null
    };
    return createVNode("span", {
      "class": ["m-svg-icon", "m-svg-icon--" + this.name]
    }, [createVNode("svg", {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": svg.viewBox,
      "style": style2,
      "class": svg.class
    }, [svg.defs && createVNode("defs", {
      "innerHTML": svg.defs
    }, null), svg.path && createVNode("path", {
      "fill": "currentColor",
      "d": svg.path
    }, null), svg.html && createVNode("g", {
      "innerHTML": svg.html
    }, null), this.$slots.default])]);
  }
});
Icon.add = addIcon;
var error = {
  name: "error",
  fill: "#F56C6C",
  viewBox: "0 0 1024 1024",
  path: "M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M579.7,512l101.6-101.6 c18.7-18.7,18.7-49,0-67.7c-18.7-18.7-49-18.7-67.7,0l0,0L512,444.3L410.4,342.7c-18.7-18.7-49-18.7-67.7,0s-18.7,49,0,67.7 L444.3,512L342.7,613.6c-18.7,18.7-18.7,49,0,67.7c18.7,18.7,49,18.7,67.7,0L512,579.7l101.6,101.6c18.7,18.7,49,18.7,67.7,0 c18.7-18.7,18.7-49,0-67.7L579.7,512z"
};
var info = {
  name: "info",
  fill: "#1CADF2",
  viewBox: "0 0 1024 1024",
  path: "M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72z M581,673.9 c-33.2,49.9-67,88.3-123.8,88.3c-38.8-6.3-54.7-34.1-46.3-62.4L484,457.6c1.8-5.9-1.2-12.3-6.6-14.2c-5.4-1.9-15.9,5.1-25.1,15.1 l-44.2,53.2c-1.2-8.9-0.1-23.7-0.1-29.6c33.2-49.9,87.8-89.2,124.8-89.2c35.2,3.6,51.8,31.7,45.7,62.6l-73.6,243.3 c-1,5.5,1.9,11.1,6.9,12.8c5.4,1.9,16.8-5.1,26-15.1l44.2-53.1C583,652.3,581,667.9,581,673.9z M571.2,357.6 c-28,0-50.6-20.4-50.6-50.4c0-30,22.7-50.3,50.6-50.3c28,0,50.6,20.4,50.6,50.3C621.8,337.3,599.1,357.6,571.2,357.6z"
};
var success = {
  name: "success",
  fill: "#17B77E",
  viewBox: "0 0 1024 1024",
  path: "M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72L512,72z M758.9,374 c-48.5,48.6-81.2,76.9-172.3,186.8c-52.6,63.4-102.3,131.5-102.7,132L462.1,720c-4.6,6.1-13.5,6.8-19.1,1.6L267.9,558.9 c-17.8-16.5-18.8-44.4-2.3-62.2s44.4-18.8,62.2-2.3l104.9,97.5c5.5,5.1,14.1,4.5,18.9-1.3c16.2-20.1,38.4-44.5,62.4-68.6 c90.2-90.9,145.6-139.7,175.2-161.3c36-26.2,77.3-48.6,87.3-36.2C792,343.9,782.5,350.3,758.9,374L758.9,374z"
};
var warning = {
  name: "warning",
  fill: "#FFC603",
  viewBox: "0 0 1024 1024",
  path: "M512,952C269,952,72,755,72,512S269,72,512,72s440,197,440,440S755,952,512,952z M510,770.8 c30.4,0,55-24.6,55-55s-24.6-55-55-55s-55,24.6-55,55S479.6,770.8,510,770.8z M509.8,255.3c-39.3,0-71.2,31.9-71.2,71.2 c0,3.1,0.2,6.2,0.6,9.3L472.4,588c2.5,19.3,18.9,33.7,38.4,33.7c19.4,0,35.8-14.4,38.2-33.7l31.8-252.2c5-39.2-22.8-75-62-79.9 C515.9,255.5,512.8,255.3,509.8,255.3z"
};
var loading = {
  name: "loading",
  viewBox: "0 0 50 50",
  html: '<g stroke="#f2f2f2" stroke-width="3.5"  stroke-linecap="round" fill="none"><circle cx="25" cy="25" r="20" class="m-loading-icon-bg-path"></circle><circle cx="25" cy="25" r="20" stroke="#20a0ff" stroke-dasharray="90, 150" stroke-dashoffset="0" class="m-loading-icon-active-path"><animate attributeName="stroke-dasharray" dur="1.5s" values="1,200;90,150;90,150" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" values="0;-40px;-120px" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></g>'
};
Icon.add(error.name, error);
Icon.add(info.name, info);
Icon.add(success.name, success);
Icon.add(warning.name, warning);
Icon.add(loading.name, loading);
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function useTimeout(cb, time) {
  const t = ref(0);
  t.value = window.setTimeout(cb, time);
  return {
    stop() {
      window.clearTimeout(t.value);
    }
  };
}
var _sfc_main = defineComponent({
  components: { Icon },
  name: "m-message",
  emits: ["close", "destroy", "collapsed"],
  props: {
    id: String,
    type: {
      type: String,
      default: "info"
    },
    title: String,
    message: String,
    iconURL: String,
    duration: {
      type: Number,
      default: 3e3
    },
    isCollapsed: Boolean,
    collapsable: Boolean,
    supportHTML: Boolean,
    width: String,
    className: String,
    wrapperClassName: String,
    closable: Boolean,
    stopTimerOnHover: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { expose, emit }) {
    const state = reactive({
      visible: true,
      collapsed: props.isCollapsed,
      timer: null
    });
    let stopTimer;
    const startTimer = () => {
      if (props.duration < 0)
        return;
      ({ stop: stopTimer } = useTimeout(() => {
        close();
      }, props.duration));
    };
    const clearTimer = () => {
      stopTimer == null ? void 0 : stopTimer();
    };
    const close = () => {
      state.visible = false;
    };
    const triggerCollapse = () => {
      state.collapsed = !state.collapsed;
      emit("collapsed", state.collapsed);
    };
    const handleClose = () => {
      state.visible = false;
    };
    const handleClearTimer = () => {
      props.stopTimerOnHover && clearTimer();
    };
    const handleStartTimer = () => {
      props.stopTimerOnHover && startTimer();
    };
    onBeforeMount(() => {
      clearTimer();
    });
    onMounted(() => {
      startTimer();
    });
    expose({
      close
    });
    return {
      state,
      handleClearTimer,
      handleStartTimer,
      triggerCollapse,
      handleClose
    };
  }
});
var _hoisted_1 = ["id"];
var _hoisted_2 = {
  key: 0,
  class: "m-message-icons"
};
var _hoisted_3 = ["src"];
var _hoisted_4 = { class: "m-message-content" };
var _hoisted_5 = {
  key: 0,
  class: "m-message--title"
};
var _hoisted_6 = ["innerHTML"];
var _hoisted_7 = {
  key: 0,
  class: "m-message--description"
};
var _hoisted_8 = { class: "m-message--control" };
var _hoisted_9 = createBaseVNode("svg", {
  viewBox: "0 0 35 35",
  width: "20",
  height: "20",
  version: "1.1",
  fill: "currentColor"
}, [
  createBaseVNode("path", { d: "M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z" })
], -1);
var _hoisted_10 = [
  _hoisted_9
];
var _hoisted_11 = createBaseVNode("svg", {
  viewBox: "0 0 35 35",
  width: "20",
  height: "20",
  version: "1.1",
  fill: "currentColor"
}, [
  createBaseVNode("path", { d: "M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z" })
], -1);
var _hoisted_12 = [
  _hoisted_11
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  return openBlock(), createBlock(Transition, {
    name: "m-message-fade",
    appear: "",
    mode: "in-out",
    onBeforeLeave: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("close")),
    onAfterLeave: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      _ctx.state.visible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["m-message-wrapper", _ctx.wrapperClassName]),
        id: _ctx.id,
        style: normalizeStyle({
          width: _ctx.width
        })
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["m-message", _ctx.className]),
          onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.handleClearTimer && _ctx.handleClearTimer(...args)),
          onMouseleave: _cache[3] || (_cache[3] = (...args) => _ctx.handleStartTimer && _ctx.handleStartTimer(...args))
        }, [
          _ctx.iconURL || _ctx.type ? (openBlock(), createElementBlock("div", _hoisted_2, [
            _ctx.iconURL ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.iconURL,
              class: "m-message--icon"
            }, null, 8, _hoisted_3)) : _ctx.type ? (openBlock(), createBlock(_component_icon, {
              key: 1,
              name: _ctx.type,
              class: "m-message--icon"
            }, null, 8, ["name"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4, [
            _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                createTextVNode(toDisplayString(_ctx.title), 1)
              ])
            ])) : createCommentVNode("", true),
            _ctx.supportHTML && _ctx.message ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              !_ctx.state.collapsed ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "m-message--description",
                innerHTML: _ctx.message
              }, null, 8, _hoisted_6)) : createCommentVNode("", true)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              !_ctx.state.collapsed ? (openBlock(), createElementBlock("div", _hoisted_7, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(_ctx.message), 1)
                ])
              ])) : createCommentVNode("", true)
            ], 64))
          ]),
          createBaseVNode("div", _hoisted_8, [
            _ctx.collapsable && (_ctx.title || _ctx.$slots.title) ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: normalizeClass(["m-message--button m-message--arrow-down", {
                "is-collapsed": _ctx.state.collapsed
              }]),
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.triggerCollapse && _ctx.triggerCollapse(...args))
            }, _hoisted_10, 2)) : createCommentVNode("", true),
            _ctx.closable ? (openBlock(), createElementBlock("button", {
              key: 1,
              class: "m-message--button m-message--close",
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
            }, _hoisted_12)) : createCommentVNode("", true)
          ])
        ], 34)
      ], 14, _hoisted_1)) : createCommentVNode("", true)
    ]),
    _: 3
  });
}
var MessageComponent = _export_sfc(_sfc_main, [["render", _sfc_render]]);
var instances = [];
var seed = 0;
var containers = {};
var globalsOptions = {};
var defaultOptions = {
  stopTimerOnHover: true,
  duration: 3e3
};
var message = (options) => {
  const id = "m-message-" + seed++;
  const props = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, defaultOptions), globalsOptions), options), {
    id
  });
  delete props.hasMask;
  delete props.position;
  delete props.zIndex;
  const position = options.position || "top-center";
  const hasMask = options.hasMask || false;
  const containerKey = position + (hasMask ? "-mask" : "");
  let container = containers[containerKey];
  if (!container) {
    container = containers[containerKey] = {
      el: document.createElement("div"),
      count: 1
    };
    container.el.className = [
      "m-message-container",
      "is-" + position,
      hasMask ? "has-mask" : ""
    ].filter(function(e) {
      return !!e;
    }).join(" ");
    document.body.appendChild(container.el);
  } else {
    container.count++;
  }
  if (options.zIndex) {
    container.el.style.zIndex = String(options.zIndex);
  }
  let children = null;
  if (isVNode(options.message)) {
    children = { default: () => options.message };
    props.message = "";
  } else if (typeof options.message === "function") {
    children = { default: options.message };
    props.message = "";
  }
  const vm = createVNode(MessageComponent, props, children);
  const div = document.createElement("div");
  vm.appContext = options.ctx || message._context || null;
  vm.props.onClose = options.onClose;
  vm.props.onDestroy = () => {
    container.count--;
    if (container.count === 0) {
      delete containers[containerKey];
      container.el.remove();
    }
    render(null, div);
  };
  render(vm, div);
  if (position.indexOf("bottom") === 0 && container.el.firstChild) {
    container.el.insertBefore(div.firstElementChild, container.el.firstChild);
  } else {
    container.el.appendChild(div.firstElementChild);
  }
  const instance = {
    id,
    close() {
      var _a, _b;
      (_b = (_a = vm == null ? void 0 : vm.component) == null ? void 0 : _a.exposed) == null ? void 0 : _b.close();
    }
  };
  instances.push(instance);
  return instance;
};
message.success = (msg, options) => message(__spreadProps(__spreadValues({}, options), { type: "success", message: msg }));
message.info = (msg, options) => message(__spreadProps(__spreadValues({}, options), { type: "info", message: msg }));
message.warning = (msg, options) => message(__spreadProps(__spreadValues({}, options), { type: "warning", message: msg }));
message.error = (msg, options) => message(__spreadProps(__spreadValues({}, options), { type: "error", message: msg }));
message.loading = (msg, options) => message(__spreadProps(__spreadValues({}, options), { type: "loading", message: msg }));
message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};
message.setDefault = (opts) => {
  globalsOptions = __spreadValues({}, opts);
};
var withInstall = (t, fn) => {
  t.install = fn;
  return t;
};
var index = withInstall(message, function(app, options = {}) {
  message._context = app._context;
  app.config.globalProperties["$" + (options.name || "mmessage")] = message;
  if (options.defaultOptions) {
    message.setDefault(options.defaultOptions);
  }
});
export {
  index as default
};
//# sourceMappingURL=vue-m-message.js.map
