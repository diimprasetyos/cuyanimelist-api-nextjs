import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Search from "../components/Search";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  
  return (
    <>
    <section>
      <Header title={"Paling Populer"} linkHref="/populer" linkTitle={"Lihat Semua"}/>
      <AnimeList api={topAnime} />
    </section>
    <section>
      <Header title={"Paling Baru"} linkHref="/new" linkTitle={"Ikuti Sekarang"}/>
      <AnimeList api={topAnime} />
    </section>
    </>
  );
};

export default Page;
