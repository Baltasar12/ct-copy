import Product from "@/models/Product.model";
import Section2 from "../section-2";
// API FUNCTIONS
import { Services } from "@/Services";
import { ProductsServiceApiTypes } from "@/Services/tiendanube";

const { getProducts } = Services.tiendanube.products;

/*
  - Este es el approach con Server Side Rendering, por eso se puede hacer una async call en el body del componente, para chequear el Client Side approach ver en gadget-3_tiendanube-csr.tsx
  - La fucion convertProduct es para transformar los productos que vienen de la API de Tiendanube a un formato que pueda ser usado por el componente Section2,
    no es ideal usarla ya que lo ideal es modificar el proyecto para que muestre los productos de la forma que vienen de la API 
*/

const convertProduct = (products: ProductsServiceApiTypes.GetProductsResponse): Product[] =>
  products.map((product) => {
    // Extract necessary data from the original product structure
    const { id, name, handle, variants, images, brand, categories, published } =
      product;

    // Extract primary variant details (assuming first variant is the primary)
    const primaryVariant = variants[0];
    const { price, compare_at_price, promotional_price, values } =
      primaryVariant;

    // Calculate discount
    const discount = compare_at_price
      ? ((parseFloat(compare_at_price) - parseFloat(promotional_price)) /
          parseFloat(compare_at_price)) *
        100
      : 0;

    // Extract colors and sizes from variant values
    const colors = values.map((value: any) => value.es);
    const sizes = values.slice(1).map((value: any) => value.es); // Assuming color is first and sizes follow

    // Extract thumbnail image
    const thumbnail = images.length > 0 ? images[0].src : "";

    return {
      id: id.toString(),
      slug: handle.es,
      price: parseFloat(price),
      title: name.es,
      rating: 0, // Assuming rating is not available in the provided structure
      discount: Math.round(discount),
      thumbnail,
      brand,
      size: sizes,
      colors: colors.length ? [colors[0]] : [],
      images: images.map((image: any) => image.src),
      categories: categories.map((category: any) => category.name.es),
      published,
    };
  });

export default async function GadgetThreePageView() {
  const products = await getProducts().queryFn();

  return <Section2 products={convertProduct(products)} />;
}

