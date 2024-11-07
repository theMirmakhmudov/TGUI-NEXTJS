"use client";
import "@telegram-apps/telegram-ui/dist/styles.css";
import { AppRoot, Avatar } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Telegram: any;
  }
}

const HomePage = () => {
  const [username, setUsername] = useState<string>("No Username");
  const [fullname, setFullname] = useState<string>("No First Name");

  useEffect(() => {
    const loadTelegramSDK = () => {
      const script = document.createElement("script"); 
      script.src = "https://telegram.org/js/telegram-web-app.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        try {
          const telegramWebApp = window.Telegram?.WebApp;
          if (telegramWebApp) {
            const username = telegramWebApp.initDataUnsafe?.user?.username ?? "Username";
            const fullname = telegramWebApp.initDataUnsafe?.user?.first_name ?? "First Name";
            setUsername(username);
            setFullname(fullname);
          } else {
            console.error("Telegram WebApp is not available");
          }
        } catch (error) {
          console.error("Error accessing Telegram WebApp:", error);
        }
      };

      script.onerror = () => {
        console.error("Failed to load the Telegram WebApp SDK");
      };
    };

    loadTelegramSDK();
  }, []);

  return (
    <AppRoot>
      <div className="flex justify-center items-center mt-10">
        <Avatar size={96} src={`https://t.me/i/userpic/320/${username}.jpg`} />
      </div>
      <h1 className="text-lg text-center font-bold mt-5 text-black">{fullname}</h1>
      <h3 className="text-base text-center font-medium text-black">@{username}</h3>
      
    </AppRoot>
  );
};

export default HomePage;
