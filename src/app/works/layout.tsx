export default function WorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>Works Layout</h1>
            {children}
        </div>
    )
}