//Parameters
    //Required
        // 1. res : res from function.
        // 2. int msgCode : statusCode HTTP Prototype.
        // 3. string message : message send to response.
    //Not required
        // 4. Object options : data send to response(token, userinformation...)

const response = (res, msgCode, message, options = {}) =>
{
    if(typeof res === 'object' && typeof msgCode == 'number' && typeof message == 'string')
    {
        if(options instanceof Object)
        {
            return res.status(msgCode).json({
            message : message,
            ...options
            })
        }
        else
        {
            throw new Error("Options must be an object");
        }
    }
    else
    {
        throw new Error("res, msgCode, message are required.");  
    }
}

module.exports = {
    response
}
