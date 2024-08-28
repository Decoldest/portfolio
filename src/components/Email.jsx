import { useState } from "react";
import PropTypes from "prop-types";

Email.propTypes = {
  className: PropTypes.string,
};

export default function Email({ className }) {
  const email = `ryanjameswong@outlook.com`;
  const [emailCopy, setEmailCopy] = useState(false);

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
    <button
      onClick={handleCopyEmail}
      className={className}
    >
      {emailCopy ? "Copied!" : email}
    </button>
  );
}
