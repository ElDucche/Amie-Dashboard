import Menu from '../components/Menu/Menu';
import '../styles/globals.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="fr">
        <body className='flex justify-between'>
            <Menu />
            <div className='ml-4 p-4 w-screen'>
                {children}
            </div>
        </body>
      </html>
    );
  }
  