import { styled } from "@stitches/react";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

const Container = styled("main", {
  backgroundColor: "$gray1",
});
