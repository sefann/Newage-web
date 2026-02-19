import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";

const FORM_ENDPOINT = "https://formspree.io/f/yourFormId";

const branches = [
  {
    name: "NEW AGE FARM",
    location: "New Age Farm",
    image: "/locations/fnew age farm.jpg",
  },
  {
    name: "MAGBORO BRANCH",
    location: "Magboro",
    image: "/locations/magboro.jpg",
  },
  {
    name: "AYOBO BRANCH",
    location: "Ayobo",
    address: "No 6-8, Ashipa Road, Amule Bus-Stop, Ayobo, Lagos.",
    phone: "+234 80 8810 6966",
    email: "info@newagegroupng.com",
    image: "/locations/ayobo.JPG",
  },
  {
    name: "AKANRAN BRANCH",
    location: "Akanran",
    address: "No 101, Akaran Road, Ido-Iroko, Ibadan, Oyo",
    phone: "+234 90 5013 8557",
    email: "info@newagegroupng.com",
    image: "/locations/akanran.jpg",
  },
  {
    name: "ILESHA BRANCH",
    location: "Ilesha",
    address: "No 7, Odo Oro Street, opposite Access Bank, Ilesha, Osun",
    phone: "+234 80 8952 2822",
    email: "info@newagegroupng.com",
    image: "/locations/illesha.JPG",
  },
  {
    name: "JERICHO BRANCH",
    location: "Jericho",
    address: "No 8a, Eleyele road, polo junction, Jericho, Ibadan",
    phone: "+234 90 5013 8542",
    email: "info@newagegroupng.com",
    image: "/locations/jericho.JPG",
  },
  {
    name: "SHAGAMU BRANCH",
    location: "Shagamu",
    address: "168 Akarigbo Road, Sagamu",
    phone: "+234 91 1518 5176",
    email: "info@newagegroupng.com",
    image: "/locations/shagamu.JPG",
  },
  {
    name: "SANGOTEDO BRANCH",
    location: "Sangotedo",
    address:
      "Thesaurus Garden drive, off Lekki-Epe Expressway, opposite Sunview Estate, Sangotedo, Lekki, Lagos.",
    phone: "+234 90 5013 8546",
    email: "info@newagegroupng.com",
    image: "/locations/sangotedo.jpg",
  },
  {
    name: "IWO BRANCH",
    location: "Iwo",
    address: "No 18 Segelu Bus Stop, New Ife Road, Iwo Road, Ibadan, Oyo",
    phone: "+234 80 8952 2822",
    email: "info@newagegroupng.com",
    image: "/locations/IWO BRANCH.jpg",
  },
];

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid name, email, and message.");
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error detected. Please check your connection and retry."
      );
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Tell us how we can support your energy, food supply, agriculture, transport, or export needs."
        imageSrc="/contact-banner.png"
      />

      <section className="bg-white">
        <div
          className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-6"
          data-aos="fade-up"
        >
          <form
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project."
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Send message
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm text-emerald-600">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
            )}
            <p className="mt-4 text-xs text-slate-500">
              Replace the Formspree endpoint in `Contact.tsx` with your project
              ID before deployment.
            </p>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Corporate Office
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Main Head Office - Magboro, Ogun State
                </p>
                <p className="text-xs text-slate-500">
                  PC77+F53, 121101, Magboro, Ogun State
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  Phone / WhatsApp: +234 905 013 8569
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  info@newagegroupng.com
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-primary p-6 text-white">
              <h3 className="text-lg font-semibold text-white">Working Hours</h3>
              <p className="mt-3 text-sm text-white/80">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="mt-2 text-sm text-white/80">
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div
          className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Branches
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Our branch locations across Lagos and Ogun.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600">
                Explore our service points and outlets serving clients across
                the region.
              </p>
            </div>
          </div>

          <div className="group mt-10 overflow-hidden">
            <div
              className="flex gap-5 group-hover:[animation-play-state:paused]"
              style={{
                width: "max-content",
                animation: "branch-slide 60s linear infinite",
              }}
            >
              {[...branches, ...branches].map((branch, i) => (
                <div
                  key={`${branch.name}-${i}`}
                  className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="h-28 w-full overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {branch.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {branch.location}
                    </p>
                    {"address" in branch && (
                      <p className="mt-2 text-xs text-slate-600">
                        {branch.address}
                      </p>
                    )}
                    {"phone" in branch && (
                      <p className="mt-1 text-xs text-slate-600">
                        Phone: {branch.phone}
                      </p>
                    )}
                    {"email" in branch && (
                      <p className="mt-1 text-xs text-slate-600">
                        Email: {branch.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
