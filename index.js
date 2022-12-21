function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase( ));

}
function logWhisper (string) {
    console.log(string.toLowerCase( ));
  }

  function sayHiToHeadphonedRoommate (string) {
    var tooQuiet = "I can't hear you!";
    var yUP = "YES INDEED!";
    var mHM = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return tooQuiet;
    }
    else if (string.toUpperCase(string) === string) {
      return yUP;
    }
    else if ("Let's have dinner together!" === string) {
      return mHM
    }
  }