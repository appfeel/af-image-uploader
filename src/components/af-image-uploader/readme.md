# af-image-uploader



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                 | Type     | Default                   |
| ------------------- | --------------------- | ------------------------------------------- | -------- | ------------------------- |
| `activeColor`       | `active-color`        | The color when it is active                 | `string` | `'green'`                 |
| `baseColor`         | `base-color`          | The default color                           | `string` | `'#ccc'`                  |
| `height`            | `height`              | Height of the component                     | `string` | `'300px'`                 |
| `hoverOutlineColor` | `hover-outline-color` | The hover outline color                     | `string` | `'#aaa'`                  |
| `iconSrc`           | `icon-src`            | Icon source image (svg, png, jpg, gif, ...) | `string` | `UPLOAD_ICON`             |
| `overlayColor`      | `overlay-color`       | The overlay color                           | `string` | `'rgba(255,255,255,0.5)'` |
| `width`             | `width`               | Width of the component                      | `string` | `'100%'`                  |


## Events

| Event           | Description                                              | Type                  |
| --------------- | -------------------------------------------------------- | --------------------- |
| `change`        | Raised when the upload has finished                      | `CustomEvent<File>`   |
| `invalidformat` | Raised when the file tried to upload was in wrong format | `CustomEvent<string>` |
| `load`          | Raised when the image has finished to load               | `CustomEvent<File>`   |


## Methods

### `getFile() => Promise<File>`

Obtains the selected or dropped file if any, or `undefined` if none available

#### Returns

Type: `Promise<File>`

selected or dropped file

### `reset() => void`

Reset the component to void state

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
