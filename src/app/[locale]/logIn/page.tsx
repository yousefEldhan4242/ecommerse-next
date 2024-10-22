import Footer from "../../_components/Footer";
import Navbar from "../../_components/NavBar";
import SignUpAndLogIn from "../../_components/SignUpAndLogIn";

const LogInPage = () => {
  return (
    <>
      <Navbar />
      <SignUpAndLogIn isInLogIn={true} />
      <Footer />
    </>
  );
};

export default LogInPage;
