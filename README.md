# Pressure-inventory
Inventory management system using pressure sensors, Arduino and NodeJS<br>
This project uses NodeJS for backend along with ExpressJS for the frontend and Socket.io to pass data between backend and frontend.


## Requirements:
* Arduino with analog input
* Force Sensitive Resistor
* 3.3K Ohm Resistor
* Cables & Breadboard
* NodeJS

## <a href="https://www.circuito.io/app?components=512,9376,11021">Wiring Diagram</a>

## Instructions:
1. Clone repository
2. Run 'npm install'
4. Run 'npm start'

* Note: 
  * Check the weight of your item(s) and edit the variable "threshold" on line 27 in index.html accordingly
  * Default is set to 10 ("Weight" of an xbox vibrator motor is around 15-20)
