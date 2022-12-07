function Auto(name, model, yearOfIssue, vin) {
	this.name = name;
	this.model = model;
	this.yearOfIssue = yearOfIssue;
	this.vin = vin;
}

Auto.prototype.log = function () {
	return this.name + ' ' + this.model + ' ' + this.yearOfIssue;
}

Auto.prototype.checkVin = function() {
	return this.vin.length === 17
}

function Auto_Fuel(name, model, yearOfIssue, vin, engineVolume, fuelConsumption) {
	this.name = name;
	this.model = model;
	this.yearOfIssue = yearOfIssue;
   this.vin = vin;
   this.engineVolume = engineVolume;
	this.fuelConsumption = fuelConsumption;	
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function() {
	return this.engineVolume + 'L ' + this.fuelConsumption + 'L/100km';
}

function Auto_Electric(name, model, yearOfIssue, vin, batteryCapacity) {
	this.name = name;
	this.model = model;
	this.yearOfIssue = yearOfIssue;
   this.vin = vin;
	this.batteryCapacity = batteryCapacity;
}

Auto_Electric.prototype = Object.create(Auto.prototype);

Auto_Electric.prototype.showBatteryConfig = function() {
	return this.batteryCapacity + ' kWh';
}

let volkswagen = new Auto_Fuel('Volkswagen', 'Touareg', 2014, 'IP7OL76432X200020', 3, 12);
let toyota = new Auto_Electric('Toyota', 'Prius', 2022, 'JH2PC35051M200020', '150');






