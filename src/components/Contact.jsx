import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import Email from "./Email";
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
  const form = useRef();
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("message");

    let errorMessage = "";

    if (!userEmail && !userMessage) {
      errorMessage = "Please fill in both the email and message fields.";
    } else if (!userEmail) {
      errorMessage = "Please fill in the email field.";
    } else if (!userMessage) {
      errorMessage = "Your message is empty.";
    }

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

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

  return (
    <section>
      <div className="contact-grid grid md:grid-cols-2 items-start gap-10 px-6 my-4 sm:my-6 mx-auto max-w-6xl">
        <div className="flex flex-col">
          <h1 className="text-3xl header-font">Contact Me</h1>
          <p className="text-sm mt-3">
            To get in touch you can copy my email below or send a message
            through the form.
          </p>
          <div className="mt-12">
            <h2 className="text-lg header-font">Email</h2>
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
                <div className="flex flex-col">
                  <h2 className="block text-md">Click to copy</h2>
                  <strong>
                    <Email/>
                  </strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg header-font">More of Me</h2>
            <ul className="flex mt-5 space-x-12">
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <div className="flex flex-col items-center text-sm">
                  <Link
                    to={"https://github.com/Decoldest"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </Link>
                  <span>Github</span>
                </div>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <div className="flex flex-col items-center text-sm">
                  <Link
                    to={"https://linkedin.com/ryanjameswong"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </Link>
                  <span>LinkedIn</span>
                </div>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <div className="flex flex-col items-center text-sm">
                  <Link
                    to={"https://instagram.com/ryanwong.zip"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </Link>
                  <span>Instagram</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-2 header-font">Send a Message</h2>
          <form className="formtest" ref={form} onSubmit={sendEmail}>
            <div className="border-animation" tabIndex="0">
              <div className="border-animation__inner">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full py-3 px-4 text-sm focus:outline-none"
                  onFocus={(e) =>
                    e.target.parentElement.parentElement.classList.add("focus")
                  }
                  onBlur={(e) =>
                    e.target.parentElement.parentElement.classList.remove(
                      "focus",
                    )
                  }
                  onChange={() => setError(null)}
                />
              </div>
            </div>
            <div className="border-animation mt-5" tabIndex="0">
              <div className="border-animation__inner">
                <textarea
                  placeholder="Message"
                  name="message"
                  rows="8"
                  className="w-full py-3 px-4 text-sm focus:outline-none"
                  onFocus={(e) =>
                    e.target.parentElement.parentElement.classList.add("focus")
                  }
                  onBlur={(e) =>
                    e.target.parentElement.parentElement.classList.remove(
                      "focus",
                    )
                  }
                  onChange={() => setError(null)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/4 border-2 border-gray-100 send-button"
            >
              Send
            </button>
          </form>
          <div className="error-container mt-3" style={{ minHeight: "1.5rem" }}>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
