import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "preact/hooks";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

export interface Msg {
  author: string;
  content: string;
  createdAt: number;
}
const firebaseConfig = {
  apiKey: "AIzaSyA2ffbETwL8hupSveo6d55YTOun0kYzCC4",
  authDomain: "loqi-loqi.firebaseapp.com",
  databaseURL: "https://loqi-loqi-default-rtdb.firebaseio.com",
  projectId: "loqi-loqi",
  storageBucket: "loqi-loqi.appspot.com",
  messagingSenderId: "622541820845",
  appId: "1:622541820845:web:e7b417188f959ea1c40724",
  measurementId: "G-HZDJC6PYH8",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function App() {
  const [msgs, setMsgs] = useState<any>();

  const messagesRef = ref(
    database,
    `data/rooms/Stony Brook University/CSE214/messages`
  );

  useEffect(() => {
    onValue(messagesRef, (snapshot: any) => {
      const data = snapshot.val();
      if (data != null) {
        const vals = Object.values(data);
        const dt = vals.map((e) => {
          const msg = e as Msg;
          return (
            <Message
              content={msg.content}
              author={msg.author}
              createdAt={msg.createdAt}
            />
          );
        });
        setMsgs(dt.reverse());
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div class="flex-col gap-2 w-full">{msgs}</div>
      <Footer />
    </>
  );
}
