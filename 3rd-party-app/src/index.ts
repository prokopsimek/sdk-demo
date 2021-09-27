import { runMyApp } from "./myapp"


const run = async () => {
  return runMyApp()
}


run().then(res => console.log(res)).catch(err => console.error(err))