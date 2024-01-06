import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function About() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-10 py-10">
      <h1 className="font-extrabold text-[50px] mb-3 text-blue-gray-900 ml-5">
        About Us
      </h1>
      <Accordion
        open={open === 1}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What is Real Estate Project?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          corporis voluptate obcaecati temporibus. Culpa commodi tempore odit
          quo ab dolorum? Quos esse nemo eaque rem nam aspernatur cumque
          perferendis quia veniam temporibus quidem corporis similique ducimus
          illo, officiis voluptatum possimus, nobis odit deleniti! Nihil
          obcaecati aliquid minus consequuntur odio cum.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Why you have to choice us?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          mollitia cupiditate tenetur neque dolore! Atque dolorum vero sit
          delectus nisi, consequuntur molestias, nulla eligendi, commodi
          architecto saepe incidunt esse praesentium.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          How to become investor in Real Estate Project?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          reprehenderit, quae ipsam sunt facilis officia quia deserunt commodi
          magnam. Tempora neque itaque exercitationem ad modi!
        </AccordionBody>
      </Accordion>
    </div>
  );
}
