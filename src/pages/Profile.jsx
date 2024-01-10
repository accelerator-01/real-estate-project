import { Card, CardBody, Typography } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex flex-wrap justify-center gap-5">
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Hello! I am Ahmad Firdaus, the Web Developer.
            </Typography>
            <Typography className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              officiis sed illum eligendi odit nesciunt consequuntur ea, omnis
              quod? Sint quibusdam, deleniti quis vitae inventore praesentium
              delectus velit? Sed, odio.
            </Typography>

            <Typography className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              officiis sed illum eligendi odit nesciunt consequuntur ea, omnis
              quod? Sint quibusdam, deleniti quis vitae inventore praesentium
              delectus velit? Sed, odio.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Hello! I am Alfi Kukuh Adhar Wicaksana, the Marketing.
            </Typography>
            <Typography className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              officiis sed illum eligendi odit nesciunt consequuntur ea, omnis
              quod? Sint quibusdam, deleniti quis vitae inventore praesentium
              delectus velit? Sed, odio.
            </Typography>
            <Typography className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              officiis sed illum eligendi odit nesciunt consequuntur ea, omnis
              quod? Sint quibusdam, deleniti quis vitae inventore praesentium
              delectus velit? Sed, odio.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
