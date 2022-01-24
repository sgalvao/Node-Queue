import Queue from 'bull'
import redisConfig from '../../config/redis'

import RegistrationRequest from '../jobs/RegistrationRequest'

const requestQueue = new Queue(RegistrationRequest.key, { redis: { ...redisConfig } })

export default requestQueue



