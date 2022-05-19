import { loginService } from '../services/loginService.js'
import logger from '../../../utils/logger/winston_config.js'

class Login {

    async getLogin(req, res, next) {
        try {
            let {status, retry} = await loginService.getLogin(req)

            if ( status == "LOGGEDIN" ) {
                res.json({ status, retry})
            } else {
                res.json({ status, retry})
            }
            
        } catch (error) {
            logger.error(error);
        }
    }


    async postLogin(req, res, next) {
        try {
            const { user } = await loginService.postLogin(req)

            // logger.warn(req.session)
            // logger.warn(req.cookies)

            console.log(req.session.cookie)
            res.json({status: 'LOGINOK', data: req.user })
            
        } catch (error) {
            logger.error(error);
        }
    }

}

export let loginController = new Login()
