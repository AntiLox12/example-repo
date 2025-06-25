import { EventsSDK } from "../../octarine-public/wrapper/index"

console.log("Hello world!")
EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
})
