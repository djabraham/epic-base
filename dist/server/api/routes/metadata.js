var express_1 = require('express');
var enums_1 = require('./mock/enums');
var hierarchy_1 = require('./mock/hierarchy');
var transform = express_1.Router();
function convertEnum(enumeration) {
    var output = {};
    for (var key in Object.keys(enumeration)) {
        output[key];
    }
}
transform.get('/enums', function (req, res, next) {
    res.send(enums_1.Enums);
});
transform.get('/', function (req, res, next) {
    res.send(hierarchy_1.Hierarchy);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transform;
//# sourceMappingURL=metadata.js.map