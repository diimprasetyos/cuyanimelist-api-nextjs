import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link key={index} href={`/anime/${anime.mal_id}`} className="overflow-hidden curson-pointer text-color-primary hover:text-color-accent transition-all">
            <img src={anime.images.webp.image_url} className="img w-full max-h-64 object-cover" />
            <h3 className="font-bold md:text-lg text-md p-4 ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
