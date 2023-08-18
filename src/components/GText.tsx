import "./GText.css";

interface GtextProps {
    children: React.ReactNode;
}

export const GText: React.FC<GtextProps> = ({ children }) => {
    return <p className="G__text">{children}</p>;
};
