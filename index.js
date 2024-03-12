const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('qXJx4vyKgW', uuidlib.v4());
	}

module.exports = generateId
