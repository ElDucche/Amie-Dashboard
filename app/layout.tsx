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
        <body className='flex'>
            <Menu />
            <div className='p-4'>
                {children}
            </div>
            
        
        
        </body>
      </html>
    );
  }
  