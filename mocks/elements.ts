import { ECategory, Product } from "../src/modules/home/domain/product";

export const arrayProducts: Product[] = [
    {
      id: 0,
      title: "Element 1",
      image: "https://golty.com.co/wp-content/uploads/2022/07/Balon-Origen-Futbol-sala5-1.png",
      description: "Este es un elemento de prueba",
      price: '20500',
      quantity: 5,
      category: ECategory.ELEMENT
    },
    {
      id: 1,
      title: "Element 2",
      image: "https://ae01.alicdn.com/kf/S185fcc8e34214e3f80f1152d0cfb500fe.jpg_640x640Q90.jpg_.webp",
      description: "Este es un elemento de prueba",
      price: '20500',
      quantity: 5,
      category: ECategory.CLOTHES
    },
    {
      id: 2,
      title: "Element 3",
      image: "https://i.ebayimg.com/thumbs/images/g/FGgAAOSwV55lBzYJ/s-l640.jpg",
      description: "Este es un elemento de prueba",
      price: '20500',
      quantity: 5,
      category: ECategory.SHOES
    }
  ]