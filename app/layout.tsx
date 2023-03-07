//import Footer from '../components/layout/Footer';
import Menu from '../components/Menu/Menu';
import '../styles/globals.css';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="fr">
        <body className=''>
            <Menu />
            <div className='w-3/4 mx-auto mt-6 min-h-screen'>
                {children}
            </div>
        </body>
      </html>
    );
  }
  