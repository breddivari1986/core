print("LOCATION.zip : " + context.getVariable("LOCATION.zip"));
context.setVariable("target.url", "http://maps.googleapis.com/maps/api/geocode/json?address="+context.getVariable("LOCATION.zip"));