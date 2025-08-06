import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'HYPEPAD',
  description: 'Multi-chain, rug-proof launchpad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-background text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
