
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  const mentors = [
    { name: "Jane Doe", title: "CEO, TechCorp", image: "/mentor1.png" },
    { name: "John Smith", title: "CTO, Innovate LLC", image: "/mentor2.png" },
    { name: "Peter Jones", title: "Lead Developer, Solutions Inc.", image: "/mentor3.png" },
  ];

  const programs = [
    {
      name: "Startup Ignition",
      description: "A 3-month intensive program for early-stage startups.",
      image: "/program1.png",
    },
    {
      name: "Growth Catalyst",
      description: "For startups looking to scale their operations and market reach.",
      image: "/program2.png",
    },
    {
      name: "Unicorn Track",
      description: "Tailored for high-potential startups on a fast track to a billion-dollar valuation.",
      image: "/program3.png",
    },
  ];

  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-4 leading-tight">
              Your Startup's Journey to Success Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-inter mb-8">
              We provide the mentorship, resources, and network to help you build the next big thing.
            </p>
            <Button primary>Apply Now</Button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins">About Our Program</h2>
              <p className="text-lg text-gray-400 font-inter mt-4 max-w-3xl mx-auto">
                We are a leading accelerator dedicated to fostering innovation and supporting the next generation of entrepreneurs. Our program is designed to provide startups with the tools they need to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins">Our Programs</h2>
              <p className="text-lg text-gray-400 font-inter mt-4 max-w-3xl mx-auto">
                Choose the program that best fits your startup's current stage and future ambitions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.name} image={program.image} title={program.name} description={program.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section id="mentors" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins">Our Mentors</h2>
              <p className="text-lg text-gray-400 font-inter mt-4 max-w-3xl mx-auto">
                Learn from the best. Our mentors are experienced entrepreneurs, investors, and industry experts.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor) => (
                <Card key={mentor.name} image={mentor.image} title={mentor.name} description={mentor.title} />
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-poppins">Apply to Our Program</h2>
              <p className="text-lg text-gray-400 font-inter mt-4 max-w-3xl mx-auto">
                Ready to take your startup to the next level? Fill out the application form below.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <form className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Startup Name"
                  className="bg-slate-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <textarea
                  placeholder="Tell us about your startup"
                  rows={5}
                  className="bg-slate-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
                <Button primary>Submit Application</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
