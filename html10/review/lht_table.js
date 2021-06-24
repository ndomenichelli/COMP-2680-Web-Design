"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Nash Domenichelli
   Date:   November 5, 2018

	
*/

//function makeTable(){

	//test date aug 30,2018
	var thisDay = new Date("August 30, 2018");
	//create beginning of table
	var tableHTML = "<table id='eventTable'>\
						<caption>Upcoming Events</caption>\
						<tr><th>Date</th><th>Event</th><th>Price</th></tr>";
	//set end date to two weeks after test date
	var endDate = new Date(thisDay.getTime()+ 14*24*60*60*1000);

	//generate table for the two weeks
	for(var i = 0; i < eventDates.length; i++){
		
		var eventDate = new Date(eventDates[i]);	
		var eventDay = eventDate.toDateString();
		var eventTime = eventDate.toLocaleTimeString();
		
		//if the event is in the two week period, add it to table
		if(thisDay <= eventDate){
			if(eventDate <= eventDate){
			
			tableHTML += "<tr>\
			<td>"+eventDay+"@"+eventTime+"</td>\
			<td>"+eventDescriptions[i]+"</td>\
			<td>"+eventPrices[i]+"</td>\
			</tr>";
			}
		}
		
		
	}
	
	tableHTML += "</table>";
	
	document.getElementById("eventList").innerHTML = tableHTML;
	
//	return tableHTML;

