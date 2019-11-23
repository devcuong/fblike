function count_like() {
    var number = $("._6a-y._3l2t._18vj").not("._3_16").length;
    return number;
}

function like() {
    var like_btn = $("._6a-y._3l2t._18vj").not("._3_16");
    like_btn.each(function(index) {
        this.click();
    });
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.fblike == "getlike") {
        var number_like = count_like();
        sendResponse({ number: number_like })
    }
    if (request.fblike == "like") {
        like();
        sendResponse({ number: 1 });
    }
})