import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
