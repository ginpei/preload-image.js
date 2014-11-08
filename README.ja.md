English->[README.md](README.md)

# preload-image.js

よくある画像先行読み込みするやつ。

# 使い方

サンプルJS参照。→[sample/sample.js](sample/sample.js)

[preload-image.min.js](preload-image.min.js)の中身をコピペして、こんな感じで書いてください。

```js
preloadImages([
	'path/to/image1',
	'path/to/image2',
	'path/to/image3'
])
	.onprogress(function(data) {
		var loaded = data.loadeds.length;
		var all = data.files.length;
		var progress = parseInt(100 * loaded / all, 10);

		console.log(
			data.path, 'を読み込みました。',
			'進捗:', loaded + '/' + all, '(' + progress + '%)'
			);

		// 画像をブラウザーで表示
		document.body.appendChild(data.image);
	})
	.onload(function(data) {
		console.log('完了しました。');
	})
	.onerror(function(data) {
		console.error('えらった！', data.event);
	});
```

# このソフトウェアについて

## 開発

* 高梨ギンペイ
	* [@ginpei\_jp](https://twitter.com/ginpei_jp)
	* [@ginpei\_en](https://twitter.com/ginpei_en)
	* [ginpei.info](http://ginpei.info/)
* [ginpei/preload-image.js](https://github.com/ginpei/preload-image.js)

## ライセンス

* MIT License: [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)

## 履歴

* 2014-11-08
	* 最初のリリース。
