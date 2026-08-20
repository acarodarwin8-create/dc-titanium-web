export default function Estrellas({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        const lleno = i < Math.round(rating);
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={lleno ? "#C9A84C" : "none"}
            stroke="#C9A84C"
            strokeWidth="1.5"
          >
            <path
              d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </span>
  );
}
