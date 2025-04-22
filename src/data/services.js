import expressImage from "assets/web-design/desktop/image-express.jpg";
import transferImage from "assets/web-design/desktop/image-transfer.jpg";
import photonImage from "assets/web-design/desktop/image-photon.jpg";
import builderImage from "assets/web-design/desktop/image-builder.jpg";
import blogrImage from "assets/web-design/desktop/image-blogr.jpg";
import campImage from "assets/web-design/desktop/image-camp.jpg";
import airfilterImage from "assets/app-design/desktop/image-airfilter.jpg";
import eyecamImage from "assets/app-design/desktop/image-eyecam.jpg";
import faceitImage from "assets/app-design/desktop/image-faceit.jpg";
import todoImage from "assets/app-design/desktop/image-todo.jpg";
import loopstudiosImage from "assets/app-design/desktop/image-loopstudios.jpg";
import timbrownImage from "assets/graphic-design/desktop/image-change.jpg";
import boxedwaterImage from "assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImage from "assets/graphic-design/desktop/image-science.jpg";

import webDesignMobile from "assets/home/mobile/image-web-design.jpg";
import appDesignMobile from "assets/home/mobile/image-app-design.jpg";
import graphicDesignMobile from "assets/home/mobile/image-graphic-design.jpg";

import webDesignTablet from "assets/home/tablet/image-web-design.jpg";
import appDesignTablet from "assets/home/tablet/image-app-design.jpg";
import graphicDesignTablet from "assets/home/tablet/image-graphic-design.jpg";

import webDesignDesktopSmall from "assets/home/desktop/image-web-design-small.jpg";
import webDesignDesktopLarge from "assets/home/desktop/image-web-design-large.jpg";
import appDesignDesktop from "assets/home/desktop/image-app-design.jpg";
import graphicDesignDesktop from "assets/home/desktop/image-graphic-design.jpg";

export const services = [
  {
    name: "web",
    imageMobile: webDesignMobile,
    imageTablet: webDesignTablet,
    imageDesktop: webDesignDesktopSmall,
    imageDesktopLarge: webDesignDesktopLarge,
    desc: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        name: "Express",
        image: expressImage,
        desc: "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        name: "Transfer",
        image: transferImage,
        desc: "Site for low-cost money transfers and sending money within seconds",
      },
      {
        name: "Photon",
        image: photonImage,
        desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        name: "Builder",
        image: builderImage,
        desc: "Connects users with local contractors based on their location",
      },
      {
        name: "Blogr",
        image: blogrImage,
        desc: "Blogr is a platform for creating an online blog or publication",
      },
      {
        name: "Camp",
        image: campImage,
        desc: "Get expert training in coding, data, design, and digital marketing",
      }
    ],
  },
  {
    name: "app",
    imageMobile: appDesignMobile,
    imageTablet: appDesignTablet,
    imageDesktop: appDesignDesktop,
    desc: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        name: "Airfilter",
        image: airfilterImage,
        desc: "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        name: "Eyecam",
        image: eyecamImage,
        desc: "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        name: "Faceit",
        image: faceitImage,
        desc: "Get to meet your favorite internet superstar with faceit app",
      },
      {
        name: "Todo",
        image: todoImage,
        desc: "A todo app that features cloud sync with light and dark mode",
      },
      {
        name: "Loopstudios",
        image: loopstudiosImage,
        desc: "A VR experience app made for Loopstudios",
      }
    ]
  },
  {
    name: "graphic",
    imageMobile: graphicDesignMobile,
    imageTablet: graphicDesignTablet,
    imageDesktop: graphicDesignDesktop,
    desc: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        name: "Tim Brown",
        image: timbrownImage,
        desc: "A book cover designed for Tim Brown's new release, 'Change'",
      },
      {
        name: "Boxed Water",
        image: boxedwaterImage,
        desc: "A simple packaging concept made for Boxed Water",
      },
      {
        name: "Science!",
        image: scienceImage,
        desc: "A poster made in collaboration with the Federal Art Project",
      }
    ]
  }
]