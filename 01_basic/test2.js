const chai = () => {
    let username = 'hitesh'
    console.log(username)
    console.log(this)
    console.log(this.username);
    
}

// chai()
console.log(this);

{
    console.log("within block");
    
    console.log(this);
    
}

function fun () {
    let user = "Padam"
    console.log("within fun");
    console.log(this)
}

// fun()

const addTwo = (num) => num + 2

console.log(addTwo(3))


const addTwo2 = (num) => (num + 2)

console.log(addTwo2(3))
