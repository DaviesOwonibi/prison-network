import { FC } from "react";
import Button from "@/app/components/ui/Button";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return <Button variant={"default"} size={"default"}>Hello</Button>;
};

export default page;
