get_link();
$(document).ready(function() {
    $("#like-btn").click(like);
})

function get_link() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { netTruyenLink: "getlink" }, function(response) {
            localStorage["allTruyen"] = JSON.stringify(response.allLink);
            $("#all_link").html(localStorage["allTruyen"]);
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

function input() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fblike: "like" }, function(response) {
            $("#txt").html("Đã like toàn bộ mục có thể like");
            $(".like-btn").remove();
        })
    });
}