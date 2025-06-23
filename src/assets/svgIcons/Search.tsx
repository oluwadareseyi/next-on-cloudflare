type SearchType = {
  onClick?: () => void;
};

const Search = ({ onClick }: SearchType) => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        if (onClick) onClick();
      }}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M15.9277 20C18.6892 20 20.9277 17.7614 20.9277 15C20.9277 12.2386 18.6892 10 15.9277 10C13.1663 10 10.9277 12.2386 10.9277 15C10.9277 17.7614 13.1663 20 15.9277 20Z"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.4634 18.5352L22.9278 21.9995"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Search;
