"use strict";

var isMobile = {
  Android: function () {
    return null !== navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return null !== navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return null !== navigator.userAgent.match(/iPhone|iPad|iPod|AppleWebKit/i);
  },
  Chrome: function () {
    return null !== navigator.userAgent.match(/Chrome/i);
  },
  Opera: function () {
    return null !== navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return null !== navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

function fnSessionStart() {
  var parameter = {};

  try {
    if (isMobile.Android()) {
      window.ApolloWebEducationHandler.sessionStarted(
        JSON.stringify(parameter)
      );
    } else if (isMobile.iOS()) {
      window.webkit.messageHandlers.sessionStarted.postMessage(parameter);
    }
  } catch {}
}

function fnSetTitle(title) {
  var parameter = {
    title: title,
  };

  try {
    if (isMobile.Android()) {
      window.ApolloWebEducationHandler.setTitleBar(JSON.stringify(parameter));
    } else if (isMobile.iOS()) {
      window.webkit.messageHandlers.setTitleBar.postMessage(parameter);
    }
  } catch {}
}

function fnCloseWebView() {
  var parameter = {};

  try {
    if (isMobile.Android()) {
      window.ApolloWebEducationHandler.closeWindow(JSON.stringify(parameter));
    } else if (isMobile.iOS()) {
      window.webkit.messageHandlers.closeWindow.postMessage(parameter);
    }
  } catch {}
}

function fnShowPopup(message, content, okCallback, cancelText, okText) {
  var parameter = {
    message: message,
    content: content,
    okCallback: "",
    cancelCallback: okCallback,
    cancelText: okText,
    okText: cancelText,
    cancelable: true,
  };

  try {
    if (isMobile.Android()) {
      window.ApolloWebEducationHandler.showPopup(JSON.stringify(parameter));
    } else if (isMobile.iOS()) {
      window.webkit.messageHandlers.showPopup.postMessage(parameter);
    }
  } catch {}
}
