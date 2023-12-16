import { toRaw } from 'vue'
import type { ApiResponse, ContactMessage } from '@/types'
import { getMailerUrl } from '@/utils/api'

export const sendMessage = async (contactMessage: ContactMessage): Promise<any> => {
  const mailerUrl: string = getMailerUrl('contact')
  const { data, pending, error, refresh } = await useFetch(
    mailerUrl,
    {
      method: "POST",
      body: contactMessage
    }
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as any
}
