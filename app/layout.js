import './reset.css';
import './globals.css';
import Head from 'next/head';
import Header from './components/header/header'
// import HighlightWrapper from './components/HighlightWrapper';

// const inter = Josefin_Sans({ subsets: ['latin'] });
// const inter = Josefin_Sans({ 
//   // weight: '500',
//   subsets: ['latin'] 
// });

export const metadata = {
  title: '310-outputs',
  description: 'A minimal tech blog with seamless article navigation.',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap"
        />
      </Head>
      <body>
        <Header />
          {children}
      </body>
    </html>
  );
}
