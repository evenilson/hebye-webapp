import { toast } from "react-toastify";
import { AnyObject } from "yup/lib/types";

type toastMessageParams = {
  type: 'error' | 'success' | 'warning',
  message: string,
}

export function toastMessage({type, message}: toastMessageParams) {
  const config: AnyObject = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  if(type === 'error') {
    return toast.error(message, {...config});
  } else if(type === 'success') {
    return toast.success(message, {...config});
  } else if(type === 'warning') {
    return toast.warning(message, {...config});
  }
}