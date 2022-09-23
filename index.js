const { anError, aStatus} = require("./common/common");

/**
 * Retrieve or store a method in Firestore
 *
 * Responds to any HTTP request.
 *
 * GET = retrieve
 * POST = store (no update)
 *
 * success: returns the document content in JSON format & status=200
 *    else: returns an error:<string> & status=404
 *
 * @param {express:Request} req HTTP request context.
 * @param {express:Response} res HTTP response context.
 */
exports.main = async (req, res) => {

  // for no CORS
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    return aStatus(res, 204).send('');
  }

  if (!req.body) {
    return anError(res);
  }
  let type = req.body['type'];
  if (!type) {
    return anError(res);
  }

  if (req.method === 'POST') {
    return aStatus(res, 404).send('Not implemented');
  }

  return anError(res);

};
