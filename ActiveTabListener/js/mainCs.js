console.log("main cs is up");
function createNotification() {
  var notification = document.createElement('div');
  Object.assign(notification.style, {
    position: 'fixed',
    zIndex: 10000,
    textAlign: 'center',
    width: '100%',
    background: '#f5ae20',
    padding: '5px',
    top: 0,
    left: 0
  });
  notification.innerHTML = `Test`;
  document.body.appendChild(notification);
  setTimeout(function () {
    notification.remove();
  }, 4000);
  return notification;
}


//setting listener for message
chrome.runtime.onMessage.addListener(
  function (message, sender, sendResponse) {
    //you can receive  different type of message here
    if (message == "showNotification") {
      createNotification();
    }
  });