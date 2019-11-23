function get_link() {
    var arrayVariable = [ ];
    $(".item h3").each(function (i){
        arrayVariable[i]=$(this).find("a").attr('href');
    });
    return arrayVariable;
}

function like() {
    var like_btn = $("._6a-y._3l2t._18vj").not("._3_16");
    like_btn.each(function(index) {
        this.click();
    });
}

function input() {
    var allLink = JSON.parse(localStorage["allTruyen"]);
    if(allLink.length > 0){
        for (let i = 0; i < allLink.length; i++) {
            
        }
    }
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.netTruyenLink == "getlink") {
        var all_link = get_link();
        sendResponse({ allLink: all_link })
    }
    if (request.fblike == "like") {
        like();
        sendResponse({ number: 1 });
    }
    if (request.fblike == "inputtruyen") {
        input();
        sendResponse({ number: 1 });
    }
})