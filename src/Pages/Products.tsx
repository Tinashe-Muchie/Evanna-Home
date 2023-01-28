import { useState } from 'react';
import { MyQueryQuery } from '../generated/categories_generated';
import { PRODUCT_CARD } from '../Components/ProductCard';
import { NavLink } from 'react-router-dom';

export const PRODUCTS = ({products}: {products: MyQueryQuery | undefined}) => {

  const [data, setData] = useState<string>('decor-accessories');

  const PRODUCTS = products?.categories.filter((category)=>category.slug === data)
  console.log(PRODUCTS)

  const product = PRODUCTS?.[0]
  const items = product?.product

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  return (
    <div className="products_page_container">
      <nav>
        <div className='dropdown'>
        <button 
          className={openMenu ? 'dropdown_label_active' : 'dropdown_label'} 
          onClick={()=> setOpenMenu(!openMenu)}
          > Products Menu </button>
        <ul className={openMenu ? 'dropdown_menu_active' : 'dropdown_menu'}>
          {
            CATEGORIES.map((category)=> (
                <li
                  key={category.id}
                  onClick={()=> setData(category.slug)}
                  className={ 
                    (product?.slug === category.slug) ? 'product_link_active'
                    : 'product_link'
              }
                >
                  {category.title}
                </li>
            ))
          }
        </ul>
        </div>
      </nav>
      <section>
      <div className="product_title">{product?.title}</div>
      <ul className="products_wrapper">
        {
          items?.map((item)=> (
            <li key={item.id}>
              <NavLink 
                to="/details"
                state={{
                  item,
                  category_name: product?.title
                }}
                className="product_link"
              >
                <PRODUCT_CARD name={item.name} price={item.price} image={item.productPhoto} />
              </NavLink>
            </li>
          ))
        }
      </ul>
      </section>
    </div>
  );
};

const CATEGORIES = [
  {
    "id": "cl4qxt8zt3u2g0dk84p4oxhkd",
    "slug": "decor-accessories",
    "title": "Decor Accessories"
  },
  {
    "id": "cl4qxwtc43uqi0dk8x4yr49zh",
    "slug": "decor-services-and-frames",
    "title": "Decor Boxes and Frames"
  },
  {
    "id": "cl4qxxdr43usp0dk8vcqqaefh",
    "slug": "coffee-table",
    "title": "Coffee Table"
  },
  {
    "id": "cl4qxxnse3wsy0ek2qg40hd48",
    "slug": "cushions",
    "title": "Cushions"
  },
  {
    "id": "cl4qxxsz33wtt0ek2rdpawlnd",
    "slug": "trees",
    "title": "Trees"
  },
  {
    "id": "cl4qxy0jm3ttd0ciscyev39zn",
    "slug": "mirrors",
    "title": "Mirrors"
  },
  {
    "id": "cl4qxy8iy3wwq0ek2ojqzxg9b",
    "slug": "planters",
    "title": "Planters"
  },
  {
    "id": "cl4qxyggc3tux0cis28ky808o",
    "slug": "baskets",
    "title": "Baskets"
  },
  {
    "id": "cl4qxyncm3y0r0bk0wm0fbkta",
    "slug": "clocks",
    "title": "Clocks"
  },
  {
    "id": "cl4qxyxsn3y2j0bk0q89f4ohd",
    "slug": "orchids",
    "title": "Orchids"
  },
  {
    "id": "cl4qxzcsu3v9r0dk8hqpfss5w",
    "slug": "ottomars",
    "title": "Ottomars"
  },
  {
    "id": "cl4qxzthb3uap0cisfayv8bic",
    "slug": "side-tables",
    "title": "Side tables"
  },
  {
    "id": "cl4qy03o73vi70dk83xf8vjod",
    "slug": "trays",
    "title": "Trays"
  },
  {
    "id": "cl4qy0fns3uhw0cisro6jspr8",
    "slug": "decor-ladders",
    "title": "Decor Ladders"
  },
  {
    "id": "cl4qy0q0e3yk90bk0udp194fb",
    "slug": "wall-art",
    "title": "Wall Art"
  },
  {
    "id": "cl4qy12ci3uks0cisdt6xdbp0",
    "slug": "lighting",
    "title": "Lighting"
  },
  {
    "id": "cl4qy1ep13unb0cishjufp1jo",
    "slug": "lanterns",
    "title": "Lanterns"
  },
  {
    "id": "cl4qy1ooe3yrv0bk0u100y4p1",
    "slug": "candleholders",
    "title": "Candleholders"
  },
  {
    "id": "cl4qy22833vz40dk8yxfc254n",
    "slug": "console-tables/servers",
    "title": "Console Tables/Servers"
  },
  {
    "id": "cl4qy29ff3uvy0cisrpzgu39n",
    "slug": "trolleys/carts",
    "title": "Trolleys/Carts"
  },
  {
    "id": "cl4r07rsb4e3x0dk8xyqon2a8",
    "slug": "bowls",
    "title": "Bowls"
  }
]
