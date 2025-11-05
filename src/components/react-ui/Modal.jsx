import { X } from "lucide-react";

function Modal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="w-1/4 max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <X className="h-12 w-12 text-gray-800 cursor-pointer " />
        </button>
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="w-full h-full rounded-lg shadow-2xl object-cover"
        />
      </div>
    </div>
  );
}

export default Modal;