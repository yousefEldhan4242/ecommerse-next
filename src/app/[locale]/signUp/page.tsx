import Footer from "../../_components/Footer";
import Navbar from "../../_components/NavBar";
import SignUpAndLogIn from "../../_components/SignUpAndLogIn";

const SignUpAndLogInPage = () => {
  return (
    <>
      <Navbar />
      <SignUpAndLogIn isInLogIn={false} />
      <Footer />
    </>
  );
};

export default SignUpAndLogInPage;
