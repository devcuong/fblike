function get_link() {
    var arrayVariable = [];
    $(".item h3").each(function(i) {
        arrayVariable[i] = $(this).find("a").attr('href');
    });
    return arrayVariable;
}

function copy() {
    var arrayVariable = [];
    $(".item h3").each(function(i) {
        arrayVariable[i] = $(this).find("a").attr('href');
    });
    localStorage["allTruyen"] = JSON.stringify(arrayVariable);
}

function input(data) {
    $('#leach-url-truyen').val(data);
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.netTruyenLink == "getlink") {
        var all_link = get_link();
        sendResponse({ allLink: all_link })
    }
    if (request.netTruyenCopy == "copy") {
        copy();
        sendResponse({ number: 1 });
    }
    if (request.netTruyenInput == "input") {
        input(request.netTruyenData);
    }
})