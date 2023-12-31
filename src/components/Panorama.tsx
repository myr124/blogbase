interface Props {
  img: string;
  link: string;
  title: string;
}

const Panorama = ({ img, link, title }: Props) => {
  return (
    <div className="flex flex-row  m-4 p-2 justify-center content-center">
      <div className="image ">
        <a href={link}>
          <img src={img} alt="Panorama" className="border border-bodcol" />
        </a>
      </div>
    </div>
  );
};

export default Panorama;
