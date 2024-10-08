export default function PlaygroundLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>Playground Layout</h1>
            {children}
        </div>
    )
}