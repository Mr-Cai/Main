
function loadData() {
    // var apiLink = 'https://r1---sn-a5meknsd.googlevideo.com/videoplayback?expire=1611244968&ei=SFEJYIn8NPOe8QPkh4OoAg&ip=103.142.140.22&id=o-AMexXUcjodAfWX5nZb-1SvBjqk1kfhcBDG2_Y-lpNxv9&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394&source=youtube&requiressl=yes&mh=pR&mm=31%2C26&mn=sn-a5meknsd%2Csn-n4v7sn76&ms=au%2Conr&mv=m&mvi=1&pl=24&initcwndbps=847500&vprv=1&mime=video%2Fwebm&ns=wAENcFQXaObWBqmlsXL2Xe0F&gir=yes&clen=5679982412&dur=7718.720&lmt=1583983872581835&mt=1611223009&fvip=6&keepalive=yes&c=WEB&txp=5531432&n=x2o0zGJDsWGUaw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALsMsN1zcB1E79MJtbCdfJLt6DMCugsUs4I022qdiLj_AiButzjaWaLQ1vG6Tke7iay11xjnykTOwiyogN4-ZymZyw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgLtuTwN40tr42vzx7yfMZtKarkU-rSzjJH4zQeCVfy7MCIQCYCC6QTC4zAlZuEj6PxyVVhkNalVT2xHDegXJWoPYZOg%3D%3D&title=Chillstep%20Music%20for%20Programming%20_%20Cyber%20_%20Coding';
    var apiLink = 'https://gank.io/api/v2/data/category/Girl/type/Girl/page/1/count/10';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('response_txt').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', apiLink, true);
    xhttp.send();
}