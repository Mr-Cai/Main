window.onload = function () {
    let headTitle = document.querySelector("head")
    let setFavicon = document.createElement("link")
    setFavicon.setAttribute("rel", "shortcut icon")
    setFavicon.setAttribute('href', 'assets/svg/favicon.svg')
    headTitle.appendChild(setFavicon)
}

window.onscroll = function () {
    let doc = document.documentElement;
    let offset = doc.scrollTop + window.innerHeight;
    let toast = this.self
    if (offset >= doc.offsetHeight) {
        console.log('到底了')
        toast.postMessage('end')
    }
};
