import axios, { AxiosResponse } from "axios"
import {SendSMSRequest, SendSMSResponse} from "./types"

const BASE_URL = "https://api.tyntec.com"

/**
 * SDK for My API
 *
 * @export
 * @class MySDK
 */
export default class MySDK {
  private apiToken!: string

  /**
   * Creates an instance of MySDK.
   * @param {string} apiToken Your private token for the API
   */
  constructor(apiToken: string) {
    this.apiToken = apiToken
  }

  /**
   * Sends an SMS via the POST HTTP method with parameters defined in the request body.
   *
   * @param {SendSMSRequest} params
   */
  sendSMS = async (params: SendSMSRequest) => {
    return axios.post<SendSMSResponse>(BASE_URL + "/messaging/v1/sms", params, { headers: { apikey: this.apiToken } })
  }



  
  sendSomething1 = async (params: SendSMSRequest) => {
    return axios.post<SendSMSResponse>(BASE_URL + "/messaging/v1/sms", params, { headers: { apikey: this.apiToken } })
  }

  sendSomething2 = async (params: SendSMSRequest) => {
    return axios.post<SendSMSResponse>(BASE_URL + "/messaging/v1/sms", params, { headers: { apikey: this.apiToken } })
  }

  sendSomething3 = async (params: SendSMSRequest) => {
    return axios.post<SendSMSResponse>(BASE_URL + "/messaging/v1/sms", params, { headers: { apikey: this.apiToken } })
  }
}