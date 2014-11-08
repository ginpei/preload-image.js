/*! preload-image.js v1.0.0 By TAKANASHI Ginpei */
/*  https://github.com/ginpei/preload-image.js  */
function preloadImages(files) {
	var onprogress;
	var onload;
	var onerror;
	var loadeds = [];

	// I/F
	var instance = {
		files: files,
		loadeds: loadeds,

		onprogress: function(callback) {
			onprogress = callback;
			return this;
		},

		onload: function(callback) {
			onload = callback;
			return this;
		},

		onerror: function(callback) {
			onerror = callback;
			return this;
		}
	}

	function onerrorIF(event) {
		onerror({
			event: event,
			files: files,
			loadeds: loadeds
		});
	};

	function load(path) {
		var image = new Image();
		image.onload = function(event) {
			loadeds.push(path);

			onprogress({
				files: files,
				image: image,
				loadeds: loadeds,
				path: path
			});

			if (loadeds.length >= files.length) {
				onload({
					files: files,
					loadeds: loadeds
				});
			}
		};
		image.onerror = onerrorIF;

		image.src = path;
	}

	for (var i=0, l=files.length; i<l; i++) {
		load(files[i]);
	}

	return instance;
}
