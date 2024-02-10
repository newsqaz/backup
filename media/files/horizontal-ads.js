var hbanner = [
["https://qaznews24.info/ads/", "https://qaznews24.info/media/files/banner_red.png"],
["https://qaznews24.info/ads/", "https://qaznews24.info/media/files/banner_blue.png"],
["https://qaznews24.info/ads/", "https://qaznews24.info/media/files/banner_orange.png"]
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
shuffle(hbanner);
document.getElementById('ad-horizontal').innerHTML = '<a href="'+hbanner[0][0]+'" target="_blank" rel="nofollow"><img src="'+hbanner[0][1]+'" /></a>';

