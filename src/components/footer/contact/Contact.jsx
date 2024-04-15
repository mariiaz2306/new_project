import React from "react";
import facebookIcon from "../contact/media/facebook.png"
import s from "./Contact.module.css";

const socials = [
  {
    name: "FaceBook",
    link: "https://www.facebook.com/softlevel/",
    icon: facebookIcon,
   
  },
  
];

const ContactInfoItem = ({ title, content }) => (
  <div>
    <p>{title}</p>
    {content}
  </div>
);

export default function Contact() {
  return (
    <div className={s.contact_info}>
      <ContactInfoItem
        title="Phone"
        content={<a href="tel:+49 (0) 37754 1440-0">Zentrale: +49 (0) 37754 1440-0</a>}
      />
      <ContactInfoItem
        title="Facebook"
        content={socials.map((social) => (
          <a key={social.name} href={social.link}>
            <img src={social.icon} alt={social.name} className={s.icons} />
          </a>
        ))}
      />
      <ContactInfoItem
        title="Address"
        content={
          <a href="https://www.google.de/maps/place/Linkstra%C3%9Fe+2,+10785+Berlin/@52.5079222,13.3566415,15z/data=!3m1!4b1!4m6!3m5!1s0x47a851cbdeaf3909:0xff2aef2e44148447!8m2!3d52.5079236!4d13.3750954!16s%2Fg%2F11c5ny_m0t?entry=ttu">
          Bahnhofstraße 41
          D-08297 Zwönitz
          </a>
        }
      />
      <ContactInfoItem
        title="Working Hours"
        content={<h4 className={s.working_hours}>24 hours a day</h4>}
      />
    </div>
  );
}
