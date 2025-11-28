"use client";
declare global {
  interface Window {
    submitted?: boolean;
  }
}
import { useState } from "react";
import toast from "react-hot-toast";
import Title from "@/components/Title";
import { motion } from "motion/react";

const buttonAnimation = {
  initial: { scale: 1, rotate: 0 },
  whileHover: { scale: 1.2, rotate: [0, 0, 10, 10, 0] },
};

const zoomAnimation = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { duration: 0.6 },
};

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Mailing List Form Submitted");
          }
        }}
      />
      <motion.div
        {...zoomAnimation}
        className="flex items-center justify-center py-8"
      >
        <div className="bg-hcg-gold w-4/5 rounded-2xl p-2">
          <div className="font-hcg-main rounded-2xl border border-white p-8 font-light">
            {isSubmitted ? (
              <Title title="Success!" color="text-white" />
            ) : (
              <Title title="Join our Mailing List" color="text-white" />
            )}
            {isSubmitted ? (
              <div className="text-hcg-white text-md text-center md:text-xl">
                Thank you for joining {email}!
              </div>
            ) : (
              <form
                className="space-y-6"
                action="https://docs.google.com/forms/d/e/1FAIpQLSdYBvXdgNPhcUOxQMAhJedkRtwbUObEo_49t2xPZTRn6jIjvw/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  window.submitted = true;
                }}
              >
                <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                  <div className="flex-1">
                    <div className="text-md mb-2 text-white md:text-xl">
                      First Name
                    </div>
                    <input
                      className="w-full bg-white p-3 focus:outline-none"
                      name="entry.2094777015"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-md mb-2 text-white md:text-xl">
                      Last Name
                    </div>
                    <input
                      className="w-full bg-white p-3 focus:outline-none"
                      name="entry.222275708"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="text-md mb-2 text-white md:text-xl">
                    Email
                  </div>
                  <input
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.1315568053"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-6 flex cursor-pointer justify-center rounded-lg py-2 md:justify-start">
                  <motion.div {...buttonAnimation} className="mx-auto">
                    <button
                      type="submit"
                      className="text-hcg-white inline-block cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-thin md:text-lg"
                    >
                      Submit
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MailingList;
