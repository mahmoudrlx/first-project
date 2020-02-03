const FIRST_NAME = "Mahmoud";
const LAST_NAME = "Lahham";
let fullName = FIRST_NAME + " " + LAST_NAME;
const street ='via monte cervino';
const civic = '23';
const zipcode = '10173';
const city = 'Venezia';
const province = 'VE';
const country = `Italy`;
const myAddress = street + ", " +
                    civic + " " + 
                    zipcode + " " +
                    city + " "+ 
                    province + " " + 
                    country;

const newadaress = `${street} ${civic}
                    ${zipcode} ${city}
                    ${province}
                    ${country}`;

console.log(newadaress)


