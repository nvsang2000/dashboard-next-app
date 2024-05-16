import axiosInstance from '../utils/axios'
import queryString from 'query-string'

interface UploadProps {
  url: string
  id: string
}

interface FetchDto {
  search?: string
  page?: number
  limit?: number
}

// API  meeting
export const getListMeetApi = (payload: any) =>
  axiosInstance.get(`/meet/list?${queryString.stringify(payload)}`)

export const getMeetApi = (id: string) => axiosInstance.get(`/meet/${id}`)
export const createMeetApi = (payload: any) =>
  axiosInstance.post('/meet', payload)
export const updateMeetApi = (id: string, payload: any) =>
  axiosInstance.put(`/meet/${id}`, payload)
export const deleteMeetApi = (id: string) => axiosInstance.delete(`/meet/${id}`)
// API domains
export const getDomainApi = (id: any) => axiosInstance.get(`/domains/${id}`)
export const getDomainsApi = (payload: any) =>
  axiosInstance.get(`/domains?${queryString.stringify(payload)}`)
export const getListDomainApi = (payload: any) =>
  axiosInstance.get(`/domains/list?${queryString.stringify(payload)}`)
export const createDomainApi = (payload: any) =>
  axiosInstance.post('/domains', payload)
export const updateDomainApi = (id: string, payload: any) =>
  axiosInstance.put(`/domains/${id}`, payload)
export const removeDomainApi = (id: string) =>
  axiosInstance.delete(`/domains/${id}`)

// API pulic web
export const getDomainPublicApi = (id: any) =>
  axiosInstance.get(`/api/domain/${id}`)
export const getFormPublicApi = (id: any) =>
  axiosInstance.get(`/api/form/${id}`)
export const getUserPublicApi = (id: string) =>
  axiosInstance.get(`/api/user/${id}`)
export const getBookedTimePublicApi = (payload: any) =>
  axiosInstance.get(`/api/booked-time?${queryString.stringify(payload)}`)
export const getMeetTimeTimePublicApi = (payload: any) =>
  axiosInstance.get(`/api/meet-time?${queryString.stringify(payload)}`)
export const createEventCalendarApi = (id: string, payload: any) =>
  axiosInstance.post(`/api/booking/${id}`, payload)

// API policy
export const getPoliciesApi = (payload: FetchDto & { isActive?: boolean }) =>
  axiosInstance.get(`/policies?${queryString.stringify(payload)}`)
export const getPolicyListApi = (payload: FetchDto & { isActive?: boolean }) =>
  axiosInstance.get(`/policies/list?${queryString.stringify(payload)}`)
export const getPolicyApi = (id: number) => axiosInstance.get(`/policies/${id}`)
export const createPolicyApi = (payload: any) =>
  axiosInstance.post('/policies', payload)
export const updatePolicyApi = (id: number, payload: any) =>
  axiosInstance.put(`/policies/${+id}`, payload)
export const removePolicyApi = (id: number) =>
  axiosInstance.delete(`/policies/${+id}`)
export const getPermissionSubjectsApi = () =>
  axiosInstance.get('/policies/subjects')

// API auth
export const loginApi = (params: any) =>
  axiosInstance.post('/auth/login', params)
export const logoutApi = () => axiosInstance.get('/auth/logout')
export const whoAmI = () => axiosInstance.get('/auth/profile')
export const registerApi = (params: any) =>
  axiosInstance.post('/auth/signup', params)
export const updateProfileApi = (payload: any) =>
  axiosInstance.put('/auth/profile', payload)
export const authGoogleApi = (params: any) =>
  axiosInstance.put('/auth/google', params)

// API user
export const getAllUserApi = (payload: FetchDto) =>
  axiosInstance.get(`/users?${queryString.stringify(payload)}`)
export const getUserApi = (id: string) => axiosInstance.get(`/users/${id}`)
export const deleteUserApi = (id: string) =>
  axiosInstance.delete(`/users/${id}`)
export const updateUserApi = (id: string, params: any) =>
  axiosInstance.put(`/users/${id}`, params)
export const createUserApi = (params: any) =>
  axiosInstance.post('/users', params)

// API staff
export const getAllStaffApi = (payload: FetchDto) =>
  axiosInstance.get(`/staffs?${queryString.stringify(payload)}`)
export const getStaffListApi = (payload: FetchDto) =>
  axiosInstance.get(`/staffs/list?${queryString.stringify(payload)}`)
export const getStaffApi = (id: string) => axiosInstance.get(`/staffs/${id}`)
export const deleteStaffApi = (id: string) =>
  axiosInstance.delete(`/staffs/${id}`)
export const updateStaffApi = (id: string, params: any) =>
  axiosInstance.put(`/staffs/${id}`, params)
export const createStaffApi = (params: any) =>
  axiosInstance.post('/staffs', params)

// API group
export const getAllGroupApi = (payload: FetchDto) =>
  axiosInstance.get(`/groups?${queryString.stringify(payload)}`)
export const getListGroupApi = (payload: FetchDto) =>
  axiosInstance.get('/groups/list')
export const getGroupApi = (id: string) => axiosInstance.get(`/groups/${id}`)
export const deleteGroupApi = (id: string) =>
  axiosInstance.delete(`/groups/${id}`)
export const updateGroupApi = (id: string, params: any) =>
  axiosInstance.put(`/groups/${id}`, params)
export const createGroupApi = (params: any) =>
  axiosInstance.post('/groups', params)

// API form
export const getAllFormApi = (payload: FetchDto) =>
  axiosInstance.get(`/forms?${queryString.stringify(payload)}`)
export const getFormApi = (id: string) => axiosInstance.get(`/forms/${id}`)
export const deleteFormApi = (id: string) =>
  axiosInstance.delete(`/forms/${id}`)
export const updateFormApi = (id: string, params: any) =>
  axiosInstance.put(`/forms/${id}`, params)
export const createFormApi = (params: any) =>
  axiosInstance.post('/forms', params)
export const updateStylesApi = (id: string, params: any) =>
  axiosInstance.put(`/forms/styles/${id}`, params)

// API calendar
export const getAllCalendarApi = (payload: FetchDto) =>
  axiosInstance.get(`/calendar?${queryString.stringify(payload)}`)
export const getCalendarApi = (id: string) =>
  axiosInstance.get(`/calendar/${id}`)
export const deleteCalendarApi = (id: string) =>
  axiosInstance.delete(`/calendar/${id}`)
export const updateCalendarApi = (id: string, params: any) =>
  axiosInstance.put(`/calendar/${id}`, params)
export const createCalendarApi = (params: any) =>
  axiosInstance.post('/calendar', params)
export const syncEventCalendarApi = (id: String) =>
  axiosInstance.put(`/calendar/sync/${id}`)
export const getEventsGoogleApi = (payload: any) =>
  axiosInstance.get(`/calendar/google/events?${queryString.stringify(payload)}`)
export const getEventGoogleApi = (id: string) =>
  axiosInstance.get(`/calendar/google/events/${id}`)

export const uploadImage = async (file: File) => {
  const formData = new FormData()
  formData.append('image', file)

  return axiosInstance
    .post('/files/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({ data }): UploadProps => {
      return { url: data?.url, id: data?.id }
    })
    .catch((err) => {
      console.log('hmm ', err)
    })
}
