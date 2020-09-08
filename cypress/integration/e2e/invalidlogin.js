
const USERNAME = "qa1980";
const PASS = "test12345";


describe("Invalid log in",function(){
 beforeEach(function (){
    cy.visit("/");
});
    describe('login is not allowed ',()=>{
       it('invalid login', () => {
           cy.get("amplify-authenticator")
           //.find(selectors.signInSignInButton)
           //.shadow()
           .find(Usertest.inputUser,{includeShadowDom:true})
           .type(USERNAME)
       
     
           cy.get("amplify-authenticator")
           .find(Usertest.pwdInput,{includeShadowDom: true})
           .type(PASS)
       
      
           cy.get("amplify-authenticator")
           .find(Usertest.SignIn,{includeShadowDom:true})
           .first()
           .find("button[type='submit']",{includeShadowDom:true})
          // .find("button[type='submit']")
           .click({force:true})

           //verify that you are not loggin 
           cy.get("amplify-authenticator")
           .find("form > amplify-section > div:nth-child(1) > slot > div > h3",{includeShadowDom:true}).then(function($text) {
               const TextVerification = $text.text()
               cy.log
               expect(TextVerification).to.match(/Sign in to your .*/)
           })
       
    });
    });
    








    });

    export const Usertest = {
   inputUser : '#username',
   pwdInput: '#password',
   SignIn: 'amplify-button[data-test="sign-in-sign-in-button"]'
    };