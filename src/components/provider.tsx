'use client';

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, Tabbar } from '@telegram-apps/telegram-ui';
import { User, Users, Info } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useCallback, useTransition } from 'react';

const tabs = [
  { id: 1, text: 'Profile', Icon: User, path: '/' },
  { id: 2, text: 'Team', Icon: Users, path: '/team' },
  { id: 3, text: 'About', Icon: Info, path: '/about' },
];

export default function Provider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const activeTab = tabs.find(tab => tab.path === pathname);
    setCurrentTab(activeTab ? activeTab.id : null);
  }, [pathname]);

  const handleTabClick = useCallback((path: string) => {
    startTransition(() => {
      router.push(path);
    });
  }, [router]);

  return (
    <html lang="en">
      <head>
        <title>Telegram UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AppRoot>
          <main>{children}</main>
          <Tabbar className="custom-tabbar">
            {tabs.map(({ id, text, Icon, path }) => (
              <Tabbar.Item
                key={id}
                text={text}
                selected={currentTab === id}
                onClick={() => handleTabClick(path)}
                className={`custom-tab-item ${currentTab === id ? 'selected' : ''}`}
              >
                <Icon size={16} />
              </Tabbar.Item>
            ))}
          </Tabbar>
        </AppRoot>
      </body>
    </html>
  );
}
