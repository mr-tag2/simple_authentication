import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};

export const infoMessage = (message) => {
  toast.info(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};

export const warningMessage = (message) => {
  toast.warning(message, {
    position: "bottom-left",
    closeOnClick: true,
  });
};
