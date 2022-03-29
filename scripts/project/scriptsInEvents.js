"use strict";

var Get_Score = "";//Taking the score to this variable.

//Call this function when game end.
function EndGame() {
	
		alert("My Score Is " + Get_Score);
}


{
	const scriptsInEvents = {

		async Game_Event55_Act17(runtime, localVars)
		{
			Get_Score = runtime.globalVars.score;
		},

		async Game_Event55_Act19(runtime, localVars)
		{
			EndGame();
			
		},

		async Game_Event56_Act17(runtime, localVars)
		{
			Get_Score = runtime.globalVars.score;
		},

		async Game_Event56_Act19(runtime, localVars)
		{
			EndGame();
			
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
