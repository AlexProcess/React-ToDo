import Style from "./Background.module.css";

export const Background: React.FC = () => {
    return (
        <div className={Style.bg__container}>
            <img
                className="head__image"
                src="/images/bg-mobile-dark.jpg"
                alt="header-background-img"
            />
        </div>
    );
};
