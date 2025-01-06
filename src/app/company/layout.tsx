export default function CompanyLayout({ children }: { children: React.ReactNode }) {
    let process1 = ["Enquiry", "Requirements", "Measurement", "Contract", "Payment", "Installation", "Testing", "Handover",];

    return (
        <div>
            {children}
        </div>
    )
}