// A sample loads ramgdom images from placekitten.
// You should simulate low bandwidth by Charles, Fiddler, etc.
// placekitten: http://placekitten.com/

(function() {
/*! preload-image.js v1.0.0 By TAKANASHI Ginpei */
/*  https://github.com/ginpei/preload-image.js  */
function preloadImages(n){function e(e){s({event:e,files:n,
loadeds:i})}function o(o){var s=new Image;s.onload=function(){i.
push(o),r({files:n,image:s,loadeds:i,path:o}),i.length<n.length
||t({files:n,loadeds:i})},s.onerror=e,s.src=o}for(var r,t,s,i=[]
,l={files:n,loadeds:i,onprogress:function(n){return r=n,this},
onload:function(n){return t=n,this},onerror:function(n){return s
=n,this}},a=0,u=n.length;u>a;a++)o(n[a]);return l}

	setTimeout(function() {
		function r() {
			return 200 + parseInt(Math.random()*200, 10);
		}

		var files = [];
		for (var i=0; i<10; i++) {
			files.push('http://placekitten.com/' + r() + '/' + r());
		}

		console.log('loading...');
		preloadImages(files)
			.onprogress(function(data) {
				console.log(
					data.path, 'is loades.',
					'Status: ',
					data.loadeds.length, '/', data.files.length,
					' : ',
					parseInt(100 * data.loadeds.length / data.files.length, 10) + '%'
					);
				document.body.appendChild(data.image);
			})
			.onload(function(data) {
				console.log('Done.');
			})
			.onerror(function(data) {
				console.error('ERROR!', data.event);
			});
	}, 1000);
})();

