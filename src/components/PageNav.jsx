import { NavLink } from "react-router-dom";

const PageNav = () => {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='pricing'>Pricing</NavLink>
        </>
    );
}
export default PageNav;