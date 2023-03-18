import SiteData from "./api/api";
import Top from "../components/top";
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
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

import Content from "../components/content";
const Index = () => {
  const herosection = {
    class: "herosection",
    id: "herosection",
    bigimg: "/banner-image.avif",
    backgroundimg: `url("./bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
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
    svgIcone:
      ' <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16"><path fill="#fff" d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>',
    desc: "SmartUniversity assessment and evaluation tools are advanced solutions that finalize the training process most authentically. These tools are customizable for every educational center, allowing educators to create graded online assessments, collect results, and analyze them via detailed reports. <br/>SmartUniversity exam management tools come with an installable tool for students that will block their computers from accessing any Web resources except for their scheduled test, preventing cheating attempts.",
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
        herosection={SiteData.herosection}
        color={SiteData.color}
      />
      <Topslider
        direction={SiteData.direction}
        topSlider={SiteData.topSlider}
        color={SiteData.color}
      />
      <Herosection
        direction={SiteData.direction}
        herosection={SiteData.herosection2}
        color={SiteData.color}
      />
      <Feature
        direction={SiteData.direction}
        feature={SiteData.feature}
        color={SiteData.color}
      />

      <Content
        direction={SiteData.direction}
        content={content}
        title={SiteData.title}
      />
      <Categories
        direction={SiteData.direction}
        category={SiteData.category}
        color={SiteData.color}
      />
      <InfoSection
        direction={SiteData.direction}
        infoSection={SiteData.infoSection}
        color={SiteData.color}
      />
      <Feature
        direction={SiteData.direction}
        feature={SiteData.feature2}
        color={SiteData.color}
      />
      <Demo
        direction={SiteData.direction}
        demo={SiteData.demo}
        color={SiteData.color}
      />
      <Faq
        direction={SiteData.direction}
        faq={SiteData.faq}
        color={SiteData.color}
      />
      <Update
        direction={SiteData.direction}
        update={SiteData.update}
        color={SiteData.color}
      />

      <ClientSay
        direction={SiteData.direction}
        clientSay={SiteData.clientSay}
        color={SiteData.color}
      />
      <MarketplaceCategoryContent
        direction={SiteData.direction}
        marketplace={SiteData.marketplaceCategoryContent}
        color={SiteData.color}
        title={SiteData.title}
      />
      <Priceplan
      // direction={SiteData.direction}
      // priceplan={SiteData.pricePlan}
      // color={SiteData.color}
      />

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
