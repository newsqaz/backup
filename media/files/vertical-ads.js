var vbanner = [
["https://www.facebook.com/qaznews24/", "https://qaznews24.info/media/files/facebookbanner.png"],
["https://www.instagram.com/qaznews24/", "https://qaznews24.info/media/files/instagrambanner.png"]
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
shuffle(vbanner);
document.getElementById('ad-vertical').innerHTML = '<a href="'+vbanner[0][0]+'" target="_blank" rel="nofollow"><img src="'+vbanner[0][1]+'" /></a>';
