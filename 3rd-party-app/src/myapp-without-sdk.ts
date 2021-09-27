import axios from "axios"

export const runMyAppWithoutSdk = async () => {

  
  const { data } = await axios.post("https://api.tyntec.com/messaging/v1/sms", {
    to: "123456789",
    from: "me",
    message: "message to someone"
  },
  {
    headers: {
      apitoken: "mysecretapikey"
    }
  })

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