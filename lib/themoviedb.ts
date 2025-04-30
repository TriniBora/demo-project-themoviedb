const API_KEY = process.env.EXPO_PUBLIC_THEMOVIEDB_API_KEY;
const BASE_URI = "http://api.themoviedb.org/3/";
const IMAGES_URI = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
const TIMEOUT = 2000;
const LANGUAGE = "en-US";

export async function getPopular() {
  const POPULAR_SERIES = 
  `${BASE_URI}tv/popular?api_key=${API_KEY}&&language=${LANGUAGE}`;

  const rawData = await fetch(POPULAR_SERIES);
  const json = await rawData.json();
  //console.log("json", json);
  //console.log("json.results", json.results);

  return json.results.map((item) => {
  
    const { overview, id, first_air_date, poster_path, vote_average, original_name } =
      item;

    // crea la imagen
    const img = `${IMAGES_URI}${poster_path}`;

    return {
      description: overview,
      releaseDate:first_air_date,
      score:vote_average,
      slug: id,
      title: original_name,
      image: img,
    };
  });
}

export async function getTrending() {
  const TRENDING_SERIES = 
  `${BASE_URI}trending/tv/day?api_key=${API_KEY}&&language=${LANGUAGE}`;

  const rawData = await fetch(TRENDING_SERIES);
  const json = await rawData.json();
  //console.log("json", json);
  //console.log("json.results", json.results);

  return json.results.map((item) => {
    //console.log("item", item);
    const { overview, id, first_air_date, poster_path, vote_average, original_name } =
      item;

    // crea la imagen
    const img = `${IMAGES_URI}${poster_path}`;

    return {
      description: overview,
      releaseDate:first_air_date,
      score:vote_average,
      slug: id,
      title: original_name,
      image: img,
    };
  });
}

export async function getSerieDetails(slug) {
  const SERIE_DETAILS = `${BASE_URI}tv/${slug}?api_key=${API_KEY}&&language=${LANGUAGE}`;
  const SERIE_IMAGES = `${BASE_URI}tv/${slug}/images?api_key=${API_KEY}`;
  const SERIE_REVIEWS = `${BASE_URI}tv/${slug}/reviews?api_key=${API_KEY}`;

  const rawData = await fetch(SERIE_DETAILS);
  const json = await rawData.json();
  console.log("json", json);

  const rawImages = await fetch(SERIE_IMAGES);
  const jsonImages = await rawImages.json();
  //console.log("jsonImages", jsonImages);

  const rawReviews = await fetch(SERIE_REVIEWS);
  const jsonReviews = await rawReviews.json();
  //console.log("jsonReviews", jsonReviews);

  const { original_name, overview, vote_average, poster_path } = json;

  // crea la imagen
  const img = `${IMAGES_URI}${poster_path}`;

  // get the reviews
  const reviews = jsonReviews.results.map((review) => {
    const { content, author_details, created_at} = review;
    const { rating: author_rating, name: author_name, username, avatar_path } = author_details;
    const avatar = `${IMAGES_URI}${avatar_path}`;
    return { content, author_name, username, author_rating, created_at, avatar};
  });

  console.log({
    image: img,
    title: original_name,
    slug:+slug,
    description:overview,
    score: vote_average,
    reviews,})

  return {
    image: img,
    title: original_name,
    slug:+slug,
    description:overview,
    score: vote_average,
    reviews,
  };
}
