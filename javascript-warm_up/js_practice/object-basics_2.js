#!/usr/bin/node
// In our next task, we want you to have a go at creating your own object 
// literal to represent one of your favorite bands. The required properties are:

// name: A string representing the band name.
// nationality: A string representing the country the band comes from.
// genre: What type of music the band plays.
// members: A number representing the number of members the band has.
// formed: A number representing the year the band formed.
// split: A number representing the year the band split up, or false if they are still together.
// albums: An array representing the albums released by the band. Each array item should be an 
// object containing the following members:
// name: A string representing the name of the album.
// released: A number representing the year the album was released.
// Include at least two albums in the albums array.

// Once you've done this, you should then write a string to the variable 
// bandInfo, which will contain a small biography detailing their name, nationality, 
// years active, and style, and the title and release date of their first album.

// Try updating the live code below to recreate the finished example:



let bandInfo;

// Put your code here
bandInfo = {
    name: 'The Compozers',
    nationality:'Nigeria',
    genre: 'Afrobeat',
    members: 8,
    formed: 2017,
    split: false,
    albums: [
        {name: 'Timeless', released: 2023}, 
        {name: 'I told them', released: 2024},
        {name: 'Made in Lagos', released: 2022},
]
};
bio = `${bandInfo.name}, also known as the CES is 
one of the biggest bands in ${bandInfo.nationality}.
The are a band of ${bandInfo.members} that mostly play ${bandInfo.genre}. 
They were founded on ${bandInfo.formed} and their
split status is ${bandInfo.split}.
They have major hit ablums like ${bandInfo.albums[0].name}, ${bandInfo.albums[1].name}, ${bandInfo.albums[2].name},
all realesed in ${bandInfo.albums[0].released}, ${bandInfo.albums[1].released}, ${bandInfo.albums[2].released}
The one that went viral this year was ${bandInfo.albums[2].name}.`

console.log(bio);
// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    