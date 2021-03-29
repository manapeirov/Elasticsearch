/**
 * Description: Entry file into the backend
 */

const { PORT } = require("./config/config");
const app = require("./app");

app.listen(PORT, () => {
    console.log(`App listening for requests on PORT ${PORT}`);
});
