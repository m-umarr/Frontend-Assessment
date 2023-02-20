import "./model.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Button from "../button/Button";

const ProductModal = ({
  open,
  setOpen,
  setProductDetails,
  productDetails,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal
        isOpen={open}
        ariaHideApp={false}
        className="reactModalContent"
        overlayClassName="reactModalOverlay">
        <div className="modalContentHelper">
          <div className="modalClose" onClick={() => setOpen(false)}>
            <FaTimes />
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <span className="label">Product title: *</span>

            <input
              placeholder="Title..."
              name="title"
              className="input"
              onChange={handleChange}
            />

            <span className="label">Product details: *</span>

            <input
              placeholder="Price..."
              name="price"
              className="input"
              onChange={handleChange}
            />

            <textarea
              placeholder="Start typing product description here..."
              className="textarea"
              name="description"
              onChange={handleChange}
            />

            <Button>Add a product</Button>
          </form>{" "}
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
