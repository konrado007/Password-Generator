import React, { useEffect, useState } from "react";

interface CopyProps {
  toCopy: string;
}

const Copy: React.FC<CopyProps> = ({ toCopy }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    !copied &&
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
  };

  const handleCopyClick = () => {
    const textToCopy = toCopy;
    copyToClipboard(textToCopy);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className="font-bold">
      {copied ? (
        <p>Copied!</p>
      ) : (
        <button onClick={handleCopyClick}>Copy</button>
      )}
    </div>
  );
};

export default Copy;
