const data=require('./friends.json');
console.log(data)


console.log(data.friends[0].name)
console.log(data.friends[1].Age)
console.log(data.friends[0])







for(x in data){
    console.log(data[x]);
}


console.log(JSON.stringify(data));
console.log(JSON.parse('{"name":"Amit"}'));