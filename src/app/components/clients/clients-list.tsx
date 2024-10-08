import CardHeader from "../products/header"


export const ClientList = () => {
    let header = {
        title: "Clients and Testimonials",
        subtitle: "Client reviews and performance",
        description: ""
    }

    return (
        <div className="sub-container">
            <CardHeader {...header} />

        </div>
    )
}