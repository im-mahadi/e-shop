import Footer from './Footer';
import './globals.css';
import Navbar from './Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navbar />
        <div className='min-h-[85vh]'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
