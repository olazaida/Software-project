const funcc = require("./func");
const login= require("./login");
const confirm = require("./login");
const book = require("./func");
const recover = require("./login");
const newpass =require("./login");



describe("funcc", () => {
    it("Should filter the food price", () =>{
        expect.arrayContaining(array)
    })
    it("should filter the food by name", () => {
        expect.arrayContaining(array2)
    })
});
describe("login", () => {
    it("should login the user", () => {
    expect(login("username", "password").expect.stringContaining(string))
    //token
    });
})
describe("signUp", () => {
    it("should sign up the user", () => {
    expect(sign("username","phoneNumber", "password").expect.stringContaining(string1))

    });
})



describe("confirm", () => {
    it("should confirm the information", () => {
    expect(cofirm("username", "password").expect.stringContaining(string2)
    );
    });
})

describe("book", () => {
    it("should book food", () => {
    expect(book("click_food", "login").expect.stringContaining(string3)
    );
    });
})
describe("recover", () => {
    it("should recover user password", () => {
    expect(recover("phonenumber").expect.stringContaining(string4)
    );
    });
})
describe("newpass", () => {
    it("should show window to create a new password", () => {
    expect(newpass("newpassword").expect.stringContaining(string5)
    );
    });
})

