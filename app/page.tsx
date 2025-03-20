import { Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";



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
{/* 
          <div className="flex-1">
            <div>
              <ProductCard id={0}
              name="Чизбургер-пицца"
              price={550}
              imageUrl="https://pizzatorg.ru/wa-data/public/shop/products/98/00/98/images/114/114.970.jpg"/>
            </div>
          </div> */}
          
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://static.tildacdn.com/stor3165-6562-4233-a639-376164653436/56474595.jpg',
                prince: 754,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Пеперони',
                imageUrl: 'https://s1.1zoom.ru/big7/187/Fast_food_Pizza_508902.jpg',
                prince: 345,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Ананас пицца',
                imageUrl: 'https://cdn.fishki.net/upload/post/2017/03/15/2242184/cover-28.jpg',
                prince: 686,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Труфель пицца',
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/11381866/2a0000018c24edb5a79cd06adaa0f0281566/orig',
                prince: 346,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Огуречная пицца',
                imageUrl: 'https://thumbs.dreamstime.com/b/fresh-tasty-meat-pizza-cheese-tomatoes-ham-pepperoni-salami-bacon-isolated-white-background-218241805.jpg',
                prince: 978,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Домашняя пицца',
                imageUrl: 'https://www.slivki.by/ximage/1616426715_mceclip11.jpg',
                prince: 356,
                items: [{price: 500}]
              }]} categoryId={1}/>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
}
