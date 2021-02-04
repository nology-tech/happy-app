import { firestore } from "../firebase";

const getScores = (user) => {
  return firestore
    .collection("users")
    .doc(user.uid)
    .collection("scores")
    .orderBy("date", "desc")
    .limit(1)
    .get()
    .then((input) => {
      const score = input.docs.map((doc) => doc.data())[0];
      return score;
    })
    .catch((err) => console.error(err));
};

export default getScores;
