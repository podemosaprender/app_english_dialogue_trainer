function init_voice() { try {
    recognition = new window.SpeechRecognition();
    recognition.onresult = onListenResult_;
    recognition.interimResults= true;
    recognition.lang= "en-US";
} catch(ex) { alert("ERROR ready: "+ex.message); }}

function listen() { try {
	recognition.start();
}catch(ex) { alert("ERROR: "+ex.message); } }

function onListen(s) { } //IMPLEMENT

function speak(msg,cb) {
	TTS.speak({
            text: msg,
            locale: 'en-US',
            rate: 2
        }, 
	function () { setTimeout(cb,100); }, function (reason) { alert(reason); });
}

function onListenResult_(event) {
  if (event.results.length > 0) {
    var s= event.results[0][0].transcript;
		onListen(s);		
  }
}


