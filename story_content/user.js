function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dMMoauVbCj":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxEEQRxwpRwNtkqxH5zI_4LSEyrZXUs0rWzyVgzb446hgxWq0nvP0xIbqToP79Q8i8p/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

