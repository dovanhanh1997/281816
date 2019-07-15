let ElectricLamp = function (name) {
    this.name = name;
    this.status = false;

    this.TurnOn = function () {
        this.status = true;
    };

    this.TurnOff = function () {
        this.status = false;
    }
};

let SwitchButtuon = function () {
    this.status = false;
    this.lamp = null;

    this.TurnOn = function () {
        this.status = true;
    };

    this.TurnOff = function () {
        this.status = false;
    };

    this.ConnectToLamp = function (newLamp) {
        this.lamp = newLamp;
    }
};

let lamp_One = new ElectricLamp('lamp_one');
let switchButton = new SwitchButtuon();
switchButton.ConnectToLamp(lamp_One);
console.log(switchButton.lamp);

function TurnOnLamp() {
    switchButton.status = true;
    checkLampStatus();
}

function TurnOffLamp() {
    switchButton.status = false;
    checkLampStatus();
}

function lampOnOff() {
    if (lamp_One.status) {
        console.log(lamp_One.status);
        document.getElementById("view").innerHTML = '<img src="lampOn.PNG" height="187" width="148"/>'
    } else {
        console.log(lamp_One.status);
        document.getElementById("view").innerHTML = '<img src="lampOff.PNG" height="187" width="148"/>'
    }
}

function checkLampStatus() {
    if (switchButton.status) {
        switchButton.lamp.TurnOn();
    } else {
        switchButton.lamp.TurnOff();
    }
    lampOnOff();
}





