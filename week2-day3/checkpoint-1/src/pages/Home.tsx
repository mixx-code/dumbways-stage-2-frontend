import { AspectRatio } from "@/components/ui/aspect-ratio"

const Home = () => {
    return (
        <div className="flex flex-col gap-7 p-9">
            <AspectRatio ratio={12 / 4} className="flex bg-amber-300 rounded-2xl">
                <img src="https://placehold.co/600x400" alt="Image" className="rounded-l-2xl object-cover" />
                <div>
                    <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">Hallo Semua, Saya Rizki Febriansyah</h1>
                </div>
            </AspectRatio>
            <AspectRatio ratio={12 / 4} className="flex bg-amber-300 rounded-2xl">
                <div className="flex-1 bg-amber-900">
                    <h1>asasas</h1>
                </div>
                <div className="flex-1">
                    <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">Hallo Semua, Saya Rizki Febriansyah</h1>
                </div>
            </AspectRatio>
        </div>
    );
}

export default Home;