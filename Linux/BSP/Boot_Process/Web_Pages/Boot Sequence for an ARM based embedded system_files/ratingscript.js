
var NUMBER_OF_STARS = 5;

function init_rating()
{
    var ratings = document.getElementsByTagName('div');
    for (var i = 0; i < ratings.length; i++)
    {
        if (ratings[i].className != 'rating')
            continue;
            
        var rating = ratings[i].firstChild.nodeValue;
        ratings[i].removeChild(ratings[i].firstChild);
        if (rating > NUMBER_OF_STARS || rating < 0)
            continue;
        for (var j = 0; j < NUMBER_OF_STARS; j++)
        {
            var star = document.createElement('img');
            if (rating >= 1)
            {
                star.setAttribute('src', '/new/images/star100.jpg');
                star.className = '100';
                rating--;
            }
            else if(rating >= 0.75)
            {
                star.setAttribute('src', '/new/images/star75.jpg');
                star.className = '75';
                rating = 0;
            }
            else if(rating >= 0.5)
            {
                star.setAttribute('src', '/new/images/star50.jpg');
                star.className = '50';
                rating = 0;
            }			
            else if(rating >= 0.25)
            {
                star.setAttribute('src', '/new/images/star25.jpg');
                star.className = '25';
                rating = 0;
            }						
            else
            {
                star.setAttribute('src', '/new/images/star00.jpg');
                star.className = '00';
            }
            var widgetId = ratings[i].getAttribute('id').substr(7);
            star.setAttribute('id', 'star_'+widgetId+'_'+j);
            star.onmouseover = new Function("evt", "displayHover("+widgetId+", "+j+");");
            star.onmouseout = new Function("evt", "displayNormal("+widgetId+", "+j+");");
            ratings[i].appendChild(star);
        } 
    }
}

function displayHover(ratingId, star)
{
    for (var i = 0; i <= star; i++)
    {
        document.getElementById('star_'+ratingId+'_'+i).setAttribute('src', '/new/images/starover.jpg');
    }
}

function displayNormal(ratingId, star)
{
    for (var i = 0; i <= star; i++)
    {
        var status = document.getElementById('star_'+ratingId+'_'+i).className;
        document.getElementById('star_'+ratingId+'_'+i).setAttribute('src', '/new/images/star'+status+'.jpg');
    }
}

function update_stars(star_group_id,value)
{
	if (value > NUMBER_OF_STARS || value < 0) return;
	
	var star_group = document.getElementById('rating_'+star_group_id);
	//alert(star_group.innerHTML); return;
	for (var j = 0; j < NUMBER_OF_STARS; j++)
	{
		var star = document.getElementById('star_' + star_group_id + '_' + j);
		if (value >= 1)
		{
			star.setAttribute('src', '/new/images/star100.jpg');
			star.className = '100';
			value--;
		}
		else if(value >= 0.75)
		{
			star.setAttribute('src', '/new/images/star75.jpg');
			star.className = '75';
			value = 0;
		}
		else if(value >= 0.5)
		{
			star.setAttribute('src', '/new/images/star50.jpg');
			star.className = '50';
			value = 0;
		}			
		else if(value >= 0.25)
		{
			star.setAttribute('src', '/new/images/star25.jpg');
			star.className = '25';
			value = 0;
		}						
		else
		{
			star.setAttribute('src', '/new/images/star00.jpg');
			star.className = '00';
		}
	} 
}



