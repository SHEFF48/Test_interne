import Header from "../Header";
import Footer from "../Footer";

const index = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default index;
