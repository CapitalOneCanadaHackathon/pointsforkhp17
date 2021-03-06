# Chatbots are the new websites!

### The Kids Help Phone bot aims to address a couple of challenges:
* Live up to the Kids Help Phone promise of "Always There".
* Free up the counselors from having to answer education type questions that are already answered through web content and only transfer to the counselor when needed

The Kids Help Phone bot was developed using the [Dialog Flow interface](https://console.dialogflow.com/api-client/#/agent/3c3cc1cf-d85e-4758-8c18-a1fd7b9c3afb/intents). This technology allows you to configure the dialog between a kid and the bot in an intuitive "when kids says this the bot should answer with this" flow. The benefits of using Dialog Flow are:
* 0 coding experience is required (if you can update a CMS, you can update the bot!)
* Multi language support
* Build the flow once and deploy it on multiple chat platforms (Facebook, Kik, SMS, Web Page, and even Alexa and Google Home)
* Built-in analytics allow you to monitor what topics the kids are most engaged with and always improve
* The counselor transcripts you have today can be used to train the bot

### Next steps:
* Productize for Kik, the most used chat platform for teens
* Integrate into the agent portal/Skype For Business
* AB Test on the web

### Possible enhancements:
* Integrate with Watson to perform sentiment analysis
* Have the CMS automatically push new "Intents" to the Dialog Flow agent through the API to automatically update the bot without needing Kids Help Phone staff involvement
* Escalate to a counselor even if one is not available online the moment a kid sounds like they are in severe distress (e.g. direct SMS)

### Technical information on bridging between bot and counselor
* We configured a Kik bot which can be scanned [here](https://api.kik.com/v1/code/ff5c982e78ef67f9db34253e0ae46af5f7f831ae)
* When the kid asks to talk to someone Dialog flow will make a call to the webhook [here](https://runkit.com/pts-mihnea/kids-help-phone/branches/master)
* The webhook makes a call to a Google Spreadsheet which acts as the Agent Portal/Skype for Business [here](https://docs.google.com/spreadsheets/d/1jfBYN6mn-tvoapyD6yb3u4PaqpYPa6W2DLGrRa_ecPw/edit?usp=sharing)
* When the agent replies, the Google Spreadsheet script calls to a Kik messaging API to send the kid a message in their chat window
