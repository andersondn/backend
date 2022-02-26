
   
import app from './app';
import { APP_PORT } from './shared/config/constants';



app.listen(APP_PORT, function () {
    console.log('Server running on port ' + APP_PORT)
})