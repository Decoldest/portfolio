import { useState } from "react";

export default function Email() {
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
    <button onClick={handleCopyEmail}>{emailCopy ? "Copied!" : email}</button>
  );
}
