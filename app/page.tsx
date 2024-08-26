'use client';

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot } from '@telegram-apps/telegram-ui';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Telegram: any;
  }
}

const HomePage = () => {
  const [userData, setUserData] = useState({ firstName: 'No Name', username: 'No Username' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTelegramSDK = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          if (window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;
            const user = webApp.initDataUnsafe?.user;
            setUserData({
              firstName: user?.first_name ?? 'No Name',
              username: user?.username ?? 'No Username',
            });
            setIsLoading(false);
          } else {
            console.error('Telegram WebApp SDK not loaded');
            setIsLoading(false);
          }
        };

        script.onerror = () => {
          console.error('Failed to load the Telegram WebApp SDK');
          setIsLoading(false);
        };
      } catch (error) {
        console.error('Error loading Telegram WebApp SDK', error);
        setIsLoading(false);
      }
    };

    loadTelegramSDK();

    return () => {
      const script = document.querySelector('script[src="https://telegram.org/js/telegram-web-app.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <AppRoot>
      <div className="mainImageContainer">
        <div className="imageWrapper">
          <Image
            src="https://t3.ftcdn.net/jpg/07/98/04/34/360_F_798043436_7GkBBaeiGdaT8cRJU1ormkq8vAGCB1Nf.jpg"
            alt="Background Image"
            width={1200}
            height={600}
            layout="intrinsic"
          />
        </div>
        <div className="textOverlay">
          {isLoading ? (
            <b>Loading...</b>
          ) : (
            <>
              <h1>{userData.firstName}</h1>
              <p>@{userData.username}</p>
            </>
          )}
        </div>
      </div>
    </AppRoot>
  );
};

export default HomePage;
