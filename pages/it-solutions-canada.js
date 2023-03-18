import SiteData from "./api/api";
import Top from "../components/top";
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
import Herosection from "../components/herosection";
import Feature from "../components/feature";
import Categories from "../components/categories";
import Content from "../components/content";
import Footer from "../components/footer";
const Index = () => {
  const herosection = {
    class: "herosection",
    id: "herosection",
    bigimg: "/XVMd107a4fa-a440-11ec-8031-a7903cc6b8c4.webp",
    objectFit: "cover",
    backgroundimg: `url("./bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
    bgsvg: `<svg width="1920" height="500" viewBox="0 0 1920 500"><defs><clipPath><rect width="1920" height="500"></rect></clipPath></defs><g data-name="Shape"><rect data-name="Rectangle 134" width="2356" height="781" transform="translate(-136.868 401.948) rotate(-11)" fill="#fff"></rect></g></svg>`,
    head: "IT Solutions Canada",
    dec: " Delivering Innovative and Customized Technology Solutions for Businesses",
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
    padding: "130px 0px 0px",
    width: "container",
    class1: "col-lg-10 col-md-10 mx-auto col-12 text-center",
    class2: "col-lg-10 col-md-10 mx-auto col-12 text-center mt-4",
    textColor: "light",
    // textColor: "dark",
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
      <div className="col-lg-7 col-11 py-5 my-5 col-md-11 mx-auto">
        {/* <h2 className="mb-4  text-center">
          The learning and training software for
        </h2> */}
        <p className="text-justify">
          As a business owner in Canada, you understand the importance of having
          the right technology solutions in place to support your growth and
          success. Whether you need help with hardware and software upgrades,
          network design, or application development, you need an IT solutions
          provider that you can trust to deliver results.
          <br />
          At itrend, we specialize in delivering innovative and customized IT
          solutions for businesses of all sizes in Canada. Our team of
          experienced IT professionals has the technical expertise and business
          acumen to help you get the most out of your technology investments.
          Whether you need help with a single project or ongoing support, we've
          got you covered.
          <br />
          Our IT solutions process starts with understanding your business and
          your technology needs. We work closely with you to assess your current
          systems and develop a customized solution that meets your needs.
          Whether you need help with hardware and software upgrades, network
          design, or application development, we focus on every detail to ensure
          that your technology solutions are innovative and effective.
          <br />
          In addition to our IT solutions services, we also offer technology
          consulting and project management services to help you plan and
          execute technology projects. Whether you need help with a hardware
          upgrade, software implementation, or network design, we're here to
          help.
          <br />
          So why wait? If you're looking for an innovative and customized IT
          solutions provider in Canada, look no further than itrend. Contact us
          today to schedule a consultation and start getting the most out of
          your technology investments.
        </p>
      </div>
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
export default Index;
