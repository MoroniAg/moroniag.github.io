import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

export default function ContactMe() {
  const { t: translate, i18n: i18nInstance } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Aquí podrías enviar `data` a una API
      console.log("Contact form submitted:", data);
      reset();
    } catch (e) {
      console.error(e);
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
          <div className="flex justify-center">
            <input
              className="border border-(--accent-red) py-2 px-4 rounded-md"
              type="text"
              placeholder={translate("contactMe.name")}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="border border-(--accent-red) py-2 px-4 rounded-md"
              type="email"
              placeholder={translate("contactMe.email")}
            />
          </div>
          <div className="flex justify-center">
            <textarea
              className="border border-(--accent-red) py-2 px-4 rounded-md "
              placeholder={translate("contactMe.message")}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <div>
            <button className="border border-(--accent-red) py-2 px-4 rounded-md">
              {translate("contactMe.submit")}
            </button>
          </div>
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
      </div>
    </div>
  );
}
