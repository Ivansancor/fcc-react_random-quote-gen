import { useFetchQuote, refetchQuote } from "../services/queries";
import { useColorStore } from "../stores/colorStore";

const Card = () => {
  const { data, isLoading } = useFetchQuote();

  const color = useColorStore((state) => state.color);
  const setColor = useColorStore((state) => state.setColor);

  if (isLoading)
    return <p className={`text-${color} text-6xl text-center`}>Loading...</p>;

  return (
    <main id="quote-box" className="w-1/2 min-w-60 mx-auto text-white p-6">
      {/* CARD INNER CONTENT */}
      <div className={`bg-${color} transition ease-in-out duration-1000 p-6`}>
        <q id="text" className="text-3xl mb-3 block text-center">
          {data?.quote}
        </q>
        <span id="author" className="text-md block text-right italic">
          ~ {data?.author}
        </span>
      </div>

      {/* CARD OUTER CONTENT */}
      <div className="text-black mt-6 flex justify-between items-center">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6"
          >
            <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
          </svg>
        </a>
        <button
          id="new-quote"
          type="button"
          className="hover:text-black hover:bg-white hover:border-black font-bold text-white bg-black tracking-wide border-transparent border-4 px-3 py-2"
          onClick={() => {
            refetchQuote();
            setColor();
          }}
        >
          Get new quote
        </button>
      </div>
    </main>
  );
};
export default Card;
