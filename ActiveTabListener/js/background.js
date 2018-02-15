console.log("background js is up")

//listener for detecting tab change
chrome.tabs.onActiveChanged.addListener(function () {
  console.log("tab changed");
  //query about the active tab and get the tab id
  //if you add debug point here it will throw exception because debugger is the current active window , which doesnot have tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //send the message to the content sctipt
    chrome.tabs.sendMessage(tabs[0].id, "showNotification", null);//here null is the callback
  });
});


