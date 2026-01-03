import "../styles/LinkCard.css";

interface LinkCardProperties {
    imagePath: string;
    url: string;
    name?: string;
    className?: string;
    altText?: string;
    maximumWidth: string;
}

function LinkCard({
    imagePath,
    url,
    name = "",
    className = "",
    altText = "",
    maximumWidth,
}: LinkCardProperties) {
    return (
        <a
            href={url}
            className={`dashboard-card ${className} flex flex-col items-center justify-center p-4 border rounded-lg`}
            style={{ flex: 1, minWidth: 0, maxWidth: maximumWidth }} // 3 cards per row
        >
            <img
                src={imagePath}
                alt={altText}
                className="object-contain w-full max-h-[calc(100%-2rem)]"
            />
            {name && <strong className="mt-2 text-center">{name}</strong>}
        </a>
    );
}

export default LinkCard;

// <a
//     href={url}
//     target="_blank"
//     className={`dashboard-card ${className} block overflow-hidden rounded-lg border flex flex-col items-center justify-center p-4`}
// >
//     <img
//         src={imagePath}
//         alt={altText}
//         className="object-contain max-w-full max-h-[70%]"
//     />
//     <strong className="mt-2 text-center">{name}</strong>
// </a>
