const solution = (id_pw, db) => {
  const [id, pw] = id_pw;
  const answer = db.find(([_id, _pw]) => _id === id && _pw === pw)
    ? "login"
    : !db.find(([_id]) => _id === id)
    ? "fail"
    : "wrong pw";
  console.log(answer);

  return answer;
};