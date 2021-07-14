import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function App() {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: "Jenny",
        avatar: "https://placeimg.com/140/140/any",
      }}
      showUserAvatar={true}
    />
  );
}
