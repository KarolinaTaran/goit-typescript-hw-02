import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, Props as ImageCardProps } from "../imageCard/ImageCard";

interface Props {
  pics: Image[];
  openModal: ImageCardProps["openModal"];
}
const ImageGallery: React.FC<Props> = ({ pics, openModal }) => {
  if (!Array.isArray(pics) || pics.length === 0) {
    return null;
  }

  return (
    <ul className={css.galleryList}>
      {pics.map((pic, index) => (
        <li className={css.galleryItem} key={`${pic.id}-${index}`}>
          <div>
            <ImageCard
              openModal={openModal}
              pic={pic}
              description={pic.description}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
