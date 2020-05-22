import XHR from './xhr'

const proxyHandler = {
  set(target, name, value) {
    if (!Reflect.get(target, 'match') && Reflect.get(target, 'custom')) {
      const custom = Reflect.get(target, 'custom')
      custom.xhr && Reflect.set(custom.xhr, name, value)
    }
    return Reflect.set(target, name, value)
  },

  // get(target, name) {
  //   return Reflect.get(target, name)
  // },

  // apply(target, thisBinding, args) {
  //   return Reflect.apply(target, thisBinding, args)
  // },
}

export default new Proxy(XHR, {
  construct(target, args) {
    const xhr = Reflect.construct(target, args)
    return new Proxy(xhr, proxyHandler)
  },
})
