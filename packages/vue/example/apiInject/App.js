// 组件 provide 和 inject 功能
import {
  h,
  inject,
  provide,
} from '../../dist/mini-vue.esm-bundler.js'

const Consumer = {
  setup() {
    const foo = inject('foo')
    const bar = inject('bar')
    const baz = inject('baz')
    return () => {
      return h('div', {}, `${foo}-${bar}-${baz}`)
    }
  },
}

const ProviderTwo = {
  setup() {
    // override parent value
    provide('foo', 'fooOverride')
    provide('baz', 'baz')
    const foo = inject('foo')
    // 这里获取的 foo 的值应该是 "foo"
    // 这个组件的子组件获取的 foo ，才应该是 fooOverride
    if (foo !== 'foo')
      throw new Error('Foo should equal to foo')

    console.log('This is test message !')

    return () => h(Consumer)
  },
}

const ProviderOne = {
  setup() {
    provide('foo', 'foo')
    provide('bar', 'bar')
    return () => h(ProviderTwo)
  },
}

export default {
  name: 'App',
  setup() {
    return () => h('div', {}, [h('p', {}, 'apiInject'), h(ProviderOne)])
  },
}
