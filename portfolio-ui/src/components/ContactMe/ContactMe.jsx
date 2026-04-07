
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import { sendContact } from "../../services/contactmeService";

export default function ContactMe() {
  const { t: translate, i18n: i18nInstance } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const [toast, setToast] = useState(null)

  const onSubmit = async (data) => {
    try {
      await sendContact(data)
      reset()
      setToast({ type: "success", text: translate("contactMe.success") })
      setTimeout(() => setToast(null), 2000)
    } catch (e) {
      console.error(e)
      setToast({ type: "error", text: translate("contactMe.error") })
      setTimeout(() => setToast(null), 2000)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-center">
            <span className="text-[2.25rem]">
              {translate("contactMe.title")}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="">{translate("contactMe.subtitle")}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex justify-center">
              <input
                className="border border-(--accent-red) py-2 px-4 rounded-md w-80"
                type="text"
                placeholder={translate("contactMe.name")}
                {...register("name", {
                  required: translate("contactMe.required"),
                })}
              />
            </div>
            {errors.name && (
              <div className="text-(--accent-red) text-sm flex justify-center">
                {errors.name.message}
              </div>
            )}

            <div className="flex justify-center">
              <input
                className="border border-(--accent-red) py-2 px-4 rounded-md w-80"
                type="email"
                placeholder={translate("contactMe.email")}
                {...register("email", {
                  required: translate("contactMe.required"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: translate("contactMe.invalidEmail"),
                  },
                })}
              />
            </div>
            {errors.email && (
              <div className="text-(--accent-red) text-sm flex justify-center">
                {errors.email.message}
              </div>
            )}

            <div className="flex justify-center">
              <textarea
                className="border border-(--accent-red) py-2 px-4 rounded-md w-80 h-32"
                placeholder={translate("contactMe.message")}
                {...register("message", {
                  required: translate("contactMe.required"),
                  minLength: {
                    value: 10,
                    message: translate("contactMe.minLength"),
                  },
                })}
              ></textarea>
            </div>
            {errors.message && (
              <div className="text-(--accent-red) text-sm flex justify-center">
                {errors.message.message}
              </div>
            )}

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="border border-(--accent-red) py-2 px-4 rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : translate("contactMe.submit")}
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <a
            href="https://github.com/MoroniAg"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-10 h-10 text-white"
            />
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/moroni-aguilera/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-15 h-15 text-white"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        {toast && (
          <div className={`fixed top-6 right-6 px-4 py-2 rounded shadow-lg ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {toast.text}
          </div>
        )}
      </div>
    </div>
  );
}
