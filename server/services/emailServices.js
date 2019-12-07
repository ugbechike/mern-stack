class EmailServices {
     sendEmail(user, token) {
        console.log(`[Email Service.sendEmail] The token is: ${token}`)
    }
}

const EmailServiceSingleton = new EmailServices();

export default EmailServiceSingleton;