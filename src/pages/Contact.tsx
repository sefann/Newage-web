import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";

const FORM_ENDPOINT = "https://formspree.io/f/yourFormId";

const branches = [
  {
    name: "Magboro Head Office",
    location: "Magboro, Ogun State",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ikeja Service Point",
    location: "Ikeja, Lagos State",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lekki Service Point",
    location: "Lekki, Lagos State",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ajah Service Point",
    location: "Ajah, Lagos State",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Victoria Island Outlet",
    location: "Victoria Island, Lagos State",
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Abeokuta Branch",
    location: "Abeokuta, Ogun State",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sagamu Branch",
    location: "Sagamu, Ogun State",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ijebu Ode Branch",
    location: "Ijebu Ode, Ogun State",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
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
                  +234 90 5013 8556, +234 90 5013 8555
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  info@newagegroupng.com
                </p>
                <p className="text-sm text-slate-600">
                  Instagram: @Newagegroup_ng
                </p>
                <p className="text-sm text-slate-600">X: @Newagegroup_ng</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-primary p-6 text-white">
              <h3 className="text-lg font-semibold">Working Hours</h3>
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-24 w-full overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
