function Auto(name) {
	this.name = name;
	this.model = '';
	this.yearOfIssue = 0;
	this.vin = '';
}

Auto.prototype.log = function () {
	return this.name + ' ' + this.model + ' ' + this.yearOfIssue;
}

Auto.prototype.checkVin = function() {
	if(this.vin.length = 17) {      //Vin-code складається з 17-ти символів
		return true;
	} else {
      return false;
   }
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

function Auto_Fuel() {
	this.engineVolume = '';
	this.fuelConsumption = 0;
}

Auto_Fuel.prototype.showFuelConsumption = function() {
	return this.engineVolume + 'L ' + this.fuelConsumption + 'L/100km';
}

Auto_Electric.prototype = Object.create(Auto.prototype);

function Auto_Electric() {
	this.batteryCapacity = '';
}

Auto_Electric.prototype.showBatteryConfig = function() {
	return this.batteryCapacity + ' kWh';
}

let toyota = new Auto_Electric();
toyota.name = 'Toyota'
toyota.model = 'Prius';
toyota.yearOfIssue = 2022;
toyota.vin = 'JH2PC35051M200020';
toyota.batteryCapacity = '150';

let volkswagen = new Auto_Fuel();
volkswagen.name = 'Volkswagen'
volkswagen.model = 'Touareg';
volkswagen.yearOfIssue = 2014;
volkswagen.vin = 'IP7OL76432X200020';
volkswagen.engineVolume = '3';
volkswagen.fuelConsumption = 12;



