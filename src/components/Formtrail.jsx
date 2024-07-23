// components/FreeTrialForm.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import Whatsapp from "../../public/assets/ctwa-2.webp";

const FreeTrialForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    website: "",
    location: "",
    designation: "",
    industry: "",
    revenue: "",
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-12">
      <div className="md:w-1/2 flex justify-center">
        <Image src={Whatsapp} alt="Promo Image" width={500} height={500} />
      </div>
      <div className="md:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg mt-8 md:mt-0 border-4 border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Start For a 14-Day Free Trial
        </h2>
        <h2 className="text-xl text-start font-bold mb-4">Contact Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div >
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Personal WhatsApp Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Work Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <h2 className="text-xl font-bold">Company Details</h2>
          <div className="w-full grid  gap-4 grid-cols-2">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.website}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-gray-700"
              >
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.industry}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="revenue"
                className="block text-sm font-medium text-gray-700"
              >
                Monthly Revenue
              </label>
              <input
                type="text"
                name="revenue"
                id="revenue"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 py-2 px-2"
                value={form.revenue}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="updates" className="inline-flex items-center">
              <input
                type="checkbox"
                name="updates"
                id="updates"
                className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                checked={form.updates}
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-gray-700">
                Get Updates regarding your Interakt account on WhatsApp
              </span>
            </label>
          </div>
          <div>
            <label
              htmlFor="captcha"
              className="block text-sm font-medium text-gray-700"
            >
              I'm not a robot
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Start FREE Trial
            </button>
          </div>
          <div className="text-xs text-gray-600 text-center">
            By clicking on "Register with Interakt" you agree to our terms &
            services and privacy policy
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrialForm;
