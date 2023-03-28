//import Footer from '../components/layout/Footer';
import { Provider } from '../components/Auth/Provider';
import LoginPage from '../components/layout/LoginPage';
import Menu from '../components/Menu/Menu';
import '../styles/globals.css';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    const dj = 'session ok'; // Trouver le moyen de donner vie à cette fonction
    return (
      <html lang="fr">
        <body className=''>
          <Provider>
            { dj === 'session ok' ? 
              <div>
                <Menu />
                <div className='w-3/4 mx-auto mt-6 min-h-screen'>
                    {children}
                </div>
              </div>
              :
              <LoginPage />
            }
          </Provider>
        </body>
      </html>
    );
  }
  