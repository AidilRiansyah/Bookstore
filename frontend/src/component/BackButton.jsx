import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <button
        onClick={() => navigate(-1)}
        className="bg-sky-500 text-white px-4 py-1 rounded-lg "
      >
        <BsArrowLeft className="text-2xl" />
      </button>
    </div>
  );
};

export default BackButton;
