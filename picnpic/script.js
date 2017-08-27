var img, w, h, mu = true,
    map;

function pos(e) {
    var x = e.pageX - img.offsetLeft,
        y = e.pageY - img.offsetTop,
        left = ((w / img.width * x) - (map.offsetWidth / 2)) * -1,
        top = ((h / img.height * y) - (map.offsetHeight / 2)) * -1;
    map.style['background-position'] = left + 'px ' + top + 'px';
}
img = document.createElement('img');
img.onload = function () {
    w = this.width;
    h = this.height;
    img.style.width = '100px';
}
img.src = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-513189.jpg';
map = document.createElement('div');
map.style.background = '#000 url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-513189.jpg) no-repeat 0 0';
document.body.appendChild(map);
document.body.appendChild(img);
img.addEventListener('mousedown', function (e) {
    mu = false;
    pos(e);
    e.preventDefault()
}, false);
img.addEventListener('mousemove', function (e) {
    mu || pos(e)
}, false);
img.addEventListener('mouseup', function (e) {
    mu = true
}, false);