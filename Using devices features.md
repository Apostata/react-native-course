# Using Native Devices features

## Camera
`expo install expo-image-picker`
 configure permissions:

at `app.json` file. add a plugins sections, if isn't already there, with the folloing instructions:
```json
"expo":{
	...
	"plugins": [
		[
			"expo-image-picker",
			{
			"cameraPermission": "The app accesses your camera to let you register your favorite places."
			}
		]
	]
	...
}
```