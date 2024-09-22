import { Counts } from "../contents"
const CountsCard = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {Counts.map(((item, index) => (
                <div className="rounded-3xl border border-gray-400 text-center py-10 px-6" key={index}>
                    <h3 className="text-4xl text-white font-semibold mb-4">{item.count}+</h3>
                    <p className="text-xs text-gray-200 uppercase">{item.label}</p>
                </div>
            )))}
        </div>
    )
}

export default CountsCard
