import React from 'react';

const RSVPForm = () => {
  const handleSubmit = (event) => {
    const form = event.target;
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const guest = form.guest.value.trim();

    if (!fullName) {
      alert('Please enter your full name.');
      event.preventDefault();
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
      return;
    }
    if (!phone) {
      alert('Please enter your phone number.');
      event.preventDefault();
      return;
    }
    if (!guest) {
      alert('Could you confirm how many guests you anticipate bringing with you?');
      event.preventDefault();
      return;
    }
  };

  return (
    <form
      className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg font-inter"
      action="https://formspree.io/f/xdkavyok"
      method="POST"
      onSubmit={handleSubmit}
    >
      {[
        { id: 'fullName', label: 'Full Name*', type: 'text', name: 'name', placeholder: 'Type your name' },
        { id: 'email', label: 'Email*', type: 'email', name: 'email', placeholder: 'Type your email' },
        { id: 'phone', label: 'Phone*', type: 'text', name: 'phone', placeholder: 'Type your phone number' },
        { id: 'guest', label: 'Guest*', type: 'text', name: 'guest', placeholder: 'How many guests are you bringing?' },
      ].map(({ id, label, type, name, placeholder }) => (
        <div className="mb-5" key={id}>
          <label htmlFor={id} className="block text-sm font-semibold mb-1 text-gray-700">
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      ))}

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-1 text-gray-700">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us more about your request"
          required
          className="w-full p-3 border border-gray-300 rounded-md h-28 resize-none text-base focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      {/* Honeypot anti-spam field */}
      <input type="hidden" name="_gotcha" />

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-accent transition"
      >
        Submit
      </button>
    </form>
  );
};

export default RSVPForm;
