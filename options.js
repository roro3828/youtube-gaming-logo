// Saves options to chrome.storage
function save_options() {
    var rainbow=document.getElementById("rainbow").checked;
    var logo_type=document.getElementById("logo_type").value;
    var filp=document.getElementById("flip").checked;
    chrome.storage.sync.set({
        rainbow:rainbow,
        logo_type:logo_type,
        filp:filp
    }, function() {
        window.alert("保存されました");
    });
}

   // Restores select box and checkbox state using the preferences
   // stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        rainbow:true,
        logo_type:"default",
        filp:false
    }, function(items) {
        document.getElementById("rainbow").checked = items.rainbow;
        document.getElementById("logo_type").value = items.logo_type;
        document.getElementById("flip").checked = items.filp;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);