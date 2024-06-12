import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}

function ContactForm() {
  const email = `ryanjameswong@outlook.com`;
  const [emailCopy, setEmailCopy] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopy(true);
        setTimeout(() => setEmailCopy(false), 1200);
      })
      .catch((err) => console.error("Failed to copy!", err));
  };

  return (
    <section>
      <div className="grid sm:grid-cols-2 items-center gap-2 my-6 mx-auto max-w-4xl">
        <div>
          <h1 className="text-3xl font-extrabold">Contact Me</h1>
          <p className="text-sm mt-3">
            To get in touch you can copy my email below or send a message
            through the form.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Icon
                    path={mdiEmailOutline}
                    size={1.5}
                    color="#ffffff"
                    aria-label="Email Icon"
                  />
                </div>
                <h2 className="block text-md">Click to copy</h2>
                <strong>
                  <button onClick={handleCopyEmail}>
                    {emailCopy ? "Copied!" : email}
                  </button>
                </strong>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">More of Me</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link
                  to={"https://github.com/Decoldest"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-2xl sm:hover:animate-jiggle"></i>
                </Link>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link
                  to={"https://linkedin.com/ryanjameswong"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-2xl sm:hover:animate-jiggle"></i>
                </Link>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link
                  to={"https://instagram.com/ryanwong.zip"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-2xl sm:hover:animate-jiggle"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 mt-3"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm mt-5 px-4 py-3 w-1/4"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
