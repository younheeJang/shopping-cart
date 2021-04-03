import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'
import { SlicedData } from '../../../lib/pagination'
export const config = {
  api: {
    externalResolver: true,
  },
}

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  // Rest of the API logic
  /*
  const {
    query: { uid: username, upw: password },
  } = req
  */

  const productItems = SlicedData(3, 5)
          
          console.log(productItems)
          return res.json(productItems)
    }
 