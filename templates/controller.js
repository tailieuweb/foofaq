const { Controller } = require("../orm/database");
const controllers = new Controller();

const {modelName} = require('{modelPath}');
const { response } = require("../orm/response");

module.exports = {

    index: async function (req, res) {
        const list = await controllers.find({modelName});
        response(res, 200, 'message...', {list});
    },

    get{modelName}: async function (req, res) {
        const id = req.params.id;
        const detail = await controllers.findById({modelName}, id);
        if (detail) {
            response(res, 200, 'message...', {detail});
        } else {
            response(res, 403, '{modelName} does not exist....');
        }
    },

    new{modelName}: async function (req, res) {
        try {
            const data = new {modelName}({{createFields}});
            await controllers.save({modelName}, data);
            response(res, 201, '{modelName} created....', {data});
        } catch (err) {
            response(res, 403, '{modelName} is already in use.....');
        }
    },


    update{modelName}: async function (req, res) {
        const id = req.params.id;
        const data = req.body;
        try {
            const result = await controllers.findByIdAndUpdate({modelName}, id, {updateField});
            response(res, 200, '{modelName} updated....', {data});
        } catch (error) {
            response(res, 500, '{modelName} updated fail.....');
        }
    },


    delete{modelName}: async function (req, res) {
        const id = req.params.id;
        try {
            const data = await controllers.remove({modelName}, id);
            if (!data) throw Error("{modelName} not found!");
            {
                response(res, 200, '{modelName} deleted successfully.....');
            }
        } catch (err) {
            response(res, 403, '{modelName} deleted fail.....');
        }
    }
};
