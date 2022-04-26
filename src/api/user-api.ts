/* eslint-disable */

import axios from "axios"
import API_ENDPOINT from "../constants/config"

const UserApi = {
  async checkWord(word: string) {
    try {
      const result = (
        await axios.post(`${API_ENDPOINT.API_ENDPOINT}/check?word=${word}`)
      ).data
      return result
    } catch (error) {
      console.log(error)
    }
  },
  async getTodayWord() {
    try {
      const result = (await axios.get(`${API_ENDPOINT.API_ENDPOINT}/todayword`))
        .data
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async getRandomWord() {
    try {
      const result = (
        await axios.get(`${API_ENDPOINT.API_ENDPOINT}/randomword`)
      ).data
      return result
    } catch (error) {
      console.log(error)
      return error
    }
  },
  async compareWords(needed: string, given: string) {
    try {
      const result = (
        await axios.post(
          `${API_ENDPOINT.API_ENDPOINT}/compare?a=${needed}&b=${given}`
        )
      ).data
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserApi

/* eslint-enable */
