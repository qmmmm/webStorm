<?php
	if (empty($_REQUEST['state'])){ 
	echo "no state sent"; 
	}else {
	    	 	$search=trim($_REQUEST['state']);
	    		 switch ($search){ 
	        	case 'mo':
	                $result="<ul><li>st, louis</li>". 
	        	    "<li>kansas city</li></ul>";
	        	    break; 
	        	case 'wa': 
	        	    $result="<ul><li>seattle</li>". 
	        	    "<li>spokane</li>".
	        	    "<li>olympia</li></ul>";
	        	    break;
	        	case 'ca': 
	        	    $result="<ul><li>san franscisco</li>". 
	        	    "<li>los angiles</li>". 
	        	    "<li>3</li>". 
	        	    "<li>olympia</li></ul>"; 
	        	    break; 
	        	case 'id': 
	        	    $result="<ul><li>4</li></ul>"; 
	        	    break;
	        	    default: 
	        	    $result="no city found";
	        	    break;
	        }
	        echo "<h3>cities:</h3><p>".$result."</p>"; 
	        }

?>