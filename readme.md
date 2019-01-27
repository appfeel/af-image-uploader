

AppFeel Image Uploader WebComponent<br>[![License][license]][npm-url] [![NPM version][npm-version]][npm-url] [![NPM downloads][npm-downloads]][npm-url] [![Built With Stencil][stencil]][stencil-url]
==========================


[stencil]: https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square
[stencil-url]: https://stenciljs.com
[npm-url]: https://www.npmjs.com/package/af-image-uploader
[license]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[npm-version]: https://img.shields.io/npm/v/af-image-uploader.svg?style=flat
[npm-downloads]: https://img.shields.io/npm/dm/af-image-uploader.svg?style=flat


This web component implements a drag and drop component to upload and preview images.
Example of use:

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>AppFeel Image Uploader WebComponent</title>
    <script src='https://unpkg.com/af-image-uploader@latest/dist/af-image-uploader.js'></script>

</head>

<body>

    <af-image-uploader id="imageUploader" width="300px" height="100px" onchange="onChange(event)" onload="onLoad(event)"></af-image-uploader>
    <button onclick="reset()">Reset</button>
    <button onclick="getFile()">Get File</button>
</body>
<script>
    const imageUploader = document.getElementById('imageUploader');
    function reset() {
        imageUploader.reset();
    }
    function onChange(image) {
        console.log('Image selected', image.detail);
    }
    function onLoad(image) {
        console.log('Image preview completed', image.detail);
    }
    async function getFile() {
        console.log('Selected image', await imageUploader.getFile());
    }
</script>
</html>
```

## Properties

| Property            | Attribute             | Description                                 | Type     | Default                            |
| ------------------- | --------------------- | ------------------------------------------- | -------- | ---------------------------------- |
| `activeColor`       | `active-color`        | The color when it is active                 | `string` | `'green'`                          |
| `baseColor`         | `base-color`          | The default color                           | `string` | `'#ccc'`                           |
| `height`            | `height`              | Height of the component                     | `string` | `'300px'`                          |
| `hoverOutlineColor` | `hover-outline-color` | The hover outline color                     | `string` | `'#aaa'`                           |
| `iconSrc`           | `icon-src`            | Icon source image (svg, png, jpg, gif, ...) | `string` | `'./assets/upload-cloud-flat.svg'` |
| `overlayColor`      | `overlay-color`       | The overlay color                           | `string` | `'rgba(255,255,255,0.5)'`          |
| `width`             | `width`               | Width of the component                      | `string` | `'100%'`                           |


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


## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/af-image-uploader@latest/dist/af-image-uploader.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install af-image-uploader --save`
- Put a script tag similar to this `<script src='node_modules/af-image-uploader/dist/af-image-uploader.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install af-image-uploader --save`
- Add an import to the npm packages `import af-image-uploader;`
- Then you can use the element anywhere in your template, JSX, html etc
