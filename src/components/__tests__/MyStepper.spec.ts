import {describe, test ,expect} from "vitest";
import {mount} from "@vue/test-utils";
import MyStepper from "@/components/MyStepper.vue";

const wrapper = mount(MyStepper, {
  props:{
    max: 1
  }
})
describe('MyStepper', () => {
  test('初期値が0であること',()=>{
    expect(wrapper.find('[data-testid=stepper-value]').text()).toContain('0')
  })

  test('ボタンをクリックするとカウントが1になること',async ()=>{
    await wrapper.find('[data-testid=increment]').trigger('click')

    expect(wrapper.find('[data-testid=stepper-value]').text()).toContain('1')
  })
})
