import "./GText.css";

interface GtextProps{
    children: React.ReactNode
}


export const GText: React.FC<GtextProps> = ({children}) => {
    return (
        <div className="text__contain">
            <p className="G__text">{children}</p>
        </div>
    );
};
