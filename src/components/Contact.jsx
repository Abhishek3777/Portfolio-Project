import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = "kr7abhishek04@gmail.com";

const isEmailJsConfigured = Boolean(
  SERVICE_ID &&
    TEMPLATE_ID &&
    PUBLIC_KEY &&
    !String(SERVICE_ID).includes("your_") &&
    !String(PUBLIC_KEY).includes("your_")
);

const sendViaEmailJs = (form) =>
  emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: form.name.trim(),
      to_name: "Kumar Abhishek",
      from_email: form.email.trim(),
      reply_to: form.email.trim(),
      to_email: CONTACT_EMAIL,
      message: form.message.trim(),
    },
    PUBLIC_KEY
  );

const sendViaFormSubmit = async (form) => {
  const response = await fetch(
    `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        _subject: `Portfolio contact from ${form.name.trim()}`,
        _template: "table",
        _captcha: "false",
      }),
    }
  );

  const data = await response.json().catch(() => ({}));
  const failed = !response.ok || data.success === "false" || data.success === false;
  const message = data.message || "Failed to send message";

  // First-time FormSubmit setup: activation email is sent to your inbox
  if (failed && /activat/i.test(message)) {
    const err = new Error(
      `Check ${CONTACT_EMAIL} for a FormSubmit activation link (and spam). Click it once, then submit again.`
    );
    err.code = "NEEDS_ACTIVATION";
    throw err;
  }

  if (failed) {
    throw new Error(message);
  }

  return data;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      if (isEmailJsConfigured) {
        await sendViaEmailJs(form);
      } else {
        await sendViaFormSubmit(form);
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message was sent — I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        type: error.code === "NEEDS_ACTIVATION" ? "info" : "error",
        message:
          error.message ||
          `Something went wrong. Please try again or email ${CONTACT_EMAIL} directly.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-2 text-secondary text-[15px]">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white underline underline-offset-2 hover:text-[#915EFF]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
          noValidate
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              autoComplete="name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              required
              autoComplete="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915EFF] font-medium resize-y min-h-[140px]"
            />
          </label>

          {status.message && (
            <p
              role="status"
              className={`text-[14px] font-medium ${
                status.type === "success"
                  ? "text-green-400"
                  : status.type === "info"
                    ? "text-amber-300"
                    : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
