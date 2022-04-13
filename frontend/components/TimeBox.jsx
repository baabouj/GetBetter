export default function TimeBox({ time, onPick, isPicked, disabled }) {
  return (
    <button
      disabled={disabled()}
      onClick={() => onPick(time)}
      className={`flex justify-end h-24 border-dark/30 border rounded transition-all ${
        isPicked && "bg-primary text-surface"
      } disabled:border-red-600 disabled:text-red-600`}
    >
      <p className="text-lg font-poppins px-2">{time}</p>
    </button>
  );
}
