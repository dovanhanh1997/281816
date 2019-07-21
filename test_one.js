let Electriclamp = function (name, status) {
    this.name = name;
    this.status = status;

    this.turnON = function () {
        this.status = true;
    };

    this.turnOFF = function () {
        this.status = false;
    }
};

let SwitchButton = function () {
    this.lamp = new Electriclamp("lamp_one",false);

    this.turnON = function () {
        this.lamp.turnON();
    };

    this.turnOFF = function () {
        this.lamp.turnOFF();
    };

};

let switchButton = new SwitchButton(false);

function TurnOnLamp() {
    switchButton.turnON();
    lampStatus();
}

function TurnOffLamp() {
    switchButton.turnOFF();
    lampStatus();
}

function lampStatus() {
    if (switchButton.lamp.status) {
        document.getElementById("view").innerHTML = '<img src="lampOn.PNG" height="187" width="148"/>'
    } else {
        document.getElementById("view").innerHTML = '<img src="lampOff.PNG" height="187" width="148"/>';
    }
}

