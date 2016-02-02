import {Router} from 'express';

import {Enums, Affinity, Penetration} from './mock/enums';
import {Hierarchy} from './mock/hierarchy';

const transform = Router();

function convertEnum (enumeration) {
    var output = {};
    for(var key in Object.keys(enumeration)) {
        output[key]
    }
}

transform.get('/enums', function(req, res, next) {
  res.send(Enums);
});

transform.get('/', function(req, res, next) {
  res.send(Hierarchy);
});

export default transform;

