import { ref, onMounted } from 'vue'
import { createToastInterface } from 'vue-toastification'

const toastState = ref(null)

const initializeToast = () => {
  toastState.value = createToastInterface()
}

const showToast = (message, options = {}) => {
  if (!toastState.value) {
    initializeToast()
  }

  toastState.value(message, options)
}

// eslint-disable-next-line import/prefer-default-export
export const useToastService = () => {
  onMounted(initializeToast)

  return {
    showToast,
  }
}
