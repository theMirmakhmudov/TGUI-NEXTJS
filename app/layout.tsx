import Provider from '@/src/components/provider';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Telegram UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Provider>{children}</Provider>
        
      

      </body>
    </html>
  );
}
