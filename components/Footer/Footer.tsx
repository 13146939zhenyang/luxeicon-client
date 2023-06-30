import React from "react";
import { Youtube, LuxeiconLogo } from '@/public'

const Footer = () => {
  const data = [
    {
      title: "HELP",
      content: [
        { title: "Contact Us", link: "Contact Us Link" },
        {
          title: "FAQs",
          link: "FAQs Link",
        },
        {
          title: "Glossary Of Terms",
          link: "Glossary Of Terms Link",
        },
        {
          title: "A Guide To Watches",
          link: "A Guide To Watches Link",
        },
        {
          title: "Sitemap",
          link: "Sitemap Link",
        },
      ],
    },
    {
      title: "SHOP",
      content: [
        {
          title: "New Arrivals",
          link: "New Arrivals Link",
        },
        {
          title: "All Watches",
          link: "All Watches Link",
        },
        {
          title: "Rolex Watches",
          link: "Rolex Watches Link",
        },
        {
          title: "Why Buy Pre-Owned",
          link: "Why Buy Pre-Owned",
        },
      ],
    },
    {
      title: "SERVICES",
      content: [
        {
          title: "Service Your Watch",
          link: "Service Your Watch Link",
        },
        {
          title: "Sell Your Watch",
          link: "Sell Your Watch Link",
        },
        {
          title: "Part Exchange",
          link: "Part Exchange Link",
        },
        {
          title: "Warranty",
          link: "Warranty Link",
        },
        {
          title: "Protect Your Watch",
          link: "Protect Your Watch Link",
        },
      ],
    },
    {
      title: "COMPANY",
      content: [
        {
          title: "About Us",
          link: "About Us Link",
        },
        {
          title: "Awards",
          link: "Awards Link",
        },
        {
          title: "Press",
          link: "Press Link",
        },
        {
          title: "Testimonials",
          link: "Testimonials Link",
        },
        {
          title: "Jobs",
          link: "Jobs Link",
        },
      ],
    },
    {
      title: "INFORMATION",
      content: [
        {
          title: "Serial Numbers",
          link: "Serial Numbers Link",
        },
        {
          title: "Licensed Images",
          link: "Licensed Images Link",
        },
        {
          title: "Cookie Policy",
          link: "Cookie Policy Link",
        },
        {
          title: "Privacy Policy",
          link: "Privacy Policy Link",
        },
        {
          title: "Terms And Conditions",
          link: "Terms And Conditions Link",
        },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-5 gap-2 text-white py-10 text-[12px] drop-shadow-sm cursor-default">
      {data.map((item, index) => (
        <div className="mb-7" key={index}>
          <h4 className="pb-3 font-bold">{item.title}</h4>
          <div>
            {item.content.map((item, index) => (
              <div className="text-gray-400 hover:text-white pb-3 cursor-pointer" key={index}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="col-span-2 flex flex-col">
        <img
          src={Youtube.src}
          alt=""
          className="w-[80px] pb-5 cursor-pointer"
        />
        <div className="flex items-center">
          <span className="mr-5">Follow Us</span>
          <div className="grid grid-cols-4 gap-4">
            {/* <IoLogoWechat className="cursor-pointer w-[18px] h-[18px]" />
            <GrFacebook className="cursor-pointer w-[18px] h-[18px]" />
            <AiFillInstagram className="cursor-pointer w-[18px] h-[18px]" />
            <FaTwitterSquare className="cursor-pointer w-[18px] h-[18px]" /> */}
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-4 grid grid-cols-2">
        <span className="w-full text-right pr-4 text-gray-400 flex flex-col">
          <span className="font-bold">© LUXEICON.</span>
          <span>vincent@luxeicon.com.au</span>
          <span>address demo</span>
        </span>
        <img src={LuxeiconLogo.src} alt="" className="w-[150px] h-auto" />
      </div>
    </div>
  );
};

export default Footer;
