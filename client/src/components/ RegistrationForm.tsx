import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const apiBaseUrl = import.meta.env.VITE_API_URL.replace(
    /\/+$/,
    ""
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `${apiBaseUrl}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert(
        error instanceof Error
          ? error.message
          : "Unable to connect to server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="registration"
      className="bg-black py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Registration
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Reserve Your Seat
          </h2>

          <p className="mt-5 text-zinc-400">
            Limited seats available for the AI & Robotics
            Summer Workshop.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-10">
          {success ? (
            <div className="text-center">
              <CheckCircle2
                className="mx-auto text-[#D4AF37]"
                size={60}
              />

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Registration Submitted
              </h3>

              <p className="mt-3 text-zinc-400">
                Thank you for your interest. We will
                contact you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-4 font-semibold text-black transition hover:bg-[#F4D03F] disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Submitting...
                  </>
                ) : (
                  "Enroll Now"
                )}
              </button>
              <p>It make take some time to submitting because the server is setup on render and render take some secounds to wakeup server</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

