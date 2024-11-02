import React from "react";
import Form from "../common/Form";

function Contact() {
  return (
    <section className="p-[48px]">
      <div className="pl-[64px] pt-[670px] pb-[85px] bg-contact cover rounded-[40px] relative">
        <h2 className="text-[76px] font-extrabold text-mainWhite">
          Contact us
        </h2>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
