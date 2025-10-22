import { useState } from "react";
import FormField from "./FormField";

export default function ContactSlice({
  heading = "CONTACT US",
  lead = "Interested in working together? Fill out some info and we will be in touch shortly. We can’t wait to hear from you!",
}) {
  const [status, setStatus] = useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1000);
  };

  return (
    <section className="bg-[#25C7A5] text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-8 py-20">
        <div>
          <h3 className="text-7xl font-extrabold mb-8 leading-tight">
            {heading.split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? "ml-8" : ""}>
                {word}
                {index === 0 && <br />}
              </span>
            ))}
          </h3>
          <p className="text-lg leading-relaxed max-w-md">{lead}</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-medium mb-2 text-white">Name (required)</label>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full border-b-2 border-white bg-transparent py-2 focus:outline-none focus:border-white/80 text-white" 
                style={{ '--tw-placeholder-color': 'white', '--tw-placeholder-opacity': '1' }}
                required 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full border-b-2 border-white bg-transparent py-2 focus:outline-none focus:border-white/80 text-white" 
                style={{ '--tw-placeholder-color': 'white', '--tw-placeholder-opacity': '1' }}
                required 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-medium mb-2 text-white">Email (required)</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border-b-2 border-white bg-transparent py-2 focus:outline-none focus:border-white/80 text-white" 
              style={{ '--tw-placeholder-color': 'white', '--tw-placeholder-opacity': '1' }}
              required 
            />
          </div>

          <div className="flex items-center space-x-3">
            <input id="sliceSignup" type="checkbox" className="w-4 h-4 accent-white" />
            <label htmlFor="sliceSignup" className="text-white">Sign up for news and updates</label>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2 text-white">Message (required)</label>
            <textarea
              placeholder="Message"
              required
              rows={4}
              className="w-full border-b-2 border-white bg-transparent py-2 focus:outline-none focus:border-white/80 text-white resize-none"
              style={{ '--tw-placeholder-color': 'white', '--tw-placeholder-opacity': '1' }}
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-[#25C7A5] transition-all duration-300"
          >
            {status === "loading" ? "Submitting..." : status === "done" ? "Submitted!" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}