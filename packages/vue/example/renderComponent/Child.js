import { h, reactive, ref } from '../../dist/mini-vue.esm-bundler.js'
export default {
  name: 'Child',
  setup(props, context) {
    console.log('props------------------>', props.msg)
    console.log('context---------------->', context)

    return {
      msg: props.msg,
    }
  },
  render() {
    return h('div', {}, `child${this.msg}`)
  },
}
