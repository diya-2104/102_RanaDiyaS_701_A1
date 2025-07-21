module.exports.ChatbotReply = function (message) {
	this.Bot_Age = 21;
	this.Bot_Name = "Dee_BOT1";
	this.Bot_University = "VNSGU";
	this.Bot_Place = "Surat";

	message = message.toLowerCase()

	if (message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1) {
		return "Hi! this is " + this.Bot_Name;
	} 
	else if (message.includes("name")) {
		return "hi, my name is -" + this.Bot_Name;
	}
	else if (message.includes("age") && message.includes("your")) {
		return "I'm " + this.Bot_Age;
	} 
	else if (message.includes("how") && message.indexOf("are") && message.indexOf("you")) {
		return "I'm fine :)"
	} 
	else if (message.includes("where") && message.indexOf("live") && message.indexOf("you")) {
		return "I live in " + this.Bot_Place;
	} 
	else if (message.includes("weather")) {
		return "THe weather is nice!!"
	}
	return "Sorry, I didn't get it :( ";
}