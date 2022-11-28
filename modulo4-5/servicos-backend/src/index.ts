import app from "./app";
import getAdress from "./endpoints/getAdress";
import postEmail from "./endpoints/postEmail";

app.get('/adress', getAdress);
app.post('/email', postEmail);