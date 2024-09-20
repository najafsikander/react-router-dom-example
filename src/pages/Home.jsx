import { useNavigate } from "react-router-dom";
import { customers } from "../data";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/categories")}>Go to Categories</button>
      <h3>Users</h3>
      <ul>
        {customers.map((cust) => (<li key={cust.id} onClick={() => navigate(`/customer/${cust.id}`)}>{cust.name}</li>))}
      </ul>
    </>
  );
};

export default HomePage;
