import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/users/usersSlice";


const Useritem = () => {
  const { users, isLoading, error } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  if(isLoading) {
    return <h2>Loading...</h2>;
  }

  if(error) {
    return <h2>{error}</h2>;
  }

  const stylison = {
    color: 'blue',
    padding: '8px'
  }

  return (
    <div>
        <h2>Name of person</h2>
        {users?.map((item) => <div style={stylison} key={item.login.uuid}>name: {item.name.first}</div>)}
        <h2>Fetching data with react- redux</h2>
    </div>
  );
}

export default Useritem;