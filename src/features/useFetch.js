import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import { setProductData } from "./ProductSlice";
import { useDispatch } from "react-redux";

const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchpr = async () => {
      const fetchedpr = await getDocs(collection(db, "products"));
      const fetchedProducts = fetchedpr.docs.map((doc) => ({ ...doc.data() }));
      dispatch(setProductData(fetchedProducts));
    };
    fetchpr();
  }, [dispatch]);
};

export default useFetch;
