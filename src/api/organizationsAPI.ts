import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL

export const organizationsAPI = axios.create({
  baseURL: `${baseURL}/organizations`,
})

export default organizationsAPI

// all methods below will be deprecated/deleted in the future
export const getSingleOrganizationFactory = function(organizationId) {
  return async function() {
    const accessToken = localStorage.getItem('accessToken')

    const data = await organizationsAPI.get(`/${organizationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }
}

export const getOrganizationMembersFactory = function(organizationId) {
  return async function() {
    const accessToken = localStorage.getItem('accessToken')

    const data = await organizationsAPI.get(`/${organizationId}/members`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    return data
  }
}
