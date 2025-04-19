import type { App } from 'vue'
import type { SpinkitProps } from './index.vue'
import Component from './index.vue'

let instance: App<Element>
let mountNode: HTMLElement

function loadingShow(options: SpinkitProps, mountNode: HTMLDivElement) {
  instance = createApp(Component, options as any)
  mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  instance.mount(mountNode)
}

function loadingHide(mountNode: HTMLDivElement) {
  instance.unmount()
  document.body.removeChild(mountNode)
}

export {
  loadingShow,
  loadingHide,
}
