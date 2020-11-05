 chrome.browserAction.setBadgeBackgroundColor({
   color: "#ccc"
 })
 chrome.browserAction.setBadgeText({
   text: "OFF"
 });


 chrome.browserAction.onClicked.addListener(function(tab) {
   activated = !activated
   if (activated) {
     chrome.browserAction.setBadgeBackgroundColor({
       color: "green"
     })
     chrome.browserAction.setBadgeText({
       text: "ON"
     });
   } else {
     chrome.browserAction.setBadgeBackgroundColor({
       color: "#ccc"
     })
     chrome.browserAction.setBadgeText({
       text: "OFF"
     });
   }

 })

 chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
     sendResponse(activated);
   }
 );
 chrome.tabs.onSelectionChanged.addListener(function(tabid, selectinfo) {
  chrome.browserAction.setBadgeBackgroundColor({color: "#ccc"})
  chrome.browserAction.setBadgeText({text:"OFF"});  scrolled = false;
});
