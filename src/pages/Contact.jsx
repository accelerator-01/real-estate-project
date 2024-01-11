import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-wrap justify-center gap-5 py-10">
        <Card className=" w-96">
          <CardHeader className="relative h-56">
            <h1 className="text-center font-bold mb-5">AHMAD FIRDAUS</h1>
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography className="mb-2 text-center font-bold">
              Web Developer
            </Typography>
            <Typography className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              earum quaerat, nihil totam deleniti maxime ad exercitationem enim
              asperiores ab corrupti dicta atque?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 justify-between flex">
            <span>Wa</span>
            <span>IG</span>
          </CardFooter>
        </Card>
        <Card className=" w-96">
          <CardHeader className="relative h-56">
            <h1 className="text-center font-bold mb-5">
              ALFI KUKUH ADHAR WICAKSANA
            </h1>
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography className="mb-2 text-center font-bold">
              Digital Marketing
            </Typography>
            <Typography className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              earum quaerat, nihil totam deleniti maxime ad exercitationem enim
              asperiores ab corrupti dicta atque?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-between">
            <span>Wa</span>
            <span>IG</span>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
