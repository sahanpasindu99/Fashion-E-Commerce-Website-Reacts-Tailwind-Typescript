// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import MenImg from './assets/img/men.png'
import WomenImg from './assets/img/women.png'
import HotImg from './assets/img/hot.png'
import OuterWearImg from './assets/img/outerwear.png'
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'features',
    href: 'features',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

export const hero = {
  title: 'Place Where Opulence and Elegance Converge',
  subtitle:
    'Discover our trendy and versatile clothing collection designed to elevate your wardrobe.',
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '9',
    text: 'Year Experience',
  },
  {
    value: '1',
    text: 'Main Branch',
  },
  {
    value: '400k+',
    text: 'Clothes Sold',
  },
  {
    value: '120+',
    text: 'Variant Fashions',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'We Empower Individuality Through Fashion',
  subtitle:
    'Fashions brushstrokes unleash a kaleidoscope of creativity',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Journey of Fashion Mavericks',
      subtitle:
        'Unearthing the Visionaries and Revolutionaries who redefine the norms of style.'    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Embracing Diversity',
      subtitle:
        'Celebrating the beauty of diversity, these pioneers champion inclusivity and embrace the rich tapestry of global influences.',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'The Best Fashion Designer of your choice',
    subtitle:
      'Fashions power lies in its ability to empower individuals, boosting confidence, and celebrating diversity. It becomes a language of self-expression, narrating unique stories to the world.',
  },
};

export const newInStore = {
  title: 'New Hot Arrivals',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'Men',
      image: <MenImg />,
    },
    {
      name: 'Women',
      image: <WomenImg />,
    },
    {
      name: 'Hot',
      image: <HotImg />,
    },
    {
      name: 'OuterWear',
      image: <OuterWearImg />,
    },
  ],
};

export const products = {
  title: 'All Products',
  subtitle:
    'The products COODRONY provide only for you as our service are selected from the best products with number #1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Men T-Shirt Striped',
          price: 21,
          oldPrice: 23,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Summer Dress',
          price: 18,
          oldPrice: 21,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Winter Outerwear',
          price: 30,
          oldPrice: 45,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Winter Sweatshirt',
          price: 34,
          oldPrice: 39,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Women French Oversized',
          price: 27,
          oldPrice: 35,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Men classic',
          price: 17,
          oldPrice: 22,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Crop-Top',
          price: 26,
          oldPrice: 29,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Biker Vest Black',
          price: 15,
          oldPrice: 17,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Hoodie',
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Office Wear Dress Green',
          price: 35,
          oldPrice: 42,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Men T-Shirt Striped',
          price: 21,
          oldPrice: 23,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Summer Dress',
          price: 18,
          oldPrice: 21,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Winter Outerwear',
          price: 30,
          oldPrice: 45,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Winter Sweatshirt',
          price: 34,
          oldPrice: 39,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Women French Oversized',
          price: 27,
          oldPrice: 35,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Men classic',
          price: 17,
          oldPrice: 22,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Crop-Top',
          price: 26,
          oldPrice: 29,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Biker Vest Black',
          price: 15,
          oldPrice: 17,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Men Hoodie',
          price: 35,
          oldPrice: 40,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Women Office Wear Dress Green',
          price: 35,
          oldPrice: 42,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Josh Smith',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Brandi Johns',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Paula Pfeffer',
      occupation: 'Manager of The New York Times',
      message:
        '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'COODRONY 2023 - All Rights Reserved.',
};
