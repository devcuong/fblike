count_like();
$(document).ready(function() {
    $("#like-btn").click(like);
})

function count_like() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "getlike" }, function(response) {
            $("#number_like").html(response.number);
        })
    });
}

function like() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "like" }, function(response) {
            $("#txt").html("Đã like toàn bộ mục có thể like");
            $(".like-btn").remove();
        })
    });
}