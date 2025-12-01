"use client"
import Achievements from "@/components/achievements";
import CampusInsights from "@/components/campusInsights";
import SupportOrganizationsCarousel from "@/components/supportOrganizations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {

  return (
    <>


      {/* === BELOW ENQUIRY STRIP SECTION === */}
      <section className=" w-full mt-20 px-10 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* LEFT HALF: 6 IMAGE CARDS */}
          <div className="grid grid-cols-3 gap-6">

            {/* Admission */}
            <a href="/admission" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/admission.png" alt="Admission" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Admission
                </div>
              </article>
            </a>

            {/* Campus */}
            <a href="/campus" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/Campus.png" alt="Campus" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Campus
                </div>
              </article>
            </a>

            {/* Courses */}
            <a href="/courses" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/courses.png" alt="Courses" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Courses
                </div>
              </article>
            </a>

            {/* Careers */}
            <a href="/careers" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/Careers.png" alt="Careers" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Careers
                </div>
              </article>
            </a>

            {/* Faculty & Staff */}
            <a href="/faculty-staff" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/Faculty & staff.png" alt="Faculty & Staff" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Faculty &amp; Staff
                </div>
              </article>
            </a>

            {/* Facilities */}
            <a href="/facilities" className="block">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative h-30 w-full">
                  <Image src="/images/Facilities.png" alt="Facilities" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-3 text-sm font-semibold text-center">
                  Facilities
                </div>
              </article>
            </a>

          </div>

          {/* RIGHT HALF: NOTICE BOX */}
          <aside className="bg-gray-200 rounded-lg shadow p-6 h-full flex flex-col">
            <h3 className="text-lg font-semibold subtitle mb-4">Notice</h3>
            <ul className="text-sm text-gray-700 space-y-2 content list-disc pl-5">
              <li>
                <a href="#" className="hover:text-orange-600">
                  Admissions open for 2025-26.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Orientation program on 10th Dec.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600">
                  Download latest exam timetable.
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <Achievements />
      </section>

      <CampusInsights />

      {/* CHAIRMAN MESSAGE SECTION */}
      <section className="w-full bg-[#f9eeee] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 sm:p-5">

            {/* LEFT — IMAGE */}
            <div className="flex justify-center md:justify-start md:shrink-0">
              <img
                src="/images/mohan-alva.jpg"
                alt="Chairman"
                className="w-56 sm:w-64 md:w-72 rounded-md"
              />
            </div>

            {/* RIGHT — MESSAGE */}
            <div className="flex-1 md:px-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
                CHAIRMAN'S MESSAGE
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                Alva's Education Foundation Is The Crown Of All The Institutes Under
                Our Umbrella. Personally Being An Artist And Sport Lover I Cherish And
                Realize Our Dreams Of Building A Young Generation With Enthusiasm And
                Cultural Intelligence Has Found Its Realization Through This Foundation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                The Diverse Academic Disciplines Integrated With The Cultural And Sport
                Activities Is The Driving Force To Make Our Youth Competent Enough To
                Face Challenges Of The Global Community. Through The Individual Centered
                Pedagogy Build Abilities And Skills To Create New For The Whole Human
                Community May It Are Knowledge Wealth Or Social Progression.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                We Ensure A Safe And Formative Involvement For All The Students To Create
                Themselves As The Assets Of The Family And Our Great Nation.
              </p>

              <p className="text-red-600 font-bold text-lg sm:text-xl">
                Dr. Mohan Alva
              </p>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Chairman, Alva's Education Foundation (R.)
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SUPPORT ORGANIZATIONS CAROUSEL */}
      <SupportOrganizationsCarousel />

    </>
  );
}
