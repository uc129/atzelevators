
interface CardSmallProps {
    title: string;
    title2?: string;
    description: string;
    subtext: string;

}


const CardSmall = ({ title, title2, description, subtext }: CardSmallProps) => {

    return (
        <div className="card-sm">
            <h1 className="heading">{title}, {title2}</h1>
            <p className="body-text">{description}</p>
            <p className="body-text">{subtext}</p>
        </div>
    )


}

export default CardSmall;