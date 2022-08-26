import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080/api/v1'

export const organizationsAPI = axios.create({
  baseURL: `${baseURL}/organizations`,
})

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

export default organizationsAPI
