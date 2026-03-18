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
  const [choice, setChoice] = useState("");
  const [otherText, setOtherText] = useState("");
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
              <Title title="Success!" color="text-hcg-white" />
            ) : (
              <Title title="Join our Mailing List" color="text-hcg-white" />
            )}
            {isSubmitted ? (
              <div className="text-hcg-white text-md text-center md:text-xl">
                Thank you for joining {email}!
              </div>
            ) : (
              <form
                className="space-y-6"
                action="https://docs.google.com/forms/d/e/1FAIpQLSe4HkxlGfCMuwtKDvYns1TSupv5aLV8RIYINdjFYcbpK0PdBA/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  window.submitted = true;
                }}
              >
                <div className="flex-1">
                  <div className="text-md text-hcg-white mb-2 md:text-xl">
                    Name (First, Last)*
                  </div>
                  <input
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.62550538"
                    required
                  />
                </div>
                <div className="text-hcg-white flex-1">
                  <div className="text-md mb-2 md:text-xl">
                    Please Select your year*
                  </div>
                  <div className="flex flex-col gap-3 md:flex-row">
                    <label>
                      <input
                        type="radio"
                        className="mr-1 bg-white p-3 focus:outline-none"
                        name="entry.1834392219"
                        value="Freshman"
                        checked={choice === "Freshman"}
                        onChange={(e) => setChoice(e.target.value)}
                        required
                      />
                      Freshman
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="mr-1 bg-white p-3 focus:outline-none"
                        name="entry.1834392219"
                        value="Sophomore"
                        checked={choice === "Sophomore"}
                        onChange={(e) => setChoice(e.target.value)}
                        required
                      />
                      Sophomore
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="mr-1 bg-white p-3 focus:outline-none"
                        name="entry.1834392219"
                        value="Junior"
                        checked={choice === "Junior"}
                        onChange={(e) => setChoice(e.target.value)}
                        required
                      />
                      Junior
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="mr-1 bg-white p-3 focus:outline-none"
                        name="entry.1834392219"
                        value="Senior"
                        checked={choice === "Senior"}
                        onChange={(e) => setChoice(e.target.value)}
                        required
                      />
                      Senior
                    </label>
                    <div>
                      <label className="mr-1">
                        <input
                          type="radio"
                          className="mr-1 bg-white p-3 focus:outline-none"
                          name="entry.1834392219"
                          value="__other_option__"
                          checked={choice === "__other_option__"}
                          onChange={(e) => setChoice(e.target.value)}
                          required
                        />
                        Other
                      </label>
                      {choice === "__other_option__" && (
                        <input
                          type="text"
                          name="entry.1834392219.other_option_response" // The specific text ID
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          placeholder="Please specify..."
                          className="w-40 bg-white px-1 text-black focus:outline-none"
                          required={choice === "__other_option__"}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-md text-hcg-white mb-2 md:text-xl">
                    Your major & concentration*
                  </div>

                  <input
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.1230703577"
                    required
                  />
                </div>
                <div>
                  <div className="text-md text-hcg-white mb-2 md:text-xl">
                    Preferred Email*
                  </div>
                  <input
                    type="email"
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.1599910903"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="text-md text-hcg-white mb-2 md:text-xl">
                    Any Questions?
                  </div>
                  <input
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.980921563"
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
