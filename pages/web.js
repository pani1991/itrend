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
  const content = {
    img: "/gallery_3_186_193204.jpg",
    title: "Smart Solutions for Campus Management",
    desc: "Providing high-level student support and managing the campus are challenging. These challenges are more intense in higher education. <br/> We help you to overcome them with the SmartUniversity Student welfare management module. We equipped you with the most complete solutions to let you manage the campus effectively. With the power IT, make sure everything is just done alright. ",
  };
  const herosection = {
    class: "herosection",
    id: "herosection",
    bigimg: "/office2.jpg",
    objectFit: "cover",
    backgroundimg: `url("./bg.png"), linear-gradient(35deg, var(--color1) 0%, rgb(29, 151, 108) 100%)`,
    bgsvg: `<svg width="1920" height="500" viewBox="0 0 1920 500"><defs><clipPath><rect width="1920" height="500"></rect></clipPath></defs><g data-name="Shape"><rect data-name="Rectangle 134" width="2356" height="781" transform="translate(-136.868 401.948) rotate(-11)" fill="#fff"></rect></g></svg>`,
    head: "Web Design",
    dec: "Web Design Canada: Create a Stunning Website that Reflects Your Brand",
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
          A great website is essential for any business looking to succeed in
          today's digital landscape. That's why you need a web design partner
          that you can trust to create a stunning website that reflects your
          brand and connects with your target audience. <br /> At itrend, we
          specialize in web design services for businesses of all sizes in
          Canada. Our team of experienced designers has the skills and
          creativity to create a website that not only looks great, but also
          functions seamlessly and delivers results. Whether you're looking for
          a simple brochure website or a complex e-commerce platform, we've got
          you covered. <br /> Our web design process starts with understanding
          your business and your goals. We work closely with you to create a
          custom design that meets your needs and exceeds your expectations.
          From custom graphics and responsive layouts to intuitive navigation
          and seamless functionality, we focus on every detail to ensure that
          your website delivers a great user experience. <br /> In addition to
          our web design services, we also offer ongoing website maintenance and
          support to ensure that your website stays up-to-date and secure.
          Whether you need help with content updates, bug fixes, or technical
          support, we're here to help. <br /> So why wait? If you're looking for
          a professional and reliable web design partner in Canada, look no
          further than itrend . Contact us today to schedule a consultation and
          start creating a website that reflects your brand and connects with
          your target audience.
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
