var button = $("#confirm"),
    copyBtn = $("#copy");

function getEM(t, o) {
    return t.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi).join(o)
}

function copyToClipboard(t) {
    var o = $("<input>");
    $("body").append(o), o.val($(t).val()).select(), document.execCommand("copy"), o.remove()
}
$("#text-with-email").on("paste", function(t) {
    t = t.originalEvent.clipboardData.getData("text");
    $("#output-emails").val(getEM(t))
}), button.on("click", function() {
    $("#output-emails").val(getEM($("#text-with-email").val()))
}), copyBtn.on("click", function() {
    copyToClipboard("#output-emails")
});
