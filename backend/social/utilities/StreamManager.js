const queries=require('../db2/db2queries')
const processMessage = async (kafkaMessage) => {

	//Start working here
	kafkaMessage=JSON.parse(message.value)
	let msg=new Buffer.from(message.key)
		insertUser(msg)
		console.log('message inserted')
	
	
	
	
	}

	

;

module.exports = { processMessage };

