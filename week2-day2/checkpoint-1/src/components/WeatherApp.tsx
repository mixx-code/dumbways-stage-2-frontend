import { useEffect, useState, type FunctionComponent } from "react";
import { useDebounce } from "../hooks/debounce";
import { fetchWeather } from "../api/weather";

const WeatherApp: FunctionComponent = () => {
    const [cityInput, setCityInput] = useState("")
    const [weatherData, setWeatherData] = useState<{ city: string; temperature: number } | null>(null)
    const [isLoading, setIsloading] = useState(false)

    const debounceCity = useDebounce(cityInput, 500)

    useEffect(() => {
        if (debounceCity) {
            setIsloading(true)
            fetchWeather(debounceCity)
                // .then((response) => response.json())
                .then((dataFetch) => {
                    setWeatherData(dataFetch)
                })
                .catch((e) => {
                    console.error(e);
                    setIsloading(false)
                })
                .finally(() => {
                    setIsloading(false)
                })
        }
    }, [debounceCity])

    const handleOnChange = (i: React.ChangeEvent<HTMLInputElement>) => {
        setCityInput(i.target.value)
    }

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <div className="flex content-center w-96 gap-3">
                    <p className="py-1.5">Pencarian </p>
                    <input placeholder="masukan Nama kota" className="w-64 border border-gray-400 px-3 py-1.5" type="text" onChange={(i) => handleOnChange(i)} />
                </div>
                {
                    
                    isLoading ? (
                        <p>loading...</p>
                    ) : (
                        weatherData === null ? ("") : (
                            <div className="flex flex-col w-96 h-20 p-3 items-start bg-blue-400 text-white rounded shadow">
                                <p>kota: {weatherData?.city}</p>
                                <p>temperature: {weatherData?.temperature}&#8451;</p>
                            </div>
                        )
                    )
                }
            </div>
        </>
    );
}

export default WeatherApp;