// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

isHavePet = (kondisi) => {
    switch (kondisi) {
        case true : return "Yes";
        default : return "No";
    }
}
// input data firstUser
favoriteRestaurantFirstUser = [];
favoriteColorFirstUser = [];

inputFavoriteRestaurantFirstUser = new Set(
    ["Bento","Sushi","Pancake","Eggy",
    "Tempura", "Bento", "Eggy", "Padang", 
    "Tteok", "Sushi", "Sushi"]
);
inputFavoriteColorFirstUser = new Set(["Yellow", "Pink", "White", "Purple"]);

for (const item of inputFavoriteRestaurantFirstUser) {
    favoriteRestaurantFirstUser.push(item);    
}
for (const item of inputFavoriteColorFirstUser) {
    favoriteColorFirstUser.push(item);    
}
// end input data firstUser


const firstUser = {
    name : "Monica",
    gender: "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor: favoriteColorFirstUser,
    isHavePet : isHavePet(true),
    education : [
        {
            name : "SD 01",
            city : "Jakarta",
            graduate : 2016
        },
        {
            name : "SMP 02",
            city : "Jakarta",
            graduate : 2019
        },
        {
            name : "SMA 03",
            city : "Tangerang",
            graduate : undefined
        },
    ],
    favoriteRestaurant : favoriteRestaurantFirstUser,
};

// input data firstUser
favoriteRestaurantSecondUser = [];
favoriteColorSecondUser = [];

inputFavoriteRestaurantSecondUser = new Set(
    ["Tempura", "Bento", "Sushi", 
    "Pancake", "Padang", "Katsu",
     "Geprek", "Pancake", "Eggy"]
);
inputFavoriteColorSecondUser = new Set(["Blue", "Black", "Grey"]);

for (const item of inputFavoriteRestaurantSecondUser) {
    favoriteRestaurantSecondUser.push(item);    
}
for (const item of inputFavoriteColorSecondUser) {
    favoriteColorSecondUser.push(item);    
}
// end input data firstUser

const secondUser = {
    name : "Wendy",
    gender: "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor: favoriteColorSecondUser,
    isHavePet : isHavePet(false),
    education : [
        {
            name : "SD 02",
            city : "Jakarta",
            graduate : 2010
        },
        {
            name : "SMP 03",
            city : "Bogor",
            graduate : 2013
        },
        {
            name : "SMA 01",
            city : "Surabaya",
            graduate : 2016
        },
        {
            name : "Universitas Maju",
            city : "Tangerang",
            graduate : undefined
        },
    ],
    favoriteRestaurant : favoriteRestaurantSecondUser,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};