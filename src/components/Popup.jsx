const Popup = ({ foodName, id, onDelete, isShow, setIsShow }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 py-6 px-10 bg-white rounded-lg border border-border  transition-all duration-300 ${
        isShow ? "top-6 opacity-100 " : "-top-12 opacity-0"
      }`}
    >
      <p>
        Do you want to delete{" "}
        <span className="font-semibold">{`"${foodName}"`}</span>
      </p>

      <div className="mt-3 flex justify-end gap-2">
        <button className="" onClick={() => setIsShow(false)}>
          Cancel
        </button>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Popup;
