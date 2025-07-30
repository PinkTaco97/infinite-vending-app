// React
import React, { useState } from "react";

// Components
import { Alert } from "@/components/common";

export default function GetInTouchForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage alert visibility and type
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    e.preventDefault();

    setShowAlert(false);

    // Send form data to the API
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Check if the response is ok
    const data = await res.json();

    setAlertType(res.ok ? "success" : "error");
    setShowAlert(true);

    // Reset the form after submission
    e.currentTarget.reset();
  };

  return (
    <>
      {showAlert && (
        <Alert
          type={alertType}
          message={
            alertType === "success"
              ? "Message sent successfully!"
              : "Failed to send message."
          }
        />
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="w-full p-4 rounded-full bg-white text-black"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-full bg-white text-black"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          cols={50}
          className="w-full px-4 py-4 rounded-4xl bg-white text-black min-h-46 resize-none"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold p-4 rounded-full hover:cursor-pointer scale-95 hover:scale-100 transition-transform duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
}
