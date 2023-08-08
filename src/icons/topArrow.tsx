function TopArrow() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className=" h-4 w-4 -rotate-90 lg:mb-0 lg:h-6 lg:w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
    </div>
  );
}
export default TopArrow;
