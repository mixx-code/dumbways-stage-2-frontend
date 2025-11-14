import { Card } from "@/components/ui/card"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

type MovieType = {
    original_title: string
    overview: string
    release_date: string
    poster_path: string
    popularity: number
}

const Movies = () => {
    const [movies, setMovies] = useState<MovieType[]>([])
    const [onLoading, setOnLoading] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setOnLoading(true)
                const res = await api.get("/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")
                console.log("API Response:", res.data)

                // Pastikan results adalah array
                if (res.data && Array.isArray(res.data.results)) {
                    setMovies(res.data.results)
                } else {
                    console.error("Results is not an array:", res.data)
                    setMovies([])
                }
            } catch (error) {
                console.error(error);
                console.error("gagal get movies");
            } finally {
                setOnLoading(false)
            }
        }


        fetchData()
    }, [])
    console.log(selectedMovie)
    return (
        <div className="w-full flex flex-col items-start">
            <p className="p-5 font-bold text-2xl">List Movies</p>
            {
                onLoading ? (
                    <p className="w-full text-center">Sedang Memuat Halaman</p>
                ) : (
                    <div className=" w-full min-h-[500px] grid grid-cols-2 gap-4">
                        {

                            movies.map((data, index) => (
                                <Card
                                    className="flex flex-row w-[600px] p-0 shadow-2xl box-content cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                                    key={index}
                                    onClick={() => setSelectedMovie(data)}
                                >
                                    <div className="flex-1">
                                        <img className="object-cover rounded-l" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                                    </div>
                                    <div className="flex-2 flex flex-col justify-between py-5 pr-5">
                                        <div className="flex flex-col items-start pb-3">
                                            <p className="font-bold text-[1.5rem]">{data.original_title.substring(0, 20)}</p>
                                            <p className="text-justify">{data.overview.substring(0, 150)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-left"><span className="font-bold">Release Date:</span> {data.release_date.substring(0, 100)}</p>
                                            <p className="text-left"><span className="font-bold">popularity</span> {data.popularity}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                )
            }
            {

            }
        </div>
    );
}

export default Movies;