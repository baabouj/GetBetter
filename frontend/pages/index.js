import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import Container from "../components/Container";

import {
  IoCalendarOutline,
  IoCalendar,
  IoMedkit,
  IoMedicalOutline,
  IoArrowForwardOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { RiBodyScanLine, RiShieldCheckLine, RiTimeLine } from "react-icons/ri";

export default function Home() {
  return (
    <Layout>
      <Container>
        <main className="flex flex-col">
          <div className="flex my-4">
            <h1 className="font-poppins text-6xl font-semibold capitalize text-dark my-2 leading-tight">
              We care about your <span className="text-primary">health</span>
            </h1>
            <p className="font-poppins text-lg font-medium text-gray-500 my-2 self-end">
              Check how your health is by professional team doctor with complete
              and modern facilities services.
            </p>
            {/* <p className="font-poppins text-xl font-regular text-gray-500 my-2 self-end">
            Good health is a state of mental, physical and social well being and
            it does not just mean the absence of desease!.
          </p> */}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-poppins text-primary font-semibold text-2xl my-4">
                Our Advantages
              </h3>
              <div>
                <div className="flex items-center">
                  <div className="text-primary bg-primary/20 p-2 rounded-xl text-2xl">
                    <IoCalendarOutline />
                  </div>
                  <p className="font-poppins p-4">Make an appointment</p>
                </div>
                <div className="flex items-center">
                  <div className="text-primary bg-primary/20 p-2 rounded-xl text-2xl">
                    <RiBodyScanLine />
                  </div>
                  <p className="font-poppins p-4">Digital x-ray on-site</p>
                </div>
                <div className="flex items-center">
                  <div className="text-primary bg-primary/20 p-2 rounded-xl text-2xl">
                    <RiTimeLine />
                  </div>
                  <p className="font-poppins p-4">Emergency Services</p>
                </div>
                <div className="flex items-center">
                  <div className="text-primary bg-primary/20 p-2 rounded-xl text-2xl">
                    <RiShieldCheckLine />
                  </div>
                  <p className="font-poppins p-4">immunizations</p>
                </div>
              </div>
              {/* <button className="w-fit rounded-full font-poppins font-medium bg-blue-400 py-3 px-4 my-2 text-gray-100 hover:bg-blue-500 transition-all">
              Book an appointment
            </button> */}
            </div>
            <div className="relative">
              <Image
                className="object-fill z-10"
                src="/doctors.jpg"
                alt="Our Team"
                width={700}
                height={400}
              />
              {/* <div className="absolute bottom-0 right-0 bg-primary z-20 rounded">
              <div className="flex">
                <div className="flex items-center text-surface p-4">
                  <div className="text-xl p-1">
                    <IoCall />
                  </div>
                  <p className="text-poppins font-medium text-lg">
                    123 456 789
                  </p>
                </div>
                <div className="flex items-center text-surface p-4">
                  <div className="text-xl p-1">
                    <IoMail />
                  </div>
                  <p className="text-poppins font-medium text-lg">
                    get@better.com
                  </p>
                </div>
              </div>
              <div className="flex items-center text-surface p-4">
                <div className="text-xl p-1">
                  <IoLocationSharp />
                </div>
                <p className="text-poppins font-medium text-lg">
                  23 Somewhere Street, Safi
                </p>
              </div>
            </div> */}
              <div className="absolute top-0 right-0 -m-2 bg-primary/50 z-0 w-[700px] h-[400px]" />
            </div>
          </div>
        </main>
      </Container>
      <Container>
        <div className="flex justify-between items-center h-full">
          <div className="flex w-1/2 h-full relative z-40">
            <Image
              className="object-fill z-10"
              alt=""
              src="/doctor-6.jpg"
              width="1000"
              height="400"
            />

            <div className="absolute top-0 right-0 -m-2 bg-primary/50 z-0 w-full h-full" />
          </div>
          <div className="flex flex-col justify-center w-1/2 h-full p-8 mx-4">
            <h3 className="text-xl text-primary font-poppins font-medium">
              Quick Solution
            </h3>
            <h3 className="text-3xl text-dark font-poppins font-semibold py-2">
              Easy <span className="text-primary">Same</span> or Next-day
              Appointments
            </h3>
            <p className="font-poppins font-medium text-dark/60 py-4">
              Easily make appointment with our best doctos for you in same or
              the next day
            </p>
            <div className="my-2">
              <div className="flex items-center">
                <IoCalendar className="text-primary text-2xl" />
                <p className="font-poppins font-semibold text-dark capitalize p-2">
                  Easy online booking here
                </p>
              </div>
              <div className="flex items-center">
                <IoMedkit className="text-primary text-2xl" />
                <p className="font-poppins font-semibold text-dark capitalize p-2">
                  best quality appointment services
                </p>
              </div>
            </div>
            <button className="w-fit mt-4 rounded-lg font-poppins font-medium bg-primary text-gray-100 shadow py-4 px-6 capitalize">
              <Link href="/schedule">Make an appointment</Link>
            </button>
          </div>
        </div>
      </Container>
      <div className="flex flex-col justify-center h-full my-8">
        <div className="flex my-4">
          <div className="my-4">
            <h3 className="text-xl text-primary font-poppins font-medium">
              Our Services
            </h3>
            <h1 className="font-poppins text-3xl font-semibold text-dark my-2 leading-tight capitalize">
              The best quality services for your
              <span className="text-primary"> health</span>
            </h1>
          </div>
          <p className="font-poppins text-lg font-medium text-gray-500 my-2 self-end">
            Our best team doctors with complete and modern facilities will keep
            you healthy or return you to health from sick.
          </p>
          {/* <p className="font-poppins text-xl font-regular text-gray-500 my-2 self-end">
            Good health is a state of mental, physical and social well being and
            it does not just mean the absence of desease!.
          </p> */}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-2">
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoMedicalOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Primary Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              Our certified doctors provide best medical care to help keep you
              healthy.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoHeartOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Heart Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              The most advanced doctors and facility heart care in the region
              happen to be GetBetter.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoMedicalOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Primary Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              Our certified doctors provide best medical care to help keep you
              healthy.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoMedicalOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Primary Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              Our certified doctors provide best medical care to help keep you
              healthy.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoMedicalOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Primary Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              Our certified doctors provide best medical care to help keep you
              healthy.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
          <div className="p-4 shadow rounded-3xl hover:bg-primary hover:cursor-pointer transition-all duration-500 group">
            <div className="flex items-center justify-center text-primary p-2 group-hover:text-surface transition-all duration-500">
              <IoMedicalOutline className="text-6xl" />
              <h2 className="font-poppins font-semibold text-2xl px-2">
                Primary Care
              </h2>
            </div>
            <p className="font-poppins font-medium text-lg text-gray-500 p-2 group-hover:text-gray-200 transition-all duration-500">
              Our certified doctors provide best medical care to help keep you
              healthy.
            </p>
            <div className="flex items-center text-primary group-hover:text-surface transition-all duration-500">
              <p className="font-poppins font-medium text-lg p-2">Learn more</p>
              <IoArrowForwardOutline className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
