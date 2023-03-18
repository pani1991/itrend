import SiteData from "./api/api";
import Top from "../components/top";
import Menu from "../components/menu";
import Topslider from "../components/slider";
import Herosection from "../components/herosection";
import Feature from "../components/feature";
import Demo from "../components/demo";

import Faq from "../components/faq";
import Footer from "../components/footer";
import Categories from "../components/categories";
import InfoSection from "../components/infosection";
import MarketplaceCategoryContent from "../components/marketplaceCategoryContent";
import Priceplan from "../components/priceplan";
import { Helmet } from "react-helmet";
import Content from "../components/content";
const Index = () => {
  const herosection = {
    class: "herosection",
    id: "herosection",
    bigimg: "/banner-image.avif",
    objectFit: "contain",
    backgroundimg: `url("/bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
    bgsvg: `<svg width="1920" height="500" viewBox="0 0 1920 500"><defs><clipPath><rect width="1920" height="500"></rect></clipPath></defs><g data-name="Shape"><rect data-name="Rectangle 134" width="2356" height="781" transform="translate(-136.868 401.948) rotate(-11)" fill="#fff"></rect></g></svg>`,
    head: "Ultimate Platform to monitor your <br/>best workflow.",
    dec: "For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!",
    newbold: "25% Save",
    new: "for first month trail version",
    newcss: `display: inline-block;font-weight:500;color:#fff;border-radius:4em;padding:9px 22px;margin-bottom: 22px;background-color: rgba(255, 255, 255, 0.15);`,
    buttomlink: "#",
    buttomcss: `background:var(--color1);border-width: 0px;border-radius:4px;font-size: 14px;padding: 8px 22px;min-width: 150px;height: 46px;`,
    buttomtitle: "FREE TRIAL",
    ctalink: "#",
    ctatitle: "WATCH VIDEO",
    ctaticone: `<svg fill="currentColor" height="30" width="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>`,
    cssfirst: `-webkit-font-smoothing: antialiased;text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;background-size: cover;background-position: center top;color:#fff;`,
    css: `h1{margin-bottom: 25px;}`,
    padding: "150px 0px 50px",
    width: "container",
    class1: "col-lg-10 col-md-10 mx-auto col-12 text-center",
    class2: "col-lg-10 col-md-10 mx-auto col-12 text-center mt-4",
    textColor: "light",
    // textColor: "dark",
  };
  const content = {
    img: "/053019_COM_SM_3758-1152x767.jpeg",
    title: "Built-in Security Opportunities for Online Assessment",
    svgIcone: "/80-804923_profile-icon-png.png",
    desc: "SmartUniversity assessment and evaluation tools are advanced solutions that finalize the training process most authentically. These tools are customizable for every educational center, allowing educators to create graded online assessments, collect results, and analyze them via detailed reports. <br/>SmartUniversity exam management tools come with an installable tool for students that will block their computers from accessing any Web resources except for their scheduled test, preventing cheating attempts.",
  };
  const infoSection = {
    class: "infosection",
    id: "infosection",
    width: "container",
    padding: "100px 0px",
    titleTextAlign: "center",
    bigTitle: "Our Featured Service that We Provide",
    bigTitleCss: `margin-bottom:90px;`,
    smallTitle: "WORKING PROCESS",
    smallTitleCss: `font-size: 14px;margin-bottom: 5px;margin-top: 0px;font-weight: 700;`,
    gx: "5",
    gy: "3",
    numberColLg: "3",
    numberColMd: "2",
    numberColSm: "2",
    // colType: "horizontal",
    // colType: "vertical",
    colType: "text-center",
    colEleman: {
      titleCss: `margin:35px 0px 20px;`,
      imgSize: "33%",
      imgCss: `max-width:70px;`,
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
    },
    css: ``,
  };
  const demo = {
    class: "demo text-center",
    id: "demo",
    width: "container",
    widthDemoRow: "container-flurid",
    padding: "50px 0px",
    bigtitle: "Demo",
    bigtitlecss: `margin-bottom:50px;color:#fff;`,
    // demoType: "simple",
    demoType: "multiPlayer",
    multiPlayerHeight: "700px",
    multiPlayerItem: "/banner.png",
    speed: "200",
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
    lgSize: "",
    itemNumberLg: "",
    mdSize: "",
    itemNumberMd: "",
    smSize: "",
    itemNumberSm: "",
    dots: "true",
    // dots: "false",
    css: `.demo{background:var(--color1);}`,
  };
  const faq = {
    class: "faq text-center",
    id: "faq",
    width: "container",
    padding: "90px 0px 50px",
    bigTitle: "Want to ask something from us?",
    bigTitleCss: `margin-bottom:50px;`,
    smallTitle: "FREQUENTLY ASK QUESTION",
    smallTitleCss: ``,
    bgsvg: ``,
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
    buttomCss: `background:var(--color1);border-width: 0px;border-radius:4px;font-size: 14px;padding: 8px 22px;min-width: 150px;height: 46px;`,
    buttomTitle: "EXPLORE FORUM",
    bgColor: "",
    css: ``,
  };
  return (
    <div className={"position-relative " + SiteData.direction}>
      <Helmet>
        <body />
        <title>{SiteData.title}</title>
        <meta name="description" content={SiteData.description} />
        <link rel="icon" href={SiteData.favIcone} />
      </Helmet>
      <Top
        direction={SiteData.direction}
        top={SiteData.top}
        color={SiteData.color}
      />
      <Menu
        direction={SiteData.direction}
        menu={SiteData.menu}
        color={SiteData.color}
        position={"absolute"}
      />

      <Herosection
        direction={SiteData.direction}
        herosection={herosection}
        color={SiteData.color}
      />
      <Content
        direction={SiteData.direction}
        content={content}
        title={SiteData.title}
      />

      <InfoSection
        direction={SiteData.direction}
        infoSection={infoSection}
        color={SiteData.color}
      />

      <Demo direction={SiteData.direction} demo={demo} color={SiteData.color} />
      <Priceplan
      // direction={SiteData.direction}
      // priceplan={SiteData.pricePlan}
      // color={SiteData.color}
      />
      <Faq direction={SiteData.direction} faq={faq} color={SiteData.color} />

      <Footer
        direction={SiteData.direction}
        footer={SiteData.footer}
        color={SiteData.color}
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