/*
- Este es el modelo de los productos que vienen en getProducts().queryFn(), son del type ProductsServiceApiTypes.GetProductsResponse o ProductsServiceApiTypes.Product[]
- Cambiando Product.model.ts con el Product type que viene desde ProductsServiceApiTypes tendria daria error en todos lados para ir modificando paso a paso cada lugar donde se usa Product.model.ts, que seria lo ideal

Tiendanube Products
[
  {
    id: 204230520,
    name: {
      es: "Macbook air"
    },
    description: {
      es: "<h1><strong>Marcbook Air&nbsp;</strong></h1>\n<p><strong>Product description</strong></p>\n<h1>&nbsp;</h1>
    },
    handle: {
      es: "macbook-air"
    },
    attributes: [
      {
        es: "Color"
      },
      {
        es: "Ram"
      },
      {
        es: "Memoria"
      }
    ],
    published: true,
    free_shipping: true,
    requires_shipping: true,
    canonical_url: "https://celtuc5.mitiendanube.com/productos/macbook-air/",
    video_url: "https://www.youtube.com/watch?v=GRzPJkBczbk&ab_channel=TerrenRule",
    seo_title: {
      es: "Apple notebook Macbook Air"
    },
    seo_description: {
      es: "Envío gratis a todo el país"
    },
    brand: "Apple",
    created_at: "2024-03-11T02:19:59+0000",
    updated_at: "2024-09-02T21:28:58+0000",
    variants: [
      {
        id: 858306979,
        image_id: null,
        product_id: 204230520,
        position: 1,
        price: "1200.00",
        compare_at_price: "1200.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 4,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Midnight Blue"
          },
          {
            es: "8gb"
          },
          {
            es: "256gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:23+0000",
        updated_at: "2024-03-21T22:56:23+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430128,
            variant_id: 858306979,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 4
          }
        ]
      },
      {
        id: 858306985,
        image_id: null,
        product_id: 204230520,
        position: 2,
        price: "1400.00",
        compare_at_price: "1400.00",
        promotional_price: "999.00",
        stock_management: false,
        stock: null,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Midnight Blue"
          },
          {
            es: "8gb"
          },
          {
            es: "512gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:23+0000",
        updated_at: "2024-09-02T21:28:58+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430133,
            variant_id: 858306985,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: null
          }
        ]
      },
      {
        id: 858306988,
        image_id: null,
        product_id: 204230520,
        position: 3,
        price: "1400.00",
        compare_at_price: "1400.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 2,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Midnight Blue"
          },
          {
            es: "16gb"
          },
          {
            es: "256gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:23+0000",
        updated_at: "2024-03-21T22:56:23+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430136,
            variant_id: 858306988,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 2
          }
        ]
      },
      {
        id: 858306991,
        image_id: null,
        product_id: 204230520,
        position: 4,
        price: "1600.00",
        compare_at_price: "1600.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 5,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Midnight Blue"
          },
          {
            es: "16gb"
          },
          {
            es: "512gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:23+0000",
        updated_at: "2024-03-21T22:56:24+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430138,
            variant_id: 858306991,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 5
          }
        ]
      },
      {
        id: 858306993,
        image_id: null,
        product_id: 204230520,
        position: 5,
        price: "1200.00",
        compare_at_price: "1200.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 1,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Space Grey"
          },
          {
            es: "8gb"
          },
          {
            es: "256gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:24+0000",
        updated_at: "2024-03-21T22:56:24+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430140,
            variant_id: 858306993,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 1
          }
        ]
      },
      {
        id: 858306996,
        image_id: null,
        product_id: 204230520,
        position: 6,
        price: "1400.00",
        compare_at_price: "1400.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 7,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Space Grey"
          },
          {
            es: "8gb"
          },
          {
            es: "512gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:24+0000",
        updated_at: "2024-03-21T22:56:24+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430144,
            variant_id: 858306996,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 7
          }
        ]
      },
      {
        id: 858306998,
        image_id: null,
        product_id: 204230520,
        position: 7,
        price: "1400.00",
        compare_at_price: "1400.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 7,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Space Grey"
          },
          {
            es: "16gb"
          },
          {
            es: "256gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:24+0000",
        updated_at: "2024-03-21T22:56:24+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430146,
            variant_id: 858306998,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 7
          }
        ]
      },
      {
        id: 858307001,
        image_id: null,
        product_id: 204230520,
        position: 8,
        price: "1600.00",
        compare_at_price: "1600.00",
        promotional_price: "999.00",
        stock_management: true,
        stock: 7,
        weight: "1.300",
        width: "50.00",
        height: "3.00",
        depth: "30.00",
        sku: "12345678",
        values: [
          {
            es: "Space Grey"
          },
          {
            es: "16gb"
          },
          {
            es: "512gb"
          }
        ],
        barcode: "344334433443",
        mpn: null,
        age_group: null,
        gender: null,
        created_at: "2024-03-21T22:56:24+0000",
        updated_at: "2024-03-21T22:56:24+0000",
        cost: "800.00",
        inventory_levels: [
          {
            id: 476430148,
            variant_id: 858307001,
            location_id: "01HRNMBKSXV6C7Q64TRCRJZ3ZQ",
            stock: 7
          }
        ]
      }
    ],
    tags: "16gb, Apple, Macbook, Macbook Air, Notebook",
    images: [
      {
        id: 622797608,
        product_id: 204230520,
        src: "https://dcdn.mitiendanube.com/stores/004/411/609/products/macbook-air-image-8274e78453091ce08317110609580754-1024-1024.jpg",
        position: 1,
        alt: [],
        height: 861,
        width: 980,
        thumbnails_generated: 2,
        created_at: "2024-03-21T22:42:39+0000",
        updated_at: "2024-03-21T22:57:41+0000"
      }
    ],
    categories: [
      {
        id: 23899639,
        name: {
          es: "Notebooks"
        },
        description: {
          es: "Notebooks de todo tipo y marcas"
        },
        handle: {
          es: "notebooks"
        },
        parent: null,
        subcategories: [
          23901094
        ],
        seo_title: {
          es: ""
        },
        seo_description: {
          es: ""
        },
        google_shopping_category: "",
        created_at: "2024-03-21T22:50:01+0000",
        updated_at: "2024-03-22T00:06:51+0000"
      }
    ]
  }
]
 */
