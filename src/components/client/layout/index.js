import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
