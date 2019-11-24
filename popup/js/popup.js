get_link();
$(document).ready(function() {
    $("#copy-btn").click(copy);
    $("#input-btn").click(input);
})

function get_link() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { netTruyenLink: "getlink" }, function(response) {
            $("#all_link").html(response.allLink);
        })
    });
}

function copy() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { netTruyenCopy: "copy" }, function(response) {
            $("#txt").html("Đã copy toàn bộ truyện");
        })
    });
}

function input() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { netTruyenInput: "input", netTruyenData: "ok" }, function(response) {
            console.log(localStorage["allTruyen"]);
        })
    });
}