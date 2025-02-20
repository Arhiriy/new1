import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";



export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="uppercase text-2xl"/>
        </Container> 
        <TopBar/>
    </>
  );
}
