const ProductsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className="">
            <h1>Products Layout </h1>
            {children}
        </div>
    )

}

export default ProductsLayout