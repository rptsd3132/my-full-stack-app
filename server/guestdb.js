import chalk from 'chalk';
import fs from 'node:fs';


const database = 'guest.json';

export const addGuest = (name, age, address, contactNo, visitDate) => {
    const guest = loadGuest();

    const length = guest.length;
    let id = 1;
    if (length > 0) {
        id = guest[length - 1].id + 1;
    }

    guest.push(
        {
            id: id,
            name: name,
            age: age,
            address: address,
            contactNo: contactNo,
            visitDate: visitDate
        }
    )
    console.log(chalk.yellow("save guest !"));
    saveGuest(guest);
    return id;
};

//Delete guest
export const deleteGuest = (id) => {
    const guest = loadGuest();
    const newGuest = guest.filter(guest => guest.id !== id);
    if (guest.length > newGuest.length) {
        console.log(chalk.red("Delete", id));
        saveGuest(newGuest);
    } else {
        console.log(chalk.red.inverse("Guest not found", id));
    }

};

//update guest
export const updateGuest = (id, name, age, address, contactNo, visitDate) => {
    const guest = loadGuest();
    const gindex = guest.findIndex((guest) => guest.id === id);
    if (gindex != -1) {
        const fineGuest = guest[gindex];
        fineGuest.name = name ? name : fineGuest.name;
        fineGuest.age = age ? age : fineGuest.age;
        fineGuest.address = address ? address : fineGuest.address;
        fineGuest.contactNo = contactNo ? contactNo : fineGuest.contactNo;
        fineGuest.visitDate = visitDate ? visitDate : fineGuest.visitDate;
        console.log(chalk.blue("Update Guest ", id));
        saveGuest(guest);
    } else {
        console.log(chalk.blue.inverse("Guest not found", id));
    }

};


//read guest
export const readGuest = (id) => {
    const guest = loadGuest();
    const g = guest.find((g) => g.id === id);
    if (g) {
        console.log(chalk.yellowBright("Guest found", id));
    } else {
        console.log(chalk.red.inverse("Guest not found", id));
    }
    return g;
};
//list guest
export const listGuest = () => {
    console.log(chalk.magenta("Guest list"));
    const guest = loadGuest();
    guest.forEach(() => {
        console.log(guest);
    })
    return guest;
};

// save guest

const saveGuest = (guest) => {
    const dataJson = JSON.stringify(guest);
    fs.writeFileSync(database, dataJson);

}

// loadData
export const loadGuest = () => {
    try {
        const dataBaffer = fs.readFileSync(database);
        // const dataJson = dataBaffer.toString();
        console.log(chalk.green("Load guest data"));
        return JSON.parse(dataBaffer.toString());

    }
    catch (e) {
        return [];
    }
};




export default {
    addGuest,
    deleteGuest,
    updateGuest,
    readGuest,
    listGuest,
    loadGuest
};
