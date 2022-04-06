const data = [
  {
    key: "1",
    href: "https://www.icsi.edu/home/",
    image: "/images/carousel/1.jpg",
    alt: "The institure of company secretaries of India",
  },
  {
    key: "2",
    href: "https://icmai.in/icmai/index.php",
    image: "/images/carousel/2.jpg",
    alt: "The institure of cost accountants of India",
  },
  {
    key: "3",
    href: "https://www.icai.org/",
    image: "/images/carousel/3.jpg",
    alt: "The institure of chartered accountants of India",
  },
  {
    key: "4",
    href: "https://www.cbic.gov.in/",
    image: "/images/carousel/4.jpg",
    alt: "Central Board of Indirect Taxes and Customs",
  },
  {
    key: "5",
    href: "http://www.gstcouncil.gov.in/",
    image: "/images/carousel/5.jpg",
    alt: "Goods and services tax council",
  },
  {
    key: "6",
    href: "https://www.gst.gov.in/",
    image: "/images/carousel/6.jpg",
    alt: "Goods and services tax",
  },
  {
    key: "7",
    href: "https://www.mca.gov.in/content/mca/global/en/home.html",
    image: "/images/carousel/7.jpg",
    alt: "Ministry of corporate affairs",
  },
  {
    key: "8",
    href: "https://incometaxindia.gov.in/Pages/default.aspx",
    image: "/images/carousel/8.jpg",
    alt: "Income tax department",
  },
];

interface IProps {
  key: string;
  href: string;
  alt: string;
  image: string;
}

const ListItem = ({ item }: { item: IProps }) => {
  return (
    <li className="h-[144px] w-[244px]">
      <a target="_blank" href={item.href} rel="noreferrer noopener">
        <img
          className="h-[144px] min-w-[244px]"
          src={item.image}
          alt={item.alt}
        />
      </a>
    </li>
  );
};

const FooterCarousel = () => {
  return (
    <div className="bg-white h-[144px] w-screen relative overflow-hidden">
      <ul className="flex w-[1952px] h-full animate">
        {data.map((item: any) => (
          <ListItem key={"one" + item.key} item={item} />
        ))}
        {data.map((item: any) => (
          <ListItem key={"two" + item.key} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default FooterCarousel;