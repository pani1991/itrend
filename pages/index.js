import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import SiteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Top from "../components/Top";
import Menu from "../components/Menu";
import BoxSlider from "../components/BoxSlider";
import FullScreenSlide from "../components/FullScreenSlide";
import Categories from "../components/categories";
import Categories2 from "../components/categories2";
import Content from "../components/content";
import Content2 from "../components/content2";
import News from "../components/News";
import MarketplaceCategoryContent from "../components/marketplaceCategoryContent";
import Footer from "../components/Footer";

const Index = () => {
  const fullScreenSlide = [
    {
      tagline: "itrend",
      title: "We Design Your Success",
      link: "#",
      img: null,
      btn_title: "more ...",
      video_mp4: "/itrend.mp4",
      video_ogg: "/itrend.ogg",
    },
    {
      tagline: "News",
      title:
        "Signing a contract with the largest university of medical sciences in the field of artificial intelligence",
      link: "#",
      img: null,
      btn_title: "more ...",
      video_mp4: "/noroz-1400.mp4",
      video_ogg: "/noroz-1400.ogg",
    },
    {
      tagline: "Notifications",
      title:
        "The financial analysis system won the biggest award of Iran's software of the year",
      link: "#",
      img: "/Press_Release_FlexReports_Hero-scaled.jpg",
      btn_title: "more ...",
      video_mp4: null,
      video_ogg: null,
    },
    {
      tagline: "Virtual training",
      title:
        "The latest and best virtual education solutions along with the latest educational equipment",
      link: "#",
      img: "/ocr (1).jfif",
      btn_title: "more ...",
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
    img: "/web1.gif",
    tagline: null,
    title: "Up-to-date, Smart, and Fast",
    list: null,
    dsc: "We Make IT an intelligent investment. No more complicated software, We make it effortless to launch and easier to use. Customized software development makes any of our software compatible with your organization, processes, and workflows. With our seamless solutions, stay one step ahead and embrace success and prosperity.",
    btn: "more ...",
    btn_link: "",
    part1Title: "10 Year",
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

  // change theme to dark or light
  const [cookies, setCookie] = useCookies();
  const [theme, settheme] = useState(
    cookies.theme != undefined ? cookies.theme : "light"
  );
  const changetheme = () => {
    var dark = "dark";
    let light = "light";
    if (theme != "dark") {
      settheme(dark);
      setCookie("theme", dark);
    } else {
      settheme(light);
      setCookie("theme", light);
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
      {/* <BoxSlider
        direction={SiteData.direction}
        boxSlider={boxSlider}
        class_name={"boxSlider"}
        id={"boxSlider"}
        css={""}
      /> */}
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
      {/* <MarketplaceCategoryContent
        direction={SiteData.direction}
        marketplace={marketplace}
        class_name="marketplace"
        id={"marketplace"}
        css={``}
      /> */}
      {/* <Categories2
        direction={SiteData.direction}
        category={category2}
        id={"category2"}
        class_name={"category"}
        css={``}
      /> */}
      {/* <News
        direction={SiteData.direction}
        news={news}
        class_name={"news"}
        id={"news"}
        css={``}
      /> */}

      <Footer
        direction={SiteData.direction}
        footer={SiteData.footer}
        class_Name={"footer"}
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
