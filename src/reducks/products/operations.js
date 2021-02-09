import { db, FirebaseTimestamp } from "../../firebase";
import { push } from "connected-react-router";
import { fetchProductsAction } from "./actions";

const productsRef = db.collection("products");

export const fetchProducts = () => {
  return async (dispatch) => {
    productsRef.orderBy("updated_at", "desc").get()
      .then(snapshots => {
        const ProductList = [];
        snapshots.forEach(snapshot => {
          const product = snapshot.data();
          ProductList.push(product);
        })
        dispatch(fetchProductsAction(ProductList));
    })
  }
}

export const saveProduct = (id, name, description, category, gender, price, images, sizes) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      category: category,
      description: description,
      gender: gender,
      images: images,
      name: name,
      price: parseInt(price, 10),
      sizes: sizes,
      updated_at: timestamp
    };

    if (id === "") {
      const ref = productsRef.doc()
      data.created_at = timestamp;
      id = ref.id;
      data.id = id;
    }

    return productsRef.doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      });
  }
};