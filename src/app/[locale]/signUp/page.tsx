import Footer from "../../_components/Footer";
import Navbar from "../../_components/NavBar/NavBar";
import SignUpAndLogIn from "../../_components/signUpAndLogIn/SignUpAndLogIn";

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
