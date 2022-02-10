
import Aside from "./Aside/Aside";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";



const Layout = ({ children }) => {
    return (
        <>
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
            /> */}
            <div className="d-flex flex-column flex-root aside-minimize">
                <div className="page d-flex flex-row flex-column-fluid">
                    <Aside />
                    <div className="wrapper d-flex flex-column flex-row-fluid">
                        <Header />
                        <Content>
                            {children}
                        </Content>
                        <Footer />
                    </div>

                </div>

            </div>

        </>
    );
};

export default Layout;