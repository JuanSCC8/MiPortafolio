"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiMail, HiCheckCircle, HiXCircle, HiPaperAirplane } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "sending" | "success" | "error";

const vp = { once: false, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err: unknown) {
      const e = err as { status?: number; text?: string };
      console.error("EmailJS error — status:", e?.status, "| text:", e?.text);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          {...fadeUp()}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">
            {contact.subtitle}
          </p>
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">{contact.title}</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-blue-500" />
        </motion.div>

        {/* Card */}
        <motion.div
          {...fadeUp(0.15)}
          className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-md overflow-hidden"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-8">
              <HiMail size={16} className="text-blue-400" />
              juansebastianpc12@gmail.com
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {contact.name}
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  minLength={1}
                  maxLength={30}
                  placeholder={contact.namePlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {contact.email}
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  minLength={5}
                  maxLength={50}
                  placeholder={contact.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {contact.message}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  minLength={10}
                  maxLength={150}
                  placeholder={contact.messagePlaceholder}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition resize-none"
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3"
                >
                  <HiCheckCircle size={18} />
                  {contact.success}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                >
                  <HiXCircle size={18} />
                  {contact.error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { scale: 1.03 } : {}}
                whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-colors ${
                  status === "sending"
                    ? "bg-blue-300 text-white cursor-not-allowed"
                    : "bg-blue-900 hover:bg-blue-800 text-white"
                }`}
              >
                <HiPaperAirplane size={16} className={status === "sending" ? "" : "rotate-90"} />
                {status === "sending" ? contact.sending : contact.send}
              </motion.button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
