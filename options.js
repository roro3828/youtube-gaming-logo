// Saves options to chrome.storage
function save_options() {
    var rainbow=document.getElementById("rainbow").checked;
    var logo_type=document.getElementById("logo_type").value;
    var flip_h=document.getElementById("flip_h").checked;
    var flip_v=document.getElementById("flip_v").checked;
    chrome.storage.sync.set({
        rainbow:rainbow,
        logo_type:logo_type,
        flip:[flip_h,flip_v]
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
        flip:[false,false]
    }, function(items) {
        document.getElementById("rainbow").checked = items.rainbow;
        document.getElementById("logo_type").value = items.logo_type;
        document.getElementById("flip_h").checked = items.flip[0];
        document.getElementById("flip_v").checked = items.flip[1];
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);