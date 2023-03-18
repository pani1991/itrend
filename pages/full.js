import React, { useState } from "react";
import SiteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Top from "../components/Top";
import Menu from "../components/Menu";
import Herosection from "../components/herosection";
import BoxSlider from "../components/BoxSlider";
import FullScreenSlide from "../components/FullScreenSlide";
import Categories from "../components/categories";
import Categories2 from "../components/categories2";
import Content from "../components/content";
import Content2 from "../components/content2";
import News from "../components/News";
import MarketplaceCategoryContent from "../components/marketplaceCategoryContent";
import Footer from "../components/Footer";
import Demo from "../components/demo";
import Faq from "../components/faq";
import InfoSection from "../components/infosection";
import Priceplan from "../components/priceplan";
import Update from "../components/update";
const Index = () => {
  const fullScreenSlide = [
    {
      tagline: "News",
      title:
        "Integration and executive guarantee are the main concepts of planning",
      link: "#",
      img: null,
      btn_title: "more ...",
      video_mp4: "/noroz-1400.mp4",
      video_ogg: "/noroz-1400.ogg",
    },
    {
      tagline: "News",
      title:
        "Maintaining the position of 24 Jam Petrochemicals among the top 100 companies in Iran",
      link: "#",
      img: "/demo-img-2.jpg",
      btnTitle: "more ...",
      video_mp4: null,
      video_ogg: null,
    },
    {
      tagline: "Notifications",
      title: "Hiring temporary labor for major repairs of the complex",
      link: "#",
      img: "/Press_Release_FlexReports_Hero-scaled.jpg",
      btnTitle: "more ...",
      video_mp4: null,
      video_ogg: null,
    },
    {
      tagline: "2022 Corporate Plan Update",
      title:
        "We announced our corporate plan for the next five years, including increased investments in lower-emissions efforts",
      link: "#",
      img: "/ocr (1).jfif",
      btnTitle: "more ...",
      video_mp4: null,
      video_ogg: null,
    },
  ];
  const boxSlider = [
    {
      smalltitle: "CEO Alliance",
      title: "Electrification of trucks moves to the fast lane",
      link: "#",
      img: "/heavy-duty-vehicle_5x2.avif",
    },
    {
      smalltitle: "ABB Decoded podcast",
      title: "Making the world’s greenest battery",
      link: "#",
      img: "/ABB_Decoded_EP22_2000x1125_20221108_jp_clean_3x1 (1).avif",
    },
    {
      smalltitle: "#DidYouKnow",
      title: "Maid of the Mist ",
      link: "#",
      img: "/did-you-know-microsite-maid-of-the-mist-banner_5x2.avif",
    },
  ];
  const content = {
    back_img: "/sandevil-sandh-7F3Fc_0yz_Y-unsplash-1.jpg",
    front_img: "/Press_Release_FlexReports_Hero-scaled.jpg",
    title: "About Us",
    svg_icone: "/80-804923_profile-icon-png.png",
    desc: "At itrend., we believe in utilizing technology to empower businesses and individuals. Our team of innovative and dedicated professionals work tirelessly to deliver custom IT solutions that meet the unique needs of each of our clients. With a passion for excellence and a drive to stay ahead of the latest industry trends, we are committed to delivering results that exceed expectations. Join us on our mission to create a technologically advanced world, one solution at a time.",
  };
  const content2 = {
    img: "/bg_video_middle.jpg",
    tagline: "One of the largest olefin production units in the world",
    title: "Jam Petrochemical",
    list: [
      "The owner of 47% of the shares of Polypropylene Jam production company",
      "One of the largest olefin production units in the world",
      "The holder of the 24th position among the top 100 companies in Iran",
    ],
    dsc: "Jam Petrochemical Company, abbreviated as JPC, as one of the largest olefin production units in the world, was one of the development plans of the National Iranian Petrochemical Industry Company in 1379 in Pars Petrochemical Special Zone in Asaluyeh, which is mainly for the purpose of producing olefins. and light linear and heavy polyethylenes have been established.",
    btn: "more ...",
    btn_link: "",
    part1Title: "22 Year",
    video_mp4: "/noroz-1400.mp4",
    video_ogg: "/noroz-1400.ogg",
  };
  const news = [
    {
      link: "",
      img: "/bg4 (1).jpg",
      title:
        "The design and provision of services should be done with the aim of improving the quality and satisfying the personnel",
      desc: "The director of Jam Petrochemical Complex said: All programs should be defined in a targeted way and orientation and evaluations should be done by defining the goal, expectations and comprehensive needs of design and service employees with the aim of improving quality and satisfying personnel.",
    },
    {
      link: "",
      img: "/DSC_8752.jfif",
      title:
        "Maintaining the position of 24 Jam Petrochemicals among the top 100 companies in Iran",
      desc: "Jam Petrochemical Company was ranked 24th in the annual ranking of the top 100 companies by the Industrial Management Organization of Iran.",
    },
    {
      link: "",
      img: "/JPC.jpg",
      title:
        "The seminar personality type and food intake of employees was held in Petrochemical Jam",
      desc: "The two-day seminar personality type and food intake of employees was held on the 5th and 6th of February in the Apadana Hall of Jam Petrochemical Complex.",
    },
  ];
  const marketplace = {
    sideFilterTitle: "products category",
    all: "All",
    btnTitle: "online order",
    item: [
      {
        category: "OLEFIN",
        title: "Cut C4",
        img: "/Untitled-5.png",
        liStItem: ["TBC 50-200", "Dimer (VCH) Max. 0.1"],
        btnLink: "",
      },
      {
        category: "OLEFIN",
        title: "Heydrogen",
        img: "/Untitled-1.png",
        liStItem: ["TBC 50-200", "Dimer (VCH) Max. 0.1"],
        btnLink: "",
      },
      {
        category: "Butadiene",
        title: "Butadiene",
        img: "/Untitled-2.png",
        liStItem: ["TBC 50-200", "Dimer (VCH) Max. 0.1"],
        btnLink: "",
      },
      {
        category: "OLEFIN",
        title: "Methane",
        img: "/Untitled-3.png",
        liStItem: ["TBC 50-200", "Dimer (VCH) Max. 0.1"],
        btnLink: "",
      },

      {
        category: "OLEFIN",
        title: "Fuel Oil",
        img: "/Untitled-4.png",
        liStItem: ["TBC 50-200", "Dimer (VCH) Max. 0.1"],
        btnLink: "",
      },
    ],
  };
  const category = {
    title: "SERVISE",
    item: [
      {
        title: "IT Services",
        link: "/it",
        img: "/8741083.png",
      },
      {
        title: "CRM",
        link: "#",
        img: "/9402423.png",
      },
      {
        title: "Academy",
        link: "#",
        img: "/9402352.png",
      },
      {
        title: "ERP",
        link: "#",
        img: "/5307884.png",
      },
      {
        title: "Web Design",
        link: "web",
        img: "/9402467.png",
      },
      {
        title: "Software development",
        link: "software",
        img: "/5537616.png",
      },
      {
        title: "Artificial Intelligence (AI)",
        link: "ai",
        img: "/7496115.png",
      },
      {
        title: "Virtual Reality",
        link: "virtual-reality",
        img: "/6634978.png",
      },
    ],
  };
  const category2 = {
    title: "Petrochemical subsets of Jam",
    dsc: "Jam Petrochemical Group was formed with the aim of organizing and managing a value-creating chain of satellite companies and is expanding. Jam Petrochemical Company currently owns 47% of the shares of Jam Polypropylene Production Company and 100% of Jam Sanat Karan Service Companies, Development Polymer holds Podgem and the development of Kangan Polymer. The development of this chain is one of the key goals and strategies of the shareholders.",
    item: [
      {
        title: "IT Services",
        link: "/it",
        img: "/8741083.png",
      },
      {
        title: "CRM",
        link: "#",
        img: "/9402423.png",
      },
      {
        title: "Academy",
        link: "#",
        img: "/9402352.png",
      },
      {
        title: "ERP",
        link: "#",
        img: "/5307884.png",
      },
      {
        title: "Web Design",
        link: "web",
        img: "/9402467.png",
      },
      {
        title: "Software development",
        link: "software",
        img: "/5537616.png",
      },
      {
        title: "Artificial Intelligence (AI)",
        link: "ai",
        img: "/7496115.png",
      },
      {
        title: "Virtual Reality",
        link: "virtual-reality",
        img: "/6634978.png",
      },
    ],
  };
  const herosection = {
    bigimg: "/banner-image.avif",
    head: "17025 Laboratory Management",
    dec: "ISO/IEC 17025 Compliant Laboratory Management Software: Streamlining Operations and Ensuring Compliance",
    new: "neww text newwwww mwtn text",
    buttomlink: "#",
    buttomtitle: "FREE TRIAL",
    videotitle: "WATCH VIDEO",
    videolink: "#",
    video_mp4: "/noroz-1400.mp4",
    video_ogg: "/noroz-1400.ogg",
  };
  const infoSection = {
    bigTitle: "Our Featured Service that We Provide",
    smallTitle: "WORKING PROCESS",
    colElemanItem: [
      {
        title: "Download our app",
        img: "/process-1.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
      {
        title: "Create a free account",
        img: "/process-2.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
      {
        title: "Now Start your journey",
        img: "/process-3.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
      {
        title: "Download our app",
        img: "/process-1.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
      {
        title: "Create a free account",
        img: "/process-2.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
      {
        title: "Now Start your journey",
        img: "/process-3.svg",
        dec: "Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.",
      },
    ],
  };
  const demo = {
    bigtitle: "Demo",
    multiPlayerItem: "/banner.png",
    item: [
      {
        img: "/dash-4-71ef96bc78d3749d404cbe671d32d94f.png",
        title: "",
      },
      {
        img: "/dash-3-6db16bd3baab657b8b23466693dddc1a.png",
        title: "",
      },
      {
        img: "/dashboard.avif",
        title: "",
      },
      {
        img: "/analytics.avif",
        title: "",
      },
      {
        img: "/analytics (1).avif",
        title: "",
      },
    ],
  };
  const faq = {
    bigTitle: "Want to ask something from us?",
    smallTitle: "FREQUENTLY ASK QUESTION",
    item: [
      {
        title: "How to contact with Customer Service?",
        desc: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.",
      },
      {
        title: "App installation failed, how to update system information?",
        desc: "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .",
      },
      {
        title: "Website reponse taking time, how to improve?",
        desc: "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .",
      },
    ],
    buttomLink: "#",
    buttomTitle: "EXPLORE FORUM",
  };
  const update = {
    bigTitle: "Meet our new updated screen",
    smallTitle: "TESTIMONIAL",
    item: [
      {
        title: "Budget Overview",
        img: "/dash-4-71ef96bc78d3749d404cbe671d32d94f.png",
        svg: `<svg fill="currentColor" style="display:inline-block;vertical-align:middle" height="24" width="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></svg>`,
      },
      {
        title: "Create & Adjust",
        img: "/dash-3-6db16bd3baab657b8b23466693dddc1a.png",
        svg: `<svg fill="currentColor" style="display:inline-block;vertical-align:middle" height="24" width="24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"><path d="M0,0h24v24H0V0z" fill="none"></path></path><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path></path></g></svg>`,
      },
      {
        title: "View Reports",
        img: "/dash-4-71ef96bc78d3749d404cbe671d32d94f.png",
        svg: `<svg fill="currentColor" style="display:inline-block;vertical-align:middle" height="24" width="24" viewBox="0 0 16 16"><path d="M7 9v-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7c0-1.126-0.266-2.189-0.738-3.131l-6.262 3.131zM14.262 3.869c-1.149-2.294-3.521-3.869-6.262-3.869v7l6.262-3.131z"></path></svg>`,
      },
      {
        title: "Integrations",
        img: "/dash-3-6db16bd3baab657b8b23466693dddc1a.png",
        svg: `<svg fill="currentColor" style="display:inline-block;vertical-align:middle" height="24" width="24" viewBox="0 0 1792 1792"><path d="M640 256h512v-128h-512v128zM1792 896v480q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-480h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45v-160h672zM1024 896v128h-256v-128h256zM1792 416v384h-1792v-384q0-66 47-113t113-47h352v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z"></path></svg>`,
      },
    ],
  };

  // change theme to dark or light
  const [theme, settheme] = useState("light");
  const changetheme = () => {
    var dark = "dark";
    let light = "light";
    if (theme != "dark") {
      settheme(dark);
    } else {
      settheme(light);
    }
  };

  return (
    <div className={"position-relative " + SiteData.direction}>
      <Head>
        <title>{SiteData.title}</title>
        <meta name="description" content={SiteData.description} />
        <link rel="icon" href={SiteData.favIcone} />
      </Head>
      <Helmet>
        <body data-bs-theme={theme} />
      </Helmet>
      <div
        className="col-12"
        style={{
          position: "absolute",
          top: "0px",
          width: "100%",
          zIndex: "10",
        }}
      >
        <Top
          direction={SiteData.direction}
          top={SiteData.top}
          class_name={"top"}
          id={"top"}
          css={""}
          theme={theme}
          changetheme={changetheme}
          config={{ position: "absolute" }}
        />
        <Menu
          direction={SiteData.direction}
          menu={SiteData.menu}
          class_name={"menu"}
          id={"menu"}
          css={""}
          config={{ position: "absolute" }}
        />
      </div>
      <FullScreenSlide
        direction={SiteData.direction}
        fullScreenSlide={fullScreenSlide}
        class_name={"fullScreenSlide"}
        id={"fullScreenSlide"}
        css={null}
      />
      <BoxSlider
        direction={SiteData.direction}
        boxSlider={boxSlider}
        class_name={"boxSlider"}
        id={"boxSlider"}
        css={""}
      />
      <Herosection
        direction={SiteData.direction}
        herosection={herosection}
        class_name={"herosection"}
        id={"herosection"}
        css={""}
        config={{
          background: `url("/bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
        }}
      />
      <Content
        direction={SiteData.direction}
        content={content}
        title={SiteData.title}
        id={"content"}
        class_name={"content"}
        css={""}
      />
      <Categories
        direction={SiteData.direction}
        category={category}
        id={"category"}
        class_name={"category"}
        css={""}
      />
      <Content2
        direction={SiteData.direction}
        content={content2}
        id={"content2"}
        class_name={"content"}
        css={""}
      />
      <MarketplaceCategoryContent
        direction={SiteData.direction}
        marketplace={marketplace}
        class_name="marketplace"
        id={"marketplace"}
        css={``}
      />
      <Categories2
        direction={SiteData.direction}
        category={category2}
        id={"category2"}
        class_name={"category"}
        css={``}
      />
      <News
        direction={SiteData.direction}
        news={news}
        class_name={"news"}
        id={"news"}
        css={``}
      />
      <InfoSection
        direction={SiteData.direction}
        infoSection={infoSection}
        class_name={"infosection"}
        id={"infosection"}
        css={""}
        config={{}}
      />
      <Demo
        direction={SiteData.direction}
        demo={demo}
        class_name={"demo text-center"}
        id={"demo"}
        css={``}
        config={{ demoType: "simple" }}
      />
      <Faq
        direction={SiteData.direction}
        faq={faq}
        id={"faq"}
        class_name={"faq text-center"}
        css={``}
        config={{}}
      />
      <Update
        direction={SiteData.direction}
        update={update}
        class={"update text-center"}
        id={"update"}
        config={{
          bgColor: "var(--color1)",
        }}
        css={`
          .demo {
            background: var(--color1);
          }
        `}
      />
      <Priceplan
        // direction={SiteData.direction}
        // priceplan={SiteData.pricePlan}
        // color={SiteData.color}
        id={"priceplan"}
        class_name={"priceplan"}
        padding={""}
      />
      <Footer
        direction={SiteData.direction}
        footer={SiteData.footer}
        className={"footer"}
        id={"footer"}
        css={null}
      />

      <style jsx>
        {`
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};
export default Index;
