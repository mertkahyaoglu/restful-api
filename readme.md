# RESTful API Example - Turkish Licence Plate Codes

> Built with NodeJS and MongoDB (Mongoose)

* GET    - /plakalar  => returns all plates' codes
* POST   - /plakalar (city, plate_code) => inserts a plate code for a city
* GET    - /plakalar/:il => returns the plate code of the city
* PUT    - /plakalar/:il (plate_code) => updates the plate code of the city
* DELETE - /plakalar/:il => deletes the plate code of the city
