English->[RADME.md]

# preload-image.js

よくある画像先行読み込みするやつ。

# 使い方

[preload-image.min.js](preload-image.min.js)の中身をコピペして、こんな感じで書いてください。

```js
preloadImages([
    'path/to/image1',
    'path/to/image2',
    'path/to/image3'
])
    .onprogress(function(data) {
        console.log(data.path + 'を読み込みました。');
        console.log('進捗: ',
            data.loadedList.length, '/', data.xxx.length,
            ' : ',
            parseInt(100 * data.loadedList.length / data.xxx.length, 10) + '%');
    })
    .onload(function(data) {
        console.log('読み込み完了しました。');
    });
```

# このソフトウェアについて

## 開発

* 高梨ギンペイ
	* [@ginpei\_jp](https://twitter.com/ginpei_jp)
	* [@ginpei\_en](https://twitter.com/ginpei_en)
	* [ginpei.info](http://ginpei.info/)
* [ginpei/Osteoporosis.js](https://github.com/ginpei/Osteoporosis.js)

## ライセンス

* MIT License: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

## 履歴

* 2014-11-08
	* 最初のリリース。
