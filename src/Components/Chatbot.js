
import React, { Component } from 'react';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

export class Chatbot extends Component {

  componentDidMount() {
    try {
      (function(d, m) {
        var kommunicateSettings = 
            {"appId":"10216e07b50b68ea3aa37c262aa400af9","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    } catch (error) {
      console.error('Error loading Kommunicate chat widget:', error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  }

  render() {
    return (
      <div>
        {/* Your component's content goes here */}
      </div>
    );
  }
}

export default Chatbot;
