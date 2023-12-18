import type { Ref } from 'vue'
import type { ContactMessage } from '@/types'

export const getBlankContactMessage = (): ContactMessage => {
  return {
    token: '',
    name: '',
    email: '',
    message: ''
  }
}

export const hasFields = (contactMsg: Ref<ContactMessage>): boolean => {
  return Boolean(
    contactMsg.value.token &&
    contactMsg.value.name &&
    contactMsg.value.email &&
    contactMsg.value.message
  )
}

export const resetForm = (contactMsg: Ref<ContactMessage>): void => {
  contactMsg.value = getBlankContactMessage()
}
