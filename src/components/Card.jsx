import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function SimpleCard() {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Hello World
        </Typography>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          officiis sed illum eligendi odit nesciunt consequuntur ea, omnis quod?
          Sint quibusdam, deleniti quis vitae inventore praesentium delectus
          velit? Sed, odio.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Click Me!</Button>
      </CardFooter>
    </Card>
  );
}
