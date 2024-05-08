interface CardProps {
    name: string;
    description: string;
}

export function Card({ name, description }: CardProps) {
    return (
        <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{description}</p>
        </div>
    );
};