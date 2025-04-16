import { useState } from "preact/hooks";
import { Image } from "astro:assets";
import errorIcon from "assets/contact/desktop/icon-error.svg";

const ContactForm = () => {
  const [inputForm, setInputForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(inputForm)
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  console.log(error)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {
      name: !inputForm.name.trim(),
      email: !inputForm.email.trim(),
      phone: !inputForm.phone.trim(),
      message: !inputForm.message.trim(),
    };
    setError(newError);

    // Proceed only if there are no errors
    if (!Object.values(newError).includes(true)) {
      console.log("Form submitted successfully", inputForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className={`form_input ${error.name ? "input-error" : ""}`}
        required
        onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })}
      />
      {error.name && <span className="error-text">Name is required</span>}
      <input
        type="text"
        placeholder="Email Address"
        className={`form_input ${error.email ? "input-error" : ""}`}
        required
        onChange={(e) => setInputForm({ ...inputForm, email: e.target.value })}
      />
      {error.email && <span className="error-text">Email is required</span>}
      <input
        type="text"
        placeholder="Phone"
        className={`form_input ${error.phone ? "input-error" : ""}`}
        required
        onChange={(e) => setInputForm({ ...inputForm, phone: e.target.value })}
      />
      {error.phone && <span className="error-text">Phone is required</span>}
      <textarea
        placeholder="Your Message"
        rows={3}
        className={`form_input resize-none ${error.message ? "input-error" : ""}`}
        required
        onChange={(e) => setInputForm({ ...inputForm, message: e.target.value })}
      ></textarea>
      {error.message && <span className="error-text">Message is required</span>}

      <input type="submit" value="SUBMIT" className="btn_white mt-10 px-12" />
    </form>
  );
}

export default ContactForm