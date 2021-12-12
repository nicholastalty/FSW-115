const myJSON = '{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":["https://swapi.dev/api/vehicles/14/","https://swapi.dev/api/vehicles/30/"],"starships":["https://swapi.dev/api/starships/12/","https://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.dev/api/people/1/"}'
const myObject = JSON.parse(myJSON)

//console.log(myJSON)

console.log(myObject)

let nameH1 = document.createElement('h1')
nameH1.innerText = myObject.name
document.body.append(nameH1)

let hairColorH2 = document.createElement('h2')
hairColorH2.innerText = myObject.hair_color
document.body.append(hairColorH2)

let skinColorH2 = document.createElement('h2')
skinColorH2.innerText = myObject.skin_color
document.body.append(skinColorH2)

let eyeColorH2 = document.createElement('h2')
eyeColorH2.innerText = myObject.eye_color
document.body.append(eyeColorH2)

