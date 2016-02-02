import {Router} from 'express';

const index = Router();

/* GET /api */
index.get('/', function(req, res, next) {

  // hydrating typed info from request
  var typedInfo: ITypedConfigInfo = req["typedInfo"];

  res.json({ title: 'TypeScript/React Client/Server Demo App', dataPath: typedInfo.fullpath.data });
});


export default index;
