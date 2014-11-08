日本語→[README.ja.md](README.ja.md)

# preload-image.js

Common image-preloader.

# Usage

Paste content of [preload-image.min.js](preload-image.min.js) and:

```js
preloadImages([
    'path/to/image1',
    'path/to/image2',
    'path/to/image3'
])
    .onprogress(function(data) {
        console.log('"' + data.path + '" is loaded.');
        console.log('progressing: ',
            data.loadedList.length, '/', data.xxx.length,
            ' : ',
            parseInt(100 * data.loadedList.length / data.xxx.length, 10) + '%');
    })
    .onload(function(data) {
        console.log('Done.');
    });
```

# About

## Developed by

* TAKANASHI Ginpei
	* [@ginpei\_jp](https://twitter.com/ginpei_jp)
	* [@ginpei\_en](https://twitter.com/ginpei_en)
	* [ginpei.info](http://ginpei.info/)
* [ginpei/Osteoporosis.js](https://github.com/ginpei/Osteoporosis.js)

## License

* MIT License: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

## History

* 2014-11-08
	* First release.
