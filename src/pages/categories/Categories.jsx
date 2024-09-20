import { Outlet,NavLink } from 'react-router-dom';


const CategoriesPage = () => {
    return (
        <>
        <h1>Categories</h1>
        <NavLink to="male">
            Men
          </NavLink>
          <NavLink to="female">
            Women
          </NavLink>
        <Outlet/>
        </>
    );
}
 
export default CategoriesPage;