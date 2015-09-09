
var mongoose = require('mongoose');

// Esquema que define totalmente toda la información que se realciona con un turno.
var turnoSchema = mongoose.Schema({
	turno:{
		idTurno: {numerator: String,consecutive: Number},
		state: { 
			stateCode: Number,
			description: String
		},
		// Proceso de toma de turno por parte del cliente.
		motivoVisita:String,
		// Datos de la Asesor-Terminal y Tienda donde se ateinde al turno
		emitterAdviser:{
				adviserName:String,
				adviserLastName:String,
				adviserId:String,
		},
		receiverAdviser:{
				adviserName:String,
				adviserLastName:String,
				adviserId:String,
		},
		branchOffice:{
				branchOfficesName:String,
				posCode:Number,
				city:String,
				region:String,
				blueCircle: {
					idClircle: String,
					nameCircle: String,
					type: String,
					termimal: {
						terminalId: String,
						terminalName: String,
						location: String
					}
				}
		},
		// Datos del Cliente Atendido.
		client:{
				lineNumber:Number,
				screenName:String,
				clientName:String,
				idNumber:Number,
				idType:String
		},
		// Datos de la atencion al turno
		infoTurno:{
				logCreationTurno:Date,
				logCalledTurno:Date, // Date
				logAtentionTurno:Date,
				logEndTurno:Date, // Date
				area:String,
				clientCategoria:String,
				services: [{
					serviceName:String,
					serviceId:String,
					subServices:[{
						subServiceId:String,
						subServiceName:String,
						description:String,
						numerator:String,
						categorie:String
					}]
				}],
				observation:String
		}
	}
});

var Turno = mongoose.model('Turno',turnoSchema,'turnos');

module.exports = Turno;
