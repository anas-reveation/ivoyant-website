import { useIsSubmitting } from "remix-validated-form";
import { action } from "~/routes/RemixForm";
import { useActionData } from "@remix-run/react";
import axios from "axios";




export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();
//   const data = useActionData();





//   console.log(data?.firstname)
//   console.log(isSubmitting)
  

    // const submitData = async () => {
    //     const portalId = 24134669;
    //     const formGuid = "60361249-a7a0-4d2d-adeb-44267d0248f1";
    
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };

    //     try {
    //       const res = await axios.post(
    //         `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    //         {
    //           portalId,
    //           formGuid,
    //           fields: [
    //             {
    //               name: "firstname",
    //               value: `${data?.firstname}`,
    //             },
    //             {
    //               name: "email",
    //               value: `${data?.email}`,
    //             },
            
    //             {
    //               name: "message",
    //               value: `${data?.message}`,
    //             },
    //           ],
    //         },
    //         config
    //       );
    //     //   setMsgSuccess(true);
    //     //   setMsgFailed(false);
    //     //   setInterval(() => {
    //     //     // setMsgSuccess(undefined);
    //     //     // setMsgFailed(undefined);
    //     //   }, 7000);
    
    //     //   setFormData({
    //     //     firstname: "",
    //     //     email: "",
    //     //     message: "",
    //     //   });
    
    //       console.log("res", res);
    //     } catch (err) {
    //     //   setMsgFailed(true);
    //     //   setMsgSuccess(false);
    //       console.log(err)
    //     }
    //     // resetForm();
    //   };
  
  

 


  return (
    <button type="submit"  disabled={isSubmitting} className="form-action" >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};