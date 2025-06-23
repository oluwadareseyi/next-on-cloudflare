type SortType = {
  onClick?: () => void;
};

const Sort = ({ onClick }: SortType) => {
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
        d="M15.4277 14.5C16.2562 14.5 16.9277 13.8284 16.9277 13C16.9277 12.1716 16.2562 11.5 15.4277 11.5C14.5993 11.5 13.9277 12.1716 13.9277 13C13.9277 13.8284 14.5993 14.5 15.4277 14.5Z"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.4277 20.5C20.2562 20.5 20.9277 19.8284 20.9277 19C20.9277 18.1716 20.2562 17.5 19.4277 17.5C18.5993 17.5 17.9277 18.1716 17.9277 19C17.9277 19.8284 18.5993 20.5 19.4277 20.5Z"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9277 13H22.4277"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.4277 13H13.9277"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.9277 19H22.4277"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.4277 19H17.9277"
        stroke="#A4A7AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Sort;
