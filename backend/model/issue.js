const mongoose = require('mongoose')
const Schema = mongoose.Schema;


let IssueSchema = new Schema({
	title: {
		type: String
	},
	responsible: {
		type:String
	},
	description: {
		type: String
	},
	sevirity: {
		type: String
	},
	status: {
		type: String,
		default: 'Open'
	}
});
const Issue = mongoose.model('Issue', IssueSchema)

module.exports = Issue;