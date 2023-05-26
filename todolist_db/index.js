const http = require('http');
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'todolist';
let db;
let collection;

async function dbConnect() {
	await client.connect();

	db = client.db(dbName);
	collection = db.collection("tasks");

	 return 'Connected to MongoDB database';
	 
	 }

	dbConnect()
	.then(console.log)
	.catch(console.error);

http.createServer(function (request, response) {
	
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
	response.setHeader("Access-Control-Allow-Max-Age", "2592000");


	if (request.methot == "POST"){
	 let info

	 request.on('info', dataChunck => info += dataCunck);
	 request.on('end', () => {
			info = JSON.parse(data);

			if (info.remove == "false"){
				let date = new date(date.now());
				let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric'; minute: 'numeric' };				

				collection.insertOne({"tasks": info.task, "time": date.toLocaleDateString('es-ES', options)});

				collection.find({"task": data.task}).limit(1).toArray()
						.then(task => {
							response.end(JSON.sringlify(task));
						});
					}
				else {
				collection.deleteOne({"task": info.task});
				}

				});

			}
		collection.find().toArray()
		.then(items => {
			let itemsJson = JSON.stringify(items);
		 	response.end(itemsJson);
		 });
}).listen(8080);
