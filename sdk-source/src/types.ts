export type SendSMSRequest = {
  /**
   * Destination phone number in the international phone format E.164 (https://en.wikipedia.org/wiki/E.164)
   *
   * @type {string}
   */
  to: string;


  /**
   * This parameter provides identification of the sending party, which can either be a phone number in the international format or an alphanumeric identifier with up to 11 characters.
   *
   * Some destination networks impose restrictions on the sender ID format. Please check the coverage list and contact us for more information.
   * 
   * @type {string}
   */
  from: string;


  /**
   * The message will be sent with characters encoded either in the GSM standard alphabet (GSM-7) or GSM Unicode alphabet (UCS-2).
   *  - GSM standard alphabet GSM-7. Maximum length is 160 characters per a single message and 152 characters per a concatenated message.
   *  - GSM Unicode alphabet UCS-2. Maximum length is 70 characters per a single message and 66 characters per a concatenated message.
   * 
   * tyntec automatically splits a sent message into concatenated messages if the message exceeds the given limits. 
   *  These concatenated messages are unified by the handset once again and 
   *  they are displayed as one message (if supported by the handset).
   * 
   * tyntec will charge for each part of the concatenated message as for an individual message.
   *
   * @type {string}
   */
  message: string;


  /**
   * 	Encoding selection between GSM7, UNICODE, or the default AUTO selection
   *
   * @type {string}
   */
  encoding?: string;


  /**
   * Which gateway to use for the message delivery
   *
   * @type {string}
   */
  gateway?: string;


  /**
   * Whether this message is subject to conversion ratio
   *
   * @type {boolean}
   */
  conversion?: boolean;


  /**
   * Any future date in the format of “yyyy-MM-ddT-HH:mm:ss+HH:mm” ISO 8601; if not set, the message will be sent immediately. The default time zone is UTC.
   *
   * @type {Date}
   */
  sendDateTime?: Date;


  /**
   * Message validity in minutes
   *
   * @type {string}
   */
  validity?: string;


  /**
   * Customer reference attached to the Delivery Reports
   *
   * @type {string}
   */
  reference?: string;


  /**
   * Your URL for delivering the Delivery Reports; leave empty for no Delivery Report.
   *
   * @type {string}
   */
  callbackUrl?: string;


  /**
   * Your prefered HTTP method for the Delivery Report callback; possible values are POST/GET.
   *
   * @type {("POST" | "GET")}
   */
  callbackMethod?: "POST" | "GET";


  /**
   * Up to how many parts you allow this message can concatenated
   *
   * @type {number}
   */
  partLimit?: number;


  /**
   * Controls the transcoding rate of the original message to GSM-7 compatible characters; this can be used to compress the message.
   *
   * @type {number}
   */
  trate?: number;


  /**
   * Controls the replacement rate of characters incompatible with GSM-7; they are replaced with '.'.
   *
   * @type {number}
   */
  mrate?: number;


  /**
   * Whether you allow the transcoder to try an upper case version of the content in the case this improves the produced parts of the message
   *
   * @type {boolean}
   */
  upperCased?: boolean;


  /**
   * Whether you allow the transcoder to keep emojis
   *
   * @type {boolean}
   */
  keepEmojis?: boolean;


  /**
   * Whether this SMS will be delivered as flash; some networks do not support it.
   *
   * @type {boolean}
   */
  flash?: boolean;
}

export enum Currency {
  EUR = "EUR",
  USD = "USD"
}

export type SendSMSStatus = {
  DELIVERED: "DELIVERED",
  ERROR: "ERROR"
}

export type SendSMSResponse = {
  doneDate: Date,
  errorCode: string,
  errorReason: string,
  from: string,
  href: string,
  mccmnc: string,
  parts: SendSMSResponsePart[],


  /**
   * Overall price for all parts of the message
   *
   * @type {number}
   */
  overallPrice: number,
  priceEffective: Date,
  reference: string,
  requestId: string,
  sentDate: Date,
  size: number,

  /**
   * Delivery status of the message
   *
   * @type {SendSMSStatus}
   */
  status: SendSMSStatus,
  submitDate: Date,
  to: string,
  ttid: number
}

type SendSMSResponsePart = {
  currency: Currency,
  deliveryState: string,
  doneDate: Date,
  errorCode: string,
  partId: string,
  price: number,
  priceEffective: Date,
  sentDate: Date,
  statusText: string
}
