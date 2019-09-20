const request = require('supertest')
const app = require('../../server')
const User = require('../../models/User')

// const userOne = {
        
//     name:"raja123",
//     email:"raja134323@yahoo.com",
//     password:"123456"

// }


// beforeEach(async()=>{
//     await User.deleteMany()
//     await new User(userOne).save()
// })

// test("Should signup a user",async()=>{
//     await request(app).post('/api/users').send({
        
//             name:"raja",
//             email:"raja1343@yahoo.com",
//             password:"123456"
        
//     }).expect(200)
// })


let contactid;
let token;

beforeAll((done) => {
  request(app)
    .post('/api/auth')
    .send({
        email:"dhanush@yahoo.com",
	    password:"123456"
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});


test("Should signin a user",async()=>{
    console.log(token)
    await request(app).post('/api/auth').send({
        email:"dhanush@yahoo.com",
	    password:"123456"
    }).expect(200)
})

test("should get user details", async()=>{
    await request(app).get('/api/auth').set('x-auth-token', token)
    .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe('application/json');
      });
})

test("should add contact",async()=>{
    await request(app).post('/api/contact').set('x-auth-token',token)
    .send({
        
            name:"Dhanush kumar Sivaji",
            email:"dhanush@gmail.com",
            phone:"9500902621",
            type:"professional"
        
    }) .then((response) => {
        expect(response.statusCode).toBe(200);
       
      });
    
})
test("should get contacts",async()=>{
    await request(app).get('/api/contact').set('x-auth-token',token)
     .then((response) => {
        expect(response.statusCode).toBe(200);
        contactid = response.body[0]._id
      });
})


test("should update contact",async()=>{
    await request(app).put(`/api/contact/${contactid}`).set('x-auth-token',token)
    .send({
        
        name:"Dhanush kumar ",
        email:"dhanushkumar@gmail.com",
        phone:"9500902621",
        type:"dk"
    
}) .then((response) => {
    expect(response.statusCode).toBe(200);
   
  });

})

test("should delete contact",async()=>{
    await request(app).delete(`/api/contact/${contactid}`).set('x-auth-token',token)
    .then((response) => {
        expect(response.statusCode).toBe(200);
    })
})




