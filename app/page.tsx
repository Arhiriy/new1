import { Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";



export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container> 
      <TopBar/>
      <div>
      <Container className="mt-10 pg-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>

          <div className="flex-1">
            <div>
              
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
}
