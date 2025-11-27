import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { navRoutes } from "@/config/routeConfig";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}>
          <header className="w-full">
  {/* MAIN FLEX: LEFT LOGO + RIGHT SECTION */}
  <div className="w-full flex flex-col md:flex-row">
    {/* LEFT: LOGO (flex-1) */}
    <div className="flex flex-col justify-start items-center flex-1 bg-white py-3">
      <Image
        src="/images/alvas-logo.png"
        width={80}
        height={80}
        alt="Alva's Logo"
      />
    </div>

    {/* RIGHT: POLYGON + NAV (flex-3) */}
    <div className="flex flex-col flex-3 w-full">
      {/* ORANGE POLYGON BAR */}
      <div
        className="h-[55px] bg-[#f4a83a] flex justify-end items-center px-4 md:px-6 gap-4 md:gap-6"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 3% 100%)",
        }}
      >
        {/* --- INSTAGRAM ICON --- */}
        <button className="text-black">
          <img src="/images/insta-icon.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* --- X (TWITTER) ICON --- */}
        <button className="text-black">
          <img src="/images/x-icon.png" alt="X" className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* --- YOUTUBE ICON --- */}
        <button className="text-black">
          <img src="/images/youtube-icon.png" alt="YouTube" className="w-7 h-7 md:w-9 md:h-9" />
        </button>
      </div>

      {/* NAV MENU BAR */}
      <div className="w-full bg-white py-3 px-4 md:px-6">
      {/* Unified Beige Container */}
      <div className="w-full bg-[#f9ecd8] rounded-md px-4 md:px-9 py-2 md:py-1 flex items-center justify-between gap-2">
        {/* Navigation */}
        <nav className="flex items-center gap-2 md:gap-5 text-xs md:text-sm flex-wrap md:flex-nowrap flex-1">
          {navRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.path}
              className="hover:text-orange-600 cursor-pointer whitespace-nowrap"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Search Button */}
        <div className="flex items-center shrink-0">
          <button
            aria-label="search"
            className="w-8 h-8 md:w-9 md:h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition"
          >
            <img src="/images/search-icon.png" alt="Search" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
</header>

          
              {/* CAMPUS HERO IMAGE
              <div className="w-full relative">
                <Image src="/images/logo.png" width={1920} height={800} alt="Campus Image" className="w-full h-auto" priority />
              </div> */}
          
             {/* College Picture */}
          <main className="">
            <section className="relative mt-4">
          
              {/* Hero image wrapper – full width, not shrunken */}
              <div className="overflow-hidden rounded-lg shadow">
                <Image src="/images/logo.png" width={1920} height={800} alt="Campus" className="w-full h-auto" priority />
              </div>
          
              {/* Enquiry strip overlay */}
              <div className="absolute left-0 -bottom-10  w-[92%] md:w-[85%] bg-white/95 rounded-r-full p-4 flex items-center justify-between shadow-lg border">
                <div>
                  <h3 className="font-semibold">Enquiry</h3>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Contact Number</div>
                  <div className="font-bold text-red-600">88888-99999-00000</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Email ID</div>
                  <div className="font-semibold text-red-600">info@alvas.org</div>
                </div>
              </div>
          
            </section>
          </main>
        {children}
        {/* FOOTER SECTION */}
<footer className="w-full bg-[#1e1919] text-white py-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* FLEX CONTAINER */}
    <div className="flex flex-col md:flex-row justify-between gap-12">

      {/* CONTACT US */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>

        <img
          src="/images/alvas-logo.png"
          alt="Alvas Logo"
          className="w-24 mb-4"
        />

        <p className="leading-relaxed text-sm mb-4">
          Alva's College of Physical Education,<br />
          Smt. Sundari Ananda Alva Campus,<br />
          Vidyagiri, Moodabidri - 574227,<br />
          Dakshina Kannada, Karnataka.
        </p>

        <p className="text-sm">Phone No: 9743700154,</p>
        <p className="text-sm">Mobile No: 8150079070</p>
      </div>

      {/* CAMPUS */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">Campus</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-gray-300">Alva's Celebrations</a></li>
          <li><a href="#" className="hover:text-gray-300">Education</a></li>
          <li><a href="#" className="hover:text-gray-300">Literature</a></li>
          <li><a href="#" className="hover:text-gray-300">Sports</a></li>
        </ul>
      </div>

      {/* COURSES */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">Courses</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-gray-300">
              B.P.Ed - Bachelor Of <br /> Physical Education
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              M.P.Ed - Master Of <br />Physical Education
            </a>
          </li>
        </ul>
      </div>

      {/* ABOUT */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">About</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-gray-300">College</a></li>
          <li><a href="#" className="hover:text-gray-300">Management</a></li>
        </ul>
      </div>

    </div>

  </div>
</footer>
      </body>
    </html>
  );
}
