'use client';

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot,Placeholder } from '@telegram-apps/telegram-ui';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    Telegram: any;
  }
}


const TeamPage = () => {
  const router = useRouter();

  return (
    <AppRoot>
      <div className="HIJtihMA8FHczS02iWF5">
  <Placeholder
    description="Description"
    header="Title"
  >
    <img
      alt="Telegram sticker"
      className="blt0jZBzpxuR4oDhJc8s"
      src="https://xelene.me/telegram.gif"
    />
  </Placeholder>
</div>

    </AppRoot>
  );
};

export default TeamPage;
