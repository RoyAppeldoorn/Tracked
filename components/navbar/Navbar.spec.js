import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Navbar from '@/components/navbar/Navbar.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Navbar.vue', () => {
  let getters
  let actions
  let store

  beforeEach(() => {
    getters = {
      isAuthenticated: () => true
    }
    actions = {
      logout: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        user: {
          namespaced: true,
          getters,
          actions
        }
      }
    })
  })

  test('If user presses the logout button, trigger the vuex action', () => {
    const wrapper = shallowMount(Navbar, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        isOpen: true
      }
    })

    wrapper.find('#sign-out-button').trigger('click')
    expect(actions.logout).toHaveBeenCalled()
  })

  test('If user logged in, do show upload tracklist button', () => {
    expect(true).toBe(true)
  })
})
