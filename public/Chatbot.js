module.exports.ChatbotReply = function(message)
	{
		this.Bot_Age = 21;
		this.Bot_Name = "Dee_BOT1";
		this.Bot_University = "VNSGU";
		this.Bot_Place = "Surat";
		
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1 ){
			return "Hi!";
		}else if(message.indexOf("age") > -1 && message.indexOf("your")){
			return "I'm " + this.Bot_Age;
		}else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you")){
			return "I'm fine :)"
		}else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you")){
			return "I live in " + this.Bot_Place;
		}else if(message.includes("weather")){
            return "THe weather is nice!!"   
        }
		return "Sorry, I didn't get it :( ";
	}