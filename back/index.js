const express = require('express');
const app = express();
const cors = require('cors')
require('./Models/dbconn');
const UserRoute = require('./Route/UserRoute');
const MissionRoute = require('./Route/MissionRoute');

app.use(express.json());
app.use(cors())
app.use('/user', UserRoute);
app.use('/mission', MissionRoute);

app.listen(5500, () => console.log('Server 5500'));