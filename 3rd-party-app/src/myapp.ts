import MySDK from "sdk-source"

export const runMyApp = async () => {

  const sdk = new MySDK("mysecretapikey")

  const { data } = await sdk.sendSMS({ from: "me", to: "123456789", message: "message" })

  
  // exists
  data.status
  data.to
  data.ttid

  // does not exist
  data.something
  data.idontknowwhatexists
  data.noproblem
  data.lol


}