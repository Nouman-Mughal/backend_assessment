const express = require('express');
const getRouter=require('./routes/getRouter')
const postRouter=require('./routes/postRouter')
const deleteRouter=require('./routes/deleteRouter')
const patchRouter=require('./routes/patchRouter')
const userRouter=require('./routes/user')
//  const { initConsumer } = require('./utilities/consumer');
// const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
//  const databaseConfig = require('./db2/DatabaseConfig');
// const connection = require('./db2/DatabaseConfig');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/',getRouter);
app.use('/:id',userRouter)
app.use('/',postRouter);
app.use('/:id',deleteRouter);
app.use('/:id',patchRouter);

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
	  message: err.message,
	  error: res.locals.error = req.app.get('env') === 'development' ? err : {}
	  
	});
  });


app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	// await initProducer();

});