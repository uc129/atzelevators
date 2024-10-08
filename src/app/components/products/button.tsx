const ProductChangeButton = ({ totalNumber }: { totalNumber: number }) => {

    const NumbersArray = Array.from({ length: totalNumber }, (v, k) => k + 1)

    return (
        <div className="w-full flex items-center gap-2 flex-wrap lg:w-24 ">
            {NumbersArray.map((number, index) => (
                <div className="round-button-group" key={number ? number : index}>
                    <button className="round-button-control">
                        {number}
                    </button>
                </div>
            ))}
        </div>
    )

}

export default ProductChangeButton