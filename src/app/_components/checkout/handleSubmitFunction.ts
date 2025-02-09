import Product from "@/interfaces";
import { clearCart } from "../../rtk/slices/cart-slice";
import Swal from "sweetalert2";
import { AppDispatch } from "../../rtk/store";
import { useRouter } from "next/navigation";

type RouterInstance = ReturnType<typeof useRouter>;

interface Props {
  cartState:Product[]
  formRef: React.RefObject<HTMLFormElement>
  loggedInState: boolean
  dispatch: AppDispatch
  router: RouterInstance

}


const handleSubmit = ({cartState,formRef,loggedInState,dispatch,router}:Props) => {
    if (cartState.length > 0) {
      if (formRef.current?.checkValidity()) {
        if (loggedInState) {
          dispatch(clearCart());
          if (cartState.length == 1) {
            Swal.fire({
              title: "Good job!",
              html: `You Have Successfully Purshased Order With <span class="text-green-600">${cartState.length}</span> Product Your Order Is Being Processing.`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Good job!",
              html: `You Have Successfully Purshased Order With <span class="text-green-600">${cartState.length}</span> Products Your Order Is Being Processing.`,
              icon: "success",
            });
          }
        } else {
          Swal.fire({
            title: "Log In Firstly",
            text: `Please Log In First.`,
            icon: "info",
          });
          router.push("/logIn");
          window.scrollTo({ top: 0 });
        }
      } else {
        formRef.current?.reportValidity();
      }
    } else {
      Swal.fire({
        title: "Add Products First",
        text: `Please Add Products First Before Placing An Order.`,
        icon: "info",
      });
    }
  };


export default handleSubmit