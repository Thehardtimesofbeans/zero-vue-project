import { shallowMount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    return () => {
      return h('div', props.msg)
    }
  },
})
// 预设
beforeEach(() => {
  console.log('before each')
})

// 清理
afterEach(() => {
  console.log('after each')
})

beforeAll(() => {
  console.log('before all')
})

afterAll(() => {
  console.log('after all')
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    })

    // setTimeout(() => {
    //   expect(wrapper.text()).toMatch(msg)
    //   done()
    // }, 100)

    // return new Promise<void>((resolve) => {
    //   expect(wrapper.text()).toEqual(msg)
    //   resolve()
    // })

    await wrapper.setProps({
      msg: '123',
    })
    expect(wrapper.text()).toEqual('123')

    // expect(wrapper.text()).toBe(msg) // Object.js ，值一样，比如是object，引用对象地址都一样

    // expect(wrapper.text()).toEqual(msg)
  })

  it('should work', () => {
    expect(1 === 1).toEqual(true)
  })
})
