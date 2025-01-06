import { Sidebar } from "../components/sidebar/sidebar";



export default function ElevatorsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-12">
            <Sidebar />
            {children}
        </div>
    )
}