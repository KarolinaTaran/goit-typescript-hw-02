import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  imgUrl: string;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imgUrl,
  closeModal,
}) => {
  const customStyles = {
    content: {
      width: "fit-content",
      height: "auto",
      margin: "auto",
    },
  };
  return (
    <ReactModal
      style={customStyles}
      className={css.modalWrapper}
      onRequestClose={closeModal}
      isOpen={isOpen}
      onClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <img className={css.img} src={imgUrl} alt="Large image" />
    </ReactModal>
  );
};

export default ImageModal;
