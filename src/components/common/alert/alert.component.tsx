import { useEffect, useState } from "react";

type AlertProps = {
  message: string;
  type?: "success" | "error";
  duration?: number; // in ms
};

export default function Alert({
  message,
  type = "success",
  duration = 3000,
}: AlertProps) {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setShow(false), 300); // match your fade-out-up duration
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-25 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg z-50 text-white
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
        ${animateOut ? "animate-fade-out-up" : "animate-fade-in-down"}`}
    >
      {message}
    </div>
  );
}
