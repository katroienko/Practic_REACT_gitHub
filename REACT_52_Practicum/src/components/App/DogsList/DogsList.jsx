import { useSelector, useDispatch } from "react-redux";
import { selectDogs } from "../../../redux/dogs/dogs-selector";
import { useEffect } from "react";
import { fetchDogs } from "../../../redux/dogs/dogs-thunks";


function DogsList() {
    const { items, loading, error } = useSelector(selectDogs);

   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDogs());
    }, [dispatch]);

    const data = items.map(item => <li style = {{marginBottom: '10px'}} key={item.name}> <strong>name: {item.name}</strong>, <br /> temperament: {item.temperament}</li>)
    return (
        <>
            <h2>DogsList</h2>
            <ul>{data}</ul>
            {error && <p>error</p>}
            {loading && <p>louding...</p> }
        </>

    )
}

export default DogsList