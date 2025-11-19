export const InfoCard = ({ title, value }: { title: string, value: string }) => {
    return (
        <div className="flex gap-5 bg-none border-none items-center overflow-hidden">
            <div className="bg-white p-4 rounded-xl w-12 h-full aspect-square shrink-0"></div>

            <div className="flex flex-col gap-1">
                <h2 className="text-white/60 text-xs font-bold uppercase">{title}</h2>
                <p className="text-white text-sm">{value}</p>
            </div>
        </div>
    )
}