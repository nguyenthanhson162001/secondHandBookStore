window.addEventListener('DOMContentLoaded', (event) => {
	function ApndImgEmotion() {
		$('.emotion-area').append(` <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐คฃ</span> <span>๐ฅฒ</span> <span>โบ๏ธ</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐ฅฐ</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐คช</span> <span>๐คจ</span> <span>๐ง</span> <span>๐ค</span> <span>๐</span> <span>๐ฅธ</span> <span>๐คฉ</span> <span>๐ฅณ</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>๐</span> <span>โน๏ธ</span> <span>๐ฃ</span> <span>๐</span> <span>๐ซ</span> <span>๐ฉ</span> <span>๐ฅบ</span> <span>๐ข</span> <span>๐ญ</span> <span>๐ค</span> <span>๐ </span> <span>๐ก</span> <span>๐คฌ</span> <span>๐คฏ</span> <span>๐ณ</span> <span>๐ฅต</span> <span>๐ฅถ</span> <span>๐ฑ</span> <span>๐จ</span> <span>๐ฐ</span> <span>๐ฅ</span> <span>๐</span> <span>๐ค</span> <span>๐ค</span> <span>๐คญ</span> <span>๐คซ</span> <span>๐คฅ</span> <span>๐ถ</span> <span>๐</span> <span>๐</span> <span>๐ฌ</span> <span>๐</span> <span>๐ฏ</span> <span>๐ฆ</span> <span>๐ง</span> <span>๐ฎ</span> <span>๐ฒ</span> <span>๐ฅฑ</span> <span>๐ด</span> <span>๐คค</span> <span>๐ช</span> <span>๐ต</span> <span>๐ค</span> <span>๐ฅด</span> <span>๐คข</span> <span>๐คฎ</span> <span>๐คง</span> <span>๐ท</span> <span>๐ค</span> <span>๐ค</span> <span>๐ค</span> <span>๐ค </span> <span>๐</span> <span>๐ฟ</span> <span>๐น</span> <span>๐บ</span> <span>๐คก</span> <span>๐ฉ</span> <span>๐ป</span> <span>๐</span> <span>โ ๏ธ</span> <span>๐ฝ</span> <span>๐พ</span> <span>๐ค</span> <span>๐</span> <span>๐บ</span> <span>๐ธ</span> <span>๐น</span> <span>๐ป</span> <span>๐ผ</span> <span>๐ฝ</span> <span>๐</span> <span>๐ฟ</span> <span>๐พ </span>`);

		//<span/> <span>for<span/> <span>(var i = 65; i <= 70; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f60' + String.fromCharCode(i).toLowerCase() + '.png">' +
		// 		'<img width="30px" height="30px" src="/images/emoji/1f61' + String.fromCharCode(i).toLowerCase() + '.png">' +
		// 		'<img width="30px" height="30px" src="/images/emoji/1f62' + String.fromCharCode(i).toLowerCase() + '.png">' +
		// 		'<img width="30px" height="30px" src="/images/emoji/1f47' + String.fromCharCode(i).toLowerCase() + '.png">' +
		// 		'<img width="30px" height="30px" src="/images/emoji/1f49' + String.fromCharCode(i).toLowerCase() + '.png">'
		// 	
		// }

		// for (var i = 4; i <= 8; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f32' + i + '.png">'
		// 	);
		// }

		// for (var i = 3; i <= 8; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f49' + i + '.png">'
		// 	);
		// }

		// for (var i = 0; i <= 9; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f60' + i + '.png">'
		// 	);
		// }

		// for (var i = 10; i <= 44; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f6' + i + '.png">'
		// 	);
		// }

		// for (var i = 10; i <= 17; i++) {
		// 	$('.emotion-area').append(
		// 		'<img width="30px" height="30px" src="/images/emoji/1f9' + i + '.png">'
		// 	);
		// }
	}

	//	$(document).one('click' , '.emotion-Icon', function(e){
	//		ApndImgEmotion();
	//	});

	$(document).on('click', '.emotion-Icon', function (e) {
		var top = $(this).offset().top,
			top = Math.floor(top),
			emotionArea = $(this).find('.emotion-area');

		emotionArea.toggleClass('ShowImotion');

		if (top <= 160) {
			emotionArea.toggleClass('top');
		}

		if (!emotionArea.hasClass('ShowImotion')) {
			$('.emotion-area').empty();
			emotionArea.removeClass('top');
		} else {
			ApndImgEmotion();
		}

	});
	$(document).on('click', '.emotion-area', function (e) {

		e.stopPropagation();
	});
	$(document).on('click', '.emotion-area span', function (e) {
		var imgIcon = $(this).clone().text()

		// $(this).parents('.emotion').find('.type_msg').append(imgIcon);
		$('.type_msg').val($('.type_msg').val() + imgIcon);


	});
});













