import { Navbar } from './Navbar';
import Footer from './Footer';

type TLayoutProps = {
  children: React.ReactElement;
};

export default function MainLayout({ children }: TLayoutProps) {
  const navbarLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' }
  ];
  return (
    <div>
      <Navbar navLinks={navbarLinks} />
      {children}
      <Footer />
    </div>
  );
}
