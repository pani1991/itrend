import SiteData from "./api/api";
import Top from "../components/top";
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
import Herosection from "../components/herosection";
import Industry from "../components/industry";
import Footer from "../components/footer";
const Industries = () => {
  const herosection = {
    class: "herosection",
    id: "herosection",
    bigimg: null,
    objectFit: "cover",
    backgroundimg: `url("./bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
    bgsvg: null,
    head: "Industries",
    dec: null,
    newbold: "",
    new: null,
    newcss: `display: inline-block;font-weight:500;color:#fff;border-radius:4em;padding:9px 22px;margin-bottom: 22px;background-color: rgba(255, 255, 255, 0.15);`,
    buttomlink: "#",
    buttomcss: `background:var(--color1);border-width: 0px;border-radius:4px;font-size: 14px;padding: 8px 22px;min-width: 150px;height: 46px;`,
    buttomtitle: null,
    ctalink: "#",
    ctatitle: null,
    ctaticone: `<svg fill="currentColor" height="30" width="30" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>`,
    cssfirst: `-webkit-font-smoothing: antialiased;text-shadow: rgb(0 0 0 / 0%) 1px 1px 1px;background-size: cover;background-position: center top;color:#fff;`,
    css: `h1{margin-bottom: 25px;}`,
    padding: "100px 0px 50px",
    width: "container",
    class1: "col-lg-10 col-md-10 mx-auto col-12 text-center",
    class2: "col-lg-10 col-md-10 mx-auto col-12 text-center mt-4",
    textColor: "light",
    // textColor: "dark",
  };
  const industry = {
    color: "var(--color1)",
    icon: `<svg version="1.1" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
    <g><path d="M217.6,915.1c0-19.2,7.2-38.4,21.9-53L601.5,500L239.5,137.9c-29.3-29.3-29.3-76.7,0-106c29.3-29.3,76.7-29.3,106,0L760.5,447c29.3,29.3,29.3,76.7,0,106L345.5,968c-29.3,29.3-76.7,29.3-106,0C224.8,953.4,217.6,934.2,217.6,915.1L217.6,915.1z"/></g>
    </svg>`,
    items: [
      {
        title: "Aerospace & Defense",
        link: "#",
      },
      {
        title: "Federal, national and central government",
        link: "#",
      },
      {
        title: "Fashion",
        link: "#",
      },
      {
        title: "Mining",
        link: "#",
      },
      {
        title: "Agribusiness",
        link: "#",
      },
      {
        title: "Oil and gas and energy industry",
        link: "#",
      },
    ],
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
      <Industry
        industry={industry}
        direction={SiteData.direction}
        id={"industry"}
      />
      <Footer
        direction={SiteData.direction}
        footer={SiteData.footer}
        color={SiteData.color}
      />

      <style jsx>
        {`
          .text-justify {
            text-align: justify;
          }
          .rtl {
            direction: rtl;
            font-family: "fontfa";
          }
        `}
      </style>
    </div>
  );
};
export default Industries;
