const ServicesLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div>
            <h1>Services Layout</h1>
            {children}
        </div>
    )


}

export default ServicesLayout