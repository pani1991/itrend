import React, { useState } from "react";
import { useCookies } from "react-cookie";
import SiteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Top from "../components/Top";
import Menu from "../components/Menu";
import Herosection from "../components/herosection";
import Feature from "../components/feature";
import Demo from "../components/demo";
import Faq from "../components/faq";
import Footer from "../components/footer";
import InfoSection from "../components/infosection";
import MarketplaceCategoryContent from "../components/marketplaceCategoryContent";
import Priceplan from "../components/priceplan";
import Content from "../components/content";
const Index = () => {
  const herosection = {
    bigimg: "/bg22222.png",
    head: "Blockchain",
    dec: " Blockchain, Trusted Transparent Transactions",
    new: null,
    buttomlink: null,
    buttomtitle: null,
    videotitle: null,
    videolink: null,
    video_mp4: null,
    video_ogg: null,
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
  const content = {
    back_img: "/sandevil-sandh-7F3Fc_0yz_Y-unsplash-1.jpg",
    front_img: "/What-You-Need-To-Know-About-Blockchain-Technology.webp",
    title: "Transparent Ecosystem, Innovative Solutions",
    svg_icone: "/80-804923_profile-icon-png.png",
    desc: "We enable businesses, organizations and startups use blockchain technologies to solve real-world problems related to privacy, decentralization and scalability.<br/> <br/>Blockchain is a very reliable method for storing various types of data.",
  };

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
      <Top
        direction={SiteData.direction}
        top={SiteData.top}
        class_name={"top"}
        id={"top"}
        css={""}
        theme={theme}
        changetheme={changetheme}
      />
      <Menu
        direction={SiteData.direction}
        menu={SiteData.menu}
        class_name={"menu"}
        id={"menu"}
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
      {/* <InfoSection
        direction={SiteData.direction}
        infoSection={infoSection}
        class_name={"infosection"}
        id={"infosection"}
        css={""}
        config={{}}
      /> */}
      {/* <Demo
        direction={SiteData.direction}
        demo={demo}
        class_name={"demo text-center"}
        id={"demo"}
        css={``}
        config={{ demoType: "simple" }}
      /> */}
      {/* <Priceplan
   
        id={"priceplan"}
        class_name={"priceplan"}
        padding={""}
      /> */}
      {/* <Faq
        direction={SiteData.direction}
        faq={faq}
        id={"faq"}
        class_name={"faq text-center"}
        css={``}
        config={{}}
      /> */}

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
