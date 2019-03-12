var AWS = require('aws-sdk');
// Load credentials and set region from Metaclass
AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.EC2MetadataCredentials();
// Create EC2 service object
var ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });
var ec2parameters = {
	Filters: [
		{
			Name: 'tag:Owner',
			Values: [ 'ashok' ]
		}
	]
};
ec2.describeInstances(ec2parameters, function (err, data) {
	if (err) console.log(err, err.stack);
	else {
		console.log(data.Reservations);
	}
});
