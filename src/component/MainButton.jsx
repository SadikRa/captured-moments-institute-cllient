// eslint-disable-next-line react/prop-types
const MainButton = ({ Name }) => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {Name}
      </button>
    </div>
  );
};

export default MainButton;
