# Technovate
# Configure the enviornment file to setup things...

#1. Check status url 
  REACT_APP_CHECK_STATUS={ url to check status goes here }
------> sample response expected: 
{
"status-code" : {Your code goes here}
}
# 2. Request Time Interval Goes here: 
  REACT_APP_SEND_REQUEST_RESPONSE_TIME_IN_MS={Your time in ms goes here as an integer}
# 3. NO vandalism status code goes here :    
  REACT_APP_NO_VANDALISM_STATUS_CODE={Your code goes here had kept 500 for NO Vandalism}
# 4. vandalism status code goes here :     
  REACT_APP_VANDALISM_STATUS_CODE={Your code goes here had kept 501 for Vandalism}
# 5. File path to detections video  
  REACT_APP_DETECTIONS_FILE_PATH=./detections/1.mp4.
  try not to change directory structure as it may cause path issues...but can change filename if you want.
  also make sure to keep replacing the file with same name and folder structure.
