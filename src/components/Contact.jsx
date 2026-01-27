import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa";

const Contact = () => {

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xbddrrve", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      form.reset();
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

        <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-text-main md:text-5xl">
              Contact
            </h2>
            <p className="text-lg leading-relaxed text-text-muted md:text-xl">
              I'm open to new projects, freelance work, and job opportunities. You can contact me by filling out the form.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://www.linkedin.com/in/selenkunkcu/" target="_blank" rel="noreferrer" 
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://github.com/selenkunkcu" target="_blank" rel="noreferrer" 
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://medium.com/@selenkunkcu" target="_blank" rel="noreferrer" 
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-primary hover:text-primary"
              aria-label="Medium"
            >
              <FaMediumM className="text-xl" />
            </a>
          </div>

        </div>


        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text-main"> Name </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-text-main placeholder-slate-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-text-main"> Email </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    required
                    className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-text-main placeholder-slate-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-text-main"> Message </span>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="min-h-[160px] w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-4 text-text-main placeholder-slate-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25"
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 font-semibold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 md:w-auto"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FiSend className="text-[18px] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {sent && (
                <p className="text-sm font-medium text-primary">
                  Message sent successfully. I’ll get back to you soon.
                </p>
              )}
            </form>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Contact;
