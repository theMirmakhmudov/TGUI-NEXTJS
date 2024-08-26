'use client';

import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, List, Section, Cell } from '@telegram-apps/telegram-ui';
import { useRouter } from 'next/navigation';
import { UserIcon,UsersIcon, InfoIcon  } from 'lucide-react'; 
const cellsTexts = [
  { text: 'Profile', Icon: UserIcon },
  { text: 'Group', Icon: UsersIcon }, 
  { text: 'About', Icon: InfoIcon }, 
];

const AboutPage = () => {
  const router = useRouter();

  return (
    <AppRoot>
      <Section>
          {cellsTexts.map((cell, index) => (
            <Cell key={index} before={<cell.Icon size={24} />}>
              {cell.text}
            </Cell>
          ))}
        </Section>
    </AppRoot>
  );
};

export default AboutPage;
