import { Contact, LocationEdit, Mail, MoveRight } from "lucide-react";
import Hero from "./components/hero";
import { useRef, useState } from "react";
import Reviews from "./components/testimonial";

const App = () => {
  return (
    <>
      <Hero />
      <main className="px-[10%] max-md:px-[5%] w-screen">
        <section className="py-10">
          <h1 className="text-center text-[#212ea0] font-semibold pt-10 text-xl">
            OUR PROGRAM
          </h1>
          <h2 className="text-center font-bold text-3xl pb-5 pt-1">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 grid-col-1 py-10 gap-10 max-md:px-10 ">
            <img src="/pro1.png" alt="" className="rounded-2xl show" />
            <img src="/pro2.png" alt="" className="rounded-2xl show" />
            <img src="/pro3.png" alt="" className="rounded-2xl show" />
          </div>
        </section>

        <section className="flex gap-5 max-md:px-10 max-md:flex-col-reverse">
          <div className=" md:w-[50%] flex items-center">
            <img src="/video.png" alt="" className="rounded-xl" />
          </div>

          <div className="md:w-[50%]">
            <h1 className="font-medium text-[#212ea0] ">ABOUT UNIVERSITY</h1>
            <h2 className="font-bold text-2xl pt-3 pb-2">
              Nurturing Tomorrow's <br /> Leaders Today
            </h2>
            <p className="text- text-gray-400 font-medium py-3">
              Embark on a transformative educational journey with our
              university's comprehensive education programs. Our cutting-edge
              curriculum is designed to empower students with the knowledge,
              skills, and experiences needed to excel in the dynamic field of
              education. <br />
              <br />
              With a focus on innovation, hands-on learning, and personalized
              mentorship, our programs prepare aspiring educators to make a
              meaningful impact in classrooms, schools, and communities. <br />{" "}
              <br />
              Whether you aspire to become a teacher, administrator, counselor,
              or educational leader, our diverse range of programs offers the
              perfect pathway to achieve your goals and unlock your full
              potential in shaping the future of education. <br /> <br />
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <h1 className="font-medium text-[#212ea0] text-center pt-10 pb-2 ">
            CAMPUS
          </h1>
          <h2 className="font-bold text-2xl pt-3 text-center pb-10">Gallery</h2>

          <div className="grid-cols-4 max-md:grid-cols-2  grid gap-10 ">
            <img src="/gal1.png" alt="" className="rounded-xl" />
            <img src="/gal2.png" alt="" className="rounded-xl" />
            <img src="/gal3.png" alt="" className="rounded-xl" />
            <img src="/gal4.png" alt="" className="rounded-xl" />
          </div>
          <button className="flex items-center m-5 gap-1 text-white px-3 py-2 rounded-full bg-[#212ea0] ">
            See more here <MoveRight className="mt-1" />
          </button>
        </section>
        <Reviews />

        <section className="flex max-md:flex-col">
          <div>
            <h1 className="font-medium text-[#212ea0] text-center pt-10 pb-2 ">
              CONTACT US{" "}
            </h1>
            <h2 className="font-bold text-2xl pt-3 text-center pb-10">
              Get in Touch
            </h2>
            <h3 className="font-medium text-lg flex items-center gap-4 max-sm:justify-center">
              Send us a message <img src="/msg.png" alt="" className="h-6" />
            </h3>
            <p className="font-medium text-sm text-gray-400 p-5">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <div className="flex flex-col gap-3">

            <p className="flex gap-2 items-center">
              <Mail /> Contract@email.com
            </p>
            <p className="flex gap-2 items-center">
              <Contact /> +1 123-456-7890
            </p>
            <p className="flex gap-2 items-center">
              <LocationEdit /> 77 Massachusetts Ave, Cambridge <br />
              MA 02139, United States
            </p>
            </div>
          </div>

          <div>
          <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 bg-indigo-50 placeholder-gray-700 outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full p-3 bg-indigo-50 placeholder-gray-700 outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email id"
            className="w-full p-3 bg-indigo-50 placeholder-gray-700 outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Write your messages here</label>
          <textarea
            placeholder="Enter your message"
            rows={4}
            className="w-full p-3 bg-indigo-50 placeholder-gray-700 outline-none"
          />
        </div>
        <div className="flex items-center gap-2 p-3 border rounded-md">
          <input type="checkbox" className="w-5 h-5" />
          <label>I am human</label>
          <img
            src="https://www.hcaptcha.com/1/static/images/hcaptcha-logo.svg"
            alt="hCaptcha"
            className="h-5 ml-auto"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-full font-semibold flex justify-center items-center gap-2"
        >
          Submit now →
        </button>
      </form>
    </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
