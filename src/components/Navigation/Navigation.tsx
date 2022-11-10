import "./navigation.scss"
import { ReactComponent as LogoIcon } from "../../assets/icons/apple-logo.svg"

export const Navigation = () => {
    const navList = ['Features', 'Partners', 'Stories']
    return (
        <div className="navigation">
            <LogoIcon className="logo_icon" />
            <ul className="navigation_list"> {navList.map((listItem) => {
                return <a href="#" className="navigation_list--item">{listItem}</a>
            })}
            </ul>
            <button className="navigation__download-button">Download for free</button>
        </div>
    )
}
