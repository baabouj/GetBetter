export default function Input({ error, ...rest }) {
  return (
    <div className="my-2">
      <input
        className="bg-surface caret-primary w-full text-lg font-medium font-poppins shadow rounded-full my-2 py-3 px-5 outline-none border-2 border-gray-400 focus:border-primary"
        {...rest}
      />
      <p className="pl-5 first-letter:uppercase font-poppins text-red-600">
        {error}
      </p>
    </div>
  );
}
