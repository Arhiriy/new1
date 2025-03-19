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

          <div className="flex-1">
            <div>
              <ProductCard id={0}
              name="Чизбургер-пицца"
              price={550}
              imageUrl="https://pizzatorg.ru/wa-data/public/shop/products/98/00/98/images/114/114.970.jpg"/>
            </div>
          </div>
          
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={[{
                id: 1,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://static.tildacdn.com/stor6430-3135-4230-a264-316638633135/57384342.png',
                prince: ,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Пеперони',
                imageUrl: 'https://avatars.mds.yandex.net/i?id=66d30c94125d5f07acadbeefa2dbc844_l-4770953-images-thumbs&ref=rim&n=13&w=1080&h=720',
                prince: 345,
                items: [{price: 500}]
              },{
                id: 1,
                name: 'Ананас пицца',
                imageUrl: 'https://kartinki.pics/uploads/posts/2021-04/1617249652_31-p-pitstsa-na-belom-fone-krasivo-41.jpg',
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
                imageUrl: 'https://sun9-12.userapi.com/impg/IMG-gknDu3aF7cDu5j5wB2bvaDqX_qGCR2zD7g/8NvCWpDtR3o.jpg?size=1000x562&quality=96&sign=5578f36ad944386730010db4b8b9e9f5&c_uniq_tag=cc8lQxDJJ1bbD4HkQpUc78tM_fd51uXBAAUcyQLa89w&type=album',
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
